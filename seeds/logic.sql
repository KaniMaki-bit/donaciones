-- Agregar administrador
CREATE OR REPLACE PROCEDURE agregarAdministrador(IN nombre_admin TEXT, IN apellido_admin TEXT, IN email_admin TEXT)
LANGUAGE plpgsql
AS $$
DECLARE
token VARCHAR(10);
BEGIN
    token = (SELECT UPPER(SUBSTR(MD5(RANDOM()::TEXT), 0, 10)));
    INSERT INTO administrador (nombre, apellido, authToken, email)
    VALUES (nombre_admin, apellido_admin, token, email_admin);
    COMMIT;
END;
$$;

-- Agregar donante
CREATE OR REPLACE PROCEDURE agregarDonante(IN nombre_don TEXT, IN apellido_don TEXT, IN email_don TEXT, IN telefono_don TEXT)
LANGUAGE plpgsql
AS $$
BEGIN
    INSERT INTO donante (nombre, apellido, email, telefono)
    VALUES (nombre_don, apellido_don, email_don, telefono_don);
    COMMIT;
END;
$$;

-- Agregar organizacion
CREATE OR REPLACE PROCEDURE agregarOrganizacion(IN direccion_org TEXT, IN nombre_org TEXT, IN meta_org INTEGER, IN correo_org TEXT, IN descripcion_org TEXT, IN mision_org TEXT, IN vision_org TEXT, IN telefono_org TEXT, IN admin_id_org INTEGER)
LANGUAGE plpgsql
AS $$
BEGIN
    INSERT INTO organizacion (administrador_id, direccion, nombre, meta, correo, descripcion, mision, vision, telefono)
    VALUES (admin_id_org, direccion_org, nombre_org, meta_org, correo_org, descripcion_org, mision_org, vision_org, telefono_org);
    COMMIT;
END;
$$;

-- Agregar categoria
CREATE OR REPLACE PROCEDURE agregarCategoria(IN nombre_cat TEXT)
LANGUAGE plpgsql
AS $$
BEGIN
    INSERT INTO categoria (nombre)
    VALUES (nombre_cat);
    COMMIT;
END;
$$;

-- Agregar producto
CREATE OR REPLACE PROCEDURE agregarProducto(IN cat_id_prod INTEGER, IN nombre_prod TEXT)
LANGUAGE plpgsql
AS $$
BEGIN
    INSERT INTO producto(nombre, categoria_id)
    VALUES (nombre_prod, cat_id_prod);
    COMMIT;
END;
$$;

-- Agregar donativo
CREATE OR REPLACE PROCEDURE agregarDonativo(IN don_id_don INTEGER, IN org_id_don INTEGER)
LANGUAGE plpgsql
AS $$
BEGIN
    INSERT INTO donativo(fecha, donante_id, organizacion_id)
    VALUES (current_timestamp, don_id_don, org_id_don);
    COMMIT;
END;
$$;

-- Agregar producto permitdo
CREATE OR REPLACE PROCEDURE agregarProductosPermitidos(IN org_id_pp INTEGER, VARIADIC prod_ids_pp INTEGER[])
LANGUAGE plpgsql
AS $$
DECLARE
    prod_id INTEGER;
BEGIN
    FOREACH prod_id IN ARRAY prod_ids_pp LOOP
        INSERT INTO productos_permitidos(producto_id, organizacion_id)
        VALUES (prod_id, org_id_pp);
    END LOOP;
    COMMIT;
END;
$$;

-- Agregar donativo item
CREATE OR REPLACE PROCEDURE agregarDonativoItem(IN don_id_di INTEGER, VARIADIC prod_cant_di INTEGER[])
LANGUAGE plpgsql
AS $$
DECLARE
    i INTEGER;
    prod_id INTEGER;
    cantidad INTEGER;
BEGIN
    i := 1;
    WHILE i <= array_length(prod_cant_di, 1) LOOP
        prod_id := prod_cant_di[i];
        cantidad := prod_cant_di[i+1];
        
        INSERT INTO donativo_item(donativo_id, producto_id, cantidad)
        VALUES (don_id_di, prod_id, cantidad);
        
        i := i + 2;
    END LOOP;
    
    COMMIT;
END;
$$;

-- Calcular progreso
CREATE OR REPLACE FUNCTION obtenerProgreso(
    organizacion_id_param INTEGER
)
RETURNS INTEGER AS
$$
DECLARE
    total_meta INTEGER;
    total_donado INTEGER;
    porcentaje INTEGER;
BEGIN
    SELECT META INTO total_meta
    FROM organizacion
    WHERE id = organizacion_id_param;

    SELECT COALESCE(SUM(d.cantidad), 0) INTO total_donado
    FROM donativo_item d
    INNER JOIN donativo n ON n.id = d.donativo_id
    WHERE n.organizacion_id = organizacion_id_param;

    porcentaje := ROUND((total_donado::NUMERIC / total_meta::NUMERIC) * 100);

    RETURN porcentaje;
END;
$$
LANGUAGE plpgsql;

-- Categorias de una organizacion
CREATE OR REPLACE FUNCTION categoriasOrganizacion(
    organizacion_id_param INTEGER
)
RETURNS INTEGER[] AS
$$
DECLARE
    categorias INTEGER[];
BEGIN
    SELECT ARRAY(
        SELECT p.producto_id
        FROM productos_permitidos p
        WHERE p.organizacion_id = organizacion_id_param
) INTO categorias;

    RETURN categorias;
END;
$$
LANGUAGE plpgsql;

-- Filtrar organizaciones por categoria
CREATE OR REPLACE FUNCTION organizacionPorCategoria(
    categorias TEXT[]
)
RETURNS INTEGER[] AS
$$
DECLARE
    organizaciones INTEGER[];
BEGIN
    SELECT ARRAY(
        SELECT DISTINCT o.id
        FROM organizacion o
        INNER JOIN productos_permitidos pp ON pp.organizacion_id = o.id
        INNER JOIN producto p ON p.id = pp.producto_id
        INNER JOIN categoria c ON c.id = p.categoria_id
        WHERE c.nombre = ANY(categorias)
    ) INTO organizaciones;
    
    RETURN organizaciones;
END;
$$
LANGUAGE plpgsql;

-- Productos de una organizacion
CREATE OR REPLACE FUNCTION productosPorOrganizacion(
    organizacion_id_param INTEGER
)
RETURNS INTEGER[] AS
$$
DECLARE
    productos INTEGER[];
BEGIN
    SELECT ARRAY(
        SELECT pp.producto_id
        FROM productos_permitidos pp
        WHERE pp.organizacion_id = organizacion_id_param
    ) INTO productos;

    RETURN productos;
END;
$$
LANGUAGE plpgsql;

-- Historial de donaciones
CREATE OR REPLACE FUNCTION obtenerDonaciones(organizacion_id_param INTEGER)
RETURNS TABLE (
    donante_nombre TEXT,
    donante_apellido TEXT,
    fecha_donativo TIMESTAMP,
    producto_nombre TEXT,
    cantidad INTEGER
)
AS $$
BEGIN
    RETURN QUERY
    SELECT
        d.nombre AS donante_nombre,
        d.apellido AS donante_apellido,
        don.fecha AS fecha_donativo,
        p.nombre AS producto_nombre,
        di.cantidad AS cantidad
    FROM
        donativo don
        JOIN donante d ON don.donante_id = d.id
        JOIN donativo_item di ON don.id = di.donativo_id
        JOIN producto p ON di.producto_id = p.id
    WHERE
        don.organizacion_id = organizacion_id_param;
END;
$$ LANGUAGE plpgsql;

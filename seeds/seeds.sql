CALL agregarAdministrador('John', 'Doe', 'john.doe@example.com');
CALL agregarAdministrador('Jane', 'Smith', 'jane.smith@example.com');
CALL agregarAdministrador('Robert', 'Johnson', 'robert.johnson@example.com');
CALL agregarAdministrador('Emily', 'Davis', 'emily.davis@example.com');
CALL agregarAdministrador('Michael', 'Wilson', 'michael.wilson@example.com');
CALL agregarAdministrador('Sarah', 'Anderson', 'sarah.anderson@example.com');

DO $$
DECLARE
    descripcion_org TEXT;
    mision_org TEXT;
    vision_org TEXT;
BEGIN
    descripcion_org := 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt lectus sit amet tellus facilisis, in commodo risus tristique. Quisque sed efficitur ligula. Maecenas vel gravida metus, sed bibendum tellus. Curabitur rhoncus lacus ut elit lobortis aliquet. Nulla pharetra lobortis semper. Phasellus commodo ante id enim fermentum rhoncus. Fusce sit amet ex nec ligula finibus venenatis. Nam sit amet diam in ex feugiat laoreet sed nec ante.';
    mision_org := 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum auctor mauris vitae mi sagittis scelerisque. Curabitur dapibus arcu id volutpat venenatis. Pellentesque blandit mi id dolor fringilla auctor. Proin finibus venenatis ipsum, ut congue orci consectetur nec.';
    vision_org := 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ligula sed sapien vestibulum aliquam a eget ex. Proin ac magna orci. Nam sed ante id ante fringilla varius. Phasellus aliquam metus ac metus finibus, id rutrum odio semper.';
    CALL agregarOrganizacion('Calle Principal 123', 'Organizacion A', 200, 'organizaciona@example.com', descripcion_org, mision_org, vision_org, '1234567890', 1);
    CALL agregarOrganizacion('Avenida Central 456', 'Organizacion B', 500, 'organizacionb@example.com', descripcion_org, mision_org, vision_org, '2345678901', 2);
    CALL agregarOrganizacion('Calle Secundaria 789', 'Organizacion C', 300, 'organizacionc@example.com', descripcion_org, mision_org, vision_org, '3456789012', 3);
    CALL agregarOrganizacion('Avenida Principal 321', 'Organizacion D', 400, 'organizaciond@example.com', descripcion_org, mision_org, vision_org, '4567890123', 4);
    CALL agregarOrganizacion('Calle Principal 654', 'Organizacion E', 100, 'organizacione@example.com', descripcion_org, mision_org, vision_org, '5678901234', 5);
    CALL agregarOrganizacion('Avenida Central 987', 'Organizacion F', 600, 'organizacionf@example.com', descripcion_org, mision_org, vision_org, '6789012345', 6);
    COMMIT;
END;
$$;

CALL agregarCategoria('ropa');
CALL agregarCategoria('comida');
CALL agregarCategoria('juguetes');
CALL agregarCategoria('productos de higiene');


-- Generar productos por categoría
DO $$
DECLARE
    cat_id INTEGER;
BEGIN
    -- Categoría: Ropa
    SELECT id INTO cat_id FROM categoria WHERE nombre = 'ropa';
    CALL agregarProducto(cat_id, 'Camiseta');
    CALL agregarProducto(cat_id, 'Pantalones');
    CALL agregarProducto(cat_id, 'Vestido');
    CALL agregarProducto(cat_id, 'Chaqueta');
    CALL agregarProducto(cat_id, 'Calcetines');

    -- Categoría: Comida
    SELECT id INTO cat_id FROM categoria WHERE nombre = 'comida';
    CALL agregarProducto(cat_id, 'Arroz');
    CALL agregarProducto(cat_id, 'Frijoles');
    CALL agregarProducto(cat_id, 'Carne');
    CALL agregarProducto(cat_id, 'Frutas');
    CALL agregarProducto(cat_id, 'Verduras');

    -- Categoría: Juguetes
    SELECT id INTO cat_id FROM categoria WHERE nombre = 'juguetes';
    CALL agregarProducto(cat_id, 'Pelota');
    CALL agregarProducto(cat_id, 'Muñeca');
    CALL agregarProducto(cat_id, 'Carro de juguete');
    CALL agregarProducto(cat_id, 'Rompecabezas');
    CALL agregarProducto(cat_id, 'Pistola de agua');

    -- Categoría: Productos de higiene
    SELECT id INTO cat_id FROM categoria WHERE nombre = 'productos de higiene';
    CALL agregarProducto(cat_id, 'Jabón');
    CALL agregarProducto(cat_id, 'Shampoo');
    CALL agregarProducto(cat_id, 'Pasta de dientes');
    CALL agregarProducto(cat_id, 'Toallas sanitarias');
    CALL agregarProducto(cat_id, 'Cepillo de dientes');

    COMMIT;
END;
$$;


-- Asignar productos permitidos a organizaciones
DO $$
BEGIN
    -- Organización 1
    CALL agregarProductosPermitidos(1, 1, 2, 3, 4, 5, 6);

    -- Organización 2
    CALL agregarProductosPermitidos(2, 7, 8, 9, 10, 11, 12);

    -- Organización 3
    CALL agregarProductosPermitidos(3, 13, 14, 15, 16, 17, 18);

    -- Organización 4
    CALL agregarProductosPermitidos(4, 19, 20, 1, 2, 3, 4);

    -- Organización 5
    CALL agregarProductosPermitidos(5, 5, 6, 7, 8, 9, 10);

    -- Organización 6
    CALL agregarProductosPermitidos(6, 11, 12, 13, 14, 15, 16);

    COMMIT;
END;
$$;


-- Llamadas para agregar los donantes
CALL agregarDonante('Alice', 'Johnson', 'alicejohnson@example.com', '555-1111');
CALL agregarDonante('Robert', 'Smith', 'robertsmith@example.com', '555-2222');
CALL agregarDonante('Olivia', 'Davis', 'oliviadavis@example.com', '555-3333');
CALL agregarDonante('William', 'Brown', 'williambrown@example.com', '555-4444');
CALL agregarDonante('Charlotte', 'Wilson', 'charlottewilson@example.com', '555-5555');
CALL agregarDonante('James', 'Miller', 'jamesmiller@example.com', '555-6666');


-- Llamadas para agregar los donativos
CALL agregarDonativo(1, 1);
CALL agregarDonativo(2, 2);
CALL agregarDonativo(3, 3);
CALL agregarDonativo(4, 4);
CALL agregarDonativo(5, 5);
CALL agregarDonativo(6, 6);


-- Llamadas para agregar los donativos
CALL agregarDonativoItem(1, 1, 2, 3, 3);
CALL agregarDonativoItem(2, 7, 8, 9,3);
CALL agregarDonativoItem(3, 13, 14, 15, 5);
CALL agregarDonativoItem(4, 19, 20, 1, 4);
CALL agregarDonativoItem(5, 5, 6, 7, 1);
CALL agregarDonativoItem(6, 11, 12, 13, 2);

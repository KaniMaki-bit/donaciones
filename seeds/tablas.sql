DROP DATABASE IF EXISTS donativos;

CREATE DATABASE donativos;
\c donativos;

CREATE TABLE administrador(
    id SERIAL PRIMARY KEY,
    nombre TEXT,
    apellido TEXT,
    authToken VARCHAR(10),
    email TEXT
);

CREATE TABLE donante(
    id SERIAL PRIMARY KEY,
    nombre TEXT,
    apellido TEXT,
    email TEXT,
    telefono TEXT
);

CREATE TABLE organizacion(
    id SERIAL PRIMARY KEY,
    administrador_id INTEGER,
    direccion TEXT,
    nombre TEXT,
    meta INT,
    correo TEXT,
    descripcion TEXT,
    mision TEXT,
    vision TEXT,
    telefono TEXT,
    FOREIGN KEY (administrador_id)
        REFERENCES administrador(id)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);

CREATE TABLE categoria(
    id SERIAL PRIMARY KEY,
    nombre TEXT
);

CREATE TABLE producto(
    id SERIAL PRIMARY KEY,
    nombre TEXT,
    categoria_id INTEGER,
    FOREIGN KEY (categoria_id)
        REFERENCES categoria(id)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);

CREATE TABLE donativo(
    id SERIAL PRIMARY KEY,
    fecha TIMESTAMP,
    donante_id INTEGER,
    organizacion_id INTEGER,
    FOREIGN KEY (donante_id)
        REFERENCES donante(id)
        ON DELETE CASCADE
        ON UPDATE CASCADE,
    FOREIGN KEY (organizacion_id)
        REFERENCES organizacion(id)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);

CREATE TABLE productos_permitidos(
    producto_id INTEGER NOT NULL
        REFERENCES producto(id)
        ON DELETE CASCADE
        ON UPDATE CASCADE,
    organizacion_id INTEGER NOT NULL
        REFERENCES organizacion(id)
        ON DELETE CASCADE
        ON UPDATE CASCADE,
    PRIMARY KEY (producto_id, organizacion_id)
);

CREATE TABLE donativo_item(
    donativo_id INTEGER NOT NULL
        REFERENCES donativo(id)
        ON DELETE CASCADE
        ON UPDATE CASCADE,
    producto_id INTEGER NOT NULL
        REFERENCES producto(id)
        ON DELETE CASCADE
        ON UPDATE CASCADE,
    cantidad INTEGER DEFAULT 0,
    PRIMARY KEY (donativo_id, producto_id)
);
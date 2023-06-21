package create

import (
	"database/sql"
	"encoding/json"
	"net/http"
)

func RegistrarDonativo(pgDB *sql.DB) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		// Enable CORS
		w.Header().Set("Access-Control-Allow-Origin", "*")

		// Parsear los datos del donativo del cuerpo de la solicitud JSON
		type DonativoRequest struct {
			ID             int    `json:"id"`
			UsuarioID      int    `json:"usuario_id"`
			ProductoID     int    `json:"producto_id"`
			Cantidad       int    `json:"cantidad"`
			Nombre         string `json:"nombre"`
			Apellido       string `json:"apellido"`
			Email          string `json:"email"`
			Telefono       string `json:"telefono"`
			IDOrganizacion int    `json:"id_organizacion"`
		}

		var donativoReq DonativoRequest
		err := json.NewDecoder(r.Body).Decode(&donativoReq)
		if err != nil {
			http.Error(w, "Error parsing request body", http.StatusBadRequest)
			return
		}

		// Realizar la transacción para registrar el donativo
		tx, err := pgDB.Begin()
		if err != nil {
			http.Error(w, "Error starting transaction", http.StatusInternalServerError)
			return
		}

		// Registrar el usuario si no existe
		err = createUser(tx, donativoReq.UsuarioID, donativoReq.Nombre, donativoReq.Apellido, donativoReq.Email, donativoReq.Telefono)
		if err != nil {
			tx.Rollback()
			http.Error(w, "Error creating user", http.StatusInternalServerError)
			return
		}

		// Registrar el donativo
		err = createDonativo(tx, donativoReq.ID, donativoReq.UsuarioID, donativoReq.ProductoID, donativoReq.Cantidad, donativoReq.IDOrganizacion)
		if err != nil {
			tx.Rollback()
			http.Error(w, "Error creating donativo", http.StatusInternalServerError)
			return
		}

		// Commit de la transacción
		err = tx.Commit()
		if err != nil {
			http.Error(w, "Error committing transaction", http.StatusInternalServerError)
			return
		}

		// Respuesta exitosa
		response := struct {
			Message string `json:"message"`
		}{
			Message: "Donativo registrado exitosamente",
		}

		// Convertir la estructura a JSON
		responseJSON, err := json.Marshal(response)
		if err != nil {
			http.Error(w, "Error marshaling response", http.StatusInternalServerError)
			return
		}

		// Enviar respuesta HTTP
		w.Header().Set("Content-Type", "application/json")
		w.WriteHeader(http.StatusOK)
		w.Write(responseJSON)
	}
}

func createUser(tx *sql.Tx, id int, nombre, apellido, email, telefono string) error {
	// Verificar si el usuario ya existe
	query := "SELECT COUNT(*) FROM donante WHERE id = $1"
	var count int
	err := tx.QueryRow(query, id).Scan(&count)
	if err != nil {
		return err
	}

	if count == 0 {
		// El usuario no existe, realizar la inserción
		insertQuery := "INSERT INTO donante (id, nombre, apellido, email, telefono) VALUES ($1, $2, $3, $4, $5)"
		_, err := tx.Exec(insertQuery, id, nombre, apellido, email, telefono)
		if err != nil {
			return err
		}
	}

	return nil
}

func createDonativo(tx *sql.Tx, id, usuarioID, productoID, cantidad, organizacionID int) error {
	// Obtener el último ID del donativo
	var donativoID int
	err := tx.QueryRow("SELECT MAX(id) FROM donativo").Scan(&donativoID)
	if err != nil {
		return err
	}

	// Incrementar el ID del donativo
	donativoID++

	// Insertar el donativo
	insertDonativoQuery := "INSERT INTO donativo (id, fecha, donante_id, organizacion_id) VALUES ($1, NOW(), $2, $3)"
	_, err = tx.Exec(insertDonativoQuery, donativoID, usuarioID, organizacionID)
	if err != nil {
		return err
	}

	// Insertar el item del donativo
	insertItemQuery := "INSERT INTO donativo_item (donativo_id, producto_id, cantidad) VALUES ($1, $2, $3)"
	_, err = tx.Exec(insertItemQuery, donativoID, productoID, cantidad)
	if err != nil {
		return err
	}

	return nil
}

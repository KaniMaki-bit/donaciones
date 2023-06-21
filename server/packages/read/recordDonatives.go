package read

import (
	"database/sql"
	"encoding/json"
	"hapi/packages/structs"
	"net/http"
)

func RecordDonatives(pgDB *sql.DB) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		// Enable CORS
		w.Header().Set("Access-Control-Allow-Origin", "*")

		// Recibo el parámetro de GET
		idOrg := r.URL.Query().Get("idOrg")

		// Query base
		query := `SELECT * FROM obtenerDonaciones($1)`

		// Realizar la consulta a la base de datos
		rows, err := pgDB.Query(query, idOrg)
		if err != nil {
			http.Error(w, "Error retrieving organization", http.StatusInternalServerError)
			return
		}
		defer rows.Close()

		// Crear una estructura para almacenar los resultados
		var donatives []structs.RecordDonatives
		for rows.Next() {
			var donative structs.RecordDonatives
			err := rows.Scan(&donative.Nombre, &donative.Apellido, &donative.Fecha, &donative.Articulo, &donative.Cantidad)
			if err != nil {
				http.Error(w, "Error retrieving organization", http.StatusInternalServerError)
				return
			}
			donatives = append(donatives, donative)
		}

		// Comprobar si ocurrieron errores durante la iteración de las filas
		err = rows.Err()
		if err != nil {
			http.Error(w, "Error retrieving organization", http.StatusInternalServerError)
			return
		}

		// Paso los datos de la estructura a un JSON de resultado
		donativesJSON, err := json.Marshal(donatives)
		if err != nil {
			http.Error(w, "Error retrieving organization", http.StatusInternalServerError)
			return
		}

		// Postear resultado de operación por HTTP
		w.Header().Set("Content-Type", "application/json")
		w.WriteHeader(http.StatusOK)
		w.Write(donativesJSON)
	}
}

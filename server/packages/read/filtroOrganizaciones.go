package read

import (
	"database/sql"
	"encoding/json"
	"hapi/packages/structs"
	"net/http"
)

func FiltroOrganizaciones(pgDB *sql.DB) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		// Enable CORS
		w.Header().Set("Access-Control-Allow-Origin", "*")

		// Recibo los parámetros de GET
		categories := r.URL.Query().Get("categories")

		// Query base
		query := `SELECT nombre, descripcion
			FROM organizacion
			WHERE id = idnameFunction($1)`

		// Recibo la información en la estructura de resultado
		var org structs.InfoOrg
		err := pgDB.QueryRow(query, categories).Scan(&org.Nombre)
		if err != nil {
			http.Error(w, "Error retriving organization", http.StatusInternalServerError)
			return
		}

		// Paso los datos de la estructura a un JSON de resultado
		orgJSON, err := json.Marshal(org)
		if err != nil {
			http.Error(w, "Error retrieving organization", http.StatusInternalServerError)
			return
		}

		// Postear resultado de operación por HTTP
		w.Header().Set("Content-Type", "application/json")
		w.WriteHeader(http.StatusOK)
		w.Write(orgJSON)
	}
}

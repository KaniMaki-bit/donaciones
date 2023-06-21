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
			WHERE id = ANY(organizacionPorCategorie($1))`

		// Ejecutar la consulta
		rows, err := pgDB.Query(query, categories)
		if err != nil {
			http.Error(w, "Error retrieving organizations", http.StatusInternalServerError)
			return
		}
		defer rows.Close()

		// Slice para almacenar los resultados
		var orgs []structs.ResIdOrg

		// Recorrer los resultados de la consulta
		for rows.Next() {
			var org structs.ResIdOrg
			err := rows.Scan(&org.Nombre, &org.Descripcion)
			if err != nil {
				http.Error(w, "Error retrieving organizations", http.StatusInternalServerError)
				return
			}
			orgs = append(orgs, org)
		}

		// Verificar errores en rows.Next()
		if err = rows.Err(); err != nil {
			http.Error(w, "Error retrieving organizations", http.StatusInternalServerError)
			return
		}

		// Serializar el slice orgs a JSON
		orgsJSON, err := json.Marshal(orgs)
		if err != nil {
			http.Error(w, "Error retrieving organizations", http.StatusInternalServerError)
			return
		}

		// Postear resultado de operación por HTTP
		w.Header().Set("Content-Type", "application/json")
		w.WriteHeader(http.StatusOK)
		w.Write(orgsJSON)
	}
}

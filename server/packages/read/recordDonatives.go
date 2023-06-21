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

		// Recibo los parámetros de GET
		idOrg := r.URL.Query().Get("idOrg")

		// Query base
		query := `SELECT obtenerDonaciones($1)`

		// Recibo la información en la estructura de resultado
		var org structs.RecordDonatives
		err := pgDB.QueryRow(query, idOrg).Scan(&org.Nombre, &org.Apellido, &org.Articulo, &org.Cantidad, &org.Fecha)
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

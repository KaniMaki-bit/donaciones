package read

import (
	"database/sql"
	"encoding/json"
	"hapi/packages/structs"
	"net/http"
)

type Organizacion struct {
	ID        int    `json:"id"`
	Nombre    string `json:"nombre"`
	Direccion string `json:"direccion"`
	// Agrega más campos según la estructura de la tabla "organizacion"
}

func InfoOrganizacion(pgDB *sql.DB) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		// Enable CORS
		w.Header().Set("Access-Control-Allow-Origin", "*")

		//Recibo los parametros de get
		idOrg := r.URL.Query().Get("idOrg")

		//Query base
		query := `SELECT id, nombre, direccion
			FROM organizacion
			WHERE id = $1`

		//recibo la info en la estructura de resultado
		var org structs.InfoOrg
		err := pgDB.QueryRow(query, idOrg).Scan(&org.ID, &org.Nombre, &org.Descripcion, &org.Mision, &org.Vision, &org.Direccion, &org.Correo, &org.Telefono)
		if err != nil {
			http.Error(w, "Error retrieving organization", http.StatusInternalServerError)
			return
		}

		//Paso los datos de la estructura aun json de resultado
		orgJSON, err := json.Marshal(org)
		if err != nil {
			http.Error(w, "Error retrieving organization", http.StatusInternalServerError)
			return
		}

		//Postear resultado de operacion por HTTP
		w.Header().Set("Content-Type", "application/json")
		w.WriteHeader(http.StatusOK)
		w.Write(orgJSON)
	}
}

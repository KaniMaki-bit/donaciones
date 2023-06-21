package read

import (
	"database/sql"
	"encoding/json"
	"hapi/packages/structs"
	"net/http"
)

func ProductosPermitidos(pgDB *sql.DB) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		// Enable CORS
		w.Header().Set("Access-Control-Allow-Origin", "*")

		// Recibo los parámetros de GET
		idOrg := r.URL.Query().Get("idOrg")

		// Query
		query := `SELECT p.nombre
			FROM producto p
			JOIN productos_permitidos pp ON p.id = pp.producto_id
			WHERE pp.organizacion_id = $1`

		// Ejecutar consulta
		rows, err := pgDB.Query(query, idOrg)
		if err != nil {
			http.Error(w, "Error retrieving products", http.StatusInternalServerError)
			return
		}
		defer rows.Close()

		// Crear una lista de nombres de productos
		var productos []string

		// Iterar sobre los resultados de la consulta
		for rows.Next() {
			var nombre string
			err := rows.Scan(&nombre)
			if err != nil {
				http.Error(w, "Error scanning row", http.StatusInternalServerError)
				return
			}
			productos = append(productos, nombre)
		}

		// Comprobar errores de la consulta
		err = rows.Err()
		if err != nil {
			http.Error(w, "Error retrieving products", http.StatusInternalServerError)
			return
		}

		// Crear una estructura de respuesta
		response := structs.ProductsResponse{
			Nombre: productos,
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

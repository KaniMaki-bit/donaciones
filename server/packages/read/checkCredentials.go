package read

import (
	"database/sql"
	"encoding/json"
	"fmt"
	"net/http"

	_ "github.com/lib/pq"
)

type Admin struct {
	Email     string `json:"email"`
	AuthToken string `json:"authToken"`
}

func AuthenticateAdmin(db *sql.DB) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		email := r.FormValue("email")
		authToken := r.FormValue("authToken")

		query := "SELECT * FROM administrador WHERE email = $1 AND authToken = $2"

		row := db.QueryRow(query, email, authToken)

		var admin Admin
		err := row.Scan(&admin.Email, &admin.AuthToken)
		if err != nil {
			if err == sql.ErrNoRows {
				http.Error(w, "Unauthorized", http.StatusUnauthorized)
			} else {
				http.Error(w, "Internal Server Error", http.StatusInternalServerError)
			}
			return
		}

		response := map[string]interface{}{
			"status":  "Success",
			"message": fmt.Sprintf("Authenticated admin: %s", admin.Email),
		}

		jsonResponse, err := json.Marshal(response)
		if err != nil {
			http.Error(w, "Internal Server Error", http.StatusInternalServerError)
			return
		}

		w.Header().Set("Content-Type", "application/json")
		w.WriteHeader(http.StatusOK)
		w.Write(jsonResponse)
	}
}

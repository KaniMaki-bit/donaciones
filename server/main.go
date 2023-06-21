package main

import (
	"database/sql"
	"fmt"
	"hapi/packages/read"
	"log"
	"net/http"
	"os"

	"hapi/packages/create"

	"github.com/gorilla/mux"
	"github.com/joho/godotenv"
	_ "github.com/lib/pq"
)

func main() {

	// Loading env variables (.env file)
	err := godotenv.Load()
	if err != nil {
		log.Fatalf(err.Error(), err)
		return
	}

	// PostgreSQL connection
	pgDB, err := sql.Open("postgres", fmt.Sprintf("host=%s port=%s user=%s password=%s dbname=%s sslmode=disable", os.Getenv("PG_HOST"), os.Getenv("PG_PORT"), os.Getenv("PG_USER"), os.Getenv("PG_PASSWORD"), os.Getenv("PG_DBNAME")))
	if err != nil {
		log.Fatal("Error connecting to PostgreSQL:", err)
	}
	defer func() {
		if err = pgDB.Close(); err != nil {
			log.Fatal("Error disconnecting from PostgreSQL:", err)
		}
	}()

	// Creating router and defining routing functions
	r := mux.NewRouter()

	// Read operations
	r.HandleFunc("/infoOrganizacion", read.InfoOrganizacion(pgDB)).Methods("GET")
	r.HandleFunc("/filtroOrganizaciones", read.FiltroOrganizaciones(pgDB)).Methods("GET")
	r.HandleFunc("/productosPermitidos", read.ProductosPermitidos(pgDB)).Methods("GET")

	// wrire operations
	r.HandleFunc("/registrarDonativo", create.RegistrarDonativo(pgDB)).Methods("POST")

	// Check status and PORT
	log.Println("Starting RIDDLE on", os.Getenv("PORT"))
	err = http.ListenAndServe(os.Getenv("PORT"), r)
	if err != nil {
		log.Fatal(err)
		return
	}
}

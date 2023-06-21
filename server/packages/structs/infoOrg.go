package structs

import "time"

type IdOrg struct {
	ID string
}

type InfoOrg struct {
	ID          string `json:"id"`
	Nombre      string `json:"nombre"`
	Descripcion string `json:"descripcion"`
	Mision      string `json:"mision"`
	Vision      string `json:"vision"`
	Direccion   string `json:"direccion"`
	Correo      string `json:"correo"`
	Telefono    string `json:"telefono"`
	Meta        string `json:"meta"`
}

type GoalProgress struct {
	Goal string `json:"progreso"`
}

type RecordDonatives struct {
	Nombre   string    `json:"nombre"`
	Apellido string    `json:"apellido"`
	Articulo string    `json:"articulo"`
	Cantidad string    `json:"cantidad"`
	Fecha    time.Time `json:"fecha"`
}

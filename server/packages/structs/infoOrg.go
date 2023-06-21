package structs

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
}

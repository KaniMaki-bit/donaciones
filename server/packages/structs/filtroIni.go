package structs

type FiltroRecibo struct {
	Categories []string
}

type Filtro struct {
	Nombre      string `json:"nombre"`
	Descripcion string `json:"descripcion"`
}

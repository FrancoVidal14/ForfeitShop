export interface Producto {
  id:          number;
  nombre:      string;
  imageUrl:    string[];
  descripcion: string;
  precio:      number;
  categoria:   string;
  slug:        string;
  variantes:   Variante[];
}

export interface Variante {
  id_variante: number;
  talle:       string;
  color:       string;
  stock:       number;
}

export interface PostResponse {
  content:          Post[];
  pageable:         string;
  last:             boolean;
  totalPages:       number;
  totalElements:    number;
  size:             number;
  number:           number;
  sort:             Sort;
  first:            boolean;
  numberOfElements: number;
  empty:            boolean;
}

export interface Post {
  id:                number;
  nick:              string;
  titulo:            string;
  descripcion:       string;
  archivo:           string;
  archivoreescalado: string;
  tipopublicacion:   Tipopublicacion;
  commentarios:      Commentario[];
  numlikes:          number;
  userid:            string;
  avataruser:        string;
}

export interface Commentario {
  comentario: string;
  user_id:    string;
  post_id:    number;
  nick:       null;
  image:      null;
}

export enum Tipopublicacion {
  Privada = "PRIVADA",
  Publica = "PUBLICA",
}

export interface Sort {
  empty:    boolean;
  sorted:   boolean;
  unsorted: boolean;
}

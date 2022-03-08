export interface UserResponse {
  content:          User[];
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

export interface User {
  id:         string;
  name:       string;
  lastname:   string;
  nick:       string;
  email:      string;
  datebirth:  string;
  avatar:     string;
  tipocuenta: Tipocuenta;
  seguidores: number;
  siguiendo:  number;
  numposts:   number;
  role:       Role;
}

export enum Role {
  User = "USER",
  Admin = "ADMIN",
}

export enum Tipocuenta {
  Privada = "PRIVADA",
  Publica = "PUBLICA",
}

export interface Sort {
  empty:    boolean;
  sorted:   boolean;
  unsorted: boolean;
}

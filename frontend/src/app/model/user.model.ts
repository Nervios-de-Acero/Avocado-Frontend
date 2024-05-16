export interface User {
  idUsuario: number,
  nombreCompleto: string,
  usuario: string,
  email: string,
  password: string
}

export interface UserDTO extends Omit<User, "idUsuario">{}

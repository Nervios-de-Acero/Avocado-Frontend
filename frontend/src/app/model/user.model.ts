export interface User {
  idUsuario: number,
  nombreCompleto: string,
  usuario: string,
  email: string,
  contrasenia: string
}

export interface UserDTO extends Omit<User, "idUsuario">{}

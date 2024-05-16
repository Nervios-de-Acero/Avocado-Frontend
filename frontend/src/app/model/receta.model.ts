export interface Receta{
  idReceta: number,
  titulo: string,
  descripcion: string,
  imagen: string,
  fechaCreacion?:string,
  fechaActualizacion?: string
  creadoPor?: string,
  emailCreadoPor?: string,
  tiempoCoccion?: string,
  dificultad?: string,
  ingredientes?:string[],
  pasos?:string[],
  categorias?: string[]
}

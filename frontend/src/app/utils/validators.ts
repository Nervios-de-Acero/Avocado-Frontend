import { AbstractControl } from "@angular/forms";

export class MyValidators{

  // Comprobamos que las password macheen o sino nos retorna un
  // error personalizado (si todo esta bien retorna null)
  static validContrasenia(control: AbstractControl){
    // No lo hacemos con get porque nos puede traer valores null
    // Los obtenemos de esta forma, si es solo para OBTENER VALOR
    const contrasenia = control.value.contrasenia;
    const confirmContrasenia = control.value.confirmContrasenia;
    if(contrasenia === confirmContrasenia){
      return null
    }
    return {match_contrasenia: true};
  }

}

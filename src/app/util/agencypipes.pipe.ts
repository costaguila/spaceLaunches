import { Pipe, PipeTransform } from '@angular/core'


// bool numerico para string
@Pipe({
    name: 'boolTransform'
})
export class BoolTransform implements PipeTransform {
    transform(valor: number): string {
        if (valor == 0) {
            return "Falso"
        }

        return "Verdadeiro"
    }
}
// id do tipo da agência para string
@Pipe({
    name: 'agencyTypeTransform'
})
export class AgencyTypeTransform implements PipeTransform {
    transform(valor: number): string {
		if(valor == 1 ){
        	return "Governamental"
        }else if(valor == 2 ){
        	return "Multinacional"
        }else if(valor == 3 ){
        	return "Comercial"
        }else if(valor == 4 ){
        	return "Educacional"
        }else if(valor == 5 ){
        	return "Privada"
        }else if(valor == 6 ){
        	return "Tipo desconhecido."
        }else {
        	return "Valor desconhecido."
        }
    }
}
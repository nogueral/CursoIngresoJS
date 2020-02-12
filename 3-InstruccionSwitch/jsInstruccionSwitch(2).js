function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

 switch(mesDelAño) {
        case"Julio":
        case"Agosto":
        alert("Abrigate que hace frio");
        break;
        case"Septiembre":
        case"Octubre":
        case"Noviembre":
        case"Diciembre":
        alert("Ya paso el frio ahora el calor");
        break;
        default:
        alert("Falta para el invierno");
    }
	
        console.log(mesDelAño);




}//FIN DE LA FUNCIÓN
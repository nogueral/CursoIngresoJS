//al presionar el botón pedir un número entre 0 y 9 inclusive.

function mostrar()
{

	var numero = prompt("ingrese un número entre 0 y 9");

	while (numero < 0 || numero > 9 || isNaN(numero)) {

		numero = prompt("Error! Por favor, ingrese un numero entre 0 y 9");
		
	}


}//FIN DE LA FUNCIÓN
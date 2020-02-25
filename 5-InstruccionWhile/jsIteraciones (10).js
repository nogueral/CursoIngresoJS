/*Al presionar el botón pedir números hasta que el usuario quiera, mostrar:
1-Suma de los negativos. 2-Suma de los positivos. 3-Cantidad de positivos. 4-Cantidad de negativos. 
5-Cantidad de ceros. 6-Cantidad de números pares. 7-Promedio de positivos. 8-Promedios de negativos. 
9-Diferencia entre positivos y negativos, (positvos-negativos).*/


function mostrar()
{
	var contadorPositivos=0;
	var contadorNegativos=0;
	var contadorCeros=0;
	//declarar contadores y variables 
	var numeroIngresado;
	var positivos=0;
	var negativos=0;
	var respuesta=true;
	var contadorPares=0;
	var resto;
	var promedioPositivos=0;
	var promedioNegativos=0;
	var diferencia;

	
	while(respuesta == true)
	{
		do { 

		numeroIngresado = prompt("Ingrese un numero: ");
		numeroIngresado = parseInt(numeroIngresado);

		if (numeroIngresado < 0) {
			negativos = negativos + numeroIngresado;
			contadorNegativos++;
			promedioNegativos = negativos / contadorNegativos;

		} else if (numeroIngresado > 0) {
			positivos = positivos + numeroIngresado;
			contadorPositivos++;
			resto = numeroIngresado % 2;
			promedioPositivos = positivos / contadorPositivos;

			if (resto == 0) {
				contadorPares++;
			}

		} else if (numeroIngresado == 0) {
			contadorCeros = contadorCeros + 1;
		}

		diferencia = positivos - negativos;

	} while(isNaN(numeroIngresado));

		respuesta = confirm("Desea ingresar otro numero?: ");
	}

		document.write("1 - Suma de los negativos: "+negativos+"<br>",
		"2 - Suma de los positivos: "+positivos+"<br>", "3 - Cantidad positivos: "+contadorPositivos+"<br>",
		"4 - Cantidad negativos: "+contadorNegativos+"<br>", "5 - Cantidad de ceros: "+contadorCeros+"<br>",
		"6 - Cantidad numeros pares: "+contadorPares+"<br>", "7 - Promedio positivos: "+promedioPositivos+"<br>",
		"8 - Promedio negativos: "+promedioNegativos+"<br>", "9 - Diferencia entre positivos y negativos: "
		+diferencia+"<br>");



/*
	while(respuesta == true)
	{
		numeroIngresado = prompt("Ingrese un numero: ");
		numeroIngresado = parseInt(numeroIngresado);

		while(isNaN(numeroIngresado)) {
			numeroIngresado = prompt("Error! Por favor, ingrese un numero: ");
			numeroIngresado = parseInt(numeroIngresado);
		}

		if (numeroIngresado < 0) {
			negativos = negativos + numeroIngresado;
			contadorNegativos++;
			promedioNegativos = negativos / contadorNegativos;

		} else if (numeroIngresado > 0) {
			positivos = positivos + numeroIngresado;
			contadorPositivos++;
			resto = numeroIngresado % 2;
			promedioPositivos = positivos / contadorPositivos;

			if (resto == 0) {
				contadorPares++;
			}

		} else if (numeroIngresado == 0) {
			contadorCeros = contadorCeros + 1;
		}

		diferencia = positivos - negativos;

		respuesta = confirm("Desea ingresar otro numero?: ");
	}

	document.write("1 - Suma de los negativos: "+negativos+"<br>",
	"2 - Suma de los positivos: "+positivos+"<br>", "3 - Cantidad positivos: "+contadorPositivos+"<br>",
	"4 - Cantidad negativos: "+contadorNegativos+"<br>", "5 - Cantidad de ceros: "+contadorCeros+"<br>",
	"6 - Cantidad numeros pares: "+contadorPares+"<br>", "7 - Promedio positivos: "+promedioPositivos+"<br>",
	"8 - Promedio negativos: "+promedioNegativos+"<br>", "9 - Diferencia entre positivos y negativos: "
	+diferencia+"<br>");

*/

}//FIN DE LA FUNCIÓN
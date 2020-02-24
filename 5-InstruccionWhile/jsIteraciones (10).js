/*Al presionar el botón pedir números hasta que el usuario quiera, mostrar:
1-Suma de los negativos. 2-Suma de los positivos. 3-Cantidad de positivos. 4-Cantidad de negativos. 
5-Cantidad de ceros. 6-Cantidad de números pares. 7-Promedio de positivos. 8-Promedios de negativos. 
9-Diferencia entre positivos y negativos, (positvos-negativos).*/


function mostrar()
{

	var contador=0;
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


	while(respuesta == true)
	{
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

		
		

		console.log(numeroIngresado, contadorPositivos, contadorNegativos, promedioPositivos, promedioNegativos);

		respuesta = confirm("Desea ingresar otro numero?: ");
	}




}//FIN DE LA FUNCIÓN
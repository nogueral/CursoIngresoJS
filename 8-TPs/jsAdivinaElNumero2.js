/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/

var numeroSecreto; 
var contadorIntentos = 1;
var max = 101;
var min = 1;
var numeroIngresado;

function comenzar()
{
	numeroSecreto = Math.floor(Math.random() * (max - min ) + min);
	
	//Genero el número RANDOM entre 1 y 100
	 
	alert("Numero secreto generado");

}

function verificar()
{
	
	numeroIngresado = document.getElementById("numero").value;
  
	if (numeroIngresado == numeroSecreto) {
		alert("GANADOR!")

		switch(contadorIntentos) {
			case 1: 
			alert("Usted es un psiquico");
			break;
			case 2: 
			alert("Excelente percepcion");
			break;
			case 3: 
			alert("Esto es suerte");
			break;
			case 4: 
			alert("Excelente tecnica");
			break;
			case 5: 
			alert("Usted esta en la media");
			break;
			case 6: 
			case 7:
			case 8:
			case 9:
			case 10: 
			alert("Falta tecnica");
			break;
			default: 
			alert("Afortunado en el amor!!");
			break; }

		}
		else if (numeroIngresado < numeroSecreto) {
		  alert("Falta...")
		}
		else if (numeroIngresado > numeroSecreto) {
		  alert("Se Paso...")
		}
	  document.getElementById("intentos").value = contadorIntentos;
	  contadorIntentos = contadorIntentos + 1;

	  
	  
	  
	  console.log(numeroIngresado, numeroSecreto, contadorIntentos);

	}
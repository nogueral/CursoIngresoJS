/*Al presionar el botón pedir 5 números
 e informar la suma acumulada y el promedio.*/

function mostrar()
{

	var contador=0;
	var acumulador=0;
	var numeroIngresado;

	while (contador < 5) { 

	do { 

	numeroIngresado = prompt("Por favor, ingrese número: ");
	numeroIngresado = parseInt(numeroIngresado);
	console.log(numeroIngresado);

	} while(isNaN(numeroIngresado));

	acumulador = acumulador + numeroIngresado;
	contador=contador+1;
	}

	document.getElementById('suma').value=acumulador;
	document.getElementById('promedio').value=acumulador/contador; /*Promedios 
	y porcentajes calcular afuera*/


/*while(contador < 5) {

	numeroIngresado = prompt("Ingrese número");

		while  (isNaN(numeroIngresado)){
		numeroIngresado = prompt("Error! Ingrese un numero");

	}

	numeroIngresado = parseInt(numeroIngresado);
	acumulador = parseInt(acumulador);
	acumulador = acumulador + numeroIngresado;
	contador=contador+1;
	

}

	
	console.log(acumulador);

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;*/



}//FIN DE LA FUNCIÓN 
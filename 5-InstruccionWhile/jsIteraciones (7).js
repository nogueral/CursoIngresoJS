function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';
	var numeroIngresado;
	var promedio;
	
	while(prompt("Desea ingresar un número?")) {

	do {

		if (respuesta.toLocaleLowerCase() == "si") {

			numeroIngresado = prompt("Ingrese un número");
			numeroIngresado = parseInt(numeroIngresado);
			contador = contador + 1;
		}
	}	while (isNaN(numeroIngresado))
		
		acumulador=acumulador+numeroIngresado;
		promedio=acumulador/contador;

}

	document.getElementById('suma').value=acumulador;
	document.getElementById('promedio').value=promedio; 
	
/*	while(prompt("Desea ingresar un numero?")) {

		if (respuesta.toLowerCase() == "si") {

			numeroIngresado=prompt("Ingrese un numero");
			numeroIngresado=parseInt(numeroIngresado);
			contador=contador+1;

			while(isNaN(numeroIngresado)) {

			numeroIngresado=prompt("Ingrese un numero");
			numeroIngresado=parseInt(numeroIngresado);
			}

			acumulador=acumulador+numeroIngresado;
			promedio=acumulador/contador;
		}
	

}



document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=promedio;  */

}

//FIN DE LA FUNCIÓN
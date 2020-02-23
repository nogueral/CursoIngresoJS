function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta=true;
	var numeroIngresado;
	var promedio;
	
	while(respuesta==true) {

	do {

	numeroIngresado = prompt("Por favor, ingrese un número");
	numeroIngresado = parseInt(numeroIngresado);
	console.log(numeroIngresado);
		
	}	while (isNaN(numeroIngresado))

		contador = contador + 1;
		acumulador=acumulador+numeroIngresado;
		promedio=acumulador/contador;

	respuesta=confirm("Desea ingresar otro numero?");

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
function mostrar()
{

	var contador=0;
	var acumulador=0;
	var numeroIngresado = prompt ("Ingrese número");

	while (contador < 5) { 

	do { 

	numeroIngresado = prompt("Ingrese número");

	numeroIngresado = parseInt(numeroIngresado);
	acumulador = parseInt(acumulador);
	acumulador = acumulador + numeroIngresado;
	contador=contador+1;

	} while(isNaN(numeroIngresado));

	}

		console.log(acumulador);

	document.getElementById('suma').value=acumulador;
	document.getElementById('promedio').value=acumulador/5;

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
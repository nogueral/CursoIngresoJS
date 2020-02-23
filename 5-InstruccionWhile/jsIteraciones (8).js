function mostrar()
{
	var positivo=0;
	var negativo=1;
	var numeroIngresado;


	while(confirm("Desea ingresar un número?")) { 

		do  {

			numeroIngresado = prompt("Ingrese número");
			numeroIngresado = parseInt(numeroIngresado);
			console.log(numeroIngresado);
		
		} while (isNaN(numeroIngresado))

		if (numeroIngresado >= 0) {

			positivo = positivo + numeroIngresado;
	
		} else  {
	
			negativo = negativo * numeroIngresado;
		}
	
	}

	document.getElementById('suma').value=positivo;
	document.getElementById('producto').value=negativo;

	/*
while(confirm ("Desea ingresar un numero?")) {

		contador=contador+1;
		numeroIngresado = prompt("Ingrese número");
		numeroIngresado = parseInt(numeroIngresado);

		while(isNaN(numeroIngresado)) { // para validar el numero en caso de colocar un stream
		
		numeroIngresado = prompt("Ingrese número");
		numeroIngresado = parseInt(numeroIngresado);

		} 
		

	if (numeroIngresado >= 0) {

		positivo = positivo + numeroIngresado;

	} else  {

		negativo = negativo * numeroIngresado;
	}

	

document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo; */

}//FIN DE LA FUNCIÓN
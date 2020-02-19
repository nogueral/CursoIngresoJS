function mostrar()
{

	var contador=0;
	// declarar variables
	
	var respuesta='si';
	var numeroIngresado=prompt("Ingrese un numero");
	var primeraVez;
	var maximo;
	var minimo;
	
 
	

	while(confirm("Desea ingresar un numero?")) {
		
		contador=contador+1;
		numeroIngresado = prompt("Ingrese un numero");
		numeroIngresado = parseInt(numeroIngresado);
		

		while(isNaN(numeroIngresado)){

		numeroIngresado = prompt("Ingrese un numero");
		numeroIngresado = parseInt(numeroIngresado);
		}
	
		console.info(numeroIngresado);

		if(primeraVez)	{
			primeraVez = false
		
			maximo = numeroIngresado;
			minimo = numeroIngresado;
		} else {

			if (numeroIngresado > maximo) {

				maximo = numeroIngresado;
			}
			if (numeroIngresado < minimo) {

				minimo = numeroIngresado;
			}

	}
	
	}

	

		document.getElementById("maximo").value = maximo;
		document.getElementById("minimo").value = minimo;


}//FIN DE LA FUNCIÓN
function mostrar()
{

	var contador=0;
	// declarar variables
	
	var respuesta='si';
	var numeroIngresado;
	var primeraVez;
	var maximo;
	var minimo;
	

	while(prompt("Desea ingresar un numero?")) {
		
		if(respuesta.toLowerCase() == "si") { 
		
			contador=contador+1;
			numeroIngresado = prompt("Ingrese un numero");
			numeroIngresado = parseInt(numeroIngresado);
		

			while(isNaN(numeroIngresado)){

			numeroIngresado = prompt("Ingrese un numero");
			numeroIngresado = parseInt(numeroIngresado);
			}

		}	
	
		console.info(numeroIngresado);

		if(primeraVez == false)	{
		
			maximo = numeroIngresado;
			minimo = numeroIngresado;

		} else if (numeroIngresado > maximo) {

				maximo = numeroIngresado;
			
		} else if (numeroIngresado < minimo) {

				minimo = numeroIngresado;
			}

	
	}

	

		document.getElementById("maximo").value = maximo;
		document.getElementById("minimo").value = minimo;


}//FIN DE LA FUNCIÓN
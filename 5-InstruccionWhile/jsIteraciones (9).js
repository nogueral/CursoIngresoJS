function mostrar()
{

	//var contador=0;
	// declarar variables
	var flag = true;
	var respuesta=true;
	var numero;
	var maximo;
	var minimo;

	while(respuesta==true) 
	{
		numero = prompt("Ingrese un numero: ");
		numero = parseInt(numero);

		/*Maximos y Minimos con contador
		
		if(contador==0)
		{
			maximo = numero;
			minimo = numero;

		}
		else
		{
			if(numero>maximo){
				maximo = numero;
			}
			else {
				if(numero<minimo) {
					minimo = numero;
				}
			}
		}

		
		contador++;*/

		/*Maximos y minimos con flag*/

			if(flag == true || numero>maximo)
			{
				maximo = numero;
			}
			
				if(flag == true || numero<minimo) 
				{
					minimo = numero;
				}
			
		
		flag=false;

		respuesta = confirm("Desea ingresar otro numero?: ");
		
		/*Se asigna variable true a respuesta y se lo valida con confirm*/
		/*respuesta = respuesta.toLowerCase(); 
		para validar la respuesta en mayuscula o minuscula*/
		
	}

	
/*
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

	
	} */

	

		document.getElementById("maximo").value = maximo;
		document.getElementById("minimo").value = minimo;


}//FIN DE LA FUNCIÓN
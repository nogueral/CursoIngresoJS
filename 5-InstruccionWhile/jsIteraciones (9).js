function mostrar()
{

	//var contador=0;
	// declarar variables
	var flag = true;
	var respuesta=true;
	var numero;
	var maximo;
	var minimo;


	while(respuesta==true) { 

		do {
			numero = prompt("Ingrese un numero: ");
			numero = parseInt(numero);
	
		} while(isNaN(numero))

		console.log(numero);


		if (flag==true) {
			maximo=numero;
			minimo=numero;
			flag=false;

		} else if (numero>maximo){
			maximo=numero;

		} else if (numero<minimo) {
			minimo=numero;
		}
		

		respuesta = confirm("Desea ingresar otro numero?");
	}



/*
	while(respuesta==true) 
	{
		numero = prompt("Ingrese un numero: ");
		numero = parseInt(numero);

		while(isNaN(numero)) {

			numero = prompt("Error! Por favor, ingrese un numero valido: ");
			numero = parseInt(numero);
		}
 
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

		/*	if(flag == true || numero>maximo)
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
		para validar la respuesta en mayuscula o minuscula
		
	} */


	

		document.getElementById("maximo").value = maximo;
		document.getElementById("minimo").value = minimo;


}//FIN DE LA FUNCIÓN
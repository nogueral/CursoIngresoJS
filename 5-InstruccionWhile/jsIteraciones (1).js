function mostrar()
{

	var contador = 0; /* Todos deben estar inicializados, 
	sino el conteo es undenfined. 
	Si esta iniciado pero no hay condicion da NaN*/
	
	while(contador < 10) {
	
		contador = contador+1; // contador++; contador+=1;
		
		console.log("Numero: "+ contador); /*document.write (contador + "<br>");
		 Pone pag en blanco y muestra info*/
	
		
	}
	
	


}//FIN DE LA FUNCIÓN
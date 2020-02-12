function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	
	var random;
	var max;
	var min;

	max = 11;
	min = 1;

	random = Math.floor(Math.random() * (max - min) + min);

	console.log(random);

	alert(random);


}//FIN DE LA FUNCIÓN
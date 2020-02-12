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

	if (random > 8) {

		alert("Excelente")

		}

		else {


			if (random < 4)

			alert("Vamos la proxima se puede")

			else

			alert("Aprobo")

			}

}//FIN DE LA FUNCIÓN
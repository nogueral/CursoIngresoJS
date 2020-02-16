var eleccionMaquina;
var ContadorDeEmpates=0;
var ContadorDeGanadas=0;
var ContadorDePerdidas=0;
var max = 4;
var min = 1;


function comenzar()
{
	
	eleccionMaquina = Math.floor(Math.random() * (max - min) + min);
	
	//Genero el número RANDOM entre 1 y 3
	 	



}//FIN DE LA FUNCIÓN
function piedra()
{
	switch(eleccionMaquina) {
        case 1: 
        alert("Empate");
        break;
        case 2:
        alert("Perdio");
        break;
        case 3:
        alert("Gano");
        break;
    }

	if (eleccionMaquina == 1) {
		ContadorDeEmpates = ContadorDeEmpates + 1;
	}
		else if (eleccionMaquina == 2) {
			ContadorDePerdidas = ContadorDePerdidas + 1;
		}
		else if (eleccionMaquina == 3) {
			ContadorDeGanadas = ContadorDeGanadas + 1;
		}

		document.getElementById("ganadas").value = ContadorDeGanadas;
		document.getElementById("perdidas").value = ContadorDePerdidas;
		document.getElementById("empatadas").value = ContadorDeEmpates;

    console.log(eleccionMaquina, ContadorDeGanadas, ContadorDePerdidas, ContadorDeEmpates);

}//FIN DE LA FUNCIÓN
function papel()
{
	switch(eleccionMaquina) {
        case 1: 
        alert("Ganador");
        break;
        case 2:
        alert("Empate");
        break;
        case 3:
        alert("Perdio");
        break;
    }
  
	if (eleccionMaquina == 1) {
		ContadorDeGanadas = ContadorDeGanadas + 1;
	}
		else if (eleccionMaquina == 2) {
			ContadorDeEmpates = ContadorDeEmpates + 1;
		}
		else if (eleccionMaquina == 3) {
			ContadorDePerdidas = ContadorDePerdidas + 1;
		}

		document.getElementById("ganadas").value = ContadorDeGanadas;
		document.getElementById("perdidas").value = ContadorDePerdidas;
		document.getElementById("empatadas").value = ContadorDeEmpates;

		console.log(eleccionMaquina, ContadorDeGanadas, ContadorDePerdidas, ContadorDeEmpates);

}//FIN DE LA FUNCIÓN
function tijera()
{
	switch(eleccionMaquina) {
        case 1: 
        alert("Perdio");
        break;
        case 2:
        alert("Ganador");
        break;
        case 3:
        alert("Empate");
        break;
	}
	
	if (eleccionMaquina == 1) {
		ContadorDePerdidas = ContadorDePerdidas + 1;
	}
		else if (eleccionMaquina == 2) {
			ContadorDeGanadas = ContadorDeGanadas + 1;
		}
		else if (eleccionMaquina == 3) {
			ContadorDeEmpates = ContadorDeEmpates + 1;
		}

		document.getElementById("ganadas").value = ContadorDeGanadas;
		document.getElementById("perdidas").value = ContadorDePerdidas;
		document.getElementById("empatadas").value = ContadorDeEmpates;
		
		console.log(eleccionMaquina, ContadorDeGanadas, ContadorDePerdidas, ContadorDeEmpates);

}//FIN DE LA FUNCIÓN

function mostrarResultado()
{



	console.info(ContadorDeGanadas, ContadorDePerdidas, ContadorDeEmpates);

}
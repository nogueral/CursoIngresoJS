/*Al comenzar el juego generaremos un número 
RANDOM del 1 al 3 para la selección de la máquina, 
siendo 1 para “piedra”, el 2 para “papel” y 3 para “tijera”.
El jugador seleccionará una imagen correspondiente 
a su opción  y le informaremos si ganó, empató o perdió.
*/
var eleccionMaquina;
var max = 4;
var min = 1;

function comenzar()
{
	eleccionMaquina = Math.floor(Math.random() * (max - min) + min);


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

    console.log(eleccionMaquina);

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
  
    console.log(eleccionMaquina);

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

    console.log(eleccionMaquina);

}//FIN DE LA FUNCIÓN


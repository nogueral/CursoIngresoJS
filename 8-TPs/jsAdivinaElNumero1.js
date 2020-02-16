/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
var numeroSecreto; 
var contadorIntentos = 1;
var max = 101;
var min = 1;
var numeroIngresado;

function comenzar()
{
  numeroSecreto = Math.floor(Math.random() * (max - min ) + min);

  
  //Genero el número RANDOM entre 1 y 100
   
  alert("Numero secreto generado");

		//alert(numeroSecreto );
	

}

function verificar()
{
  numeroIngresado = document.getElementById("numero").value;
  
  if (numeroIngresado == numeroSecreto) {
    alert("Usted es el ganador y en solo " + contadorIntentos + " intentos.")
    }
    else if (numeroIngresado < numeroSecreto) {
      alert("Falta...")
    }
    else if (numeroIngresado > numeroSecreto) {
      alert("Se Paso...")
    }
  
    document.getElementById("intentos").value = contadorIntentos;
    contadorIntentos = contadorIntentos + 1;
    
    console.log(numeroIngresado, numeroSecreto, contadorIntentos);


}
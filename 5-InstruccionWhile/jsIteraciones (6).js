function mostrar()
{

	var contador=0;
	var acumulador=0;
	var numeroIngresado = prompt ("Ingrese número");

while(contador < 5) {

	numeroIngresado = prompt("Ingrese número");
	numeroIngresado = parseInt(numeroIngresado);
	acumulador = parseInt(acumulador);
	acumulador = acumulador + numeroIngresado;
	contador=contador+1;
	
}

	
	console.log(acumulador);

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN
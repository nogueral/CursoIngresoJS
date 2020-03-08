/*
al presionar el botón pedir un número. Informar si el numero es PRIMO o no.
*/
function mostrar()
{
    var contador=1;
    var contadorPrimos=0;

    for (var numero = prompt("Ingrese numero: "); contador <= numero; contador++) {
        
        if (numero % contador == 0) {

            contadorPrimos++;
            console.log(contadorPrimos, contador);
        } 

    }

        if (contadorPrimos == 2) {

            console.log("El numero: " + numero + " es primo");
        
        } else {

            console.log("El numero: " + numero + " no es primo");
        }


}//FIN DE LA FUNCIÓN
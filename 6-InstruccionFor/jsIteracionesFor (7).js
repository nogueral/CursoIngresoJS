/*
al presionar el botón pedir un número. mostrar los numeros divisores 
desde el 1 al número ingresado, y mostrar la cantidad de numeros divisores encontrados.
*/
function mostrar()
{
    var contador=1;
    var contadorDivisores=0

    for (var numero = prompt("Ingrese un numero: "); contador < numero; contador++) {

        numero = parseInt(numero);
        
        if (numero % contador == 0) {

            contadorDivisores++;
            console.log(numero, contador, contadorDivisores);
        }

    }



}//FIN DE LA FUNCIÓN
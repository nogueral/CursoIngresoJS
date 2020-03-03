/*
al presionar el botón pedir un número. mostrar los numeros pares desde el 1 al número ingresado,
y mostrar la cantidad de numeros pares encontrados.
*/


function mostrar()
{

    var contador=0;
    var contadorPares=0;
    var pares;

    for(var numero = prompt("Ingrese numero"); contador <= numero; contador++) {

        numero = parseInt(numero);
        pares = numero;

        if (pares%2==0) {
            contadorPares++;
            pares=pares-1;
        }

    console.log(contadorPares);


    }

    

}//FIN DE LA FUNCIÓN
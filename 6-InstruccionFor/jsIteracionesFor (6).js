/*
al presionar el botón pedir un número. mostrar los numeros pares desde el 1 al número ingresado,
y mostrar la cantidad de numeros pares encontrados.
*/


/*
al presionar el botón pedir un número. mostrar los numeros pares 
desde el 1 al número ingresado, y mostrar la cantidad de numeros pares encontrados.
*/
function mostrar()
{

    var contador=1;
    var contadorPares=0;

    for(var numero = prompt("Ingrese numero"); contador <= numero; contador++) {

        numero = parseInt(numero);
       
        if(contador % 2 == 0) {

            contadorPares++;
            console.log(contador);
       
        } 

    }

    console.log(contadorPares, numero);

}//FIN DE LA FUNCIÓN
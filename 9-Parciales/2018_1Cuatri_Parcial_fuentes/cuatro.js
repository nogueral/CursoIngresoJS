/*Bienvenidos (IF).
Pedir dos números y mostrar el resultado:
Si son iguales los muestro concatenados.
Si el primero es mayor, los resto,
de lo contrario los sumo.
Si la suma es mayor a 10 ,además de mostrar el resultado, muestro el mensaje
"la suma es xxx y supero el 10".*/

function mostrar()
{
    var numeroUno;
    var numeroDos;
    var suma;
    var resta;

    numeroUno = prompt("Ingrese el primer numero: ");
    numeroUno = parseInt(numeroUno);
    numeroDos = prompt("Ingrese el segundo numero: ");
    numeroDos = parseInt(numeroDos);

    if (numeroUno == numeroDos) {
        alert("El primer numero es: " + numeroUno + " Y el segundo: " + numeroDos);
    
    } else if (numeroUno > numeroDos) {
        resta = numeroUno - numeroDos;
        alert("La resta es: "+resta);

    } else if (numeroUno < numeroDos) {
        suma = numeroUno + numeroDos;
        alert("La suma es: "+suma);

        if (suma > 10) {
            alert("La suma es: "+ suma + " y supero el 10");
        }
    

    }

}

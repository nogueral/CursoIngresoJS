/*Bienvenidos.
Realizar el algoritmo que permita iterar el ingreso de dos datos, 
una letra y un número entre -100 y 100 (validar) hasta que el usuario quiera
e informar al terminar el ingreso por document.write:
a) La cantidad de números pares.
b) La cantidad de números impares.
c) La cantidad de ceros.
d) El promedio de todos los números positivos ingresados.
e) La suma de todos los números negativos.
f) El número y la letra del máximo y el mínimo. */

function mostrar()
{
    var respuesta=true;
    var numero;
    var letra;
    var numerosPares;
    var contadorPares;

    while(respuesta==true) {

        numero = prompt("Ingrese un numero entre -100 y 100: ");
        numero = parseInt(numero);
            while(numero < -100 || numero > 100) {
                 numero = prompt("Error! Ingrese un numero entre -100 y 100: ");
                 numero = parseInt(numero);
        }
        letra = prompt("Ingrese una letra: ");
        letra = letra.toLowerCase(letra);

        numerosPares = numero % 2;
        if (numerosPares==0) {
            contadorPares++;
            console.log(contadorPares);
        }


        respuesta = confirm("Desea ingresar otro dato?")
    }

}

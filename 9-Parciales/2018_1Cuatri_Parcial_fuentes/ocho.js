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
    var contadorPares=0;
    var numerosImpares;
    var contadorImpares=0;
    var contadorCeros=0;
    var numerosPositivos=0;
    var contadorPositivos=0;
    var promedioPositivos=0;
    var numerosNegativos=0;
    var flag=true;
    var minimo;
    var maximo;
    var letraMinimo;
    var letraMaximo;

    while(respuesta==true) {

        numero = prompt("Ingrese un numero entre -100 y 100: ");
        numero = parseInt(numero);

            while(numero < -100 || numero > 100 || isNaN(numero)) {
                 numero = prompt("Error! Ingrese un numero entre -100 y 100: ");
                 numero = parseInt(numero);
        }
        letra = prompt("Ingrese una letra: ");
        letra = letra.toLowerCase(letra);

        numerosPares = numero % 2;
        numerosImpares = numero % 2;

        if (numerosPares==0 && numero!=0) {
            contadorPares++;
        
        }   else if (numerosImpares==1) {
            contadorImpares++;
            
        }   else if (numero==0) {
            contadorCeros++;
        }   
        
        if (numero > 0) {
        contadorPositivos++;
        numerosPositivos = numerosPositivos + numero;
            
        }   else if (numero < 0) {
            numerosNegativos = numerosNegativos + numero;

        }

        if (flag==true) {
            minimo = numero;
            letraMinimo = letra;
            maximo = numero;
            letraMaximo = letra;
            flag = false;
       
        }   else if (numero < minimo) {
            minimo = numero;
            letraMinimo = letra;
        
        }   else if (numero > maximo) {
            maximo = numero;
            letraMaximo = letra;
        }

        
        respuesta = confirm("Desea ingresar otro dato?")
    }

        promedioPositivos = numerosPositivos / contadorPositivos;
        console.log(maximo, letraMaximo, minimo, letraMinimo);

        document.write("a- Cantidad numeros pares: "+ contadorPares + "<br>", "b- Cantidad numeros impares: "+
        contadorImpares + "<br>", "c- Cantidad ceros: "+ contadorCeros + "<br>", 
        "d- Promedio positivos: "+ promedioPositivos + "<br>", "e- Suma de negativos: "+
        numerosNegativos + "<br>", "f- Numero y letra maximo: "+ maximo + letraMaximo + "<br>",
        "g- Numero y letra minimo: " + minimo + letraMinimo + "<br>");


}

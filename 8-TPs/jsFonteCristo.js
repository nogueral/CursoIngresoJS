/*El departamento de NUMEROS ESPECIALES  del instituto matemático  FonteCristo  nos está pidiendo una aplicación que verifique las distintas cualidades de los números.

13.	Para cada una de estas acciones  debemos realizar la lógica para verificar las cualidades pedidas:
a.	Se pedirán un número positivo y se mostrará la cantidad de números pares
    desde el número ingresado hasta el cero.
b.	Se pedirán un número positivo y se mostrará la cantidad de números impares
    desde el número ingresado hasta el cero.
c.	Se pedirán un número positivo y se mostrará la cantidad de números divisibles 
    de este número que se encuentran desde el 1 al 100.
d.	Se pedirán un número positivo y se mostrará si el número es un número primo o no.
e.	Se pedirán un número positivo y se mostrará la cantidad de números Primos
    desde el número ingresado hasta el cero.
*/
function ComenzarIngreso () 
{
 	
}

function NumerosPares ()
{
    var numeroIngresado;
    var contador;
    var resto;

    numeroIngresado = document.getElementById("numero").value; 
    numeroIngresado = parseInt(numeroIngresado);
    
    while (numeroIngresado < 0) {
        numeroIngresado = prompt("Error! ingrese un numero mayor a 0: ");
        numeroIngresado = parseInt(numeroIngresado);
        document.getElementById("numero").value = numeroIngresado;
    }
    
    console.log(numeroIngresado);

    contador = numeroIngresado +1;

        while (contador > 0) {
            contador = contador -1;
            resto = contador % 2;
            
            if (resto==0) {
                console.log("El numero es: "+contador);
            }          
         } 
}

function NumerosImpares ()
{
    var numeroIngresado;
    var contador;
    var resto;

    numeroIngresado = document.getElementById("numero").value; 
    numeroIngresado = parseInt(numeroIngresado);
    
    while (numeroIngresado < 0) {
        numeroIngresado = prompt("Error! ingrese un numero mayor a 0: ");
        numeroIngresado = parseInt(numeroIngresado);
        document.getElementById("numero").value = numeroIngresado;
    }
    
    console.log(numeroIngresado);

    contador = numeroIngresado +1;

        while (contador > 0) {
            contador = contador -1;
            resto = contador % 2;
            
            if (resto==1) {
                console.log("El numero es: "+contador);
            }          
         }  
}

function NumerosDivisibles ()
{
    var numeroIngresado;
    var contador=101;
    var resto;

    numeroIngresado = document.getElementById("numero").value; 
    numeroIngresado = parseInt(numeroIngresado);
    
    while (numeroIngresado < 0) {
        numeroIngresado = prompt("Error! ingrese un numero mayor a 0: ");
        numeroIngresado = parseInt(numeroIngresado);
        document.getElementById("numero").value = numeroIngresado;
    }
    
    console.log(numeroIngresado);

        while (contador > 0) {
            contador = contador -1;
            resto = contador % numeroIngresado;
            

            if (resto==0) {
                console.log("El numero es: "+ contador);
            }
        }
}

function VerificarPrimo ()
{
    var numeroIngresado;
    var divisor=2;
    var primo=true;

    numeroIngresado = document.getElementById("numero").value; 
    numeroIngresado = parseInt(numeroIngresado);
    
    while (numeroIngresado < 0) {
        numeroIngresado = prompt("Error! ingrese un numero mayor a 0: ");
        numeroIngresado = parseInt(numeroIngresado);
        document.getElementById("numero").value = numeroIngresado;
    }
    
    console.log(numeroIngresado);
    
    while (divisor < numeroIngresado) {

        if (numeroIngresado % divisor == 0) {
            primo=false;
         }

         divisor++;
    }

    if (primo==true) {

        console.log("El numero: " + numeroIngresado + " es primo");
   
    } else {

        console.log("El numero: " + numeroIngresado + " no es primo");      
    }
}

function NumerosPrimos () 
{
    var numeroIngresado;
    var divisor=2;
    var primo=true;
    var contador;

    numeroIngresado = document.getElementById("numero").value; 
    numeroIngresado = parseInt(numeroIngresado);
    
    while (numeroIngresado < 0) {
        numeroIngresado = prompt("Error! ingrese un numero mayor a 0: ");
        numeroIngresado = parseInt(numeroIngresado);
        document.getElementById("numero").value = numeroIngresado;
    }
    
    console.log(numeroIngresado);

    contador = numeroIngresado + 1;
    
        while (contador > 0) { 
        contador = contador -1;
        
            while (contador > divisor) {

                if (contador % divisor == 0) {
                primo=false;
                divisor++;
                }
        }

        if (primo==true) {

            console.log("El numero: " + contador + " es primo");
   
        } 

    }

}
/*Bienvenidos.
Realizar el algoritmo que permita el ingreso por prompt de las notas 
(validar entre 0 y 10) , el sexo (validar el sexo “f” o “m”) de 5 alumnos, informar por alert:
a) El promedio de las notas totales.
b) La nota más baja y el sexo de esa persona.
c) La cantidad de varones que su nota haya sido mayor o igual a 6.*/


function mostrar()
{
    var nota=0;
    var sexo;
    var contador=0;
    var promedio;
    var acumulador=0;
    var flag=true;
    var minimo=0;
    var contadorVarones=0;
    var sexoMin;

    while (contador < 5) {
        nota = prompt("Ingrese nota: "); 
        nota = parseInt(nota);
        
        while (isNaN(nota) || nota > 10 || nota < 0) {
            nota = prompt("Error! Ingrese un valor numérico entre 0 y 10: ");
            nota = parseInt(nota);
        }
        sexo = prompt("Ingrese sexo F o M: ");
        sexo = sexo.toLowerCase(sexo);

        while (sexo != "f" && sexo != "m") {
            sexo = prompt("Error! Por favor, ingrese F o M: ");
            sexo = sexo.toLowerCase(sexo);
        }
        contador++;    
        
        if (sexo == "m" && nota >= 6) {
            contadorVarones++;
        }
        
        acumulador = nota + acumulador;

        if (flag == true) { // se puede utilizar if (contador == 1) porque es la 1a iteracion
            minimo = nota;
            sexoMin = sexo
            flag = false;
            
        } else if (nota < minimo) {
            minimo = nota;
            sexoMin = sexo
        }

    }
  
    promedio = acumulador / contador;
    
    alert("El promedio de las notas totales es: " + promedio);
    alert ("La nota mas baja es: " + minimo +" y el sexo de esa persona: "+ sexoMin);
    alert("La cantidad de varones con nota mayor o igual a 6 es: " + contadorVarones);

}

/*Bienvenidos.
Realizar el algoritmo que permita el ingreso por prompt de las notas 
(validar entre 0 y 10) , el sexo (validar el sexo “f” o “m”) de 5 alumnos, informar por alert:
a) El promedio de las notas totales.
b) La nota más baja y el sexo de esa persona.
c) La cantidad de varones que su nota haya sido mayor o igual a 6.*/

/* 
Pedir los siguientes datos:
 edad(mayores de 18)
 sexo("f" o "m") y 
 pasaje ("urbano", "nacional" o "internacional")
a) El nombre del hombre con pasaje nacional más joven.
b) El sexo y pasaje del pasajero/a más viejo.
c) La cantidad de mujeres con pasaje urbano o nacional.
d) El promedio de edad entre las mujeres.
e) El promedio de edad entre los hombres con pasaje internacional.
*/


function mostrar()
{

    var respuesta=true;
    var edad;
    var sexo;
    var pasaje;
    var nombre;
    var contadorMujeres=0;
    var acumuladorEdadMujeres=0;
    var contadorEdadMujeres=0;
    var promedioEdadMujeres;
    var acumuladorEdadHombres=0;
    var contadorEdadHombres=0;
    var promedioEdadHombres;
    var flagMin=true;
    var edadHmin;
    var nombreHmin;
    var edadMax;
    var sexMax;
    var pasajeMax;
    var flagMax=true;


    while (respuesta==true) {

        nombre = prompt("Ingrese su nombre y apellido: ");
        nombre = nombre.toLocaleLowerCase();

        while (nombre == null || nombre == "") {

        nombre = prompt("Ingrese su nombre y apellido: ");
        nombre = nombre.toLocaleLowerCase();

        }

        edad = prompt("Ingrese edad: ");
        edad = parseInt(edad);

        while (edad < 18 || isNaN(edad)) {

            edad = prompt("Dato incorrecto! Ingrese edad mayor a 18: ");
            edad = parseInt(edad);
        }

        sexo = prompt("Ingrese sexo F o M: ");
        sexo = sexo.toLocaleLowerCase();

        while (sexo != "f" && sexo != "m") {

            sexo = prompt("Dato incorrecto! Ingrese sexo F o M: ");
            sexo = sexo.toLocaleLowerCase();

        }

        pasaje = prompt("Indique si el pasaje es urbano, nacional o internacional: ");
        pasaje = pasaje.toLocaleLowerCase();

        while (pasaje != "urbano" && pasaje != "nacional" && pasaje != "internacional") {

            pasaje = prompt("Dato incorrecto! Indique si el pasaje es urbano, nacional o internacional: ");
            pasaje = pasaje.toLocaleLowerCase();

        }

        if (sexo =="f" && (pasaje == "urbano" || pasaje == "nacional")) {
            
            contadorMujeres++;

        }

        if (sexo == "f") {

            acumuladorEdadMujeres = acumuladorEdadMujeres + edad;
            contadorEdadMujeres++;

        }

        if (sexo == "m" && pasaje == "internacional") {

            acumuladorEdadHombres = acumuladorEdadHombres + edad;
            contadorEdadHombres++;

        }

        if (flagMin==true && sexo == "m" && pasaje == "nacional") { /* Se puede colocar 1ro la condicion "sex-pasaje" 
        
        y luego agregar otro if para realizar un flag mas sencillo y filtrar la edad */

            edadHmin = edad;
            nombreHmin = nombre;
            flag=false;

        } else if (edadHmin > edad && sexo == "m" && pasaje == "nacional") {

            edadHmin = edad;
            nombreHmin = nombre;

        }

        if (flagMax==true) {

            edadMax = edad;
            sexMax = sexo;
            pasajeMax = pasaje;
            flagMax = false;

        } else if (edadMax < edad) {

            edadMax = edad;
            sexMax = sexo;
            pasajeMax = pasaje;

        }


        respuesta=confirm("Desea ingresar otro dato?: ");
    }
        
        if (contadorEdadMujeres > 0) { 
        promedioEdadMujeres = acumuladorEdadMujeres / contadorEdadMujeres;

        } else {
            promedioEdadMujeres = 0;
        }
        
        if (contadorEdadHombres > 0) { 
        promedioEdadHombres = acumuladorEdadHombres / contadorEdadHombres;

        } else {

            promedioEdadHombres = 0;
        }

        document.write("a- El nombre del hombre con pasaje nacional mas joven es: " + nombreHmin + "<br>",
        "b- El sexo del pasajero mas viejo es: " + sexMax + " y el pasaje: " + pasajeMax + "<br>",
        "c- La cantidad de mujeres con pasaje urbano o nacional es: " + contadorMujeres + "<br>",
        "d- El promedio de edad entre las mujeres es: " + promedioEdadMujeres + "<br>",
        "e- El promedio de edad de hombres con pasaje internacional es: " + promedioEdadHombres + "<br>");

   /* var nota=0;
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
    alert("La cantidad de varones con nota mayor o igual a 6 es: " + contadorVarones);*/

}

/*Al presionar el botón pedir 
un sexo 'f' para femenino, 'm' para masculino.*/

function mostrar()
{

var sexo = prompt("Ingrese F o M");


while(sexo.toLowerCase() != "m" && sexo.toLowerCase() != "f") {

    
    sexo = prompt("Error! Por favor ingrese F o M");
    
}

document.getElementById('Sexo').value=sexo;

}//FIN DE LA FUNCIÓN
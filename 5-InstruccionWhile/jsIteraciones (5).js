function mostrar()
{

var sexo = prompt("ingrese f ó m .");


while(sexo.toLowerCase() != "m" && sexo.toLowerCase() != "f") {

    sexo = prompt("Ingrese F o M");

    
}

document.getElementById('Sexo').value=sexo;

}//FIN DE LA FUNCIÓN
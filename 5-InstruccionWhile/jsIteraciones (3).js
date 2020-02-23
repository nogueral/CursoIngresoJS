function mostrar()
{

var clave = prompt("ingrese su clave: ");
var contador = 1;

while(clave.toLowerCase() != "utn750") {
    
    clave = prompt("Error! Ingrese su clave: ");

    contador = contador+1;

    if (contador == 3) {
        break;
    }

}

if (clave.toLowerCase() == "utn750") {

    alert("Bienvenido");
} else {
    alert("Intentos maximos")
}




}//FIN DE LA FUNCIÓN

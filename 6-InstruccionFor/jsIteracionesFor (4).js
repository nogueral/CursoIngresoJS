function mostrar()
{

var repeticiones = prompt("ingrese el número de repeticiones");
    repeticiones = parseInt(repeticiones);
var contador=1;


for(repeticiones; repeticiones > contador; contador++) {

    console.log("Hola UTN FRA");

  if (contador==5) {
      break;
  } 
}


console.log(repeticiones);
console.log(contador);


}//FIN DE LA FUNCIÓN
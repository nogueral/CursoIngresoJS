
function mostrar()
{
    var largo;
    var ancho;
    var resultado;

    largo = prompt("Ingrese largo: ");
    largo = parseInt(largo);
    ancho = prompt("Ingrese ancho: ");
    ancho = parseInt(ancho);
    resultado = largo * ancho;
    console.log (largo, ancho, resultado);
    alert("El perimetro es: "+resultado);
}

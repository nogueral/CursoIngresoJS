
/*Enunciado:
Bienvenidos.
Pedir por prompt el precio 
y el porcentaje de descuento,
 mostrar el precio final con descuento por id.*/

function mostrar()
{
    var precio;
    var descuento;
    var resultado;
    var precioFinal;

    precio = prompt("Ingrese el precio: ");
    precio = parseInt(precio);

    descuento = prompt("Ingrese porcentaje de descuento: ");
    descuento = parseInt(descuento);

    resultado = (precio * descuento) / 100;
    precioFinal = precio - resultado;

    document.getElementById("elPrecioFinal").value = precioFinal;
}

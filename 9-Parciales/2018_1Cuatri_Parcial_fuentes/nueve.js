/* Realizar el algoritmo que permita ingresar la marca del producto,
el peso el cual debe ser entre 1 y 100 (validar),
la temperatura de almacenamiento(entre -30 y 30) 
hasta que el usuario quiera e informar al terminar el ingreso por document.write:
a) La cantidad de temperaturas pares.
b) La marca del producto más pesado
c) La cantidad de productos que se conservan a menos de 0 grados.
d) El promedio del peso de todos los productos.
f) El peso máximo y el mínimo.*/


function mostrar()
{
    var respuesta=true;
    var marca;
    var peso;
    var temperatura;
    var restoTemp;
    var contadorTempPar=0;
    var flag=true;
    var pesoMax=0;
    var marcaMax;
    var contador=0;
    

    while(respuesta==true) {
       
        marca = prompt("Ingrese marca del producto:");   
        peso = prompt("Ingrese peso del producto: ");
        peso = parseInt(peso);

            while(peso < 1 || peso > 100 || isNaN(peso)) {

                peso = prompt("El peso debe estar comprendido entre 1 y 100kg. Ingrese peso: ");
                peso = parseInt(peso);
            }

        if (flag==true) {
            marcaMax = marca; 
            pesoMax = peso; 
            flag = false;
             
        }   else if (peso > pesoMax) {
            marcaMax = marca;
            pesoMax = peso;      
        } 
         
        temperatura = prompt("Ingrese temperatura de almacenamiento: ");
        temperatura = parseInt(temperatura);
        

            while(temperatura < -30 || temperatura > 30 || isNaN(temperatura)) {

                temperatura = prompt("La temperatura debe estar comprendida entre -30°C y 30°C. Ingrese temperatura: ");
                temperatura = parseInt(temperatura);
            }
        
        if (temperatura < 0) {
            contador++;
        }
        
        restoTemp = temperatura % 2;
       
        if(restoTemp==0) {
            contadorTempPar++;
        }
        

    
        respuesta = confirm("Desea ingresar otro producto: ");
             
    }

    console.log(contador);
}

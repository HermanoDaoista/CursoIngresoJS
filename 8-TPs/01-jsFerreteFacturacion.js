/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{  let precio1;
   let precio2;
   let precio3;
   let sumadePrecios;

   precio1 = document.getElementById("txtIdPrecioUno").value;
   precio1 = parseInt(precio1);
   
   precio2 = document.getElementById("txtIdPrecioDos").value;
   precio2 = parseInt(precio2);
  
   precio3 = document.getElementById("txtIdPrecioTres").value;
   precio3 = parseInt(precio3);
   
   sumadePrecios = precio1 + precio2 + precio3; 

   alert (sumadePrecios);
	
}
function Promedio () 
{ 
   let precio1;
   let precio2;
   let precio3;
   let promediodePrecios;
   let sumadePrecios;
   
   precio1 = document.getElementById("txtIdPrecioUno").value;
   precio1 = parseInt(precio1);
   
   precio2 = document.getElementById("txtIdPrecioDos").value;
   precio2 = parseInt(precio2);
  
   precio3 = document.getElementById("txtIdPrecioTres").value;
   precio3 = parseInt(precio3);
   
   sumadePrecios = precio1 + precio2 + precio3; 

   promediodePrecios = sumadePrecios / 3;

   alert (promediodePrecios);
}
function PrecioFinal () 
{   
    let precio1;
    let precio2;
    let precio3;
    let sumadePrecios;
    let precioFinal;
    
    precio1 = document.getElementById("txtIdPrecioUno").value;
    precio1 = parseInt(precio1);
    
    precio2 = document.getElementById("txtIdPrecioDos").value;
    precio2 = parseInt(precio2);
   
    precio3 = document.getElementById("txtIdPrecioTres").value;
    precio3 = parseInt(precio3);
    
    sumadePrecios = precio1 + precio2 + precio3; 
 
    precioFinal = sumadePrecios * 1.21;

    alert (precioFinal);
     
	
}
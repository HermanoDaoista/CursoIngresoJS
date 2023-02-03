/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	  let NumeroUno;
	  let NumeroDos;
      let suma;
	  
	 
	  NumeroUno = txtIdNumeroUno.value;
	  
	  NumeroUno = parseInt(NumeroUno);
	  
	  NumeroDos = txtIdNumeroDos.value;

	  NumeroDos = parseInt(NumeroDos);
      
	  suma = NumeroUno + NumeroDos;
	  
	  alert ("la suma es: " + suma );	
}

function restar()
{   let NumeroUno
	let NumeroDos
	let resta;
	
   
	NumeroUno = txtIdNumeroUno.value;
	
	NumeroUno = parseInt(NumeroUno);
	
	NumeroDos = txtIdNumeroDos.value;

	NumeroDos = parseInt(NumeroDos);
	
	resta = NumeroUno - NumeroDos;
	
	alert ("la resta es:" + resta );
	
}

function multiplicar()
{   let NumeroUno;
	let NumeroDos;
	let multiplicacion;
	
   
	NumeroUno = txtIdNumeroUno.value;
	
	NumeroUno = parseInt(NumeroUno);
	
	NumeroDos = txtIdNumeroDos.value;

	NumeroDos = parseInt(NumeroDos);
	
	multiplicacion = NumeroUno * NumeroDos;
	
	alert ("la multiplicacion es:" + multiplicacion );
	
}

function dividir()
{
	  let NumeroUno;
	  let NumeroDos;
      let division;
	  
	 
	  NumeroUno = txtIdNumeroUno.value;
	  
	  NumeroUno = parseInt(NumeroUno);
	  
	  NumeroDos = txtIdNumeroDos.value;

	  NumeroDos = parseInt(NumeroDos);
      
	  division = NumeroUno / NumeroDos;
	  
	  alert ("la division es:" + division );
}


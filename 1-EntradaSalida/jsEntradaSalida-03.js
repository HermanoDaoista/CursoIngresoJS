/*
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{   //declaro la variable nombreIngresado
	let nombreIngresado;
	//Obtengo el dato por ID de documento
	nombreIngresado = txtIdNombre.value;
	//nombreIngresado = document.getElementById("txtIdnombre") .value;
	
	//Muestro por alert
	alert(nombreIngresado);

}



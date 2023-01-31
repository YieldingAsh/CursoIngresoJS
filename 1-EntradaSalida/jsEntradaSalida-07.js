/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	let valor1 =  document.getElementById("txtIdNumeroUno").value;
	let valor2 = document.getElementById("txtIdNumeroDos").value;
	valor1 = parseInt(valor1);
	valor2 = parseInt(valor2);
	let total = valor1 + valor2
	alert("La suma es " + total);	
}

function restar()
{
	let valor1 =  document.getElementById("txtIdNumeroUno").value;
	let valor2 = document.getElementById("txtIdNumeroDos").value;
	valor1 = parseInt(valor1);
	valor2 = parseInt(valor2);
	let total = valor1 - valor2
	alert("La resta es " + total);
}

function multiplicar()
{ 
	let valor1 =  document.getElementById("txtIdNumeroUno").value;
	let valor2 = document.getElementById("txtIdNumeroDos").value;
	valor1 = parseInt(valor1);
	valor2 = parseInt(valor2);
	let total = valor1 * valor2
	alert("La multiplicacion es " + total);
}

function dividir()
{
	let valor1 =  document.getElementById("txtIdNumeroUno").value;
	let valor2 = document.getElementById("txtIdNumeroDos").value;
	valor1 = parseInt(valor1);
	valor2 = parseInt(valor2);
	let total = valor1 / valor2;
	total = parseInt(total);
	alert("La divicion es " + total);
}


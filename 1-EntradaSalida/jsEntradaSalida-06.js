/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	let valor1 =  document.getElementById("txtIdNumeroUno").value;
	let valor2 = document.getElementById("txtIdNumeroDos").value;
	valor1 = parseInt(valor1);
	valor2 = parseInt(valor2);
	let total = valor1 + valor2
	alert("La suma es " + total);
}


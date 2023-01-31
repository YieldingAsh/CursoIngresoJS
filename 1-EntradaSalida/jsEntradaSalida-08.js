/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	let valor1 =  document.getElementById("txtIdNumeroDividendo").value;
	let valor2 = document.getElementById("txtIdNumeroDivisor").value;
	valor1 = parseInt(valor1);
	valor2 = parseInt(valor2);
	let total = valor1 % valor2;
	total = parseInt(total);
	alert("El resto es " + total);
}

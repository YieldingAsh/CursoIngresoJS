/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	let valor1 =  document.getElementById("txtIdImporte").value;
	let total = ((80 * valor1) / 100);
	total = parseInt(total);
	document.getElementById("txtIdResultado").value = total;
}

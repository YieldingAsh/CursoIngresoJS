/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	let valor1 =  document.getElementById("txtIdSueldo").value;
	let total = ((110 * valor1) / 100);
	total = parseInt(total);
	document.getElementById("txtIdResultado").value = total;
}

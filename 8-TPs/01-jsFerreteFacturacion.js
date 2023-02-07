/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/

function Sumar () 
{
    let precio1 =  parseFloat(document.getElementById("txtIdPrecioUno").value);
	let precio2 = parseFloat(document.getElementById("txtIdPrecioDos").value);
    let precio3 = parseFloat(document.getElementById("txtIdPrecioTres").value);
	let total = precio1 + precio2 + precio3;
	alert("La suma total de los precios es " + total);
}
function Promedio () 
{
    let precio1 =  parseFloat(document.getElementById("txtIdPrecioUno").value);
	let precio2 = parseFloat(document.getElementById("txtIdPrecioDos").value);
    let precio3 = parseFloat(document.getElementById("txtIdPrecioTres").value);
	let total = (precio1 + precio2 + precio3) / 3;
	alert("El promedio total de los precios es " + total);
}
function PrecioFinal () 
{
    let precio1 =  parseFloat(document.getElementById("txtIdPrecioUno").value);
	let precio2 = parseFloat(document.getElementById("txtIdPrecioDos").value);
    let precio3 = parseFloat(document.getElementById("txtIdPrecioTres").value);
	let total = ((121 * (precio1 + precio2 + precio3)) / 100);
	alert("El promedio total de los precios es " + total);
}
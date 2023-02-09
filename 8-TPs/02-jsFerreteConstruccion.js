/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    let largo = (parseFloat(document.getElementById("txtIdLargo").value) * 2);
    let ancho = (parseFloat(document.getElementById("txtIdAncho").value) * 2);
    let alambreTotal = parseInt((largo + ancho) / 3);
    alert ("Se debe alambrar con 3 alambres de " + alambreTotal);
}
function Circulo () 
{
	let radio = parseFloat(document.getElementById("txtIdRadio").value);
    let areaDelCirculo = parseFloat((31.416 * radio) / 2);
    let alambreTotal = parseInt(areaDelCirculo / 3);
    alert ("Se debe alambrar con 3 alambres de " + alambreTotal);
}
function Materiales () 
{
    let largo = parseInt(document.getElementById("txtIdLargo").value);
    let ancho = parseInt(document.getElementById("txtIdAncho").value);
    let cantidadContrapisos = parseInt(largo * ancho);
    let cantidadBolsasCemento = 2 * cantidadContrapisos
    let cantidadCal = 3 * cantidadContrapisos
    alert("Se necesitan " + cantidadBolsasCemento + " de bolsas de cemento y " + cantidadCal + " de cal para los " + cantidadContrapisos + " contrapisos que hay en el terreno")
}
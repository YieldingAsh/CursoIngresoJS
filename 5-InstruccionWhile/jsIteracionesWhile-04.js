/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	var numeroIngresado;
	numeroIngresado = prompt("ingrese un número entre 0 y 9.");
	while(parseInt(numeroIngresado) < 0 || parseInt(numeroIngresado) > 9)
	{
		alert ("Ingresar un numero entre 0 y 9 porfavor")
		numeroIngresado = prompt("ingrese un número entre 0 y 9.");
	}
	document.getElementById("txtIdNumero").value = parseInt(numeroIngresado);
}//FIN DE LA FUNCIÓN
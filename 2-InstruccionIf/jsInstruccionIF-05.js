function mostrar()
{
	let edad = document.getElementById("txtIdEdad").value;
	if(edad <= 13 || edad >= 17)
	{
		alert("Usted no es un adolecente")
	}
}//FIN DE LA FUNCIÓN
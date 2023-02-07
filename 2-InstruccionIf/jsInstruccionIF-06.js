function mostrar()
{
	let edad = document.getElementById("txtIdEdad").value;
	if(edad < 13)
	{
		alert("Usted es un menor")
	}
	else if(edad >= 13 && edad <= 17)
	{
		alert("Usted es un adolecente")
	}
	else
	{
		alert("Usted es una persona mayor de edad")
	}
}//FIN DE LA FUNCIÓN
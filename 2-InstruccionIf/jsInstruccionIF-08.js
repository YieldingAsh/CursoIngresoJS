function mostrar()
{
	let edad = document.getElementById("txtIdEdad").value;
	let estado = document.getElementById("estadoCivil").value;
	if(edad >= 18 && estado == "soltero")
	{
		alert("Es soltero y no es menor.")
	}
}//FIN DE LA FUNCIÓN
function mostrar()
{
	let edad = document.getElementById("txtIdEdad").value;
	let estado = document.getElementById("estadoCivil").value;
	if(edad < 18 && estado != "soltero")
	{
		alert("Es muy pequeño para NO ser soltero.")
	}
}//FIN DE LA FUNCIÓN
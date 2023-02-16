function mostrar() {
	var destinoIngresado = txtIdDestino.value;
	switch (destinoIngresado) 
	{
		case ("Bariloche"):
			destinoIngresado = "Frio";
			break;
		case ("Mar de plata"):
			destinoIngresado = "Calor";
			break;
		case ("Cataratas"):
			destinoIngresado = "Frio";
			break;
		case ("Ushuaia"):
			destinoIngresado = "Frio";
			break;
	}
	alert(destinoIngresado);

}//FIN DE LA FUNCIÓN
function mostrar() {
	var destinoIngresado = txtIdDestino.value;
	switch (destinoIngresado) 
	{
		case ("Bariloche"):
			destinoIngresado = "Oeste";
			break;
		case ("Mar de plata"):
			destinoIngresado = "Este";
			break;
		case ("Cataratas"):
			destinoIngresado = "Norte";
			break;
		case ("Ushuaia"):
			destinoIngresado = "Sur";
			break;
	}
	alert(destinoIngresado);

}//FIN DE LA FUNCIÓN
function mostrar() {
	var estacionIngresada = txtIdEstacion.value;
	var destino = txtIdDestino.value;
	if (estacionIngresada == "Invierno") 
	{
		switch (destino) 
		{
			case ("Bariloche"):
				estacionIngresada = "se viaja";
				break;
			default:
				estacionIngresada = "No se viaja";
				break;
		}
	}
	else if (estacionIngresada == "Verano")
	{
		switch (destino) 
		{
			case ("Mar del plata"):
			case ("Cataratas"):
				estacionIngresada = "se viaja";
				break;
			default:
				estacionIngresada = "No se viaja";
				break;
		}
	}
	else if(estacionIngresada == "Primavera")
	{
		switch(destino)
		{
			case("Bariloche"):
				estacionIngresada = "No se viaja";
				break;
			default:
				estacionIngresada = "Se viaja";
				break;
		}
	}
	else
	{
		estacionIngresada = "Se viaja";
	}
	alert(estacionIngresada);

}//FIN DE LA FUNCIÓN
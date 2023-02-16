function mostrar() {
	var estacionIngresada = txtIdEstacion.value;
	var destino = txtIdDestino.value;
	var aumento = 0
	var descuento = 0
	if (estacionIngresada = "Invierno") 
	{
		switch (destino) 
		{
			case ("Bariloche"):
				aumento = 20;
				break;
			case ("Mar de plata"):
				descuento = 20;
				break;
			default:
				descuento = 10;
				break;
		}
	}
	else if (estacionIngresada = "Verano")
	{
		switch (destino) 
		{
			case ("Bariloche"):
				descuento = 20;
				break;
			case ("Mar de plata"):
				aumento = 20;
				break;
			default:
				aumento = 10;
				break;
		}
	}
	else
	{
		switch (destino) 
		{
			case ("Bariloche"):
				aumento = 10;
				break;
			case ("Mar de plata"):
				aumento = 10;
				break;
			case ("Cataratas"):
				aumento = 10;
				break;
			default:
				descuento = 0;
				break;
		}
	}

	if(aumento > 0)
	{
		let total = (((aumento + 100 ) * 15000) / 100);
		alert ("Precio Final es " + total);
	}
	else if (descuento > 0)
	{
		let total = (((100 - descuento)  * 15000) / 100);
		alert ("Precio Final es " + total); 
	}
	else
	{
		alert("Precio Final es 15.000")
	}
}//FIN DE LA FUNCIÓN
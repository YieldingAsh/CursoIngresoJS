function mostrar()
{
	//tomo el mes
	var mesDelAño =txtIdMes.value;
	var mensaje 
	switch(mesDelAño)
	{
		case("Enero"):
			mensaje = "que comiences bien el año!!!.";
			break;
		case("Marzo"):
			mensaje = "a clases!!!.";
			break;
		case("Julio"):
			mensaje = "se vienen las vacaciones!!!.";
			break;
		case("Diciembre"):
			mensaje = "Felices fiesta!!!."
			break;
		default:
			mensaje = "Nada interesante pasa en este mes";
	}
	
	alert(mensaje);



}//FIN DE LA FUNCIÓN
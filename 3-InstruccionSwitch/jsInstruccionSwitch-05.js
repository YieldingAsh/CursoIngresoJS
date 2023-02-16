function mostrar()
{
	//tomo la hora
	var horaDelDia =txtIdHora.value;
	switch(horaDelDia)
	{
		case ("7"):
		case ("8"):
		case ("9"):
		case ("10"):
		case ("11"):
			horaDelDia = "Es de mañana.";
			break;
		default:
			horaDelDia = "No es de mañana."
			break;
	}

	alert(horaDelDia);
	
	



}//FIN DE LA FUNCIÓN
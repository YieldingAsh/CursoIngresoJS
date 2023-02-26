/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	// declarar letiables
	let banderaDelPrimero;
	let numeroIngresado;
	let numeroMaximo;
	let numeroMinimo;
	let parar;
	let contador;
	//iniciar variables
	contador = 0;
	banderaDelPrimero = "es el primero";
	parar = "NO";
	while (parar != "SI")
	{
		contador++;
		numeroIngresado = prompt("Ingrese el numero" + contador + " (cuando desee ver el resultado ponga SI)");
		if (numeroIngresado == "SI")
		{
			contador--;
			parar = "SI";
			alert("Mostrando informacion");
			break;
		}

		numeroIngresado = parseInt(numeroIngresado);
		while(banderaDelPrimero == "es el primero")
		{
			if(numeroIngresado <= 0 || numeroIngresado >= 0)
			{
				numeroMaximo = numeroIngresado;
				numeroMinimo = numeroIngresado;
				banderaDelPrimero = "no";
			}
			else
			{
				alert("ingrese un numero valido porfavor");
				numeroIngresado = parseInt(prompt("Ingrese el numero" + contador + " (cuando desee ver el resultado ponga SI)"));
			}
		}
		if(numeroIngresado <= 0 || numeroIngresado >= 0)
		{
			if( numeroIngresado < numeroMinimo)
			{
				numeroMinimo = numeroIngresado;
			}
			else if( numeroIngresado > numeroMaximo)
			{
				numeroMaximo = numeroIngresado;
			}
		}
		else
		{
			alert("ingrese un numero valido porfavor");
			contador--;
		}
	}
	
	txtIdMaximo.value=numeroMaximo;
	txtIdMinimo.value=numeroMinimo;
}//FIN DE LA FUNCIÓN
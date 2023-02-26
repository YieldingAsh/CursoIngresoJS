/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	let contador;
	let acumulador;
	let parar;
	let numeroIngresado;
	contador=0;
	acumulador=0;
	parar ="NO";
	while (parar != "SI")
	{
		contador++;
		numeroIngresado = prompt("Ingrese el numero" + contador + " (cuando desee ver el resultado ponga SI)");
		if (numeroIngresado == "SI")
		{
			contador--;
			parar = "SI";
			alert("Informando cuenta");
			break;
		}

		numeroIngresado = parseInt(numeroIngresado);
		if(numeroIngresado <= 0 || numeroIngresado >= 0)
		{
			acumulador = acumulador + numeroIngresado;
		}
		else
		{
			alert("ingrese un numero valido porfavor");
			contador--;
		}
	}
	txtIdSuma.value=acumulador;
	txtIdPromedio.value=acumulador/contador;

}//FIN DE LA FUNCIÓN
/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	let contador;
	let parar;
	let sumaPositivos;
	let multiplicacionNegativos;
	contador=0;
	sumaPositivos=0;
	multiplicacionNegativos=1;
	parar="NO";
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
		if(numeroIngresado < 0)
		{
			multiplicacionNegativos = multiplicacionNegativos * numeroIngresado;
		}
		else if (numeroIngresado >= 0)
		{
			sumaPositivos = sumaPositivos + numeroIngresado;
		}
		else
		{
			alert("ingrese un numero valido porfavor");
			contador--;
		}
	}

	txtIdSuma.value=sumaPositivos;
	txtIdProducto.value=multiplicacionNegativos;

}//FIN DE LA FUNCIÓN
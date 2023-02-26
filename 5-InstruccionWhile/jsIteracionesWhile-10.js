/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	//declarar contadores y letiables 
	let parar;
	let numeroIngresado;
	let sumaNegativos=0;
	let sumaPositivos = 0;
	let canPositivos = 0;
	let canNegativos = 0;
	let canCeros = 0;
	let canPares = 0;
	let promPositivos = 0;
	let promNegativos = 0;
	let contador = 0;
	let diferencia = 0;
	parar="NO";

	while(parar != "SI")
	{
		contador++
		numeroIngresado = prompt("Ingrese el numero" + contador + " (cuando desee ver el resultado ponga SI)");
		if (numeroIngresado == "SI")
		{
			contador--;
			parar = "SI";
			alert("Mostrando informacion");
			break;
		}

		numeroIngresado = parseInt(numeroIngresado);
		if ( numeroIngresado >= 0)
		{
			canPositivos++
			sumaPositivos = sumaPositivos + numeroIngresado;
			if ((numeroIngresado % 2) == 0)
			{
				canPares++
			}

			if (numeroIngresado == 0)
			{
				canCeros++
			}
		}
		else if (numeroIngresado < 0)
		{
			canNegativos++
			sumaNegativos = sumaNegativos + numeroIngresado
			if ((numeroIngresado % 2) == 0)
			{
				canPares++
			}
		}
		else
		{
			alert("ingrese un numero valido porfavor");
			contador--;
		}
	}//fin del while
	promPositivos = parseInt(sumaPositivos/canPositivos);
	promNegativos = parseInt(sumaNegativos/canNegativos);
	diferencia = sumaPositivos - sumaNegativos;
	document.write("La suma de negativos es :"+sumaNegativos);
	document.write("<br>");
	document.write("La suma de positivos es :"+sumaPositivos);
	document.write("<br>");
	document.write("La cantidad de positivos es :"+canPositivos);
	document.write("<br>");
	document.write("La cantidad de negativos es :"+canNegativos);
	document.write("<br>");
	document.write("La cantidad de numeros pares es :"+canPares);
	document.write("<br>");
	document.write("La cantidad de ceros es :"+canCeros);
	document.write("<br>");
	document.write("El promedio de los positivos es:"+promPositivos);
	document.write("<br>");
	document.write("El promedio de los negativos es:"+promNegativos);
	document.write("<br>");
	document.write("El la diferencia entre positivos y negativos es:"+diferencia);	
}//FIN DE LA FUNCIÓN
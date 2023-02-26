function mostrar()
{
	let contador;
	let acumulador;
	let numeroIngresado;
	contador=0;
	acumulador=0;
	while (contador <= 4)
	{
		contador++;
		numeroIngresado =  parseInt(prompt("Ingrese el numero" + contador));
		acumulador = acumulador + numeroIngresado;
	}
	
	txtIdSuma.value=acumulador;
	txtIdPromedio.value=acumulador/5;
}//FIN DE LA FUNCIÓN
function mostrar()
{
	let n = Math.floor(Math.random() * 10)
	if(n <= 4)
	{
		alert("Vamos, la proxima se puede")
	}
	else if(n > 4)
	{
		if(n <= 8)
		{
			alert("APROBÓ")
		}
		else
		{
			alert("EXCELENTE")
		}
	}
}
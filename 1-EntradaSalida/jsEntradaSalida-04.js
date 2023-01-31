/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	let dato = prompt("Escriba un dato");
	document.getElementById("txtIdNombre").value = dato
	let nombre = document.getElementById("txtIdNombre").value
	alert(nombre); 
}


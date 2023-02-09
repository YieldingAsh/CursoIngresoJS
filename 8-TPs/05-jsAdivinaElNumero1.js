/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
var numeroSecreto; 
var contadorIntentos;

function comenzar()
{
  contadorIntentos = 0;
  document.getElementById("txtIdIntentos").value = null;
  document.getElementById("txtIdNumero").value = null;
  numeroSecreto = Math.floor(Math.random() * 101);
  return numeroSecreto, contadorIntentos;
}

function verificar()
{
  let numero = parseInt(document.getElementById("txtIdNumero").value);
	if (numero == numeroSecreto)
  {
    alert("Usted es un ganador!!! y en solo " + contadorIntentos + " intentos")
  }
  else
  {
    contadorIntentos = contadorIntentos + 1;
    document.getElementById("txtIdIntentos").value = contadorIntentos;
    if (numero < numeroSecreto)
    {
    alert("falta…")
    }
    else
    {
    alert("se pasó…")
    }
  }
}
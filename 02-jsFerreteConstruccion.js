/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    let perimeter = (parseFloat(document.getElementById("txtIdLargo").value) + parseFloat(document.getElementById("txtIdAncho").value)) * 2;
    alert("La cantidad de alambre a comprar son " + perimeter*3 + " metros");
}
function Circulo () 
{
    let perimeter = (parseFloat(document.getElementById("txtIdRadio").value) * 2 * Math.PI).toFixed(2);
    alert("La cantidad de alambre a comprar son " + (perimeter * 3) + " metros");
}
function Materiales () 
{
    let area = parseFloat(document.getElementById("txtIdLargo").value) * parseFloat(document.getElementById("txtIdAncho").value);
    alert("Se necesitan " + (area*2) + " bolsas de cemento y " + (area*3) + " bolsas de cal.");
}
/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    let num1 = parseFloat(document.getElementById("txtIdPrecioUno").value);
    let num2 = parseFloat(document.getElementById("txtIdPrecioDos").value);
    let num3 = parseFloat(document.getElementById("txtIdPrecioTres").value);

    alert("El resultado total es " + (num1+num2+num3));
}
function Promedio () 
{
	let num1 = parseFloat(document.getElementById("txtIdPrecioUno").value);
    let num2 = parseFloat(document.getElementById("txtIdPrecioDos").value);
    let num3 = parseFloat(document.getElementById("txtIdPrecioTres").value);

    alert("El promedio es " + ((num1+num2+num3)/2));
}
function PrecioFinal () 
{
	let num1 = parseFloat(document.getElementById("txtIdPrecioUno").value);
    let num2 = parseFloat(document.getElementById("txtIdPrecioDos").value);
    let num3 = parseFloat(document.getElementById("txtIdPrecioTres").value);
    let sum = num1+num2+num3
    alert("El precio final, junto al 21% de IVA, es " + (sum + (sum*0.21)));
}
/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    let temperature = parseInt(document.getElementById("txtIdTemperatura").value);
    let toCelsius = (((temperature-32)*5)/9).toFixed(1);
    alert(temperature + " grados Farenheit son " + toCelsius + " grados centígrados.");
}

function CentigradosFahrenheit () 
{
    let temperature = parseInt(document.getElementById("txtIdTemperatura").value);
    let toFarenheit = parseInt((temperature*1.8)+32).toFixed(1);
    alert(temperature + " grados centígrados son " + toFarenheit + " grados Farenheit.");	
}

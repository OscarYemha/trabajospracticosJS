/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 
 */


function CalcularPrecio() {
   let lamp = parseInt(document.getElementById("txtIdCantidad").value);
   let mark = document.getElementById("Marca").value;
   let total = lamp * 35;
   let total2;

   if (lamp >= 6) {
      total *= 0.5;
      if (total > 120) {
         total2 = total + total * 0.1;
         document.getElementById("txtIdprecioDescuento").value = total2.toFixed(2);
         alert("Usted pagó " + (total2 - total).toFixed(2) + " de IIBB");
      } else {
         document.getElementById("txtIdprecioDescuento").value = total.toFixed(2);
      }
   } else if (lamp === 5 && mark === "ArgentinaLuz") {
      total *= 0.6;
      if (total > 120) {
         total2 = total + total * 0.1;
         document.getElementById("txtIdprecioDescuento").value = total2.toFixed(2);
         alert("Usted pagó " + (total2 - total).toFixed(2) + " de IIBB");
      } else {
         document.getElementById("txtIdprecioDescuento").value = total.toFixed(2);
      }
   } else if (lamp === 5 && mark !== "ArgentinaLuz") {
      total *= 0.7
      if (total > 120) {
         total2 = total + total * 0.1;
         document.getElementById("txtIdprecioDescuento").value = total2.toFixed(2);
         alert("Usted pagó " + (total2 - total).toFixed(2) + " de IIBB");
      } else {
         document.getElementById("txtIdprecioDescuento").value = total.toFixed(2);
      }
   } else if (lamp === 4 && (mark === "ArgentinaLuz" || mark === "FelipeLamparas")) {
      total *= 0.75
      document.getElementById("txtIdprecioDescuento").value = total.toFixed(2);
   } else if (lamp === 4 && (mark !== "ArgentinaLuz" || mark !== "FelipeLamparas")) {
      total *= 0.8
      document.getElementById("txtIdprecioDescuento").value = total.toFixed(2);
   } else if (lamp === 3 && mark === "ArgentinaLuz") {
      total *= 0.85;
      document.getElementById("txtIdprecioDescuento").value = total.toFixed(2);
   } else if (lamp === 3 && mark === "FelipeLamparas") {
      total *= 0.9;
      document.getElementById("txtIdprecioDescuento").value = total.toFixed(2);
   }else if (lamp === 3 && (mark !== "ArgentinaLuz" && mark !== "FelipeLamparas")) {
      total *= 0.95;
      document.getElementById("txtIdprecioDescuento").value = total.toFixed(2);
   }else{
      document.getElementById("txtIdprecioDescuento").value = total.toFixed(2);
   }
}
/* A partir de la compra de cuatro lámparas, o menos, no se llega de ninguna manera 
a exceder el monto total de 120(aplicando los descuentos) y es por tal motivo que he obviado la opción de
sumar un 10% de IIBB, algo que no sucede para la compra de cinco o más lámparas */
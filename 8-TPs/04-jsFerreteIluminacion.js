/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
    let cantidad = parseInt(document.getElementById("txtIdCantidad").value);
    let marca = document.getElementById("Marca").value
    let precio = 35 * cantidad
    if(cantidad == 6)
    {
        let total = ((50 * precio) / 100);
        document.getElementById("txtIdprecioDescuento").value = total
    }
    else if(cantidad == 5)
    {
       if(marca == "ArgentinaLuz")
       {
            
            let total = ((60 * precio) / 100);
            document.getElementById("txtIdprecioDescuento").value = total
       }
       else
       {
        let total = ((70 * precio) / 100);
        document.getElementById("txtIdprecioDescuento").value = total  
        }
    }
    else if(cantidad == 4)
    {
        if(marca == "ArgentinaLuz" || marca == "FelipeLamparas")
        {
            let total = ((75 * precio) / 100);
            document.getElementById("txtIdprecioDescuento").value = total     
        }
        else
        {
            let total = ((80 * precio) / 100);
            document.getElementById("txtIdprecioDescuento").value  = total     
        }
    }
    else if(cantidad == 3)
    {
        if(marca == "ArgentinaLuz")
        {
            let total = ((85 * precio) / 100);
            document.getElementById("txtIdprecioDescuento").value = total      
        }
        else if (marca == "FelipeLamparas")
        {
            let total = ((90 * precio) / 100);
            document.getElementById("txtIdprecioDescuento").value = total       
        }
        else
        {
            let total = ((95 * precio) / 100);
            document.getElementById("txtIdprecioDescuento").value = total       
        }
    }
    else
    {
        alert("No hay descuento para su compra, su precio final sin descuento es de " + precio)
    }

    if(parseInt(document.getElementById("txtIdprecioDescuento").value) > 120)
        {
            let total = ((110 * precio) / 100);
            document.getElementById("txtIdprecioDescuento").value = total
            alert("”IIBB Usted pago " + (total - precio))
        }  
}




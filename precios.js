/* Primeros pasos

const precioOriginal = 120;
const descuento = 18;

const porcentajePrecioConDescuento = 100 - descuento;

const precioConDescuento = (precioOriginal * porcentajePrecioConDescuento) / 100;

/console.log ({
    precioOriginal, descuento, porcentajePrecioConDescuento, precioConDescuento,
}); //Es una forma de usar el console.log para imprimir las variables que quieras. */

function calcularPrecioConDescuento(precio, descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

    return precioConDescuento;
}
function priceDiscount(){
    const inputPrice = document.getElementById ("InputPrice");
    const priceValue = inputPrice.value;

    const inputDiscount = document.getElementById ("InputDiscount");
    const discountValue = inputDiscount.value;

    const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue); 

    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El precio con Descuento es: $" + precioConDescuento;
}

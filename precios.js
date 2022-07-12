/* Primeros pasos
const precioOriginal = 120;
const descuento = 18;
const porcentajePrecioConDescuento = 100 - descuento;
const precioConDescuento = (precioOriginal * porcentajePrecioConDescuento) / 100;
/console.log ({
    precioOriginal, descuento, porcentajePrecioConDescuento, precioConDescuento,
}); //Es una forma de usar el console.log para imprimir las variables que quieras. */

const coupons = [
    {
        nombre: "Nuevo Ingreso",
        descuento: 50,   
    },
    {
        nombre: "Gran pedido",
        descuento: 35,
    },
    {
        nombre: "Regreso",
        descuento: 20,
    },
];

function calcularPrecioConDescuento(precio, descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

    return precioConDescuento;
}



function priceDiscount(){
    const inputPrice = document.getElementById ("InputPrice");
    const priceValue = inputPrice.value;

    const inputCoupon = document.getElementById ("InputCoupon");
    const couponValue = inputCoupon.value;


    const isCouponValid = function (coupon){
        return coupon.nombre === couponValue;
    }
    
    const userCoupon = coupons.find (isCouponValid);
    
    if (!userCoupon){
        alert ("El cupón " + couponValue + "no es válido :c"); 
    }else{
        const descuento = userCoupon.descuento;
        const precioConDescuento = calcularPrecioConDescuento (priceValue, descuento);
        
        const resultP = document.getElementById("ResultP");
        resultP.innerText = "El precio con Descuento es: $" + precioConDescuento;
    }
}



//Para poder comentar una línea de código entera, puedes usar Ctrl + K y sin soltar, C.
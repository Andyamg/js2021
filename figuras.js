// Código del cuadrado
console.group ("Cuadrado"); //Va a agrupar todos los console log que sean parte del código antes del console.groupEnd.

// const ladoCuadrado = 5;

function perimetroCuadrado(lado) {
    return lado * 4; //Se cambió el nombre de la variable lado por el parámetro lado, ya que este es el que se invocará en un futuro.
}

function areaCuadrado(lado)//Parámetro
{ return lado * lado;}  
// areaCuadrada (15) //Argumento


console.groupEnd();// Este sirve para finalizar la agrupación de console.group y que pueda ser abierta otra agrupación.

// Código del triángulo

console.group ("Triángulo");

// const ladoTriangulo1 = 6;
//const ladoTriangulo2 = 6;
//const ladoTriangulo3 = 4;
//const alturaTriangulo = 5.5;

function perimetroTriangulo(lado1, lado2, lado3) 
{    return lado1 + lado2 + lado3; } 


function areaTriangulo(base, altura) {
    return (base * altura) / 2;
} 

console.groupEnd(); //Finalizacción de console.gorup para dar inicio a otro grupo.

// Código de Círculo

console.group ("Círculo");



function diametroCirculo(radio){
    return radio * 2;
}


function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio); //Se puso una función dentro de otra función. Sólo con sólo dar el radio, va a poder calcular el diámetro y el perímetro.
    return diametro * Math.PI
} 

function areaCirculo(radio) {
    return (radio*radio) * Math.PI;
} 

console.groupEnd();

//Aquí interactuamos con el HTML
function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");//variable que recibe lo que se escriba en el input desde el HTML hasta el JS.
    const value = input.value; //Esta va a tomar el valor que tenga el input para poder usarlo.

    const perimetro = perimetroCuadrado (value);
    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const area= areaCuadrado (value);
    alert(area); //Lo mejor es no usar alerts, no suelen gustar mucho.
}

//HTML Triángulo
function calcularPerimetroTriangulo(){
    const inputtri1 = document.getElementById("InputTriangulo1");
    const valuetri1 = Number(inputtri1.value);
    const inputtri2 = document.getElementById("InputTriangulo2");
    const valuetri2 = Number(inputtri2.value);
    const inputtri3 = document.getElementById("InputTriangulo3");
    const valuetri3 = Number(inputtri3.value);
    const perimetrotri = perimetroTriangulo (valuetri1, valuetri2, valuetri3);
    alert("El perímetro del triángulo es: " + perimetrotri);
}

function calcularAreaTriangulo(){
    const inputtri3 = document.getElementById("InputTriangulo3");
    const valuetri3 = Number(inputtri3.value);
    const inputaltura = document.getElementById ("InputAltT");
    const valuealt = Number(inputaltura.value);
    const areatri = areaTriangulo (valuetri3, valuealt);
    alert ("El área de este triángulo es de: " + areatri);
}

// HTML Círculo
function calcCircunferencia(){
    const inputcirc = document.getElementById("InputCirculo");
    const valuecirculo = Number(inputcirc.value);
    const circunferencia = perimetroCirculo(valuecirculo);
    alert ("La circunferencia de este círculo es: " + circunferencia);
}

function calcAreaCirculo(){
    const inputcirc = document.getElementById("InputCirculo");
    const valuecirculo = Number(inputcirc.value);
    const areaCirc = areaCirculo (valuecirculo);
    alert ("El área de este cérculo es de: " + areaCirc);
}
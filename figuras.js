// Código del cuadrado
console.group ("Cuadrado"); //Va a agrupar todos los console log que sean parte del código antes del console.groupEnd.

// const ladoCuadrado = 5;

function perimetroCuadrado(lado) {
    return lado * 4; //Se cambió el nombre de la variable lado por el parámetro lado, ya que este es el que se invocará en un futuro.
}

function areaCuadrada(lado)//Parámetro
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
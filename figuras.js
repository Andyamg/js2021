// Código del cuadrado
console.group ("Cuadrado"); //Va a agrupar todos los console log que sean parte del código antes del console.groupEnd para que al momento de verifificar en la consola, los mensajes estén ordenados.

const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: " + ladoCuadrado + " cm");

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perimetro del cuadrado mide: " + perimetroCuadrado + " cm");

const areaCuadrada = ladoCuadrado * ladoCuadrado;
console.log ("El área del cuadrado es de: " + areaCuadrada + " cm²");

console.groupEnd();// Este sirve para finalizar la agrupación de console.group y que pueda ser abierta otra agrupación.

// Código del triángulo

console.group ("Triángulo");

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const ladoTriangulo3 = 4;

console.log ("Los lados del triángulo miden: " 
+ ladoTriangulo1 
+ " cm, " 
+ ladoTriangulo2 
+ " cm, y " 
+ ladoTriangulo3 
+ " cm");

const alturaTriangulo = 5.5;
console.log ("La alatura del triángulo mide: " + alturaTriangulo + " cm");

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + ladoTriangulo3;
console.log ("El perímetro del triángulo es de: " + perimetroTriangulo + " cm");

const areaTriangulo = (ladoTriangulo3 * alturaTriangulo) / 2;
console.log ("El área del triángulo es de: " + areaTriangulo + " cm²")

console.groupEnd(); //Una manera de ordenar tus variables al concatenar es dando enter por cada string y otro por variable para hacerlo más legible si gustas (toma en cuenta el espacio de memoria). Esto se hace con console.group y console.groupEnd.

// Código de Círculo

console.group ("Círculo");

const radioCirculo = 4;
const diametroCirculo = radioCirculo * 2;
const pi = Math.PI;

console.log("El radio del círculo es: " + radioCirculo + "cm, el diámetro es: " + diametroCirculo + " cm, y PI vale: " + pi);

const perimetroCirculo = diametroCirculo * pi;
console.log("El perímetro del círculo es de: " + perimetroCirculo + "cm.");

const areaCirculo = (radioCirculo * radioCirculo) * pi;
console.log("El área del círculo vale: " + areaCirculo + " cm² :3")

console.groupEnd();
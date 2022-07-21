function arrayView(){ //Reto de meter todo en una función xD
    const lista1 = [];
    for (i=1 ; i <= 5; i++){
        let inputs = document.getElementById("InputProm"+i).value; 
        lista1.push(parseInt(inputs));
    }
    function comparar (a, b){
        return a - b
    }
    lista1.sort(comparar)// El método .sort permite comparar y ordenar valores en un array. Pero para ellos necesita funciones que le digan cómo se deben de ordenar.
    console.log (lista1);
    const calcularMedia = (lista) => {
        const sumaLista = lista.reduce(
            function(valorAcumulado = 0, nuevoElemento){
                return valorAcumulado + nuevoElemento;
            }
        );     
        const promedioLista = sumaLista / lista.length;
        
        return promedioLista;
    }
    const mitadLista1 = parseInt(lista1.length /2);
    function esPar(numerito){
        if (numerito % 2 === 0){
            return true;
        } else {
            return false;
        }
    }
    let mediana;
    if (esPar (lista1.length)){
        const elemento1 = lista1[mitadLista1 -1];
    const elemento2 = lista1[mitadLista1];

    const promedioElemento12 = calcularMedia ([
        elemento1,
        elemento2,
    ]);

    mediana = promedioElemento12;} else{mediana = lista1[mitadLista1]}
    const resultP = document.getElementById("ResultP");
    resultP.innerText = "La media de tus datos es: " + mediana;
}


// function calcularMedia(lista){ //Se copió esta función, ya que es necesaria por si resulta ser una lista con número de datos pares.
    
//     const sumaLista = lista.reduce(
//         function(valorAcumulado = 0, nuevoElemento){
//             return valorAcumulado + nuevoElemento; // => con este argumento se hace lo mismo que con el ciclo anterior.
//         }
//     );     
//     const promedioLista = sumaLista / lista.length;
    
//     return promedioLista;
//     }



// const mitadLista1 = parseInt(lista1.length /2); //El parseInt va a redondear el número de lista para evitar decimales confusos.

// function esPar(numerito){ //% este símbolo representa un módulo. En este caso, la operación quiere decir que si el módulo de numerito no tiene residuos, es par.
//     if (numerito % 2 === 0){
//         return true;
//     } else {
//         return false;
//     }
// } 

// let mediana; //esta variable queda vacía porque dependiendo de si esPar es falso, o verdaderos se le asignará diferente valor (por lo mismo es que en lugar de ser const, es let).

// if (esPar (lista1.length)){ //Si en la función de esPar, resultó ser verdad que el length de la lista es par, se va a llevar a cabo lo que está aquí.
//     const elemento1 = lista1[mitadLista1 -1];
//     const elemento2 = lista1[mitadLista1];

//     const promedioElemento12 = calcularMedia ([
//         elemento1,
//         elemento2,
//     ]);

//     mediana = promedioElemento12;

// }else { //Si en la función de esPar, resultó que el length de la lista fue inpar (false), entonces va a proceder este else.
//     mediana = lista1[mitadLista1]
// }
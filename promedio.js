const lista1 = [
    100,
    200,
    300,
    500,
];

function calcularMedia(lista){
//     let sumaLista = 0;

// for (let i = 0; i < lista.length; i++){
//     sumaLista = sumaLista + lista[i];
// }

const sumaLista = lista.reduce(
    function(valorAcumulado = 0, nuevoElemento){
        return valorAcumulado + nuevoElemento; //con este argumento se hace lo mismo que con el ciclo anterior.
    }
); // .reduce es un método quepermite que se hagan operaciones con los elementos del array.

const promedioLista = sumaLista / lista.length;

return promedioLista;
}
function arrayView(){
    var lista1 = [];
    for (i=1 ; i <= 7; i++){
        let inputs = document.getElementById("InputProm"+i).value; 
        lista1.push(parseInt(inputs));
    }
    console.log(lista1);

    
    //     let sumaLista = 0;
        
    // for (let i = 0; i < lista.length; i++){
    //     sumaLista = sumaLista + lista[i];
    // }
    const sumaLista = lista1.reduce((valorAcumulado, nuevoElemento)=> valorAcumulado + nuevoElemento); 
        //con este argumento se hace lo mismo que con el ciclo anterior.
        // .reduce es un método quepermite que se hagan operaciones con los elementos del array.
        
    const promedioLista = sumaLista / lista1.length;
        
    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El promedio de tus datos es: " + promedioLista;
        
    return promedioLista;        
    
    
}




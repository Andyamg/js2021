const btnSave = document.getElementById("Save");
const btnResult = document.getElementById("Resultado");
const inputNumber = document.getElementById("InputNumber");
const mostrarR = document.getElementById("MostrarResultados");
const lista1 = [];

btnSave.addEventListener('click', function(){
  lista1.push(InputNumber.value);
  mostrarR.innerHTML = lista1;
  console.log(lista1);
})

btnResult.addEventListener ('click', 
  //Esto de aqui cambia el array a objeto
  function(){
    const lista1Count = {}; 

    lista1.map(
      function(elemento){ 
        if (lista1Count[elemento]) {
          lista1Count[elemento] += 1;
        } 
        else {
          lista1Count[elemento] = 1;
        }
      } 
    ); 
    
    //Esto de aqui ordena el objeto de menor a mayor 
    //y lo hace array otra vez
    const lista1Array = Object.entries(lista1Count).sort( 
      function (valorAcumulado, nuevoValor){ 
      return valorAcumulado[1] - nuevoValor[1]; //NO TE FUNCIONÓ PORQUE TE FALTÓ EL RETURN xd
      }
    ); 
    
    //Esto de aqui te devuelve la moda tomando el ultimo
    //objeto del array   
    const moda = lista1Array[lista1Array.length - 1];
    mostrarR.innerHTML = "La moda es: "+ moda;
    console.log(moda);
  }
)



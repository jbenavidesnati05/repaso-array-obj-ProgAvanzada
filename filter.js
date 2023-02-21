let numeros = [1,2,3,4,5,6,7,8,9];
let mayoresQueCincoFlecha = numeros.filter(numero => numero > 5)
console.log("flecha =>"+mayoresQueCincoFlecha);


let mayoresQueCincoTrad= numeros.filter(function(numero){
    return(numero>5) 
})
console.log("tradicional =>"+mayoresQueCincoTrad);

let buscarElDiezFlecha = numeros.filter(diez => diez == 10)
console.log(buscarElDiezFlecha);




let nombres = Array("juan","andres","valen");
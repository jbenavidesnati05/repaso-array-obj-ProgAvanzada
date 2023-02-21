let inmuebles =[
    {id: 1, nombre:"el vip",direccion:"cll 100"},
    {id: 1, nombre:"provenza",direccion:"cll 129"},
    {id: 3, nombre:"raudal",direccion:"cll 156"}
]

let buscador1 =  inmuebles.find(function(inmueble){
    return(inmueble.id == 1)
})
console.log(buscador1);

let buscador2 =  inmuebles.filter(function(inmueble){
    return(inmueble.id == 1)
})
console.log(buscador2);
let buscador3 =  inmuebles.some(function(inmueble){
    return(inmueble.id == 1)
})
console.log(buscador3);

let numeros = [10,20,30,40,50,60,70,80,90,100]

let mayoresQue50    = numeros.filter(numero => numero >50)
let resta10         = mayoresQue50.map(numero => numero-10)
let el10Find            = resta10.find(numero=>numero==10)
let el10Some            = resta10.some(numero=>numero==10)

console.log(mayoresQue50);
console.log(resta10);
console.log(el10Find);
console.log(el10Some);
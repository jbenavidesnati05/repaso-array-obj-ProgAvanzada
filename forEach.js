let equipos =[
    {nombre:"atletico", titulos:32},
    {nombre:"dim", titulos:15},
    {nombre:"junior", titulos:7}
]

let sumaDeTitulos = 0;
equipos.forEach(function(equipo){
    sumaDeTitulos = sumaDeTitulos+equipo.titulos
});
console.log(sumaDeTitulos);

// hacer una carrito de compras 
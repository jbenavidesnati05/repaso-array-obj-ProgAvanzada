let estudiantes = Array 
(
    {nombre:"juan",edad:12,cedula:"1053792707"},
    {nombre:"ana",edad:18,cedula:"1152769678"},
)

let mapa = estudiantes.map(estudiante => estudiante.nombre)
console.log(mapa);
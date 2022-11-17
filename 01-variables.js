//variables mutables
var numeroUno= 1;
let numeroDos= 2;


//inmutables
const confArchivo = 'PDF'

//primitivias
const numero=1; //number
const sueldop = 12; //number
const texto='Daniel'; //string
const booleano  = true
const hijos = null
const zapatos = 1 //'undefines';


if(""){
    console.log("String vacio es verdadero") // falso
}else{
    console.log("String vacio es falso")
}
if(-1){
    console.log("negativos es truty")
}else{

}
if(0){
    console.log("Cero es falso")
}else{
}
if (1){
    console.log("positivos es truty")
}


if(null){
    console.log("null retorna falso")
}

if(undefined){
    console.log("retorna falso")
}

//Usamos "const"
// siemore usamos "let"
//nunca var

const daniel = {
    "nombre" : "Daniel", //llave valor
    'apellido' : 'Castillo',
    edad: 32,
    hijos: null,
    zapatos: undefined,
    sueldo : 1.2,
    ropa:{
        color: 'plomo',
        talla: '40',
    },
    mascotas: ['cachetes','pequitas','panda']
};

console.log(daniel)

daniel.nombre
daniel.apellido
daniel['nombre']
daniel.nombre="Vicente";
daniel.sueldo = 3


console.log(daniel)


console.log(Object.keys(daniel))
delete daniel.nombre

console.log(Object.keys(daniel))


//variables por valor y referencia


let edadDaniel = 24
let edadVicente = edadDaniel //Guardamos una primitiva en otra variable
                                //variables por valor
console.log(edadDaniel)
console.log(edadVicente)
edadDaniel = edadDaniel + 1
console.log(edadDaniel)
console.log(edadVicente)


//variables por referencia

let notas = {
    total: 10
};

let notasSegundoBimestre = notas;  //igualando la referencia
notasSegundoBimestre.total = notasSegundoBimestre.total + 1;
console.log(notas);
console.log(notasSegundoBimestre);
//COMO CLONAR OBJETOS
//OBJECT ASSIGN
let notasTercerBimestre = Object.assign({},notas);
notasTercerBimestre.total = notasTercerBimestre.total + 1;
console.log('notas',notas);
console.log('notasSegundoBimestre',notasSegundoBimestre);
console.log('notasTercerBimestre',notasTercerBimestre);







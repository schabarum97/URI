const { copyFileSync } = require("fs")

function add(x,y) {
    return x + y    
}
function mult(x,y) {
    return x * y
}

function calcular(x,y,computar) {
    return computar (x,y)
}

let a = calcular(10,5,add)
    console.log('Soma',a)

let b = calcular(10,5,mult)
    console.log('Multiplicação' , b)
//Tradicional

let c = calcular(10,5, function(x,y){
    return x - y
})
console.log('Subtração',c)
//Anonima

let d = calcular(10,5,(x,y) =>  {return x,y})
    console.log(d)
// Arrow Function

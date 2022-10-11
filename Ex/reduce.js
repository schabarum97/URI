// let a = [1,2,3,4,5]
// let b = a.reduce((a,b)=> a+b)
// console.log(b)


// let a = [{nome: 'djanho',     idade: 10, tipo: 'cat'},
//          {nome: 'rex',        idade: 20, tipo: 'dog'},
//          {nome: 'mickey',     idade: 3, tipo: 'rat'},
//          {nome: 'pe de pano', idade: 5, tipo: 'horse'},
//          {nome: 'garfield',   idade: 1, tipo: 'horse'} ]
// let b = a.filter(a=> a.tipo=='horse')
//     .map(a => a.idade)
//     .reduce((a,b) => a+b)

// console.log(b)


let a = [
    { nome: 'Fumaça',    idade: 3, tipo: 'gato' },
    { nome: 'Tobby',     idade: 6, tipo: 'cao' },
    { nome: 'Laminha',   idade: 1, tipo: 'gato' },
    { nome: 'Nutella',   idade: 3, tipo: 'cao' },
    { nome: 'Luke',      idade: 3, tipo: 'cao' }
]
let b = a.filter(a => a.tipo == 'cao').map(a => a.idade * 7).reduce((a, b) => a + b)
console.log(b)
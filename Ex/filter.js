// let a = [1,2,3,4,5,6,7,8,9,0]
// let b = a.filter(a => a <5)
// console.log(b)



// let pet = [
//     {nome: 'Djanho',        idade: 10, tipo: 'cat'},
//     {nome: 'Rex',           idade: 20, tipo: 'dog'},
//     {nome: 'Mickey',        idade: 3, tipo: 'rat'},
//     {nome: 'Pe de Pano',    idade: 5, tipo: 'horse'},
//     {nome: 'Garfield',      idade: 1, tipo: 'cat'},
// ]
// let horse = pet.filter(a => a.tipo == 'horse')

// console.table(horse)
// console.table(pet)



let pet1 = [{nome: 'djanho',     idade: 10, tipo: 'cat'},
           {nome: 'rex',        idade: 20, tipo: 'dog'},
           {nome: 'mickey',     idade: 3, tipo: 'rat'},
           {nome: 'pe de pano', idade: 5, tipo: 'horse'},
           {nome: 'garfield',   idade: 1, tipo: 'horse'} ]

let menor10 = pet1.filter(a => a.idade < 10)
console.table(menor10)
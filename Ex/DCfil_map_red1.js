let animal = [
    { nome: 'Fumaça',    idade: 3, tipo: 'gato' },
    { nome: 'Tobby',     idade: 6, tipo: 'cao'  },
    { nome: 'Laminha',   idade: 1, tipo: 'gato' },
    { nome: 'Nutella',   idade: 3, tipo: 'rato' },
    { nome: 'Luke',      idade: 7, tipo: 'cao'  },
    { nome: 'Rex',       idade: 2, tipo: 'rato' },
    { nome: 'Bety',      idade: 5, tipo: 'cao'  },
    { nome: 'Duke',      idade: 1, tipo: 'rato' },
    { nome: 'Djanho',    idade: 4, tipo: 'gato' },
]

let gato = animal.filter(a => a.tipo == 'gato')
let cao = animal.filter(a => a.tipo == 'cao')
let rato = animal.filter(a => a.tipo == 'rato')
console.log('Gatos: ',gato)
console.log('Cães: ',cao)
console.log('Ratos: ',rato)


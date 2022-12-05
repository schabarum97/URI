let animal = [
    { nome: 'Fumaça',    idade: 3, tipo: 'gato' },
    { nome: 'Tobby',     idade: 6, tipo: 'cao'  },
    { nome: 'Laminha',   idade: 1, tipo: 'gato' },
    { nome: 'Nutella',   idade: 7, tipo: 'rato' },
    { nome: 'Luke',      idade: 7, tipo: 'cao'  },
    { nome: 'Rex',       idade: 7, tipo: 'rato' },
    { nome: 'Bety',      idade: 5, tipo: 'cao'  },
    { nome: 'Duke',      idade: 1, tipo: 'rato' },
    { nome: 'Djanho',    idade: 4, tipo: 'gato' },
]
let contem = animal.find(a => {
    //console.log(a)
    return a.idade === 7
})
console.log(contem)

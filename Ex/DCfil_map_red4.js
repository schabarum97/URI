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


let idades = animal.map(a => a.idade)
let menorIdade = Math.min(...idades)
let maiorIdade = Math.max(...idades)
let maisVelhos = animal.filter(a => a.idade == maiorIdade)
let maisNovos = animal.filter(a => a.idade == menorIdade)

console.log(`Mais Velho(s): ${maisVelhos.map(a=>a.nome).join(', ')} tendo ${maiorIdade} anos.`)
console.log(`Mais Novos(s): ${maisNovos.map(a=>a.nome).join(', ')} tendo ${menorIdade} anos.`)
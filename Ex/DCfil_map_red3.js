let animais = [
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
let tresOuMais = animais.filter(a => a.idade >= 3)
    .reduce((a,b,c) => {
        console.log(a,b,c)
        let total = 1
        let gatos = 0
        let caes = 0
        let ratos = 0
        if (c == 1) {
            if (a.tipo == 'gato') gatos++
            if (a.tipo == 'cao') caes++
            if (a.tipo == 'rato') ratos++
            total++
            if (b.tipo == 'gato') gatos++
            if (b.tipo == 'cao') caes++
            if (b.tipo == 'rato') ratos++
        } else {
            total = a.total+1
            gatos = a.gatos
            caes = a.caes
            ratos = a.ratos
            if (b.tipo == 'gato') gatos++
            if (b.tipo == 'cao') caes++
            if (b.tipo == 'rato') ratos++
        }
        return {total: total, gatos: gatos, caes: caes, ratos: ratos}
    })

console.log(tresOuMais)
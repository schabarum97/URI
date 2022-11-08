const partidas = [{
    data: '26/03/2022',
    local: 'Colosso da Lagoa',
    times: [{
        nome: 'Grêmio',
        jogadores: [{
            nome: 'Brenno',
            pos: 'GOL',
            status: {
                gol: 0,
                cartao: { amarelo: 1, vermelho: 0 },
                faltas: 0
            }
        }, {
            nome: 'Geromel',
            pos: 'ZAG',
            status: {
                gol: 0,
                cartao: { amarelo: 1, vermelho: 0 },
                faltas: 3
            }
        }, {
            nome: 'Lucas Silva',
            pos: 'VOL',
            status: {
                gol: 1,
                cartao: { amarelo: 0, vermelho: 0 },
                faltas: 5
            }
        }, {
            nome: 'Campaz',
            pos: 'MEC',
            status: {
                gol: 0,
                cartao: { amarelo: 1, vermelho: 0 },
                faltas: 2
            }
        }, {
            nome: 'Diego Souza',
            pos: 'ATA',
            status: {
                gol: 0,
                cartao: { amarelo: 0, vermelho: 0 },
                faltas: 4
            }
        }]
    }, {
        nome: 'Ypiranga',
        jogadores: [{
            nome: 'Edson',
            pos: 'GOL',
            status: {
                gol: 0,
                cartao: { amarelo: 1, vermelho: 0 },
                faltas: 2
            }
        }, {
            nome: 'Bispo',
            pos: 'ZAG',
            status: {
                gol: 0,
                cartao: { amarelo: 0, vermelho: 0 },
                faltas: 6
            }
        }, {
            nome: 'Falcão',
            pos: 'VOL',
            status: {
                gol: 0,
                cartao: { amarelo: 1, vermelho: 0 },
                faltas: 2
            }
        }, {
            nome: 'Luiz',
            pos: 'MEC',
            status: {
                gol: 0,
                cartao: { amarelo: 0, vermelho: 0 },
                faltas: 1
            }
        }, {
            nome: 'Hugo',
            pos: 'ATA',
            status: {
                gol: 0,
                cartao: { amarelo: 1, vermelho: 0 },
                faltas: 3
            }
        }]
    }]
}, {
    data: '02/04/2022',
    local: 'Arena do Grêmio',
    times: [{
        nome: 'Grêmio',
        jogadores: [{
            nome: 'Brenno',
            pos: 'GOL',
            status: {
                gol: 0,
                cartao: { amarelo: 1, vermelho: 0 },
                faltas: 1
            }
        }, {
            nome: 'Geromel',
            pos: 'ZAG',
            status: {
                gol: 1,
                cartao: { amarelo: 0, vermelho: 0 },
                faltas: 2
            }
        }, {
            nome: 'Lucas Silva',
            pos: 'VOL',
            status: {
                gol: 0,
                cartao: { amarelo: 1, vermelho: 0 },
                faltas: 3
            }
        }, {
            nome: 'Campaz',
            pos: 'MEC',
            status: {
                gol: 0,
                cartao: { amarelo: 1, vermelho: 0 },
                faltas: 4
            }
        }, {
            nome: 'Diego Souza',
            pos: 'ATA',
            status: {
                gol: 1,
                cartao: { amarelo: 0, vermelho: 0 },
                faltas: 5
            }
        }]
    }, {
        nome: 'Ypiranga',
        jogadores: [{
            nome: 'Edson',
            pos: 'GOL',
            status: {
                gol: 0,
                cartao: { amarelo: 0, vermelho: 0 },
                faltas: 1
            }
        }, {
            nome: 'Bispo',
            pos: 'ZAG',
            status: {
                gol: 0,
                cartao: { amarelo: 0, vermelho: 1 },
                faltas: 2
            }
        }, {
            nome: 'Falcão',
            pos: 'VOL',
            status: {
                gol: 1,
                cartao: { amarelo: 0, vermelho: 0 },
                faltas: 3
            }
        }, {
            nome: 'Luiz',
            pos: 'MEC',
            status: {
                gol: 0,
                cartao: { amarelo: 0, vermelho: 0 },
                faltas: 2
            }
        }, {
            nome: 'Hugo',
            pos: 'ATA',
            status: {
                gol: 0,
                cartao: { amarelo: 1, vermelho: 0 },
                faltas: 1
            }
        }]
    }]
}]

/*
    TODO: Tendo em mente o objeto 'partidas' escrito acima resolva o seguinte problema.
    
    ? Somando Status
    ? Monte um algoritmo para selecionar quem mais tem ponto por status!
    
    * 1º Quais jogadores fizeram mais gols?
    * 2º Quais jogadores tem mais cartão vermelho?
    * 3º Quais jogadores tem mais cartão amarelo?
    * 4º Quais jogadores tem mais faltas?

    ? A saída deve conter a soma de status de todos os 10 jogadores!.
    ! Artilheiros
    ! Fulano(Gremio), Ciclado(Gremio) e Beltrano(Ypiranga) tem 1 gol.
    ! Expulsos
    ! Fulano(Gremio) tem 1 cartão vermelho.
    ! Amarelados
    ! Fulano(Gremio) tem 1 cartão amarelo.
    ! Cavalo
    ! Fulano(Gremio) tem 10 faltas. 
*/
let cartoes_vermelhos_time1 = []
let cartoes_vermelhos_time2 = []

let cartoes_amarelos_time1 = []
let cartoes_amarelos_time2 = []

let faltas_time1 = []
let faltas_time2 = []

let gols_time1 = []
let gols_time2 = []

for (let game = 0; game < 2; game++) {
    cartoes_vermelhos_time1.push(partidas[game].times[0].jogadores.map(a => a.status.cartao.vermelho))
    cartoes_vermelhos_time2.push(partidas[game].times[1].jogadores.map(a => a.status.cartao.vermelho))

    cartoes_amarelos_time1.push(partidas[game].times[0].jogadores.map(a => a.status.cartao.amarelo))
    cartoes_amarelos_time2.push(partidas[game].times[1].jogadores.map(a => a.status.cartao.amarelo))

    faltas_time1.push(partidas[game].times[0].jogadores.map(a => a.status.faltas))
    faltas_time2.push(partidas[game].times[1].jogadores.map(a => a.status.faltas))

    gols_time1.push(partidas[game].times[0].jogadores.map(a => a.status.gol))
    gols_time2.push(partidas[game].times[1].jogadores.map(a => a.status.gol))
}

// * SOMA DOS STATS PARA COMPARAR POSTERIORMENTE
let all_red_cards_time1 = []
let all_red_cards_time2 = []

let all_yellow_cards_time1 = []
let all_yellow_cards_time2 = []

let all_faults_time1 = []
let all_faults_time2 = []

let all_goals_time1 = []
let all_goals_time2 = []

let names_t1 = []
let names_t2 = []
for (let i = 0; i < 5; i++) {
    all_red_cards_time1.push(cartoes_vermelhos_time1.reduce((a, b) => a[i] + b[i]))
    all_red_cards_time2.push(cartoes_vermelhos_time2.reduce((a, b) => a[i] + b[i]))

    all_yellow_cards_time1.push(cartoes_amarelos_time1.reduce((a, b) => a[i] + b[i]))
    all_yellow_cards_time2.push(cartoes_amarelos_time2.reduce((a, b) => a[i] + b[i]))

    all_faults_time1.push(faltas_time1.reduce((a, b) => a[i] + b[i]))
    all_faults_time2.push(faltas_time2.reduce((a, b) => a[i] + b[i]))

    all_goals_time1.push(gols_time1.reduce((a, b) => a[i] + b[i]))
    all_goals_time2.push(gols_time2.reduce((a, b) => a[i] + b[i]))

    names_t1.push(partidas[0].times[0].jogadores[i].nome)
    names_t2.push(partidas[0].times[1].jogadores[i].nome)
}
let all_reds = (all_red_cards_time1.concat(all_red_cards_time2))
let all_yellow = (all_yellow_cards_time1.concat(all_yellow_cards_time2))
let all_faults = (all_faults_time1.concat(all_faults_time2))
let all_goals = (all_goals_time1.concat(all_goals_time2))
let all_names = (names_t1.concat(names_t2))

let gols_levados = []
gols_levados.push(all_goals_time2.reduce((a, b) => a + b), all_goals_time1.reduce((a, b) => a + b))

let maior_gols = all_goals.reduce((a, b) => Math.max(a, b))
let maior_faltas = all_faults.reduce((a, b) => Math.max(a, b))
let maior_vermelho = all_reds.reduce((a, b) => Math.max(a, b))
let maior_amarelo = all_yellow.reduce((a, b) => Math.max(a, b))

let x = all_goals.indexOf(maior_gols)
let index_gols = []
while (x !== -1) {
    index_gols.push(x)
    x = all_goals.indexOf(maior_gols, x + 1)
}
let y = all_reds.indexOf(maior_vermelho)
let index_reds = []
while (y !== -1) {
    index_reds.push(y)
    y = all_reds.indexOf(maior_vermelho, y + 1)
}
let z = all_yellow.indexOf(maior_amarelo)
let index_yellow = []
while (z !== -1) {
    index_yellow.push(z)
    z = all_yellow.indexOf(maior_amarelo, z + 1)
}
let w = all_faults.indexOf(maior_faltas)
let index_faltas = []
while (w !== -1) {
    index_faltas.push(w)
    w = all_faults.indexOf(maior_faltas, w + 1)
}
let message = 'Artilheiros\n'

for (let i = 0; i < index_gols.length; i++){
    (index_gols[i] < 5) ?
    message += (`${all_names[index_gols[i]]} (${partidas[0].times[0].nome}), `)
    :
    message += (`${all_names[index_gols[i]]} (${partidas[0].times[1].nome})`)
}
message += ` tem ${maior_gols} gol(s).\nExpulsos\n`

for (let i = 0; i < index_reds.length; i++){
    (index_reds[i] < 5) ?
    message += (`${all_names[index_reds[i]]} (${partidas[0].times[0].nome}), `)
    :
    message += (`${all_names[index_reds[i]]} (${partidas[0].times[1].nome})`)
}
message +=  ` tem ${maior_vermelho} cartão vermelho(s).\nAmarelados\n`

for (let i = 0; i < index_yellow.length; i++){
    (index_yellow[i] < 5) ?
    message += (`${all_names[index_yellow[i]]} (${partidas[0].times[0].nome})`)
    :
    message += (`${all_names[index_yellow[i]]} (${partidas[0].times[1].nome})`)
}
message +=  ` tem ${maior_vermelho} cartão vermelho(s).\nCavalo\n`

for (let i = 0; i < index_faltas.length; i++){
    (index_faltas[i] < 5) ?
    message += (`${all_names[index_faltas[i]]} (${partidas[0].times[0].nome})`)
    :
    message += (`${all_names[index_faltas[i]]} (${partidas[0].times[1].nome})`)
}
message +=  ` fez ${maior_faltas} falta(s)`
console.log(message) 
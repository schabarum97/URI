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
    },
    {
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
    },
    {
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
    
    ? Após identificarmos o melhor jogador de cada partida, a federação GAUCHA deseja agora premiar o melhor jogador da FINAL.
    ? O Calculo para encontrar o melhor desempenho é simples!
    
    * Quem fez mais gols!!!
    * Caso de empate, é quem tomou menos cartões 1ª Vermelho 2ª Amarelo!!!
    * Caso de empate, é quem tem menos faltas!!!
    * Caso de empate é quem tem o nome em ordem afabética!!!

    ? A Saída para cada partida deve ser conforme o exemplo a seguir.
    ! Melhor jogador da final é Diego Sousa tendo feito 1 gol e fazendo 9 faltas.
*/

function BestPlayersFinal(partidas) {
    let listaTodosJogadores = []

    listaTodosJogadores = partidas[0].times[0].jogadores.concat(partidas[0].times[1].jogadores); // Faz uma lista com todos os jogadores dos dois times
    for (let i = 1; i < partidas.length; i++) {
        // Loop para todos as Partidas
        for (let j = 0; j < partidas[i].times.length; j++) {
            // Loop para todos as Partidas
            for (let k = 0; k < partidas[i].times[j].jogadores.length; k++) {
                let controleLista = k + j * 5
                let jogadorAtual = partidas[i].times[j].jogadores[k]
                listaTodosJogadores[controleLista].status.gol += jogadorAtual.status.gol
                listaTodosJogadores[controleLista].status.faltas += jogadorAtual.status.faltas
                listaTodosJogadores[controleLista].status.cartao.amarelo += jogadorAtual.status.cartao.amarelo
                listaTodosJogadores[controleLista].status.cartao.vermelho += jogadorAtual.status.cartao.vermelho
            }
        }
    }

    let listaOrdenada = listaTodosJogadores.sort(function (jogadorA, jogadorB) {
        if (jogadorA.status.gol > jogadorB.status.gol) return -1
        else if (jogadorA.status.gol < jogadorB.status.gol) return 1
        else if (jogadorA.status.cartao.vermelho < jogadorB.status.cartao.vermelho) return -1
        else if (jogadorA.status.cartao.vermelho > jogadorB.status.cartao.vermelho) return 1
        else if (jogadorA.status.cartao.amarelo < jogadorB.status.cartao.amarelo) return -1
        else if (jogadorA.status.cartao.amarelo > jogadorB.status.cartao.amarelo) return 1
        else if (jogadorA.status.faltas < jogadorB.status.faltas) return -1
        else if (jogadorA.status.faltas > jogadorB.status.faltas) return 1

        return 0
    }) // Faz as devidas comparações para achar quem será o melhor jogador de acordo com os cartões faltas e por último por nome

    let melhor = listaOrdenada[0]; //Retorna o primeiro que é encontrado
    return `Melhor jogador da final é ${melhor.nome} tendo feito ${melhor.status.gol} gol(s) e fazendo ${melhor.status.faltas}falta(s) `
}
console.log(BestPlayersFinal(partidas))

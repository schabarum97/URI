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
        },{
            nome: 'Geromel',
            pos: 'ZAG',
            status: {
                gol: 0,
                cartao: { amarelo: 1, vermelho: 0 },
                faltas: 3
            }
        },{
            nome: 'Lucas Silva',
            pos: 'VOL',
            status: {
                gol: 1,
                cartao: { amarelo: 0, vermelho: 0 },
                faltas: 5
            }
        },{
            nome: 'Campaz',
            pos: 'MEC',
            status: {
                gol: 0,
                cartao: { amarelo: 1, vermelho: 0 },
                faltas: 2
            }
        },{
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
        },{
            nome: 'Bispo',
            pos: 'ZAG',
            status: {
                gol: 0,
                cartao: { amarelo: 0, vermelho: 0 },
                faltas: 6
            }
        },{
            nome: 'Falcão',
            pos: 'VOL',
            status: {
                gol: 0,
                cartao: { amarelo: 1, vermelho: 0 },
                faltas: 2
            }
        },{
            nome: 'Luiz',
            pos: 'MEC',
            status: {
                gol: 0,
                cartao: { amarelo: 0, vermelho: 0 },
                faltas: 1
            }
        },{
            nome: 'Hugo',
            pos: 'ATA',
            status: {
                gol: 0,
                cartao: { amarelo: 1, vermelho: 0 },
                faltas: 3
            }
        }]
    }]
},{
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
        },{
            nome: 'Geromel',
            pos: 'ZAG',
            status: {
                gol: 1,
                cartao: { amarelo: 0, vermelho: 0 },
                faltas: 2
            }
        },{
            nome: 'Lucas Silva',
            pos: 'VOL',
            status: {
                gol: 0,
                cartao: { amarelo: 1, vermelho: 0 },
                faltas: 3
            }
        },{
            nome: 'Campaz',
            pos: 'MEC',
            status: {
                gol: 0,
                cartao: { amarelo: 1, vermelho: 0 },
                faltas: 4
            }
        },{
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
        },{
            nome: 'Bispo',
            pos: 'ZAG',
            status: {
                gol: 0,
                cartao: { amarelo: 0, vermelho: 1 },
                faltas: 2
            }
        },{
            nome: 'Falcão',
            pos: 'VOL',
            status: {
                gol: 1,
                cartao: { amarelo: 0, vermelho: 0 },
                faltas: 3
            }
        },{
            nome: 'Luiz',
            pos: 'MEC',
            status: {
                gol: 0,
                cartao: { amarelo: 0, vermelho: 0 },
                faltas: 2
            }
        },{
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
    
    ? Para auxiliar a Seleção Brasileira vamos ordenar os jogadores!
    
    * 1º Quem fez mais gols!!! - Caso de goleiro Quem tomou MENOS gols!
    * 2º Menos cartão vermelhos!!!
    * 3º Menos cartão amarelos!!!
    * 4º Menos faltas!!!
    * 5º Alfabeto!!!

    ? A saída deve conter a soma de status de todos os 10 jogadores!.
    ! 1º Diego Sousa - Gremio - 1 gol - 0 cartão vermelho - 0 cartão amarelo - 9 faltas
    ! 2º FULANO - XXXXXX - 1 gol - 0 cartão vermelho - 0 cartão amarelo - 9 faltas
    ! 3º CICLANO- ZZZZZZ - 1 gol - 0 cartão vermelho - 0 cartão amarelo - 9 faltas
*/

function BestsPlayersFinal(partidas) {
    let listaTodosJogadores = []

    const golsTime1 = partidas[0].times[0].jogadores.reduce(
        (soma, objeto) => {
            return soma + objeto.status.gol
        },
        0
    )

    const golsTime2 = partidas[0].times[1].jogadores.reduce(
        (soma, objeto) => {
            return soma + objeto.status.gol
        },
        0
    )

    const golsTime3 = partidas[1].times[0].jogadores.reduce(
        (soma, objeto) => {
            return soma + objeto.status.gol
        },
        0
    )

    const golsTime4 = partidas[1].times[1].jogadores.reduce(
        (soma, objeto) => {
            return soma + objeto.status.gol
        },
        0
    ) // Cria o 'objeto' novamente a partir do reduce com os jogadores de cada um dos times levando em conta que cada partida terá dois times

    listaTodosJogadores = partidas[0].times[0].jogadores.concat(
        partidas[0].times[1].jogadores
    ) //Monta uma lista com todos os jogadores da posição 0 à 4 Grêmio, do 5 à 9 Ypiranga

    listaTodosJogadores[0].status.golSofridos = golsTime2 + golsTime4
    listaTodosJogadores[5].status.golSofridos = golsTime1 + golsTime3

    for (let i = 0; i < listaTodosJogadores.length; i++) {
        if (i < 5) listaTodosJogadores[i].time = partidas[0].times[0].nome
        else listaTodosJogadores[i].time = partidas[0].times[1].nome
    }

    for (let i = 1; i < partidas.length; i++) {
        //Loop para Percorer todas as partidas
        for (let j = 0; j < partidas[i].times.length; j++) {
            //Loop para percorrer os times
            for (let k = 0; k < partidas[i].times[j].jogadores.length; k++) {
                let controleLista = k + j * 5
                let jogadorAtual = partidas[i].times[j].jogadores[k]
                listaTodosJogadores[controleLista].status.gol +=jogadorAtual.status.gol
                listaTodosJogadores[controleLista].status.faltas +=jogadorAtual.status.faltas
                listaTodosJogadores[controleLista].status.cartao.amarelo +=jogadorAtual.status.cartao.amarelo
                listaTodosJogadores[controleLista].status.cartao.vermelho +=jogadorAtual.status.cartao.vermelho
            }
        }
    }

    let listaOrdenada = listaTodosJogadores.sort(function (firstPlayer, secondPlayer) {
        if (firstPlayer.pos == "GOL" && secondPlayer.pos == "GOL") {
            if (firstPlayer.status.golSofridos < secondPlayer.status.golSofridos) return -1
            else if (firstPlayer.status.golSofridos > secondPlayer.status.golSofridos)return 1
        }// Faz as comparações para achar o melhor goleiro
        if (firstPlayer.status.gol > secondPlayer.status.gol) return -1
        else if (firstPlayer.status.gol < secondPlayer.status.gol) return 1
        else if (firstPlayer.status.cartao.vermelho > secondPlayer.status.cartao.vermelho)return -1
        else if (firstPlayer.status.cartao.vermelho < secondPlayer.status.cartao.vermelho)return 1
        else if (firstPlayer.status.cartao.amarelo < secondPlayer.status.cartao.amarelo)return -1
        else if (firstPlayer.status.cartao.amarelo > secondPlayer.status.cartao.amarelo)return 1
        else if (firstPlayer.status.faltas < secondPlayer.status.faltas) return -1
        else if (firstPlayer.status.faltas > secondPlayer.status.faltas) return 1
        else if (firstPlayer.nome < secondPlayer.nome) return -1
        else if (firstPlayer.nome > secondPlayer.nome) return 1
        return 0
    })
    return listaOrdenada
} // Faz as devidas comparações para achar quem será o melhor jogador

let lista = BestsPlayersFinal(partidas)

for (let i = 0; i < lista.length; i++) { 
    let atual = lista[i];
    console.log(
        `${i + 1}º: ${atual.nome} - ${atual.time} - ${atual.status.gol} gol(s) - ${atual.status.cartao.vermelho} cartão vermelho - ${atual.status.cartao.amarelo
        } cartão amarelo - ${atual.status.faltas} faltas ${atual.status.golSofridos
            ? ", gols sofridos: " + atual.status.golSofridos
            : ""
        }`
    )
} //Loop para imprimir todos os jogadores



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
function BestsPlayersFinal(partidas) {
    let listaTodosJogadores = []
  
    const golsTime1 = partidas[0].times[0].jogadores.reduce(
      (soma, objeto) => {
        return soma + objeto.status.gol;
      },
      0
    )
  
    const golsTime2 = partidas[0].times[1].jogadores.reduce(
      (soma, objeto) => {
        return soma + objeto.status.gol;
      },
      0
    )
  
    const golsTime3 = partidas[1].times[0].jogadores.reduce(
      (soma, objeto) => {
        return soma + objeto.status.gol;
      },
      0
    )
  
    const golsTime4 = partidas[1].times[1].jogadores.reduce(
      (soma, objeto) => {
        return soma + objeto.status.gol;
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
        else if (firstPlayer.status.golSofridos > secondPlayer.status.golSofridos)
          return 1
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
    })// Faz as devidas comparações para achar quem será o melhor jogador
  
    //Qual é a maior quantidade de Gols e quem fez esses gols
    let Artilheiro = Math.max.apply(
      null,
      listaOrdenada.map((a) => a.status.gol)
    )
    let listaArtilheiros = listaOrdenada.filter(
      (a) => a.status.gol == Artilheiro
    )
    //Qual é a maior quantidade de Cartões Vermelhos e quem levou esses cartões
    let cartaoVermelho = Math.max.apply(
      null,
      listaOrdenada.map((a) => a.status.cartao.vermelho)
    )
  
    let listaVermelhos = listaOrdenada.filter(
      (a) => a.status.cartao.vermelho == cartaoVermelho
    )
    //Qual é a maior quantidade de Cartões Amarelos e quem levou esses cartões
    let cartaoAmarelo = Math.max.apply(
      null,
      listaOrdenada.map((a) => a.status.cartao.amarelo)
    )
    let listaAmarelos = listaOrdenada.filter(
      (a) => a.status.cartao.amarelo == cartaoAmarelo
    )
    //Qual é a maior quantidade de Faltas e quem fez essas Faltas
    let Faltas = Math.max.apply(
      null,
      listaOrdenada.map((a) => a.status.faltas)
    )
    let listaFaltas = listaOrdenada.filter((a) => a.status.faltas == Faltas)
  
    const listafinal = [
      listaArtilheiros,
      listaVermelhos,
      listaAmarelos,
      listaFaltas
    ]
    return listafinal
  }
  
  // Cocatenação dos dados para impressão posterior
  let lista = BestsPlayersFinal(partidas)
  let qtdArtilheiros = lista[0][0].status.gol;
  let nomesArtilheiros = ""
  for (let i = 0; i < lista[0].length; i++) {
    if (i > 0)
      nomesArtilheiros += ", " + lista[0][i].nome + "(" + lista[0][i].time + ")"
    else nomesArtilheiros += lista[0][i].nome + "(" + lista[0][i].time + ")"
  }
  
  let qtdVermelhos = lista[1][0].status.cartao.vermelho
  let nomesVermelhos = "";
  for (let i = 0; i < lista[1].length; i++) {
    if (i > 0)
    nomesVermelhos += ", " + lista[1][i].nome + "(" + lista[1][i].time + ")"
    else nomesVermelhos += lista[1][i].nome + "(" + lista[1][i].time + ")"
  }
  
  let qtdAmarelos = lista[2][0].status.cartao.amarelo
  let nomesAmarelos = ""
  for (let i = 0; i < lista[2].length; i++) {
    if (i > 0)
    nomesAmarelos += ", " + lista[2][i].nome + "(" + lista[2][i].time + ")"
    else nomesAmarelos += lista[2][i].nome + "(" + lista[2][i].time + ")"
  }
  
  let qtdFaltas = lista[3][0].status.faltas
  let nomesFaltas = ""
  for (let i = 0; i < lista[3].length; i++) {
    if (i > 0)
    nomesFaltas += ", " + lista[3][i].nome + "(" + lista[3][i].time + ")"
    else nomesFaltas += lista[3][i].nome + "(" + lista[3][i].time + ")"
  }
  let saida = `
   Artilheiros
   ${nomesArtilheiros} tem ${qtdArtilheiros} gols
   Expulsos
   ${nomesVermelhos} tem ${qtdVermelhos} vermelhos
   Amarelados
   ${nomesAmarelos} tem ${qtdAmarelos} amarelos
   Cavalo
   ${nomesFaltas} tem ${qtdFaltas} faltas
  `
  
  console.log(saida)
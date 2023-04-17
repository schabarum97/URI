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
    
    ? Para facilitar a analise da federação GAUCHA precisamos fazer um algoritmo para encontrar o BOLA CHEIA de cada partida.
    ? Para para saber quem foi nosso BOLA CHEIA vamos ver quem teve o melhor DESEMPENHO dentro do time que VENCEU a partida.
    ? O Calculo para encontrar o melhor desempenho é simples!
    
    * Quem fez mais gols!!!
    * Caso de empate, é quem tomou menos cartões 1ª Vermelho 2ª Amarelo!!!
    * Caso de empate, é quem tem menos faltas!!!
    * Caso de empate é quem tem o nome em ordem afabética!!!

    ? A Saída para cada partida deve ser conforme o exemplo a seguir.
    ! Melhor jogador da partida 1 no Estádio Colosso da Lagoa Lucas Silva tendo feito 1 gol e fazendo 5 faltas.
    ! Melhor jogador da partida 2 no Estádio Arena do Grêmio Geromel tendo feito 1 gol e fazendo 2 faltas.
*/
/*
function BestPlayersFinal(numeroPartida, partida) {
    const golsTime1 = partida.times[0].jogadores.reduce((soma, objeto) => {
        return soma + objeto.status.gol
    }, 0) // Faz a busca de quem fez mais gols no time 1
    const golsTime2 = partida.times[1].jogadores.reduce((soma, objeto) => {
        return soma + objeto.status.gol
    }, 0) // Faz a busca de quem fez mais gols no time 1
    let bestTeam = golsTime1 > golsTime2 ? 0 : 1 // Busca que ganhou a partida

    let listaTodosJogadores = partida.times[bestTeam].jogadores // Procura dentro de quem ganhou a partida os jogadores
    let listaOrdenada = listaTodosJogadores.sort(
        function (firstPlayer, secondPlayer) {
            if (firstPlayer.status.gol > secondPlayer.status.gol) { return -1 }
            else if (firstPlayer.status.gol < secondPlayer.status.gol) { return 1 }
            else if (firstPlayer.status.cartao.vermelho < secondPlayer.status.cartao.vermelho) { return -1 }
            else if (firstPlayer.status.cartao.vermelho > secondPlayer.status.cartao.vermelho) { return 1 }
            else if (firstPlayer.status.cartao.amarelo < secondPlayer.status.cartao.amarelo) { return -1 }
            else if (firstPlayer.status.cartao.amarelo > secondPlayer.status.cartao.amarelo) { return 1 }
            else if (firstPlayer.status.faltas < secondPlayer.status.faltas) { return -1 }
            else if (firstPlayer.status.faltas > secondPlayer.status.faltas) { return 1 }
            return 0;
        }

    ) // Faz as devidas comparações para achar quem será o melhor jogador de acordo com os cartões faltas e por último por nome
    let melhor = listaOrdenada[0];//Retorna o primeiro que é encontrado
    return `Melhor jogador da partida ${numeroPartida + 1} no Estádio ${partida.local} ${melhor.nome} tendo feito ${melhor.status.gol} e fazendo ${melhor.status.faltas} faltas.`
}
for (let i = 0; i < partidas.length; i++) {
    console.log(BestPlayersFinal(i, partidas[i]))
} // Loop para retornar o melhor jogador de todas as partidas

*/


// Iterar sobre cada partida
for (let i = 0; i < partidas.length; i++) {
    const partida = partidas[i];
    const times = partida.times;
  
    // Encontrar o time vencedor da partida
    let vencedor = null;
    if (times[0].status.gols > times[1].status.gols) {
      vencedor = times[0];
    } else if (times[1].status.gols > times[0].status.gols) {
      vencedor = times[1];
    }
  
    if (vencedor !== null) {
      // Encontrar o melhor jogador do time vencedor
      let melhorJogador = null;
      for (let j = 0; j < vencedor.jogadores.length; j++) {
        const jogador = vencedor.jogadores[j];
  
        // Verificar se o jogador fez mais gols
        if (melhorJogador === null || jogador.status.gol > melhorJogador.status.gol) {
          melhorJogador = jogador;
        }
  
        // Verificar se houve empate em gols e o jogador tomou menos cartões vermelhos ou amarelos
        else if (jogador.status.gol === melhorJogador.status.gol) {
          if (jogador.status.cartao.vermelho < melhorJogador.status.cartao.vermelho) {
            melhorJogador = jogador;
          } else if (jogador.status.cartao.vermelho === melhorJogador.status.cartao.vermelho) {
            if (jogador.status.cartao.amarelo < melhorJogador.status.cartao.amarelo) {
              melhorJogador = jogador;
            } else if (jogador.status.cartao.amarelo === melhorJogador.status.cartao.amarelo) {
  
              // Verificar se houve empate em gols e cartões e o jogador fez menos faltas
              if (jogador.status.faltas < melhorJogador.status.faltas) {
                melhorJogador = jogador;
              } else if (jogador.status.faltas === melhorJogador.status.faltas) {
  
                // Verificar se houve empate em gols, cartões e faltas e o nome do jogador em ordem alfabética
                if (jogador.nome < melhorJogador.nome) {
                  melhorJogador = jogador;
                }
              }
            }
          }
        }
      }
  
      // Imprimir o resultado da partida
      console.log(`Melhor jogador da partida ${i + 1} no Estádio ${partida.local} ${melhorJogador.nome} tendo feito ${melhorJogador.status.gol} gol(s) e fazendo ${melhorJogador.status.faltas} falta(s).`);
    }
  }
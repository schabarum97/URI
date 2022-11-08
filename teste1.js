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
function MelhorJogador(numeroPartida, partida){
    var listaTodosJogadores = partida.times[0].jogadores.concat(partida.times[1].jogadores)// faz uma lista com todos os jogadores dos dois times
    var listaOrdenada = listaTodosJogadores.sort(
      function(jogadorA,jogadorB){
        if(jogadorA.status.gol>jogadorB.status.gol)return -1;
        else if(jogadorA.status.gol<jogadorB.status.gol)return 1;
  
        else if(jogadorA.status.cartao.vermelho<jogadorB.status.cartao.vermelho)return -1;
        else if(jogadorA.status.cartao.vermelho>jogadorB.status.cartao.vermelho)return 1;
        
        else if(jogadorA.status.cartao.amarelo<jogadorB.status.cartao.amarelo)return -1;
        else if(jogadorA.status.cartao.amarelo>jogadorB.status.cartao.amarelo)return 1;
  
        else if(jogadorA.status.falftas<jogadorB.status.faltas)return -1;
        else if(jogadorA.status.faltas>jogadorB.status.faltas)return 1;
  
        return 0;
      }
    ) //compara e ordena
  
    var melhor =  listaOrdenada[0];//retorna o primeiro
    return `Melhor jogador da partida ${numeroPartida +1} no Estádio ${partida.local} ${melhor.nome} tendo feito ${melhor.status.gol} e fazendo ${melhor.status.faltas} faltas.` 
  }
  
  for (let i = 0;i < partidas.length; i++){
    console.log(MelhorJogador(i, partidas[i]))}
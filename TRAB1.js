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

function whoWon(partida) {
    let golsPartida = []
    for (let time = 0; time < 2; time++){
        golsPartida.push(0)
        for (let i = 0; i < 5; i++){
            golsPartida[time] += partidas[partida].times[time].jogadores[i].status.gol
        }    
    }
    if (golsPartida[0] > golsPartida[1]) {
        return 0 // Time 1 ganhou
    }else if (golsPartida[1] > golsPartida[0]){
        return 1 // Time 2 ganhou
    }else{
        return 2 // Empate
    }
}

function bestPlayer(partida, obj){
    let winner = whoWon(partida)
    if (winner == 2){
        return 'Jogo teve empate portanto nenhum jogador se sobresaiu'
    }else{
        let game = obj[partida].local
        let jogadores = obj[partida].times[winner].jogadores
            .filter(a => a.status.gol > 0) // Só deixa que fez gol
            .reduce((prev, current) => ((prev.gol > current.gol) ? prev : prev.gol === current.gol ? {prev, current} : '')) // Pega qm fez mais gols
            //.map(a=> a.reduce((prev, current) => ((prev.cartao.vermelho < current.cartao.vermelho) ? prev : prev.cartao.vermelho === current.cartao.vermelho ? {prev, current} : ''))) // Qm tem menos cartão vermelho)
            // .reduce((prev, current) => ((prev.cartao.amarelo < current.cartao.amarelo) ? prev : prev.cartao.amarelo === current.cartao.amarelo ? {prev, current} : '')) // Qm tem menos cartão amarelo
            // .reduce((prev, current) => ((prev.faltas < current.faltas) ? prev : prev.faltas === current.faltas ? {prev, current} : prev)) // Qm tem menos faltas

        return `Melhor jogador da partida ${partida+1} no Estádio ${game} ${jogadores.nome} tendo feito ${jogadores.status.gol} e fazendo ${jogadores.status.faltas} faltas.` 
    }
    
}

for (let i = 0;i < partidas.length; i++){
     console.log(bestPlayer(i, partidas)) 
}
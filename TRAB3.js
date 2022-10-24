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
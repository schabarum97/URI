let partidas = [
    {
        data: '28/03/2015',
        timeA: {
            nome: 'INTZ',
            kills: 10,
            gold: 70200,
            vitoria: true,
            jogadores: [
                { nome: 'Yang',     kills: 1, death: 3, assist: 2 },
                { nome: 'Revolta',  kills: 2, death: 4, assist: 3 },
                { nome: 'tockers',  kills: 3, death: 2, assist: 4 },
                { nome: 'micaO',    kills: 3, death: 1, assist: 4 },
                { nome: 'Jockster', kills: 1, death: 3, assist: 8 },
            ]
        },
        timeB: {
            nome: 'PAIN',
            kills: 12,
            gold: 74500,
            vitoria: false,
            jogadores: [
                { nome: 'Leko',    kills: 1, death: 3, assist: 9  },
                { nome: 'SIRT',    kills: 1, death: 1, assist: 10 },
                { nome: 'KamiKat', kills: 5, death: 2, assist: 1  },
                { nome: 'brTT RX', kills: 5, death: 3, assist: 5  },
                { nome: 'Dioud',   kills: 0, death: 1, assist: 9  }
            ]
        }
    },
    {
        data: '28/03/2015',
        timeA: {
            nome: 'INTZ',
            kills: 3,
            gold: 60200,
            vitoria: false,
            jogadores: [
                { nome: 'Yang',     kills: 1, death: 1, assist: 0 },
                { nome: 'Revolta',  kills: 0, death: 2, assist: 2 },
                { nome: 'tockers',  kills: 0, death: 1, assist: 1 },
                { nome: 'micaO',    kills: 0, death: 2, assist: 2 },
                { nome: 'Jockster', kills: 2, death: 4, assist: 0 },
            ]
        },
        timeB: {
            nome: 'PAIN',
            kills: 10,
            gold: 69100,
            vitoria: true,
            jogadores: [
                { nome: 'Leko',    kills: 0, death: 1, assist: 5 },
                { nome: 'SIRT',    kills: 3, death: 0, assist: 4 },
                { nome: 'KamiKat', kills: 4, death: 0, assist: 2 },
                { nome: 'brTT RX', kills: 2, death: 1, assist: 2 },
                { nome: 'Dioud',   kills: 1, death: 1, assist: 3 }
            ]
        }
    },
    {
        data: '28/03/2015',
        timeA: {
            nome: 'INTZ',
            kills: 21,
            gold: 80200,
            vitoria: true,
            jogadores: [
                { nome: 'Yang',     kills: 6, death: 1, assist: 4  },
                { nome: 'Revolta',  kills: 2, death: 5, assist: 9  },
                { nome: 'tockers',  kills: 3, death: 2, assist: 7  },
                { nome: 'micaO',    kills: 8, death: 1, assist: 2  },
                { nome: 'Jockster', kills: 2, death: 6, assist: 11 },
            ]
        },
        timeB: {
            nome: 'PAIN',
            kills: 15,
            gold: 2500,
            vitoria: false,
            jogadores: [
                { nome: 'Leko',    kills: 2, death: 5, assist: 3 },
                { nome: 'SIRT',    kills: 3, death: 3, assist: 5 },
                { nome: 'KamiKat', kills: 7, death: 4, assist: 2 },
                { nome: 'brTT RX', kills: 3, death: 2, assist: 4 },
                { nome: 'Dioud',   kills: 0, death: 7, assist: 8 }
            ]
        }
    }]
    
    /*  
        TODO: Tendo em mente o objeto 'partidas' escrito acima resolva o seguinte problemas.
    
        ? Faça um algoritmo que some todo o gold ganho por cada uma das partidas.
        ? A Saída deve imprimir o gold por equipe.
        ! PAIN - 150000 GOLD.
        ! INTZ - 149000 GOLD.
        ? Ao final confira se o time que mais ganhou ouro é quem realmente ganhou a série.
        ? Caso a equipe que ganhou a série é quem tem mais ouro escreva 
        ! Vitória da XXXXX merecida, dominaram a partida.
        ? Caso a equipe que tem mais ouro não venceu escreva
        ! XXXXX perdeu no detalhe, não souberam aproveitar a vantagem.
    */


    let totalGoldA = partidas.map(a => a.timeA.gold).reduce((a,b) => a+b)
    let totalGoldB = partidas.map(a => a.timeB.gold).reduce((a,b) => a+b)

    
    console.log(`${partidas[0].timeA.nome} - ${totalGoldA} GOLD.`)
    console.log(`${partidas[0].timeB.nome} - ${totalGoldB} GOLD.`)
    

    let vitoriasA = partidas.map(a => (a.timeA.vitoria) ? 1 : 0).reduce((a,b) => a+b)
    
    console.log(
        (vitoriasA === 2) ? 
            (totalGoldA > totalGoldB) ? 
                `Vitória da ${partidas[0].timeA.nome} merecida, dominaram a partida.` : 
                `${partidas[0].timeB.nome} perdeu no detalhe, não souberam aproveitar a vantagem.` 
            :
            (totalGoldB > totalGoldA) ? 
                `Vitória da ${partidas[0].timeB.nome} merecida, dominaram a partida.` : 
                `${partidas[0].timeA.nome} perdeu no detalhe, não souberam aproveitar a vantagem.`
        )
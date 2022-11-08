

// * Verificar quem venceu
let venceu_p1 = ((partidas[0].times[0].jogadores.map(a => a.status.gol).reduce((a, b) => a+b)
                > (partidas[0].times[1].jogadores.map(a => a.status.gol).reduce((a, b) => a+b)))
                    ? 0 : 1 )
let venceu_p2 = ((partidas[1].times[0].jogadores.map(a => a.status.gol).reduce((a, b) => a+b)
                > (partidas[1].times[1].jogadores.map(a => a.status.gol).reduce((a, b) => a+b)))
                    ? 0 : 1 )

// * Mapear cartões e faltas para futura validação com o Index
let cartoes_vermelhos_p1 = partidas[0].times[venceu_p1].jogadores.map(a => a.status.cartao.vermelho)
let cartoes_vermelhos_p2 = partidas[1].times[venceu_p2].jogadores.map(a => a.status.cartao.vermelho)

let cartoes_amarelos_p1 = partidas[0].times[venceu_p1].jogadores.map(a => a.status.cartao.amarelo)
let cartoes_amarelos_p2 = partidas[1].times[venceu_p2].jogadores.map(a => a.status.cartao.amarelo)

let faltas_p1 = partidas[0].times[venceu_p1].jogadores.map(a => a.status.faltas)
let faltas_p2 = partidas[1].times[venceu_p2].jogadores.map(a => a.status.faltas)



// * Validar o maior n° de gols
let fez_Mais_Gols_p1 = partidas[0].times[venceu_p1].jogadores.map(a => a.status.gol).reduce((a,b) => (a >= b)? a : b)
let fez_Mais_Gols_p2 = partidas[1].times[venceu_p2].jogadores.map(a => a.status.gol).reduce((a,b) => Math.max(a,b))

// * Encontrar o Index de quem mais fez gols e acha o Index se houve n° de gols igual !
let index_p1 = []
let indexGoleador_p1 = partidas[0].times[venceu_p1].jogadores.map(a => a.status.gol).indexOf(fez_Mais_Gols_p1);
while (indexGoleador_p1 !== -1){
    index_p1.push(indexGoleador_p1);
    indexGoleador_p1 = partidas[0].times[venceu_p1].jogadores.map(a => a.status.gol).indexOf(fez_Mais_Gols_p1, indexGoleador_p1+1);
}
let index_p2 = []
let indexGoleador_p2 = partidas[1].times[venceu_p2].jogadores.map(a => a.status.gol).indexOf(fez_Mais_Gols_p2);
while (indexGoleador_p2 !== -1){
    index_p2.push(indexGoleador_p2);
    indexGoleador_p2 = partidas[1].times[venceu_p2].jogadores.map(a => a.status.gol).indexOf(fez_Mais_Gols_p2, indexGoleador_p2+1);
}

// * Validações
let nom_p1 = []
for (let k = 0; k < index_p1.length; k++){
    nom_p1.push(partidas[0].times[venceu_p1].jogadores[index_p1[k]].nome)
}
let indexgole_p1 = []
if (index_p1.length > 1){
    for (let i = 0; i < index_p1.length-1; i++){
        for (let j = 1; j < index_p1.length; j++){
            (cartoes_vermelhos_p1[index_p1[i]] != cartoes_vermelhos_p1[index_p1[j]])?
                (cartoes_vermelhos_p1[index_p1[i]] < cartoes_vermelhos_p1[index_p1[j]])?
                    indexgole_p1 = index_p1[i] : indexgole_p1 = index_p1[j]
                :
                (cartoes_amarelos_p1[index_p1[i]] != cartoes_amarelos_p1[index_p1[j]])?
                    (cartoes_amarelos_p1[index_p1[i]] < cartoes_amarelos_p1[index_p1[j]])?        
                        indexgole_p1 = index_p1[i] : indexgole_p1 = index_p1[j]
                        :
                        (faltas_p1[index_p1[i]] != faltas_p1[index_p1[j]])?
                            (faltas_p1[index_p1[i]] < faltas_p1[index_p1[j]])?
                                indexgole_p1 = index_p1[i] : indexgole_p1 = index_p1[j]
                            :
                            nom_p1.sort()
        }
    }
}else{
    indexgole_p1 = index_p1
}
let nom_p2 = []
for (let k = 0; k < index_p2.length; k++){
    nom_p2.push(partidas[1].times[venceu_p2].jogadores[index_p2[k]].nome)
}
let indexgole_p2 = []
if (index_p2.length > 1){
    for (let i = 0; i < index_p2.length-1; i++){
        for (let j = 1; j < index_p2.length; j++){
            (cartoes_vermelhos_p2[index_p2[i]] != cartoes_vermelhos_p2[index_p2[j]])?
                (cartoes_vermelhos_p2[index_p2[i]] < cartoes_vermelhos_p2[index_p2[j]])?
                    indexgole_p2 = index_p2[i] : indexgole_p2 = index_p2[j]
                :
                (cartoes_amarelos_p2[index_p2[i]] != cartoes_amarelos_p2[index_p2[j]])?
                    (cartoes_amarelos_p2[index_p2[i]] < cartoes_amarelos_p2[index_p2[j]])?        
                        indexgole_p2 = index_p2[i] : indexgole_p2 = index_p2[j]
                        :
                        (faltas_p2[index_p2[i]] != faltas_p2[index_p2[j]])?
                            (faltas_p2[index_p2[i]] < faltas_p2[index_p2[j]])?
                                indexgole_p2 = index_p2[i] : indexgole_p2 = index_p2[j]
                            :
                            nom_p2.sort()
        }
    }
}else{
    indexgole_p2 = index_p2
}

let idexfinal_p1 = (indexgole_p1 == '')? partidas[0].times[venceu_p1].jogadores.map(a => a.nome).indexOf(nom_p1[0]) : indexgole_p1
let idexfinal_p2 = (indexgole_p2 == '')? partidas[1].times[venceu_p2].jogadores.map(a => a.nome).indexOf(nom_p2[0]) : indexgole_p2

console.log(`Melhor jogador da partida 1 no Estádio ${partidas[0].local} foi
${partidas[0].times[venceu_p1].jogadores[idexfinal_p1].nome} do ${partidas[0].times[venceu_p1].nome} tendo feito ${partidas[0].times[venceu_p1].jogadores[idexfinal_p1].status.gol} gol(s) e fazendo ${faltas_p1[idexfinal_p1]} falta(s)!`)
console.log()
console.log(`Melhor jogador da partida 2 no Estádio ${partidas[1].local} foi
${partidas[1].times[venceu_p2].jogadores[idexfinal_p2].nome} do ${partidas[1].times[venceu_p2].nome} tendo feito ${partidas[1].times[venceu_p2].jogadores[idexfinal_p2].status.gol} gol(s) e fazendo ${faltas_p2[idexfinal_p2]} falta(s)!`)

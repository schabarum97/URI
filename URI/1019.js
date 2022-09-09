let input = require ('fs').readFileSync('./dev/stdin/file.txt','utf8')
let = lines = input.split('\n')
let segundos = +lines.shift()
let  horas
let minutos
let restoSegundos
while (segundos >0) {
    if (segundos >=3600){
        horas = Math.floor(segundos/3600)
        segundos = segundos%36000
    }else{
        horas = 0
    }
    if (segundos >=60){
        minutos = Math.floor(segundos/60)
        segundos= segundos%60
    }else{
        minutos = 0
    }
    if (segundos<60){
        restoSegundos = segundos
        segundos = 0
    }
}
console.log(`${horas}:${minutos}:${restoSegundos}`)
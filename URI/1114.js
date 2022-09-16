let input = require ('fs').readFileSync('./dev/stdin/file.txt','utf8')
let = lines = input.split('\n')

let acesso = 'Senha Invalida';
while (acesso != 'Acesso Permitido') {
    let senha = +lines.shift()
    if (senha === 2002){
        acesso = 'Acesso Permitido'
    }else{
        acesso = 'Senha Invalida'
    }
    console.log(acesso)
}


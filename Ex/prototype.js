// String.prototype.concatenaTexto = function(){
//     return String(this) + '' + 'Texto Adicionado'
// }
// console.log(' olá mundo!!!! '.concatenaTexto())


// //Sintaxe: TIPO DE DADO.prototype.NOME DA FUNCAO = function (){return this}

// String.prototype.maiuscula = function () {
//     return this.toString().toUpperCase()
// }
// let nome = 'Renan'
// console.log(nome.maiuscula())


// String.prototype.limparCarac = function () {
//     return this.replaceAll('a','--')
// }
// let nome2 = 'Renan'
// console.log(nome2.limparCarac())
// console.log('ola mundo" bom dia'.limparCarac())

// Number.prototype.toCurrency = function(){
//     return 'R$ ' + this.toFixed(2)

// }
// let salario = 1212
// console.log(salario.toCurrency())




// String.prototype.log = function() {
//     let message = 'passou aqui ' + this.toString()
//     console.log(message)
// }

// Number.prototype.toCurrency = function(tipo) {
//     switch (tipo) {
//         case 1:
//             return 'R$ ' + this.toFixed(2)
//         case 2:
//             return '$ ' + this.toFixed(2)
//     }
// }
// let salario = 1212
// console.log(salario.toCurrency(1))
// salario.toCurrency(2).log()


// Array.prototype.map2 = function (callbackFN) {
//     for (let i = 0; i < this.length; i++) {
//         callbackFN.call(this, this[i], i, this)
//     }
// }

// listaFrutas = ['1', '2', '4', '788']

// listaFrutas.map2((a,b,c) => console.log(+a,b,c))
// listaFrutas.map((a,b,c) => console.log(+a,b,c))


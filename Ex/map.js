// let f = [0,32,45,50,75,80,99,120]
// let c = f.map(elem => Math.round((elem - 32)* 5/9))
// console.log(c)

// let a = [{nome: 'Ricardo', idade: 28},
//          {nome: 'Jorge', idade: 30},
//          {nome: 'BBBBB', idade: 10},
//          {nome: 'AAAAA', idade: 3},]
// // let b = a.map(a=> a)
// let b = a.map(a=> {return{...a}})

// b.push({nome: 'fred', idade: 99})
// b[0].nome = 'AUSDHAUSDHUAS'

// console.log('a = ', a)
// console.log('b = ', b)




//sintaxe
let f = [0,32,45,50,75,80,99,120]
f.map((value, index, array)=> {
    console.log(value, index, array)
})
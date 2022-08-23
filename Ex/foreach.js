lista = [10,40,2,5,8,29]

lista.forEach((value, index,list) => {
    if (value < 10)
    console.log(value,index,list)
});


lista.forEach((value, index,list) => {
    if (index < 3)
    console.log(value,index,list)
});
const fs = require("fs");
  
let javascriptDir = "./JavaScript";
let pythonDir = "./Python";  

let javascriptFiles = fs.readdirSync(javascriptDir);
let pythonFiles = fs.readdirSync(pythonDir);

console.log("Atividades JavaScript que não ta em Python")
jsFiles = []
javascriptFiles.forEach((file) => {
    let achou = false
    pythonFiles.forEach((pythonFile) => {
        if (file.replace('.js', '') === pythonFile.replace('.py', '')){
            achou = true
        }
    })
    if (!achou){
        jsFiles.push(file.replace('.js', ''))
    }
});
console.log(jsFiles)
console.log(`Falta fazer ${jsFiles.length} em Python`)


console.log("Atividades Python que não ta em Javascript")
pyFiles = []
pythonFiles.forEach((pythonFile) => {
    let achou = false
    javascriptFiles.forEach((file) => {
        if (file.replace('.js', '') === pythonFile.replace('.py', '')){
            achou = true
        }
    })
    if (!achou){
        pyFiles.push(pythonFile.replace('.py', ''))
    }
});
console.log(pyFiles)
console.log(`Falta fazer ${pyFiles.length} em JavaScript`)
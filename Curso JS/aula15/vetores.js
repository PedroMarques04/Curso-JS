let valores = [7, 2, 3]

/*for(let i=0; i<valores.length;i++){
    console.log(valores[i])
}
*/
valores.sort()
valores.push(9)
for(let i in valores){
    console.log(valores[i])
}
let teste = valores.indexOf(2)
console.log(`A posição do 2 é ${teste}`)
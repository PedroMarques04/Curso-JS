//recursividade
function fatorial(n){
    if (n==1){
        return 1;
    } else {
        return n * fatorial(n-1)
    }
}
console.log(fatorial(5))

function fatorialNormal(n){
    let a = 1
    for(let i = n; i>1; i--){
        a *= i
    }
    return a
}

console.log(fatorialNormal(6))
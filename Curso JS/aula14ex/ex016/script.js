function contar(){
    let inicio = document.getElementById("textoDeInicio")
    let fim = document.getElementById("textoFim")
    let passo = document.getElementById("textoPasso")
    let resultado = document.getElementById('resultado')


    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        resultado.innerHTML = 'Impossível contar!'
        //alert('Faltam dados!')
    } else{
        resultado.innerHTML = 'Contando: <br>'
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if(p<=0){
            alert('Passo inválido!\nConsiderando passo 1!')
            p=1
        }

        if (i<f){
            //contagem crescente
            for(let c = i; c<=f; c+=p){
                resultado.innerHTML += ` ${c} \u{1F449}`
            }
        } else {
            //contagem decrescente
            for(let c = i; c>=f; c-=p){
                resultado.innerHTML += ` ${c} \u{1F449}`
            }
        }
        
        resultado.innerHTML += `\u{1F3C1}`

        

    }
}
let num = document.querySelector(`input#numberRecieved`)
let list = document.querySelector(`select#list`)
let result = document.querySelector(`div#result`)
let values = []


function isNumber(n){
    if (Number(n)>=1 && Number(n)<=100){
        return true
    }else {
        return false
    }
}

function inList(n, l){
    if (l.indexOf(Number(n))!=-1){
        return true
    } else {
        return false
    }
}

function addNumber(){
    if(isNumber(num.value) && !inList(num.value, values)) {
        values.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        list.appendChild(item)
        result.innerHTML = ''
    }else {
        alert('Valor inválido ou já encontrado na lista')
    }
    num.value = ''
    num.focus()
}

function finish(){
    if(values.length == 0){
        alert('Adicione valores antes de finalizar')
    } else{
        let totalElements = values.length

        let maior = values[0]
        let menor = values[0]
        let sum = 0
        let average = 0

        for(let i in values){
            sum += values[i]
            if(values[i]> maior){
                maior = values[i]
            }
            if(values[i]< menor){
                menor = values[i]
            }
            
        }
        average = sum/totalElements

        result.innerHTML = ''
        result.innerHTML += `<p>Ao todo temos ${totalElements} números cadastrados</p>`
        result.innerHTML += `<p>O maior valor é ${maior}.</p>`
        result.innerHTML += `<p>O menor valor é ${menor}.</p>`
        result.innerHTML += `<p>A soma dos valores é ${sum}.</p>`
        result.innerHTML += `<p>A média dos valores é ${average}.</p>`
    } 
}
function tabuada(){
    let num = document.getElementById('textoNumero')
    let tabuada = document.getElementById('tabuada')

    if (num.value.length == 0){
        alert('Por favor, digite um número!')
    } else {
        let a = Number(num.value)
        let i = 1
        tabuada.innerHTML = ''
        while(i<=10){
            let item = document.createElement('option')
            if(i<10){
                item.text = `${a} x 0${i} = ${a*i}`
            }else {
                item.text = `${a} x ${i} = ${a*i}`
            }
            


            item.value = `tab${i}`
            tabuada.appendChild(item)

            i++
        }
    }
}
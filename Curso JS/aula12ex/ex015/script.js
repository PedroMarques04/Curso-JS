function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var anoUsuario = document.getElementById('txtAno')
    var resposta = document.querySelector(`div#resultado`)

    if(anoUsuario.value.length == 0 || Number(anoUsuario.value)>ano){
        alert('Verifique os dados e tente novamente!')
    } else{
        var sexUser = document.getElementsByName('sex')
        var idade = ano - Number(anoUsuario.value)
        var gender =''
        var gen = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if(Number(anoUsuario.value >=2010)){
            //alpha
            img.setAttribute('src', 'genAlpha.jpg')
            gen = 'Gen Alpha'
        } else if(Number(anoUsuario.value)>=1997){
            //genZ
            img.setAttribute('src', 'genZ.jpg')
            gen = 'Gen Z'
        }else if (Number(anoUsuario.value)>=1981){
            //millenials
            img.setAttribute('src', 'millenials.jpg')
            gen = 'Millenial'
        } else if(Number(anoUsuario.value)>=1965){
            //genX
            img.setAttribute('src', 'genX.jpg')
            gen = 'Gen X'
        }else {
            //boomers
            img.setAttribute('src', 'boomers.jpg')
            gen = 'Boomer'
        }

        if(sexUser[0].checked){
            gender = 'homem'
        }else if (sexUser[1].checked){
            gender = 'mulher'
        }
        resposta.style.textAlign = 'center'
        resposta.innerHTML= `Detectamos ${gender}, ${gen} com ${idade} anos`
        resposta.appendChild(img)
    }
}
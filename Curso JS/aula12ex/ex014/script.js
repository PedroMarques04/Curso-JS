function carregar(){
    var mensagem = document.getElementById('mensagem')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    //var hora = 19
    mensagem.innerHTML = `Agora são ${hora} horas.`

    if(hora>=0 && hora<12){
        //Bomdia
        img.src = 'morning.jpg'
        document.body.style.background = '#e2cd9f'
    } else if (hora>12 && hora<=18){
        //Boa tarde
        img.src = 'afternoon.jpg'
        document.body.style.background = '#b9846f'
    }else {
        //BoaNoite
        img.src = 'night.jpg'
        document.body.style.background = '#515154'
    }
}
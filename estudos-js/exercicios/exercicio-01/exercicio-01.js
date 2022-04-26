function carregar(){
    var msg = window.document.getElementById('mensagem')
    var date = new Date()
    var hora = date.getHours()
    msg.innerText = `Agora são ${hora} horas`

   

    var img = window.document.getElementById('imagem')

    if (hora < 12 && hora > 0){
        img.src = 'manha.png'
        document.body.style.background = 'rgb(60, 126, 126)'
    }
    else if(hora <= 18 && hora > 12){
        img.src = 'tarde.jpg'
        document.body.style.background = '#F58A1B'

    }
    else if(hora <= 23 && hora > 18){
        img.src = 'noite.jpg'
        document.body.style.background = '#1C224F'
    }
}



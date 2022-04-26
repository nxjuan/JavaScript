function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var form_ano = document.getElementById('txtano')
    var res = document.getElementById('res')
    var foto = document.querySelector('img#foto')

    if(form_ano.value.length == 0 || Number(form_ano.value) > ano){
        window.alert('Verifique os dados e tente novamente')
    }
    else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(form_ano.value)
        var genero = ''
        if(fsex[0].checked){
            genero = 'Homem'
            if (idade >= 0 && idade <= 13){
                //garoto
                foto.src = 'imagens/garoto.jpg'
                
            }else if(idade < 22){
                //adolescente(H)
                foto.src = 'imagens/adolescente(H).jpg'
            }else if (idade < 50){
                //homem
                foto.src = 'imagens/adulto(H).jpg'
            }else {
                //idoso
            }
        }else if(fsex[1].checked){
            genero = 'Mulher'
            if (idade >= 0 && idade <= 13){
                //Garota
                foto.src = 'imagens/garota.jpg'
            }else if(idade < 22){
                //adolescente(M)
                foto.src = 'imagens/adolescente(M).jpg'
            }else if (idade < 50){
                //mulher
                foto.src = 'imagens/mulher.jpg'
            }else {
                //idosa
                foto.src = 'imagens/idosa.jpg'
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos :)`
    }
    
}
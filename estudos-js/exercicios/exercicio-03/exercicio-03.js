function contar(){
    var inicio = document.querySelector('input#inicio')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('passo')
    var resp = document.getElementById('resp')
    var i = Number(inicio.value)
    var f = Number(fim.value)
    var p = Number(passo.value)
    resp.innerHTML = 'Calculando:  '

    //testa se os valores são nulos
    if(i >= 0 && f >= 0){
            //testa se o inicio é menor q o final
           if(i < f)
            //se sim, executa contagem progressiva
                while(i <= f){
                resp.innerHTML += `  ${i} \u{1F449}` 
                i = i + p
            //se não, executa contagem regressiva
            }else{
                while (i >= f){
                resp.innerHTML += `  ${i} \u{1F449}` 
                i = i - p    
            }
        }
    }
    else{
        alert('[ERRO] Verifique os dados')
    }
    resp.innerHTML += '\u{1F3C1}'
}
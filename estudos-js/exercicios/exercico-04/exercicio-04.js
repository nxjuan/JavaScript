function tabuada(){
    var num = document.getElementById('num')
    var tabuada = document.getElementById('resultado')
    var n = Number(num.value)
    var c = 1

    if(n == 0){
        window.alert('Insira um valor válido')
    }else{
        while(c <= 10){
            tabuada.innerHTML += `${n} x ${c} = ${n*c}<br>`
            c++
        }
    }
}
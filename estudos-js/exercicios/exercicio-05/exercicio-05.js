var final = []
var resp = document.getElementById('resp')

function add(n){
    var num = Number(document.getElementById('num').value)
    var n = []
    if(num <= 0 || num > 100 || n.indexOf(num) != -1){
       alert('Valor Inválido') 
    }
    else if(num > 0 && num <= 100){
        n.push(num)
        resp.innerHTML += `<br>     Valor ${n} adicionado`        
    }
    return Number(n)      
}
final.push(n)

function finalizar(){
     alert(`${final[0]} + ${final[1]} = ${final[0+1]}`)
}


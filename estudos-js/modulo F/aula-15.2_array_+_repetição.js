let num = [8, 1, 7, 4, 2, 9]
num.sort()


//forma convencional ->
/*for(let post = 0; post<num.length;post++){
    console.log(num[post])
}*/


//forma simplificada
for(let pos in num){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}
// "for let pos in num": para cada 'pos' em 'num' ---- "console.log": escreva
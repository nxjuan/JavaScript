let num = [7,3,5]
num[3] = 2
num[4] = 4
num.push(8)
//num.sort(), é um metodo que descobre quantos elementos há dentro do array
console.log(`Em ordem crescente, sera exibido ${num.sort()}`)

//há como especificar qual valor queremos que apareça
console.log(`O ultimo valor é ${num[5]}`)

//há como adicionar mais uma casa ào array e inserir um numero nela
console.log(`${num.push(1)}`)

//exibe tudo dentro de num
console.log(num)

//num.length identifica todo o conteúdo no vetor, e enumera em ordem crescente
console.log(`O vetor tem ${num.length} elementos`)

console.log(`Agora, o ultimo valor é ${num[6]}`)
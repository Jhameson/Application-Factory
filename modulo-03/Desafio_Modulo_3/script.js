let listaProdutos = [
    "Computador",
    "Telefone",
    "Mouse",
    "Teclado",
]

console.log("Lista de produtos: "+listaProdutos);
console.log("Tem "+listaProdutos.length+" produtos nessa lista");

//usando o filter para remover um valor da lista em específico (mas so remove na exibição)
console.log("Nova lista: "+listaProdutos.filter(item=>item != "Mouse"));


const encontrar = listaProdutos.find(itens => itens == 'Computador');

if(encontrar){
    console.log(`Existe: ${encontrar}`);
}else{
    console.log("Não existe");
}
//O método splice() altera o conteúdo de uma lista, adicionando novos 
//elementos enquanto remove elementos antigos.


// a partir do indice 1, remove apena o indice 1 e não insere nada 
listaProdutos.splice(1, 1);
console.log("meus produtos: "+listaProdutos);

/*


*/
// Ordenando os numeros
const numeros = [1,3,5,7,0,9,-1];

console.log('Numeros Ordenados: '+ numeros.sort());

// Removendo primeiro item desta lista
console.log('Item removido: '+ numeros.shift());

// Invertendo ordem da lista
console.log('Nova ordem: ' + numeros.reverse())

// Adicionando um novo numero na lista
numeros.push(8);
console.log(numeros);

// Dia de hoje
let hoje = '17/07/2019';
const [dia, mes, ano] = hoje.split('/');

console.log('Dia: ' + dia);
console.log('Mes: ' + mes);
console.log('Ano: ' + ano);






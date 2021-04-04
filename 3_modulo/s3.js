

/*
    Tópico: Diferença entre var , let e const 
*/
var nome = "Lucas";
//o valor de var pode ser acessado em qualquer escopo

let sobrenome = "FArias"; 
//O let so pode ser acessado dentro do escopo que foi criado ou em escopos "filhos" em relação ao que foi criado

const num = "200";
//valor constante, não pode ser alterado

/*
    Tópico: Uso de variavel em strings (alternativo)
*/

let a1 = "Jhameson";
let a2 = "Torden";
let idade = 18;

//precisa passar ``
let pessoa = `Meu nome é ${a1} ${a2} e tenho ${idade} anos`;


/*
    TÓPICO: Desconstruindo objetos e arrays
*/
//contruindo objeto
let pessoa3 = {
    nome: "Lucas",
    idade3: 21,
    cargo: "Front end Developer"
};

//desconstruindo objeto
let {idade3, cargo} = pessoa3;

//atribuindo a outra variavel o valor descontruido
let {cargo:servico} = pessoa3;

//arrays
let frutas = ["maçã","pera","uva","banana"];

//atribuindo a outra variavel o valor descontruido
let {2:segundo} = frutas;
let {0:zero, 1:um} = frutas;

//forma alternativa
let cidades = ["Crateus","GBA", "Lândia"];
let [c1,c2,c3] = cidades;

/*
    TÓPICO: Operador Spread
*/

let primeiros = [1,2,3,4,5];
//juntou os arrays 
let segundos = [...primeiros,6,7,8,9];

let perfil1 = {
    nickname: "jhameson",
    altura: 1.7
};
//bastante usado para reaproveitar dados e inserir novos dados
let perfil2 = {
    ...perfil1,
    nivel: 18,
    forca: 90
}
//uso do spread em funções
function jogador(info) {
    let dados = {
        ...info,
        nivel: 300
    }
    return dados;
}

console.log(jogador({nick: "Sk", jogo: "LOL"}));

/*
    TÓPICO: Operador rest
*/

//permite vizualizar tudo que foi passado
function numeross(...info) {
    console.log(info)
}
numeross(1,2,3,4,5,6)

//exemplo mais avançado usando o rest e spread
function cadastrar(usuarios, ...novosUsuarios) {
    let novosU = [
        ...usuarios, 
        ...novosUsuarios
    ];
    console.log(novosU);
}
let usuarios = ["u1","u2"];
let novosUsuarios = cadastrar(usuarios, "u3", "u4");

/*
    TÓPICO: Operacoes com array
*/

const lista1 = [1,2,3,4,5,6];

//o map aplica uma função em cada item de uma lista
const novaLista = lista1.map(function (itens) {
    return itens * 5;
});

console.log("map "+novaLista);

// reduce soma os itens da lista

const soma = lista1.reduce(function(total, proximo) {
    return total + proximo;
})

console.log("reduce: "+soma);

//find - encontra o item na lista

const encontrar = lista1.find(function(itens) {
    return 6 === itens;
});

console.log("find "+encontrar);

/*
    TÓPICO: Funções Anonimas
*/

function adicionar(...numeros) {
    let valores = numeros.reduce((total, proximo) =>{
        let soma = total + proximo;
        return soma;
    });
    console.log("Anonima: "+valores);
}
adicionar(1,2,3,4,5,6,7,8,9);


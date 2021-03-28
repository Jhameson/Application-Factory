
function btnEntrar(){
    let area = document.getElementById('area');
    let texto = prompt('Qual seu nome?');
    
    if(texto == '' || texto == null){
        alert('Digite seu nome novamente!');
        area.innerHTML = 'Bem vindo ';
    }
    else{
        area.innerHTML = 'Bem vindo '+texto;
    }
}

/*
    TÓPICO: MANIPULAÇÃO DE ARAYS
*/
let lista = ["APS","Redes", "Autômatos", "Programação Funcional", "CG"];
lista.length;
//5
lista [3];
//Programação Funcional
lista.indexOf("CG");
//4 //retorna o índice
//caso não exista, retorna "-1"
lista.join(",");
//"APS,Redes, Autômatos, Programação Funcional, CG"
lista.join(" / ")
"APS / Redes / Autômatos /  Programação Funcional / CG"
lista.pop();
//remove o último
lista.shift();
//remove o primeiro
lista[4] = "Computação Gráfica";
//Altera o valor do index passado
lista.push("Projeto Integrador");
//adiciona no fim da lista


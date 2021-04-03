/*
    TÓPICO: Modificando HTML
*/
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

lista.join(","); //especifica um separador
//"APS,Redes, Autômatos, Programação Funcional, CG"

lista.join(" / ")
//"APS / Redes / Autômatos /  Programação Funcional / CG"

lista.pop();
//remove o último

lista.shift();
//remove o primeiro elemento do array

lista[4] = "Computação Gráfica";
//Altera o valor do index passado

lista.push("Projeto Integrador");
//adiciona um novo elemento ao final de um array.
lista.push("Teoria","Projeto 3");

lista.unshift("Básica"); //incluir um novo elemento no início do array

let frutas = ["jaca","banana","maça","uva"]; 
let frase = frutas.toString(); //array em string
//"jaca,banana,maça,uva"

//O método concat() cria um novo array mesclando arrays existentes:
let meninos = ["Lucas","Lucas2"];
let meninas = ["Bia","Bia2"];
let mn = meninos.concat(meninas);

/*
    TÓPICO: Aprendendo Loops
*/

//while = enquanto
document.write("While </br>");
let x = 0;
while(x < 10){
    document.write("valor de x: "+x+"</br>");
    //console.log("valor de x: "+x);
    x++;
}
document.write("</br></br>");
document.write("For </br>");
let i;
for(i = 0; i <x; i++){
    document.write("valor de i: "+i+"</br>");
}

//for = até

/*
    TÓPICO: switchs
*/



function pedirValor(){
    let y = prompt("Informe um valor para y: ");
    switch(y){
        case "0":
            alert("O y vale 0");
            break;
        case "1":
            alert("O y vale 1");
            break;
        case "2":
            alert("O y vale 2");
            break;
        default:
            alert("escolheu errado");
        
    }
}



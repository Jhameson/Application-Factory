/*
    ###########################################################
    #                                                         #
    #               TÓPICO: Eventos do mouse                  #
    #                                                         #
    ###########################################################
*/

//onmousedown => evento apertar o botão do mouse
function apertar(){
    console.log("Apertou!")
}

//onmouseup => evento soltar o botão do mouse
function soltar(){
    console.log("Soltou!")
}

//onmousemove => mexendo o mouse em cima do botão
function movendo(){
    console.log("Mexendo")
}

//onmouseover => passou por cima do botao
function passou(){
    console.log("Está por cima")
}

//onmouseout => tirou o mouse de cima do botão
function tirou(){
    console.log("Saiu de cima")
}

//onclick => clicou com o mouse
function clicou(){
    console.log("Click")
}

//oncontextmenu => clicou com o direito
function mouseDireito(){
    console.log("Mouse Direito")
}

//para bloquear a ação de um click bastar colocar "return false" e ajustar o html para esperar um retorno


/*
    ###########################################################
    #                                                         #
    #               TÓPICO: Eventos do TEclado                #
    #                                                         #
    ###########################################################
*/


//onkeydown => apertar tecla
function apertarTecla(event){
    console.log("Apertou a tecla "+event.keyCode);

    if(event.shiftKey == true){
        console.log("SHIFT");
    }
    if(event.ctrlKey == true){
        console.log("CTRL");
    }

}

//onkeyup => soltar tecla
function soltouTecla(event){
    console.log("Soltou a tecla "+event.keyCode)
}

//onkeypress => pressionou a tecla
function pressionou(event){
    console.log("Tecla apertada");
}

/*
    ###########################################################
    #                                                         #
    #               TÓPICO: Eventos do Página                 #
    #                                                         #
    ###########################################################
*/

//onload
function carregou(){
    //alert("Página carregada");
}


/*
    TÓPICO: Eventos Formulário
*/

//onfocus = foca
function focado() {
    console.log("Focado");
}

//onblur => desfoca
function desfocado() {
    console.log("Desfocado");
}

//onchange => pega a opção selecionada

function selecionada(objeto) {
    console.log("Selecionou: "+objeto.value);
}

//onsubmit = evento ao enviar
function enviado() {
    console.log("Enviado");
}

/*
    ###########################################################
    #                                                         #
    #               TÓPICO: Manipulação de datas              #
    #                                                         #
    ###########################################################
*/

var data = new Date(); // data atual
var pdata = new Date(Date.parse("March 30, 2021")); // passa uma data

var hora = data.getHours() //hora 

var numero = data.getDay(); // dia da semana em numero
var dia = data.getDate(); //numero do dia do mes
var ano = data.getFullYear(); // ano

var formato = data.getDate()+"/"+(data.getMonth()+1)+"/"+data.getFullYear();

var dias = ["Domingo","Segunda","Terça","Quarta","Quinta","Sexta","Sábado"];

var minhadata = new Date();

var meuDia = minhadata.setDate("12");
var meuMes = minhadata.setMonth("5");
var meuAno = minhadata.setFullYear("2019");

var minhadata2 =minhadata.getDate()+"/"+(minhadata.getMonth()+1)+"/"+minhadata.getFullYear();


/*
    ###########################################################
    #                                                         #
    #               TÓPICO: Validação de formulários          #
    #                                                         #
    ###########################################################
*/

function validar(){
    var valor = document.getElementById("numero").value;
    var nome = document.getElementById("nome").value;

    if(valor.length > 2){
        alert("Digite 2 ou menos números!");
        document.formulario.numero.focus();
        return false;
    }else if(nome.length < 3){
        alert("Digite um nome maior!");
        document.formulario.nome.focus();
        return false;
    } else{
        alert("Formulário envidado!");
        return true;
    }
    
}

/*
    ###########################################################
    #                                                         #
    #               TÓPICO: Temporizadores                    #
    #                                                         #
    ###########################################################
    
*/

function acao() {
    document.write("Executando...<br/>");
}

//executa de tempo em tempo

// var timer = setInterval(acao,1000);

//encerra a funcao acima se estiver atribuida a uma variavel
//clearInterval(acao);

//espera um tempo para executar (somente uma vez)
//setTimeout(acao, 3000);
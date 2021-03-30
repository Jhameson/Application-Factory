/*
    TÓPICO: Eventos do mouse
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
    TÓPICO: Eventos do mouse
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

var total = 0;

// 1 - criar balão

function criarBalao(){
    var balao = document.createElement("div");
    balao.setAttribute("class","balao")

    var eixoX = Math.floor(Math.random() * 600);
    var eixoY = Math.floor(Math.random() * 300);

    balao.setAttribute("style","left:"+eixoX+"px; top:"+eixoY+"px;");
    balao.setAttribute("onclick","estourar(this)");

    document.body.appendChild(balao);
}

// 2 - estourar balão
function estourar(objeto){
    document.body.removeChild(objeto);

    // contar score
    total++;
    var score = document.getElementById('total');
    score.innerHTML = "Pontuação: "+total;
}
// 3 - carregar jogo
function carregarJogo() {
    setInterval(criarBalao,1500);
}
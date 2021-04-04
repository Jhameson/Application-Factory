/*
    TÓPICO: Classes
*/


//classes
class ListaDeTarefas{
    constructor(){
        this.tarefas = [];
    }
    addTarefa(item){
        this.tarefas.push(item);
        console.log(`Tarefa: ${item} adicionada!`);
        console.log(this.tarefas)
    }
};

const minhasTarefas = new ListaDeTarefas();

document.getElementById('novo').onclick = function() {
    var myTarefa = document.getElementById("nomeTarefa").value;
    minhasTarefas.addTarefa(myTarefa);
}

//exemplo de herança

class umaLista{
    constructor(){
        this.datas = [];
    }
    add(data){
        this.datas.push(data);
        console.log(this.datas);
    }
}

class ListaDeFrutas extends umaLista{
};

const minhasfrutas = new ListaDeFrutas();

document.getElementById('novo2').onclick = function(){
    var myfrutas = document.getElementById("nomeTarefa2").value;
    minhasfrutas.add(myfrutas);
}
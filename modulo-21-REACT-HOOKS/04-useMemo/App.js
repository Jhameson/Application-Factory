import React, { useState, useEffect, useMemo } from 'react'

function App() {

  const [tarefas, setTarefas] = useState([]);

  const [nome, setNome] = useState(['Jhameson']);
  const [input, SetInput] = useState('');


  //USE EFFECT
  //SUBSTITUI TODOS OS CICLOS DE VIDA DOS COMPONENTES
  //pode substituir o componentDidMount()
  //quando carrega o component ele é executado
  useEffect(()=>{
    const tarefasStorage = localStorage.getItem('tarefas');
    if(tarefasStorage){
      setTarefas(JSON.parse(tarefasStorage));
    }
  },[]);
  

  function adicionar(){
    setTarefas([...tarefas,
    input]);
    SetInput('');
  }

  //USE EFFECT
  //SUBSTITUI TODOS OS CICLOS DE VIDA DOS COMPONENTES

  //quando sofre alguma alteração. Pode substituir o componentDidUpdate()
  useEffect(()=> {
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
  }, [tarefas]);

  //USEMEMO
  //evita que haja o return de tudo.
  //so att depois que [tarefas] é alterado
  const totalTarefas = useMemo(()=>tarefas.length, [tarefas]);

  return (
    <div >
      <h1>Hooks</h1>
      <h1>{nome} você tem: {totalTarefas} tarefas</h1>
      <input type="text" value={input} onChange={e=> SetInput(e.target.value)}/>
      <button type="button" onClick={adicionar}>Adicionar</button>
      {tarefas.map(e=>(
        <li key={e}>{e}</li> //percorrer o array tarefas
      ))}
    </div>
  );
}

export default App;

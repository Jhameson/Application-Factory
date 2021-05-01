import React, { useState } from 'react'

function App() {

    //NÃO É MAIS NECESSÁRIO USAR CONSTRUCTOR PARA DESCLARAR AS STATES

    // Declarar uma nova variável de state, na qual chamaremos de "tarefas"
    //Quando queremos alterar o valor do state tarefas nós usamos o setTerafas()
    const [tarefas, setTarefas] = useState([
        'Exemplo de tarefas',
        'Outra tarefas'
    ]);

    const [nome, setNome] = useState(['Jhameson']);
    const [input, SetInput] = useState('');

    function adicionar() {
        setTarefas([...tarefas,
            input]);
        SetInput('');
    }

    return (
        <div >
            <h1>Hooks</h1>
            <h1>{nome}</h1>
            <input type="text" value={input} onChange={e => SetInput(e.target.value)} />
            <button type="button" onClick={adicionar}>Adicionar</button>
            {tarefas.map(e => (
                <li key={e}>{e}</li> //percorrer o array tarefas
            ))}
        </div>
    );
}

export default App;

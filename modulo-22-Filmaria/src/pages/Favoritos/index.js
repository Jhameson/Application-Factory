import {useEffect, useState} from 'react';
//ciclo de vida -- estado

import {Link} from 'react-router-dom'

import './favoritos.css'

//alert melhorado
import { toast } from 'react-toastify';

export default function Favoritos(){

    const [filme, setFilme] = useState([]);

    useEffect(()=>{
        //chamar os getLocalStorage
        const minhaLista = localStorage.getItem('filmes');
        setFilme(JSON.parse(minhaLista) || []);

    },[]);


    function handleDelete(id){
        let filtroFilmes = filme.filter((item)=>{
            return (item.id !== id)
        })
        setFilme(filtroFilmes);
        localStorage.setItem('filmes',JSON.stringify(filtroFilmes));
        toast.success('Filme excluído com sucesso!');
    }

    return(
        <div id="meus-filmes">
            <h1>Favoritos</h1>

            {
                filme.length === 0 && <span>Você ainda não possui nenhum filme salvo! :(</span>
            }

            <ul>
                {
                    filme.map((item)=>{
                        return(
                            <li key={item.id}>

                                <span>{item.nome}</span>

                                <div>
                                    <Link to={`/filme/${item.id}`}>Ver detalhes</Link>
                                    <button onClick={(/*executa apena quando clicar devido ao parametro*/) => handleDelete(item.id)}>Excluir</button>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    );
}

import './filme.css';
import api from '../../services/api'

import { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';

//alert melhorado
import { toast } from 'react-toastify';

export default function Filme() {

    const history = useHistory();

    const { id } = useParams();
    const [filme, setFilme] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        async function load() {
            const response = await api.get(`r-api/?api=filmes/${id}`)

            if (response.data.length === 0) {
                //tetnou acessar um id qu enão existe
                //é direcionado para a home
                history.replace('/');
                return;
            }

            setFilme(response.data);
            setLoading(false)
        }
        load();
        return () => {
            console.log("Componente desmontado!");
        }

    }, [id, history]);

    if (loading) {
        return (
            <div className="filme-info">
                <h1>
                    Carregando...
                </h1>
            </div>
        )
    }

    function salvaFilme(){
        const minhaLista = localStorage.getItem('filmes');
        let filmesSalvos = JSON.parse(minhaLista) || [];

        //verificar se ja tem o filme
        const hasFilme = filmesSalvos.some((filmeSalvo)=>filmeSalvo.id === filme.id);
        //retorna true ou false

        if(hasFilme){
            toast.info("Você já salvou esse filme!");
            return;
        }
        //salvando no localStorage
        filmesSalvos.push(filme);
        localStorage.setItem('filmes', JSON.stringify(filmesSalvos));
        toast.success("Filme salvo com sucesso!")
    }
    return (
        <div className="filme-info" >
            <h1>{filme.nome}</h1>
            <img src={filme.foto} alt={filme.nome} />
            <h3>Sinopse</h3>
            <p>
                {filme.sinopse}
            </p>
            <div className="botoes">
                <button onClick={salvaFilme}>Salvar</button>
                <button>

                    <a target="blank"
                        href={`https://youtube.com/results?search_query=${filme.nome} Trailer`}>Trailer</a>

                </button>
            </div>
        </div>
    );
}


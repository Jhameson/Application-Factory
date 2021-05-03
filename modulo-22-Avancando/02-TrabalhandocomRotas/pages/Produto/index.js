import {Link, useParams} from 'react-router-dom';

export default function Produto() {

    const { id } = useParams();

    return (
      <div>
       <h1>Produto: {id}</h1>
       <Link to="/">Home</Link><br/><br/>
       
      </div>
    );
  }
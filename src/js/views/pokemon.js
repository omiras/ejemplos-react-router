import React, {useState, useEffect} from "react";
import { useParams } from 'react-router';
import { Link } from "react-router-dom";

export const Pokemon = () => {

    const [pokemon, setPokemon] = useState({});

    // Como lo hacemos para recuperar la parte dinámica de esta ruta? Y poder hacer la consulta a la API o Base de Datos para recuperar la información de un pokemon en especifico
    const params = useParams();
    console.log('variable params: ', params);

    useEffect(()=> {
		fetch('https://pokeapi.co/api/v2/pokemon/' + params.pokemonId)
		.then(response => response.json())
		.then(data => setPokemon(data))
		.catch(error => {
			console.log('Oh No! There was a problem: \n', error);
		});
	}, [])

	return (
		<div className="jumbotron">
			<div className="card" style={{ width: "18rem" }}>
				<img src={pokemon.sprites?.front_default} className="card-img-top" alt={pokemon.name} />
				<div className="card-body">
					<h5 className="card-title">{pokemon.name}</h5>
				</div>
			</div>

			<Link to="/">
				<span className="btn btn-primary btn-lg" href="#" role="button">
					Back home
				</span>
			</Link>
		</div>
	);
} 
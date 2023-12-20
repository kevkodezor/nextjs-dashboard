import { Pokemons, SimplePokemon } from '@/app/interfaces';
import { PokemonsList } from '@/app/list';

const getPokemons = async (limit = 56, offset = 0):Promise<SimplePokemon[]> => {
    const data:Pokemons = await fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`)
    .then(res => res.json());

    const res = data.results.map(pokemon => ({
        id: pokemon.url.split('/').at(-2)!,
        name: pokemon.name
    }));
    return res;    
}

export default async function PokemonsPage () {
    const pokemons = await getPokemons();
    
    return (
        <div className='flex flex-col w-full'>
            <span className='text-center text-5xl m-5'>Pokemons List</span>
            <PokemonsList data={pokemons} />
        </div>
    );
}
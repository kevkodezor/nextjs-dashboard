import { PokemonsList } from '@/app/list';
import { Pokemons, SimplePokemon } from '@/app/interfaces';
import { Silkscreen } from 'next/font/google'

const silkscreen = Silkscreen({ subsets: ['latin'], weight: ['400'] }) 

export const metadata = {
    title: 'Dashboard | Pokemon list',
}

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
            <span className={`text-center text-5xl m-5 ${silkscreen.className}`}>Pokemons List</span>
            <PokemonsList data={pokemons} />
        </div>
    );
}
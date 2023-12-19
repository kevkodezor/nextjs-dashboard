import { Pokemons, SimplePokemon } from '@/app/interfaces';
import Image from 'next/image';

const getPokemons = async (limit = 56, offset = 0):Promise<SimplePokemon[]> => {
    const data:Pokemons = await fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`)
    .then(res => res.json());

    const res = data.results.map(pokemon => ({
        id: pokemon.url.split('/').at(-2)!,
        name: pokemon.name
    }))
    return res;    
}

export default async function PokemonsPage () {
    const pokemons = await getPokemons();
    
    return (
        <div className='flex flex-col w-full'>
            <div className='flex flex-wrap gap-10 items-center justify-center'>
                {pokemons.map((pokemon: any) => (
                    <Image
                        alt={pokemon.id}
                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${pokemon.id}.png`}
                        width={100}
                        height={100}
                    />
                ))}
            </div>
        </div>
    );
}
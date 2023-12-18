
const getPokemons = async (limit = 20, offset = 0) => {
    const data = await fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`)
    .then(res => res.json());
    return data;    
}

export default async function PokemonsPage () {
    const { results } = await getPokemons();
    
    return (
        <div className='flex flex-col w-full'>
            {results.map((pokemon:any) => (
                <text key={pokemon.name}>{pokemon.name}</text>
            ))}
        </div>
    );
}
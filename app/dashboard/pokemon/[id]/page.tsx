import { Pokemon } from '@/app/interfaces';

interface Props {
  params: { id: string };
}

const getPokemonById = async (id: string): Promise<Pokemon> => {
  const poke = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, {
    cache: 'force-cache', // change future
  }).then(res => res.json());
  return poke;
}

export default async function PokemonPage({ params }: Props) {
  const pokemon = await getPokemonById(params.id);
  return (
    <div>PokemonPage {params.id}</div>
  )
}

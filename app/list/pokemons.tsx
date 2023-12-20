import { SimplePokemon } from '../interfaces';
import { Card } from '@/app/components';

interface Props {
    data: SimplePokemon[];
}

export const PokemonsList = ({ data }:Props) => {
  return (
      <div className='flex flex-wrap gap-10 items-center justify-center m-2'>
          {data.map((pokemon: any) => (
            <Card key={pokemon.id} pokemon={pokemon} />
          ))}
      </div>
  )
}

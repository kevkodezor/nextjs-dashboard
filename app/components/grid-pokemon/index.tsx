'use client'
import { PokemonsList } from '@/app/list'
import { useAppSelector } from '@/store'

export const GridPokemon = () => {
    const favorite = useAppSelector(state => Object.values(state.pokemons.favorites));
    return <PokemonsList data={favorite} />
}

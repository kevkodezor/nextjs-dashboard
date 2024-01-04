import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { SimplePokemon } from '@/app/interfaces';

interface PokemonState {
    [key: string]: SimplePokemon,
}

const initialState: PokemonState = {
    '1': { id: '1', name: 'bulbasaur' },
}

const pokemonsReducer = createSlice({
    name: 'favorites pokemons',
    initialState,
    reducers: { }
});

export const { } = pokemonsReducer.actions

export default pokemonsReducer.reducer
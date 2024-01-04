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
    reducers: {
        addFavorite(state, action: PayloadAction<SimplePokemon>) {
            
            const poke = action.payload;
            const { id } = poke;

            if (!!state[id]) {
                delete state[id];
                return;
            }

            state[id] = poke;
        }
    }
});

export const { addFavorite } = pokemonsReducer.actions

export default pokemonsReducer.reducer
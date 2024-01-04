import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { SimplePokemon } from '@/app/interfaces';

interface PokemonState {
    [key: string]: SimplePokemon,
}

const getInitialState = (): PokemonState => {
    const favorites = JSON.parse(localStorage.getItem('favorite-pokemon') ?? '{}');
    return favorites;
}

const initialState: PokemonState = {
    ...getInitialState(),
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
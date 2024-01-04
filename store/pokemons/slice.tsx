import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { SimplePokemon } from '@/app/interfaces';

interface PokemonState {
    favorites: { [key: string]: SimplePokemon }
}

// const getInitialState = (): PokemonState => {
//     const favorites = JSON.parse(localStorage.getItem('favorite-pokemon') ?? '{}');
//     return favorites;
// }

const initialState: PokemonState = {
    favorites: {},
}

const pokemonsReducer = createSlice({
    name: 'favorites pokemons',
    initialState,
    reducers: {
        addFavorite(state, action: PayloadAction<SimplePokemon>) {
            
            const poke = action.payload;
            const { id } = poke;

            if (!!state.favorites[id]) {
                delete state.favorites[id];
                return;
            }

            state.favorites[id] = poke;
        },
        setFavorite(state, action: PayloadAction<{[key: string]: SimplePokemon}>) {
            state.favorites = action.payload;
        }
    }
});

export const { addFavorite, setFavorite } = pokemonsReducer.actions

export default pokemonsReducer.reducer
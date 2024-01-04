import { Action, Dispatch, MiddlewareAPI } from '@reduxjs/toolkit';
import { RootState } from '..';

export const localMiddleware = (state: MiddlewareAPI) => {
    return (next: Dispatch) => (action: Action) => {
        next(action);
        if (action.type === 'favorites pokemons/addFavorite') {
            const { pokemons } = state.getState() as RootState;
            localStorage.setItem('favorite-pokemon', JSON.stringify(pokemons));
            return;
        }
    }
}
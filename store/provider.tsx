'use client'

import { Provider } from 'react-redux'
import { store } from '.'
import { useEffect } from 'react';
import { setFavorite } from './pokemons/slice';

interface Props {
    children: React.ReactNode;
}

export const MainProvider = ({ children }: Props) => {

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorite-pokemon') ?? '{}');
    store.dispatch(setFavorite(favorites));
  }, []) ;

  return (
    <Provider store={store}>
        {children}
    </Provider>
  )
}

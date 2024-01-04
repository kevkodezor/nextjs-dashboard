'use client'
import Link from 'next/link'
import Image from 'next/image';
import { IoHeart, IoHeartOutline } from 'react-icons/io5';
import { useAppDispatch, useAppSelector } from '@/store';
import { addFavorite } from '@/store/pokemons/slice';
import { SimplePokemon } from '@/app/interfaces'

interface Props {
    pokemon: SimplePokemon;
}

export const Card = ({ pokemon }: Props) => {

    const { id, name } = pokemon;
    const isFavorite = useAppSelector(state => !!state.pokemons[id]);
    const dispatch = useAppDispatch();

    const onAddPokemon = () => {
        dispatch(addFavorite(pokemon));
    }

    return (
        <div className='mx-auto right-0 mt-2 w-60'>
            <div className='flex flex-col bg-white rounded overflow-hidden shadow-lg'>
                <div className='flex flex-col items-center justify-center text-center p-6 bg-gray-800 border-b h-80'>
                    <Image
                        key={id}
                        alt={name}
                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
                        width={100}
                        height={100}
                        priority={false}
                    />
                    <p className='pt-2 text-lg font-semibold text-gray-50 capitalize'>{name}</p>
                    <div className='mt-5'>
                        <Link 
                            href={`/dashboard/pokemon/${name}`}
                            className='border rounded-full py-2 px-4 text-xs font-semibold text-gray-100'
                        >
                            View Pokemon
                        </Link>
                    </div>
                </div>
                <div
                    className='px-4 py-2 hover:bg-gray-200 flex items-center cursor-pointer'
                    onClick={onAddPokemon}
                >
                    <div className='text-red-600'>
                        {isFavorite ? <IoHeart /> : <IoHeartOutline />}
                    </div>
                    <div className='pl-3'>
                        <p className='text-sm font-medium text-gray-800 leading-none'>
                            {isFavorite ? 'Favorite' : 'Add to favorite'}
                        </p>
                        <p className='text-xs text-gray-500'>
                            {isFavorite ? 'View in favorite' : 'Not added'}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

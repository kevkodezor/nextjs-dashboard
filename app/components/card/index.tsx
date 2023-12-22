import Link from 'next/link'
import Image from 'next/image';
import { SimplePokemon } from '@/app/interfaces'
import { IoHeartOutline } from 'react-icons/io5';

interface Props {
    pokemon: SimplePokemon;
}

export const Card = ({ pokemon }: Props) => {
    return (
        <div className='mx-auto right-0 mt-2 w-60'>
            <div className='flex flex-col bg-white rounded overflow-hidden shadow-lg'>
                <div className='flex flex-col items-center justify-center text-center p-6 bg-gray-800 border-b h-80'>
                    <Image
                        key={pokemon.id}
                        alt={pokemon.name}
                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
                        width={100}
                        height={100}
                        priority={false}
                    />
                    <p className='pt-2 text-lg font-semibold text-gray-50 capitalize'>{pokemon.name}</p>
                    <div className='mt-5'>
                        <Link 
                            href={`/dashboard/pokemon/${pokemon.name}`}
                            className='border rounded-full py-2 px-4 text-xs font-semibold text-gray-100'
                        >
                            View Pokemon
                        </Link>
                    </div>
                </div>
                <Link href='#' className='px-4 py-2 hover:bg-gray-200 flex items-center'>
                    <div className='text-red-600'>
                        <IoHeartOutline />
                    </div>
                    <div className='pl-3'>
                        <p className='text-sm font-medium text-gray-800 leading-none'>
                            Favorite
                        </p>
                        <p className='text-xs text-gray-500'>View in favorites</p>
                    </div>
                </Link>
            </div>
        </div>
    )
}

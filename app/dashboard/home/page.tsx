import Link from 'next/link';
import { Grid } from '@/app/components';

export default function HomePage() {
    return (
        <div className='flex flex-col w-full p-5'>
            <div className='border-solid h-80'>
                <h1 className='font-bold text-5xl'>General info</h1>
                <Grid />
            </div>
            <div className='border-solid h-80'>
                <h2 className='text-3xl font-bold'>Lists</h2>
                <Link href='/dashboard/favorites'>
                    <button
                        type='button'
                        className='bg-gray-900 p-5 rounded-md font-bold hover:bg-gray-700 text-white mt-5'
                    >
                        Favorites pokemons
                    </button>
                </Link>

            </div>
        </div>
    )
}
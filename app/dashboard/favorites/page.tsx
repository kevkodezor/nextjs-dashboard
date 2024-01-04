import { GridPokemon } from '@/app/components';
import { Silkscreen } from 'next/font/google'

const silkscreen = Silkscreen({ subsets: ['latin'], weight: ['400'] })

export const metadata = {
    title: 'Dashboard | Favorites list',
}
export default async function FavoritePage() {

    return (
        <div className='flex flex-col w-full'>
            <span className={`text-center text-5xl m-5 ${silkscreen.className}`}>Favorites Pokemons</span>
            <GridPokemon />
        </div>
    );
}
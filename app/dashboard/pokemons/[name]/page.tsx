import { Metadata } from 'next';
import Image from 'next/image';
import { capitalize } from '@/utils';
import { Pokemon, Pokemons } from '@/app/interfaces';
import { notFound } from 'next/navigation';

interface Props {
    params: { name: string };
}

export async function generateStaticParams() { // en build
    const data: Pokemons = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=150`)
        .then(res => res.json());

    const staticPoke = data.results.map(pokemon => ({
        name: pokemon.name
    }));
    return staticPoke.map(name => name);
    
    // const staticPoke = Array({ length: 150 }).map((v, i) => `${i + 1}`);
    // return staticPoke.map(id => id);
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { name } = await getPokemonById(params.name);
    return {
        title: `Dashboard | ${capitalize(name)}`,
        description: `This pokemon is ${capitalize(name)}`
    }
}

const getPokemonById = async (name: string): Promise<Pokemon> => {
    try {
        const poke = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`, {
            // cache: 'force-cache', // change future
            next: { revalidate: 60 * 60 * 30 * 6 }
        }).then(res => res.json());
        return poke;
    } catch (error) {
        return notFound();
    }
}

export default async function PokemonPage({ params }: Props) {
    const pokemon = await getPokemonById(params.name);
    return (
        <div className="w-full h-screen flex flex-col items-center justify-center text-slate-800">
            <div className="flex flex-col items-center rounded-[20px] mx-auto bg-blue-400 bg-clip-border shadow-lg  p-3">
                <div className="mt-2 mb-8 w-full">
                    <h1 className="px-2 text-xl font-bold text-slate-700 capitalize">
                        #{pokemon.id} {pokemon.name}
                    </h1>
                    <div className="flex flex-col justify-center items-center">
                        <Image
                            src={pokemon.sprites.other?.dream_world.front_default ?? ''}
                            width={150}
                            height={150}
                            alt={`Imagen del pokemon ${pokemon.name}`}
                            className="mb-5"
                        />
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-4 px-2 w-full">

                    <div className="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4  drop-shadow-lg ">
                        <p className="text-sm text-gray-600 font-bold">Types</p>
                        <div className="text-base font-medium text-navy-700 flex">
                            {pokemon.types.map(type => (
                                <p key={type.slot} className="mr-2 capitalize">{type.type.name}</p>
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4  drop-shadow-lg ">
                        <p className="text-sm text-gray-600 font-bold">Peso</p>
                        <span className="text-base font-medium text-navy-700 flex">
                            {pokemon.weight}
                        </span>
                    </div>

                    <div className="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4  drop-shadow-lg">
                        <p className="text-sm text-gray-600 font-bold">Regular Sprites</p>
                        <div className="flex justify-center">

                            <Image
                                src={pokemon.sprites.front_default}
                                width={100}
                                height={100}
                                alt={`sprite ${pokemon.name}`}
                            />

                            <Image
                                src={pokemon.sprites.back_default}
                                width={100}
                                height={100}
                                alt={`sprite ${pokemon.name}`}
                            />

                        </div>
                    </div>

                    <div className="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4  drop-shadow-lg">
                        <p className="text-sm text-gray-600 font-bold">Shiny Sprites</p>
                        <div className="flex justify-center">
                            <Image
                                src={pokemon.sprites.front_shiny}
                                width={100}
                                height={100}
                                alt={`sprite ${pokemon.name}`}
                            />
                            <Image
                                src={pokemon.sprites.back_shiny}
                                width={100}
                                height={100}
                                alt={`sprite ${pokemon.name}`}
                            />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

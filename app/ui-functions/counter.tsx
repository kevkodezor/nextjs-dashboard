'use client'
import { useAppDispatch, useAppSelector } from '@/store';
import { downCount, resetCount, upCount } from '@/store/counter/slice';
import { capitalize } from '@/utils';

export const Counter = () => {

    const count = useAppSelector(state => state.counter.count);
    const setCount = useAppDispatch();

    return (
        <>
            <span className='text-9xl'>{count}</span>
            <div className='flex'>
                <button
                    className='flex items-center justify-center rounded-md bg-gray-900 text-white hover:bg-gray-600 disabled:bg-gray-300 p-1 m-2 w-10'
                    onClick={() => setCount(downCount())}
                    disabled={count === 0}
                >
                    -
                </button>
                <button
                    className='flex items-center justify-center rounded-md bg-gray-900 text-white hover:bg-gray-600 p-1 m-2 w-10'
                    onClick={() => setCount(upCount())}
                >
                    +
                </button>
            </div>
            {/* <button
                className='flex items-center justify-center rounded-md bg-gray-900 text-white hover:bg-gray-600 p-1 m-2 w-24'
                onClick={() => setCount(resetCount(count))}
            >
                {capitalize('reset')}
            </button> */}
        </>
    )
}

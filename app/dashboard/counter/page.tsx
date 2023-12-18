'use client'
import { useState } from 'react';

export default function CounterPage () {

    const [count, setCount] = useState(0);

    return (
        <div className='flex flex-col justify-center items-center w-full'>
            <span className='text-9xl'>{count}</span>
            <div className='flex'>
                <button
                    className='flex items-center justify-center rounded-md bg-gray-900 text-white hover:bg-gray-600 disabled:bg-gray-300 p-1 m-2 w-9'
                    onClick={() => setCount(count-1)}
                    disabled={count === 0}
               >
                    -
                </button>
                <button
                    className='flex items-center justify-center rounded-md bg-gray-900 text-white hover:bg-gray-600 p-1 m-2 w-9'
                    onClick={() => setCount(count+1)}
                >
                    +
                </button>
            </div>
        </div>
    )
}
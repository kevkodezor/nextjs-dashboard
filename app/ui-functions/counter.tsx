'use client'
import { useState } from 'react'

interface Props {
    value?: number;
}

export const Counter = ({ value = 0}: Props) => {
    const [count, setCount] = useState(value);
    return (
        <>
            <span className='text-9xl'>{count}</span>
            <div className='flex'>
                <button
                    className='flex items-center justify-center rounded-md bg-gray-900 text-white hover:bg-gray-600 disabled:bg-gray-300 p-1 m-2 w-9'
                    onClick={() => setCount(count - 1)}
                    disabled={count === 0}
                >
                    -
                </button>
                <button
                    className='flex items-center justify-center rounded-md bg-gray-900 text-white hover:bg-gray-600 p-1 m-2 w-9'
                    onClick={() => setCount(count + 1)}
                >
                    +
                </button>
            </div>
        </>
    )
}

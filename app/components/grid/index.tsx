'use client'
import { SimpleWidget } from '..';
import { useAppSelector } from '@/store';

export const Grid = () => {

    const valueCount = useAppSelector(state => state.counter.count);

    return (
        <div className='flex flex-wrap items-center'>
            <SimpleWidget
                label='Counter'
                title={`${valueCount}`}
                subtitle='Page counter'
                href='/dashboard/counter'
            />
        </div>
    );
}
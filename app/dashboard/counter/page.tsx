import { Counter } from '@/app/ui-functions'

export const metadata = {
    title: 'Dashboard | Counter',
    description: 'this is a counter'
}

export default function CounterPage () {
    // se pueden tener las peticiones a DB
    // siempre y cuando no se usen hooks
    // ya que esto es un sever component
    // y se renderiza una sola vez
    return (
        <div className='flex flex-col justify-center items-center w-full'>
            <text className='text-2xl'>This value you can see in home page</text>
            <Counter value={0} />
        </div>
    )
}
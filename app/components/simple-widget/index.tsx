import Link from 'next/link';

interface Props {
    title: string;
    subtitle?: string;
    label?: string;
    icon?: React.ReactNode;
    href?: string;
}

export const SimpleWidget = ({ label, icon, title, subtitle, href}:Props) => {
    return (
        <div className='bg-gray-200 shadow-xl p-3 sm:min-w-[25%] w-48 rounded-2xl border-1 border-gray-50 mr-5 mt-5'>
            <div className='flex flex-col'>
                <div>
                    <h2 className='font-bold text-gray-500 text-center'>{label}</h2>
                </div>
                <div className='my-3'>
                    <div className='flex flex-row items-center justify-center space-x-1 '>
                        <div id='icon'>
                            {/* Icono irá aquí */}
                            {/* {icon} */}
                        </div>
                        <div id='temp' className='text-center'>
                            <h4 className='text-4xl'>{title}</h4>
                            <p className='text-xs text-gray-500'>{subtitle}</p>
                        </div>
                    </div>
                </div>
                {href && (
                    <div className='w-full place-items-end text-right border-t-2 border-gray-100 mt-2'>
                        <Link href='/dashboard/counter' className='text-indigo-600 text-xs font-medium'>More</Link>
                    </div>
                )}
            </div>
        </div>
    )
}
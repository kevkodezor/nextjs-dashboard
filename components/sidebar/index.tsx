import Image from 'next/image'
import { IoCalculatorOutline, IoHomeOutline, IoLogoReact } from 'react-icons/io5';
import { ItemsSideBar } from './items';

const itemsMenu = [
    {
        route: '/dashboard/home',
        icon: <IoHomeOutline />,
        title: 'Home',
        subtitle: 'visualize statics'
    },
    {
        route: '/dashboard/counter',
        icon: <IoCalculatorOutline />,
        title: 'Counter',
        subtitle: 'calculator'
    },
]

export const SideBar = () => {
  return (
      <div
        id='menu'
        className='bg-gray-900 min-h-screen z-10 text-slate-300 w-64 left-0 h-screen overflow-y-scroll'
        style={{ width: '300px' }}
    >
          <div id='logo' className='my-4 px-6'>
              <h1 className='text-lg md:text-2xl font-bold text-white'>
                <span className='flex items-center justify-center text-blue-500'>
                    <IoLogoReact className='mr-2' /> Dashboard
                </span>
                </h1>
          </div>

          <div id='profile' className='px-6 py-10'>
              <p className='text-slate-500'>Welcome back</p>
              <a href='#' className='inline-flex space-x-2 items-center'>
                  <span>
                    <Image 
                        className='rounded-full w-8 h-8'
                        src='https://images.unsplash.com/photo-1542909168-82c3e7fdca5c'
                        alt='img dashboard'
                        width={10}
                        height={10}
                    />
                  </span>
                  <span className='text-sm md:text-base font-bold'>
                    Kevin Torres
                  </span>
              </a>
          </div>

          <div id='nav' className='w-full px-6'>
            {itemsMenu.map(item => (
                <ItemsSideBar
                    route={item.route}
                    icon={item.icon}
                    title={item.title}
                    subtitle={item.subtitle}
                />
            ))}
          </div>
      </div>
  )
}

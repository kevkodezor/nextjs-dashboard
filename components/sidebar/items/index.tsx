'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface Props {
  route: string;
  icon: JSX.Element;
  title: string;
  subtitle: string;
}

export const ItemsSideBar = ({ route, icon, title, subtitle }: Props) => {
  const path = usePathname();
  return (
    <Link
      href={route}
      className={`w-full px-2 inline-flex space-x-2 items-center border-b border-slate-700 py-3 rounded-md ${(path !== route ? '' : 'bg-blue-800')} hover:bg-white/5 transition ease-linear duration-150`}
    >
      <div>
        {icon}
      </div>
      <div className='flex flex-col'>
        <span className='text-lg font-bold leading-5 text-white'>{title}</span>
        <span className='text-sm text-white/50 hidden md:block'>{subtitle}</span>
      </div>
    </Link>
  )
}

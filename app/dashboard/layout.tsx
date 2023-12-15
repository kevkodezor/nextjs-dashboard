import type { Metadata } from 'next'
import { SideBar } from '@/components'

export const metadata: Metadata = {
    title: 'Dashboard',
    description: 'Generated by create next app',
}

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className='bg-slate-100 overflow-y-scroll w-screen h-screen antialiased text-slate-300 selection:bg-blue-600 selection:text-white'>
            <div className='flex w-full text-slate-900'>
                <SideBar />
                {children}
            </div>
        </div>
    )
}
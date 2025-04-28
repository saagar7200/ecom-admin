
'use client'
import SideBar from '@/components/layout/sidebar';
import { useAuth } from '@/context/auth.context';
import { useRouter } from 'next/navigation';
import React from 'react'

interface IProps {
    children: React.ReactNode;
}

const Layout: React.FC<IProps> = ({ children }) => {
    const {isAuthenticated} = useAuth()
    const router = useRouter()
    if(!isAuthenticated){
        router.replace('/login')
    }
    return (
        <div className='flex h-full w-ful '>
            <div className='h-full w-[250px] border-r border-gray-400'>
                {/* <Header /> */}
                <SideBar/>
            </div>
            <div className='mb-10  w-full flex flex-col flex-1'>
                <div className='min-h-[80px] w-full border-b border-gray-400'>
                    Header
                </div>
                <div className='flex-1 '>

                {children}
                </div>
            </div>
            

        </div>
    )
}

export default Layout
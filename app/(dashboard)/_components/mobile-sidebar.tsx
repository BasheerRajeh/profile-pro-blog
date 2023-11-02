'use client'

import { Menu } from 'lucide-react'

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'

import { Sidebar } from '.'

const MobileSidebar = () => {
    return (
        <Sheet>
            <SheetTrigger className='pe-4 transition hover:opacity-75 md:hidden'>
                <Menu />
            </SheetTrigger>
            <SheetContent
                side='left'
                className='w-56 p-0'
            >
                <Sidebar />
            </SheetContent>
        </Sheet>
    )
}

export default MobileSidebar

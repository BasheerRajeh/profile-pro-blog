import { cn } from '@/lib/utils'

import { Logo } from './'
import SidebarRoutes from './sidebar-routes'

type SidebarProps = React.ComponentPropsWithoutRef<'div'>

const Sidebar: React.FC<SidebarProps> = ({ className }) => {
    return (
        <div className={cn('flex h-full flex-col overflow-y-auto', className)}>
            <div className='p-6'>
                <Logo />
            </div>
            <div className='flex w-full flex-col'>
                <SidebarRoutes />
            </div>
        </div>
    )
}

export default Sidebar

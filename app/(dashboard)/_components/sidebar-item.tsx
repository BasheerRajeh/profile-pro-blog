'use client'

import { usePathname, useRouter } from 'next/navigation'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { LinkState, SidebarLink } from '@/types/links'

type SidebarItemProps = {
    route: SidebarLink
} & React.ComponentPropsWithoutRef<'div'>

const SidebarItem: React.FC<SidebarItemProps> = ({ route }) => {
    const { href, icon, title, state } = route
    const router = useRouter()
    const isActive = href === usePathname()

    const handleRoute = () => {
        if (state !== LinkState.SOON) {
            router.push(href)
        }
    }

    return (
        <Button
            className={cn(
                'w-full items-center gap-x-4 rounded-s-full border-e-2 border-transparent px-4 py-6 hover:bg-sky-500/5',
                {
                    'border-sky-400 bg-sky-500/10 font-bold': isActive,
                },
                {
                    'cursor-not-allowed text-muted-foreground hover:bg-transparent hover:text-muted-foreground':
                        state === LinkState.SOON,
                },
            )}
            variant='ghost'
            onClick={handleRoute}
        >
            {icon}
            <span className='grow select-none text-start'>{title}</span>
            {state && state !== LinkState.AVAILABLE && (
                <span
                    className={cn(
                        'w-10 -rotate-45 select-none overflow-hidden whitespace-nowrap rounded-full bg-blue-200 px-1 py-0.5 text-[10px] font-bold',
                        {
                            'animate-pulse': state === LinkState.SOON,
                        },
                    )}
                >
                    {state}
                </span>
            )}
        </Button>
    )
}

export default SidebarItem

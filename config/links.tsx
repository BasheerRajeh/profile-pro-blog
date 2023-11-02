import { Blocks, Pencil } from 'lucide-react'

import { LinkState, SidebarLink } from '@/types/links'

export const PUBLIC_ROUTES: SidebarLink[] = [
    {
        href: '/blogs',
        title: 'Blogs',
        icon: <Pencil size={22} />,
        state: LinkState.SOON,
    },
    {
        href: '/projects',
        title: 'Projects',
        icon: <Blocks size={22} />,
        state: LinkState.SOON,
    },
]

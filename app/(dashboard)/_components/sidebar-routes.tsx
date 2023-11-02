import { PUBLIC_ROUTES } from '@/config/links'

import SidebarItem from './sidebar-item'

const SidebarRoutes = () => {
    return (
        <>
            {PUBLIC_ROUTES.map((route) => (
                <SidebarItem
                    key={route.href}
                    route={route}
                />
            ))}
        </>
    )
}

export default SidebarRoutes

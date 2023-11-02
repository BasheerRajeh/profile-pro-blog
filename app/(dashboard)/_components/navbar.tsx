import { getCurrentUser } from '@/lib/get-current-user'

import MobileSidebar from './mobile-sidebar'
import UserControlMenu from './user-control-menu'

const Navbar = async () => {
    const user = await getCurrentUser()

    return (
        <div className='flex h-full items-center justify-between p-4'>
            <div>
                <MobileSidebar />
            </div>
            <UserControlMenu user={user} />
        </div>
    )
}

export default Navbar

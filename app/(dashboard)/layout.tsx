import { Sidebar } from './_components'
import Navbar from './_components/navbar'

type DashboardProps = {
    children: React.ReactNode
}

const DashboardLayout: React.FC<DashboardProps> = ({ children }) => {
    return (
        <div className='mx-auto flex h-screen'>
            <div className='z-50 hidden h-full w-56 border-e-[1px] md:block'>
                <Sidebar />
            </div>
            <div className='flex h-full grow flex-col'>
                <div className='z-20 h-[80px] overflow-hidden border-b-[1px]'>
                    <Navbar />
                </div>
                <div className='grow overflow-x-hidden'>{children}</div>
            </div>
        </div>
    )
}

export default DashboardLayout

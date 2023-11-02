/**
 * Home Page
 */
export default function Home() {
    return (
        <div>
            <h1 className='text-red-700'>
                Hello{' '}
                <span className='delay-300 hover:animate-spin hover:text-blue-600'>
                    Profile
                </span>{' '}
                Projects Blog
            </h1>
            <div className='h-12 w-12 bg-red-700 delay-300 hover:animate-spin' />
        </div>
    )
}

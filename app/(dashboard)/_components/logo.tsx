import Image from 'next/image'

const Logo = () => {
    return (
        <Image
            width={150}
            height={45}
            src='/images/logo.svg'
            alt=''
            draggable='false'
        />
    )
}

export default Logo

'use client'

import { User } from '@prisma/client'
import { LogOutIcon, User2Icon } from 'lucide-react'
import { signIn, signOut } from 'next-auth/react'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

type UserControlMenuProps = {
    user: User | undefined
}

const UserControlMenu: React.FC<UserControlMenuProps> = ({ user }) => {
    if (!user)
        return (
            <Button
                variant='ghost'
                onClick={() =>
                    signIn('google', { redirect: true, callbackUrl: '/' })
                }
            >
                Sign in
            </Button>
        )
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Avatar>
                    <AvatarImage
                        src={user.image as string}
                        alt={`${user.name}'s picture`}
                    />
                    <AvatarFallback>
                        <User2Icon size={32} />
                    </AvatarFallback>
                </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent
                align='end'
                className='max-w-[200px]'
            >
                <DropdownMenuItem onClick={() => signOut()}>
                    <LogOutIcon className='mr-2 h-4 w-4' />
                    <span>Log out</span>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default UserControlMenu

import { ReactNode } from 'react'

/**
 * The basic type of a link.
 */
export type Link = {
    /**
     * The title of the link.
     */
    title: string
    /**
     * The URL of the link.
     */
    href: string
}

export const LinkState = Object.freeze({
    AVAILABLE: 'AVAILABLE',
    NEW: 'NEW',
    SOON: 'SOON',
} as const)

/**
 * The Sidebar link.
 */
export type SidebarLink = {
    /**
     * The icon will be displayed with the link.
     */
    icon: ReactNode
    /**
     * The state of tag that will be displayed.
     */
    state?: (typeof LinkState)[keyof typeof LinkState]
} & Link

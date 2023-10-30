import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import '@/public/styles/globals.css'
import { site } from '@/config/site'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: {
        default: site.title,
        template: `%s ${site.titleTemplate}`,
    },
    description: site.description,
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    twitter: {
        title: site.name,
        card: 'summary_large_image',
        site: 'BasheerRajeh',
        creator: 'BasheerRajeh',
    },
    keywords: site.keywords,
    openGraph: {
        url: `${site.url}`,
        type: 'website',
        title: site.title,
        siteName: site.title,
        description: site.description,
        locale: 'en-US',
    },
    manifest: '/favicon/site.webmanifest',
    icons: {
        icon: '/favicon/favicon.svg',
        shortcut: '/favicon/favicon.svg',
        apple: [
            {
                url: '/favicon/apple-touch-icon.png',
                sizes: '180x180',
                type: 'image/png',
            },
        ],
        other: [...site.favicons],
    },
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang='en'>
            <body className={inter.className}>{children}</body>
        </html>
    )
}

import { type FC } from 'react'
import { type Metadata } from 'next'
import { ColorSchemeScript, MantineProvider } from '@mantine/core'
import '@mantine/core/styles.css'
import { iranYekanFonts } from '@core/constants/fonts/iranYekan'
import { mantineThemeObject } from '@core/constants/configs/mantine'

import '@styles/globals.css'

export const metadata: Metadata = {
    title: 'Atomic Design Folder Structure',
}

const RootLayout: FC<{ children: JSX.Element }> = ({ children }) => {
    return (
        <html>
            <head>
                <ColorSchemeScript />
            </head>
            <body className={`${iranYekanFonts.variable} font-iranYekan`}>
                <MantineProvider theme={mantineThemeObject}>{children}  سارا موسوی</MantineProvider>
            </body>
        </html>
    )
}

export default RootLayout

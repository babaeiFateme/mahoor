import { type FC } from 'react'
import { type Metadata } from 'next'
import { Button, ColorSchemeScript, MantineProvider } from '@mantine/core'
import '@mantine/core/styles.css'

import { mantineThemeObject } from '@core/constants/configs/mantine'
import { iranYekanFonts } from '@core/constants/fonts/iranYekan'

import '@styles/globals.css'

export const metadata: Metadata = {
    title: ' رستوران ماهور',
    description: 'بزرگترین رستوران خاورمیانه',
}

const RootLayout: FC<{ children: JSX.Element }> = ({ children }) => {
    return (
        <html>
            <head>
                <ColorSchemeScript />
            </head>
            <body className={`${iranYekanFonts.variable} font-iranYekan`}>
                <MantineProvider theme={mantineThemeObject}>{children}</MantineProvider>
            </body>
        </html>
    )
}

export default RootLayout

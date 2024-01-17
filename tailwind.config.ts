import type { Config } from 'tailwindcss'

const config: Config = {
    important: true,
    content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
    theme: {
        extend: {
            fontFamily: {
                iranYekan: ['var(--font-iran-yekan)'],

            }
        }
    },
    plugins: [],
    corePlugins: {
        preflight: false,
    },
}

export default config

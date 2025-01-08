// @ts-check
import { defineConfig } from 'astro/config';

import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
    integrations: [mdx()],
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: `@use '@styles/base/variables' as *;`,
                }
            }
        },
        resolve: {
            alias: {
                '@styles': '/src/styles'
            }
        }
    },
});
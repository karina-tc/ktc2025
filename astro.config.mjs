// @ts-check
import { defineConfig } from 'astro/config';

import mdx from '@astrojs/mdx';
import yaml from '@rollup/plugin-yaml';

// https://astro.build/config
export default defineConfig({
    integrations: [mdx()],
    vite: {
        plugins: [yaml()],
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
    markdown: {
        shikiConfig: {
            // Use light/dark theme
            themes: {
                light: 'rose-pine-dawn',
                dark: 'rose-pine-moon',
            }
        }
    }
});
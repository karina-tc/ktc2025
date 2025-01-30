// @ts-check
import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify/functions';

import mdx from '@astrojs/mdx';
import yaml from '@rollup/plugin-yaml';
import partytown from '@astrojs/partytown';

// https://astro.build/config
export default defineConfig({
    output: 'server',
    adapter: netlify({
        edgeMiddleware: true
    }),
    integrations: [
        mdx(),
        partytown({
            config: {
                forward: ["dataLayer.push"],
            },
        }),
    ],
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
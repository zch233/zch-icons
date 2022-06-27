import { defineNuxtConfig } from 'nuxt';
import Components from 'unplugin-vue-components/vite';
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    typescript: {
        shim: false,
    },
    app: {
        head: {
            titleTemplate: `%s - 古珀图标库`,
            viewport: 'width=device-width, initial-scale=1',
            htmlAttrs: {
                lang: 'zh-Hans',
            },
            link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
        },
    },
    vite: {
        plugins: [
            Components({
                resolvers: [NaiveUiResolver()], // Automatically register all components in the `components` directory
            }),
        ],
        // @ts-expect-error: Missing ssr key
        ssr: {
            noExternal: ['moment', 'icon-vue3', 'naive-ui', '@juggle/resize-observer', '@css-render/vue3-ssr'],
        },
        optimizeDeps: {
            include: ['date-fns-tz/esm/formatInTimeZone'],
        },
    },
    css: ['@/assets/styles/atom.min.css', '@/assets/styles/global.less'],
    build: {
        transpile: ['naive-ui', 'vueuc', '@css-render/vue3-ssr', '@juggle/resize-observer'],
    },
    buildModules: [
        [
            '@nuxt-modules/compression',
            {
                ext: '.gz',
            },
        ],
    ],
    // nitro: {
    //     commonJS: {
    //         dynamicRequireTargets: [
    //           './src/cat',
    //         ],
    //     }
    // }
});

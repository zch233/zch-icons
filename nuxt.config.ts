import { defineNuxtConfig } from 'nuxt';

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
    css: ['@/assets/styles/reset.css', '@/assets/styles/global.less'],
    build: {},
});

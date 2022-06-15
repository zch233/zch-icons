import { defineNuxtConfig } from 'nuxt';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    typescript: {
        shim: false,
    },
    app: {
        head: {
            title: '古珀图标',
            titleTemplate: (title: string) => `${title} - 古珀图标`,
            viewport: 'width=device-width, initial-scale=1',
            htmlAttrs: {
                lang: 'zh-Hans',
            },
            link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
        },
    },
    css: [],
    build: {},
});

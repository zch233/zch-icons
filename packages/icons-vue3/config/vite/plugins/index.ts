import { configPluginVue } from './pluginVue';
import { configPluginVueJsx } from './pluginVueJsx';
import { ConfigEnv } from 'vite';
import { configPluginHtml } from './vitePluginHtml';
import { configPluginVisualizer } from './rollupPluginVisualizer';
import { configPluginCompression } from './vitePluginCompression';
import { configPluginCertificate } from './vitePluginMkcert';
import { configPluginVueSetupExtend } from './vitePluginVueSetupExtend';

export const createVitePlugins = ({ mode, command }: ConfigEnv, viteEnv: ViteEnv) => {
    const isBuild = command === 'build';
    const { VITE_SEE_VISUALIZER, VITE_LISTEN_HTTPS } = viteEnv;
    // https://github.com/vitejs/awesome-vite#plugins
    // vite-plugin-pages // 自动根据目录生成路由
    const plugins = [
        configPluginVue(viteEnv),
        configPluginVueJsx(),
        configPluginVueSetupExtend(), // 支持在 setup 上使用组件 name
        configPluginHtml(isBuild, viteEnv),
    ];

    if (VITE_LISTEN_HTTPS) plugins.push(configPluginCertificate());

    if (VITE_SEE_VISUALIZER) plugins.push(configPluginVisualizer());

    if (isBuild) {
        plugins.push(configPluginCompression(viteEnv));
    }
    return plugins;
};

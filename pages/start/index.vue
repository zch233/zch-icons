<template>
    <div class="start">
        <div class="container start-header">
            <div class="start-header-top">
                <div>
                    <h1>开始使用 Gupo Icons</h1>
                    <p>在您的网站上获取图标的最简单方法。这是您自己的 Gupo Icons 的自定义版本，所有版本都仅捆绑了您需要的图标，工具和设置。</p>
                </div>
                <img src="~/assets/start/start-illustration.svg" alt="" />
            </div>
            <ul class="start-header-step">
                <li class="start-header-step-item">
                    <b>1</b>
                    <p>安装</p>
                    <span>使用 npm 或者 yarn 包工具创建。</span>
                </li>
                <li class="start-header-step-item">
                    <b>2</b>
                    <p>使用</p>
                    <span>开始使用我们的 <NuxtLink to="/docs">简单语法</NuxtLink> 在项目中放置图标。</span>
                </li>
                <li class="start-header-step-item">
                    <b>3</b>
                    <p>完成</p>
                    <span>是时候使用 color, size & rotate 等属性定制你的图标!</span>
                </li>
            </ul>
        </div>
        <div class="start-main">
            <div class="container">
                <p class="start-main-title">安装</p>
                <p class="start-main-subtitle">语义化的矢量图形。使用图标组件，你需要安装 gupo-icons 图标组件包：</p>
                <pre class="start-main-code">
            <code v-html="getHighlightCode(`
    yarn add gupo-icons-vue3

    # or with npm

    npm install --save gupo-icons-vue3`, 'bash')" />
          </pre>
                <p class="start-main-title" @click="startToDesign">设计师专属</p>
                <p class="start-main-subtitle">
                    安装 <a href="https://kitchen.alipay.com" target="_blank">Kitchen Sketch 插件 💎</a>，就可以一键拖拽使用海量图标，还可以关联自有项目。
                </p>
                <p class="start-main-title">在更多的地方使用...</p>
                <ul class="start-main-more">
                    <li class="start-main-more-item"><img src="~/assets/start/vue.svg" alt="" />Vue2</li>
                    <li class="start-main-more-item"><img src="~/assets/start/vue.svg" alt="" />Vue3</li>
                    <li class="start-main-more-item"><img src="~/assets/start/react.svg" alt="" />React</li>
                    <li class="start-main-more-item"><img src="~/assets/start/scss.svg" alt="" />SCSS</li>
                    <li class="start-main-more-item"><img src="~/assets/start/less.svg" alt="" />Less</li>
                    <li class="start-main-more-item"><img src="~/assets/start/wordPress.svg" alt="" />WordPress</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup>
import { setPermission, permission } from '~/store';
import { getHighlightCode } from '~/utils';

const startToDesign = () => {
    setPermission('design', !permission.design);
    window.localStorage.setItem('permissionDesign', permission.design && '1');
};
useHead({
    title: '开始',
});
</script>

<style scoped lang="less">
.start {
    &-header {
        padding: 64px 0;
        &-top {
            display: flex;
            align-items: center;
            justify-content: space-between;
            h1 {
                font-size: 40px;
                margin: 40px 0;
            }
            p {
                font-size: 20px;
                max-width: 36vw;
            }
            img {
                width: 24vw;
                min-width: 360px;
            }
        }
        &-step {
            display: flex;
            align-items: center;
            justify-content: space-between;
            list-style: none;
            padding: 0;
            margin: 0 -12px;
            &-item {
                padding: 48px 12px 0;
                b {
                    background-color: #fab005;
                    color: #fff;
                    border-radius: 50%;
                    font-size: 20px;
                    width: 32px;
                    font-weight: bolder;
                    height: 32px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                p {
                    font-size: 24px;
                    margin: 24px 0 15px;
                }
                span {
                    font-size: 16px;
                    line-height: 1.4;
                }
                a {
                    color: #146ebe;
                    text-decoration: underline;
                }
            }
        }
    }
    &-main {
        background-color: #f0f1f3;
        padding: 40px 0 80px;
        &-title {
            font-size: 32px;
            margin: 48px 0 20px;
        }
        &-subtitle {
            font-size: 16px;
            a {
                color: #146ebe;
            }
        }
        &-code {
            background-color: #fff;
            border-radius: 8px;
        }
        &-more {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            list-style: none;
            padding: 0;
            &-item {
                width: 32%;
                background-color: #fff;
                border-radius: 8px;
                padding: 14px 24px;
                margin-bottom: 2%;
                font-size: 16px;
                border: 2px solid #fff;
                cursor: pointer;
                &:hover {
                    border-color: #74c0fc;
                }
                img {
                    width: 26px;
                    margin-right: 16px;
                }
            }
        }
    }
}
</style>

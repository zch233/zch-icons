<template>
    <div class="nuxtApp">
        <header class="nuxtApp-header">
            <NuxtLink to="/">
                <b class="logo" data-word="GUPO">
                    <span class="white">GUPO</span>
                </b>
            </NuxtLink>
            <ul class="nav">
                <li class="nav-item"><NuxtLink to="/start">Start</NuxtLink></li>
                <li class="nav-item"><NuxtLink to="/design">Design</NuxtLink></li>
                <li class="nav-item"><NuxtLink to="/docs">Docs</NuxtLink></li>
                <li class="nav-item"><NuxtLink to="/icons">Icons</NuxtLink></li>
                <li class="nav-item"><NuxtLink to="https://codeup.aliyun.com/gupo/node-modules/gupo-icons" target="_blank">Codeup</NuxtLink></li>
            </ul>
            <div class="options">
                <NTooltip v-if="permission.design" placement="left" trigger="hover">
                    <span>上传</span>
                    <template #trigger>
                        <Icon @click="uploadModalVisible = true"
                            ><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1024 1024">
                                <path
                                    d="M518.3 459a8 8 0 0 0-12.6 0l-112 141.7a7.98 7.98 0 0 0 6.3 12.9h73.9V856c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V613.7H624c6.7 0 10.4-7.7 6.3-12.9L518.3 459z"
                                    fill="currentColor"
                                ></path>
                                <path
                                    d="M811.4 366.7C765.6 245.9 648.9 160 512.2 160S258.8 245.8 213 366.6C127.3 389.1 64 467.2 64 560c0 110.5 89.5 200 199.9 200H304c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8h-40.1c-33.7 0-65.4-13.4-89-37.7c-23.5-24.2-36-56.8-34.9-90.6c.9-26.4 9.9-51.2 26.2-72.1c16.7-21.3 40.1-36.8 66.1-43.7l37.9-9.9l13.9-36.6c8.6-22.8 20.6-44.1 35.7-63.4a245.6 245.6 0 0 1 52.4-49.9c41.1-28.9 89.5-44.2 140-44.2s98.9 15.3 140 44.2c19.9 14 37.5 30.8 52.4 49.9c15.1 19.3 27.1 40.7 35.7 63.4l13.8 36.5l37.8 10C846.1 454.5 884 503.8 884 560c0 33.1-12.9 64.3-36.3 87.7a123.07 123.07 0 0 1-87.6 36.3H720c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h40.1C870.5 760 960 670.5 960 560c0-92.7-63.1-170.7-148.6-193.3z"
                                    fill="currentColor"
                                ></path></svg
                        ></Icon>
                    </template>
                </NTooltip>
                <NButton v-if="permission.publish" type="warning">发布</NButton>
            </div>
        </header>
        <NMessageProvider>
            <NuxtPage />
        </NMessageProvider>
        <NModal v-model:show="uploadModalVisible" :closable="true">
            <div class="uploadModal">
                <NUpload :multiple="true" :directory-dnd="true" action="https://www.mocky.io/v2/5e4bafc63100007100d8b70f">
                    <NUploadDragger>
                        <div style="margin-bottom: 12px">
                            <Icon size="48">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <path
                                        d="M80 152v256a40.12 40.12 0 0 0 40 40h272a40.12 40.12 0 0 0 40-40V152"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="32"
                                    ></path>
                                    <rect
                                        x="48"
                                        y="64"
                                        width="416"
                                        height="80"
                                        rx="28"
                                        ry="28"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-linejoin="round"
                                        stroke-width="32"
                                    ></rect>
                                    <path
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="32"
                                        d="M320 304l-64 64l-64-64"
                                    ></path>
                                    <path
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="32"
                                        d="M256 345.89V224"
                                    ></path>
                                </svg>
                            </Icon>
                        </div>
                        <NText style="font-size: 16px"> 点击或者拖动文件到该区域来上传 </NText>
                        <NP depth="3" style="margin: 8px 0 0 0"> 请不要上传敏感数据，比如你的银行卡号和密码，信用卡号有效期和安全码 </NP>
                    </NUploadDragger>
                </NUpload>
                <NButton>上传</NButton>
            </div>
        </NModal>
    </div>
</template>
<script setup>
import { permission, setPermission } from './store';
import Icon from 'icon-vue3';

onMounted(() => {
    setPermission('design', window.localStorage.getItem('permissionDesign') === '1');
    setPermission('publish', window.localStorage.getItem('permissionPublish') === '1');
});

const uploadModalVisible = ref(false);
const uploadSvg = async () => {
    const formData = new FormData();
    formData.append('category', 'filled');
    const data = await $fetch('/api/uploadSvg', {
        method: 'POST',
        headers: {
            'Content-Type': 'multipart/form-data',
        },
        data: formData,
    });
};
</script>
<style scoped lang="less">
.nuxtApp {
    background-color: #fff;
    * {
        margin: 0;
        padding: 0;
    }
    & &-header {
        display: flex;
        padding: 16px 0;
        max-width: 80vw;
        margin: 0 auto;
        align-items: center;
        .logo {
            font-size: 26px;
            position: relative;
            .white::before {
                content: '';
                position: absolute;
                left: 0;
                top: 15px;
                width: 100%;
                height: 3px;
                background: #fff;
                z-index: 4;
                animation: whiteMove 3s ease-out infinite;
            }

            &::before {
                content: attr(data-word);
                position: absolute;
                top: 0;
                left: 0.5px;
                height: 0;
                color: rgba(0, 0, 0, 0.9);
                overflow: hidden;
                z-index: 2;
                animation: redShadow 1s ease-in infinite;
                -webkit-filter: contrast(200%);
                text-shadow: 0.1px 0 0 red;
            }

            &::after {
                content: attr(data-word);
                position: absolute;
                top: 0;
                left: -3px;
                height: 36px;
                color: rgba(0, 0, 0, 0.8);
                overflow: hidden;
                z-index: 3;
                background: rgba(255, 255, 255, 0.9);
                animation: redHeight 1.5s ease-out infinite;
                -webkit-filter: contrast(200%);
            }

            @keyframes redShadow {
                20% {
                    height: 32px;
                }
                60% {
                    height: 6px;
                }
                100% {
                    height: 42px;
                }
            }

            @keyframes redHeight {
                20% {
                    height: 42px;
                }
                35% {
                    height: 12px;
                }
                50% {
                    height: 40px;
                }
                60% {
                    height: 20px;
                }
                70% {
                    height: 34px;
                }
                80% {
                    height: 22px;
                }
                100% {
                    height: 0px;
                }
            }

            @keyframes whiteMove {
                8% {
                    top: 38px;
                }
                10% {
                    top: 8px;
                }
                12% {
                    top: 42px;
                }
                99% {
                    top: 36px;
                }
            }
        }
        .nav {
            padding: 0;
            display: flex;
            margin-left: 3.6vw;
            line-height: 24px;
            font-size: 16px;
            list-style: none;
            &-item {
                margin-right: 16px;
                color: rgb(95, 105, 125);
                a {
                    display: inline-block;
                    padding: 10px 16px;
                }
            }
        }
        .options {
            margin-left: auto;
            display: flex;
            align-items: center;
            gap: 8px 12px;
            :deep(.gupoIcon) {
                font-size: 24px;
                color: #5f697d;
                transition: all 0.25s;
                cursor: pointer;
                &:hover {
                    color: #146ebe;
                }
            }
            button {
                padding: 0 14px;
            }
        }
    }
    .uploadModal {
        width: 500px;
    }
}
</style>

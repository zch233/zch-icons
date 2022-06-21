<template>
    <div class="icons">
        <div class="icons-header">
            <IconSearcher />
        </div>
        <div class="icons-main">
            <NTabs type="segment">
                <NTabPane v-for="(item, key) in statistic" :key="key" :name="key" :tab="item.title">
                    <h1 class="icons-main-title">{{ Object.keys(item.list).length }} Icons</h1>
                    <div class="icons-main-list">
                        <div v-for="(icon, iconName) in item.list" :key="iconName" class="icons-main-list-item" @click="copySvgComponent(iconName)">
                            <component :is="icon" />
                            <p @click.stop="showDetailModal(icon, iconName)">{{ iconName }}</p>
                        </div>
                    </div>
                </NTabPane>
            </NTabs>
        </div>
        <NModal v-model:show="detailModalVisible" :closable="true">
            <div class="detailModal">
                <div class="detailModal-header">
                    <img src="~/assets/icons/close.svg" @click="detailModalVisible = !detailModalVisible" alt="" />
                </div>
                <div class="detailModal-main">
                    <div class="detailModal-main-top">
                        <p class="detailModal-main-top-title">{{ currentIcon.iconName }}</p>
                        <div class="detailModal-main-top-options">
                            <img src="~/assets/icons/code.svg" alt="" />
                            <img class="download" src="~/assets/icons/download.svg" alt="" />
                        </div>
                    </div>
                    <div class="detailModal-main-content">
                        <div class="detailModal-main-content-left">
                            <component :is="currentIcon.icon" />
                        </div>
                        <div class="detailModal-main-content-right">
                            <ul>
                                <li v-for="item in ['Vue3', 'React', 'HTML']" :class="{ active: currentTab === item }" @click="currentTab = item" :key="item">
                                    {{ item }}
                                </li>
                            </ul>
                            <pre>
              <code>{{codeTemplate}}</code>
            </pre>
                        </div>
                    </div>
                    <div class="detailModal-main-bottom">
                        <span>v1.0.0</span>
                    </div>
                </div>
            </div>
        </NModal>
    </div>
</template>

<script setup>
import copy from 'copy-to-clipboard';
import * as filledIcons from 'icon-vue3/es/icons/filled';
import * as outlinedIcons from 'icon-vue3/es/icons/outlined';
import * as twoToneIcons from 'icon-vue3/es/icons/twotone';
import * as colorfulIcons from 'icon-vue3/es/icons/colorful';
import { useMessage } from 'naive-ui';

const message = useMessage();
const statistic = computed(() => ({
    filled: {
        title: 'Filled',
        list: filledIcons,
    },
    outlined: {
        title: 'Outlined',
        list: outlinedIcons,
    },
    twoTone: {
        title: 'TwoTone',
        list: twoToneIcons,
    },
    colorful: {
        title: 'Colorful',
        list: colorfulIcons,
    },
}));

useHead({
    title: '图标',
});

const detailModalVisible = ref(false);

const copySvgComponent = iconName => {
    const content = `<${iconName} />`;
    copy(content);
    message.success(`${content} copied 🎉`);
};

const currentIcon = ref({});
const showDetailModal = (icon, iconName) => {
    detailModalVisible.value = true;
    currentIcon.value = { icon, iconName };
};
const currentTab = ref('Vue3');
const codeTemplate = computed(
    () => `
import ${currentIcon.value.iconName} from 'gupo-icons-${currentTab.value}';

<${currentIcon.value.iconName} />`
);
</script>

<style scoped lang="less">
.icons {
    * {
        margin: 0;
        padding: 0;
    }
    background-color: #f0f1f3;
    & &-header {
        padding-top: 32px;
        background-color: #fff;
        &-tab {
            width: 80vw;
            margin: 0 auto;
            display: flex;
            padding-bottom: 40px;
            &-item {
                border: 2px solid #f0f1f3;
                border-radius: 8px;
                font-size: 16px;
                padding: 15px 24px;
                cursor: pointer;
                &:hover {
                }
            }
        }
    }
    & &-main {
        margin: 0 auto;
        :deep(.n-tabs) {
            .n-tabs-nav {
                background-color: #fff;
                padding-bottom: 40px;
            }
            .n-tabs-rail {
                margin-left: 8vw;
                width: 660px;
            }
            .n-tabs-tab {
                padding: 15px 24px;
                font-size: 16px;
            }
            .n-tab-pane {
                margin: 20px auto 32px;
                padding: 0 16px;
                max-width: 1600px;
            }
        }
        &-title {
            font-size: 20px;
            margin-bottom: 24px;
        }
        &-list {
            display: grid;
            grid-template-columns: repeat(auto-fill, 120px);
            grid-gap: 1em 1em;
            grid-auto-flow: row dense;
            &-item {
                display: flex;
                align-items: center;
                justify-items: center;
                flex-direction: column;
                background-color: #fff;
                border-radius: 8px;
                cursor: pointer;
                font-size: 16px;
                overflow: hidden;
                padding: calc(1em * 1.5) calc(1em * 12 / 16) 1em;
                transition: all 0.25s;
                text-align: center;
                &:hover {
                    background-color: #ffd43b;
                }
                .gupoIcon {
                    font-size: 30px;
                    transition: all 0.25s;
                }
                > p {
                    width: 100%;
                    margin-top: 0.7em;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    font-size: 12px;
                }
            }
        }
    }
}
.detailModal {
    background-color: #fff;
    border-radius: 12px;
    width: 890px;
    &-header {
        padding: 28px 32px;
        display: flex;
        border-bottom: 2px solid #f0f1f3;
        img {
            margin-left: auto;
            width: 16px;
            cursor: pointer;
        }
    }
    &-main {
        padding: 20px 32px;
        &-top {
            display: flex;
            align-items: center;
            margin-bottom: 24px;
            &-title {
                margin: 0;
                font-size: 32px;
                font-weight: 500;
            }
            &-options {
                margin-left: auto;
                img {
                    width: 25px;
                    margin-left: 20px;
                    cursor: pointer;
                    &.download {
                        width: 16px;
                    }
                }
            }
        }
        &-content {
            display: flex;
            &-left {
                display: flex;
                align-items: center;
                justify-content: center;
                width: 440px;
                border: 2px solid #f0f1f3;
                border-radius: 12px;
                padding: 28px 0;
                font-size: 184px;
            }
            &-right {
                border-radius: 12px;
                background-color: #183153;
                margin: 0 0 0 32px;
                flex: 1;
                ul {
                    list-style: none;
                    display: flex;
                    color: #74c0e1;
                    font-size: 14px;
                    padding-left: 32px;
                    li {
                        padding: 7px 10.5px;
                        border-radius: 8px;
                        transition: all 0.25s;
                        cursor: pointer;
                        font-weight: bold;
                        &.active {
                            color: #fff;
                        }
                        &:hover {
                            background-color: #001c40;
                        }
                    }
                }
                > pre {
                    padding: 18px 6px 18px 32px;
                    code {
                        color: #fff;
                    }
                }
            }
        }
        &-bottom {
            text-align: center;
            font-size: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 32px 0 24px;
            span {
                background-color: #f0f1f3;
                border-radius: 3em;
                padding: 6px 12px;
                margin: 6px;
            }
        }
    }
}
</style>

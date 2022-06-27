<template>
    <div class="icons">
        <div class="icons-header">
            <IconSearcher />
        </div>
        <div class="icons-main">
            <NTabs type="segment">
                <template v-if="permission.design">
                    <NTabPane
                        v-for="(item, key) in digest"
                        :key="key"
                        :name="key"
                        :tab="upperFirst(key) + (route.query.q ? `(${Object.values(item).filter(v => v.key.includes(searchValue)).length})` : '')"
                    >
                        <h1 class="icons-main-title">{{ Object.values(item).filter(v => v.key.includes(searchValue)).length }} Icons</h1>
                        <div class="icons-main-list">
                            <div
                                v-for="icon in Object.values(item).filter(v => v.key.includes(searchValue))"
                                :key="icon.key"
                                class="icons-main-list-item"
                                @click="copySvgComponentName(getIconComponentNameByDigest(icon))"
                            >
                                <component :is="allIcons[getIconComponentNameByDigest(icon)]" />
                                <p @click.stop="showDetailModal(icon)">{{ icon.key }}</p>
                            </div>
                        </div>
                    </NTabPane>
                </template>
                <template v-else>
                    <NTabPane
                        v-for="(item, key) in statistic"
                        :key="key"
                        :name="key"
                        :tab="upperFirst(key) + (route.query.q ? `(${item.filter(v => v.originName.includes(searchValue)).length})` : '')"
                    >
                        <h1 class="icons-main-title">{{ item.filter(v => v.originName.includes(searchValue)).length }} Icons</h1>
                        <div class="icons-main-list">
                            <div
                                v-for="icon in item.filter(v => v.originName.includes(searchValue))"
                                :key="icon.key"
                                class="icons-main-list-item"
                                @click="copySvgComponentName(icon.displayName)"
                            >
                                <component :is="icon" />
                                <p @click.stop="showDetailModal(icon)">{{ icon.originName }}</p>
                            </div>
                        </div>
                    </NTabPane>
                </template>
            </NTabs>
        </div>
        <NModal v-model:show="detailModal.visible" :closable="true">
            <div class="detailModal">
                <div class="detailModal-header">
                    <img src="~/assets/icons/close.svg" @click="detailModal.visible = !detailModal.visible" alt="" />
                </div>
                <div class="detailModal-main">
                    <div class="detailModal-main-top">
                        <p class="detailModal-main-top-title">{{ currentIcon.iconName }}</p>
                        <div class="detailModal-main-top-options">
                            <img src="~/assets/icons/code.svg" alt="" @click="copySvg" />
                            <img class="download" src="~/assets/icons/download.svg" @click="downloadSvg" alt="" />
                        </div>
                    </div>
                    <div class="detailModal-main-content">
                        <div class="detailModal-main-content-left">
                            <component :is="currentIcon.component" />
                        </div>
                        <div class="detailModal-main-content-right">
                            <div class="codeBar">
                                <ul>
                                    <li
                                        v-for="item in ['Vue3', 'React', 'HTML']"
                                        :class="{ active: currentTab === item }"
                                        @click="currentTab = item"
                                        :key="item"
                                    >
                                        {{ item }}
                                    </li>
                                </ul>
                                <pre>
                              <code v-html="codeTemplate" />
                            </pre>
                            </div>
                            <div v-if="permission.design" class="editBar">
                                <NSpin :show="detailModal.loading">
                                    <NForm ref="formRef" inline :label-width="80" :model="formValue.data" :rules="formValue.rules">
                                        <NGrid :cols="24" :x-gap="24">
                                            <NFormItemGi :span="12" label="key" path="key">
                                                <NInput disabled v-model:value="formValue.data.key" placeholder="请输入英文名称（格式 yyy-xxx）" />
                                            </NFormItemGi>
                                            <NFormItemGi :span="12" label="分类" path="theme">
                                                <NSelect
                                                    v-model:value="formValue.data.theme"
                                                    placeholder="请选择分类"
                                                    :options="[
                                                        { label: '实底风格', value: 'filled' },
                                                        { label: '线框风格', value: 'outlined' },
                                                        { label: '双色风格', value: 'twotone' },
                                                        { label: '彩色风格', value: 'colorful' },
                                                    ]"
                                                />
                                            </NFormItemGi>
                                            <NFormItemGi :span="12" label="名称" path="name">
                                                <NInput v-model:value="formValue.data.name" placeholder="请输入中文名称" />
                                            </NFormItemGi>
                                            <NFormItemGi :span="12">
                                                <NSpace>
                                                    <NPopconfirm @positive-click="handleDeleteClick">
                                                        <span>确认要删除吗？</span>
                                                        <template #trigger>
                                                            <NButton attr-type="button" type="error">删除</NButton>
                                                        </template>
                                                    </NPopconfirm>
                                                    <NButton attr-type="button" @click="handleSaveClick">保存</NButton>
                                                </NSpace>
                                            </NFormItemGi>
                                        </NGrid>
                                    </NForm>
                                </NSpin>
                            </div>
                        </div>
                    </div>
                    <div class="detailModal-main-bottom">
                        <span>v{{ currentIcon.version }}</span>
                        <span>{{ currentIcon.design }}</span>
                    </div>
                </div>
            </div>
        </NModal>
    </div>
</template>

<script setup>
import copy from 'copy-to-clipboard';
import * as allIcons from 'icon-vue3';
import * as filledIcons from 'icon-vue3/es/icons/filled';
import * as outlinedIcons from 'icon-vue3/es/icons/outlined';
import * as twotoneIcons from 'icon-vue3/es/icons/twotone';
import * as colorfulIcons from 'icon-vue3/es/icons/colorful';
import { useMessage } from 'naive-ui';
import { downloadFile, getHighlightCode, upperFirst } from '../../utils';
import { permission } from '../../store';
import camelCase from 'lodash.camelcase';

const { data: digest } = await useFetch('/api/getIconBaseDigest');

const statistic = computed(() => ({
    filled: Object.values(filledIcons),
    outlined: Object.values(outlinedIcons),
    twotone: Object.values(twotoneIcons),
    colorful: Object.values(colorfulIcons),
}));

const message = useMessage();

const route = useRoute();

const searchValue = computed(() => (route.query.q || '').toLowerCase());

const getIconComponentNameByDigest = ({ key, theme }) => upperFirst(camelCase(`icon-${key}-${theme}`));

useHead({
    title: '图标',
});

const detailModal = reactive({
    visible: false,
    loading: false,
});

const copySvgComponentName = iconName => {
    const content = `<${iconName} />`;
    copy(content);
    message.success(`${content} copied 🎉`);
};

const currentIcon = ref({});
const showDetailModal = icon => {
    const iconName = getIconComponentNameByDigest(icon);
    detailModal.visible = true;
    currentIcon.value = permission.design
        ? { ...icon, component: allIcons[iconName], iconName }
        : { ...digest.value[icon.theme][icon.originName], component: icon, iconName: icon.displayName };
    formValue.data = icon;
};
const currentTab = ref('Vue3');
const codeTemplate = computed(() =>
    getHighlightCode(
        currentTab.value === 'HTML'
            ? `
<i class="gupoIcon ${currentIcon.value.key}-${currentIcon.value.theme}"></i>`
            : `
import ${currentIcon.value.iconName} from 'gupo-icons-${currentTab.value.toLowerCase()}';

<${currentIcon.value.iconName} />`
    )
);

const formValue = reactive({
    data: {
        theme: undefined,
        key: '',
        name: '',
    },
    rules: {
        theme: {
            required: true,
            message: '请输入分类',
            trigger: ['change'],
        },
        key: {
            required: true,
            message: '请输入英文名称',
            trigger: ['input'],
        },
        name: {
            required: true,
            message: '请输入中文名称',
            trigger: ['input'],
        },
    },
});
const formRef = ref(null);
const handleSaveClick = () => {
    formRef.value?.validate(async errors => {
        if (!errors) {
            formValue.loading = true;
            const { component, iconName, ...originData } = currentIcon.value;
            await $fetch('/api/updateIcon', {
                method: 'post',
                body: { formData: formValue.data, originData },
            });
            formValue.loading = false;
            detailModal.visible = false;
            message.success('保存成功 🎉');
        }
    });
};
const handleDeleteClick = async () => {
    formValue.loading = true;
    const { component, iconName, ...originData } = currentIcon.value;
    await $fetch('/api/deleteIcon', {
        method: 'post',
        body: { originData },
    });
    formValue.loading = false;
    detailModal.visible = false;
    delete digest.value[originData.theme][originData.key];
    message.success('删除成功 🎉');
};
const copySvg = async () => {
    const { theme, key } = currentIcon.value;
    const current = digest.value[theme][key];
    const { data } = await $fetch('/api/getSvg', {
        params: current,
    });
    copy(data);
    message.success(`复制成功 🎉`);
};
const downloadSvg = async () => {
    const { theme, key } = currentIcon.value;
    const current = digest.value[theme][key];
    const data = await $fetch('/api/getSvg', {
        responseType: 'blob',
        params: { ...current, download: 1 },
    });
    downloadFile(data, `${key}-${theme}.svg`);
};
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
                margin-left: 10vw;
                width: 660px;
            }
            .n-tabs-tab {
                padding: 15px 24px;
                font-size: 16px;
            }
            .n-tab-pane {
                margin: 20px auto 32px;
                padding: 0 16px;
                max-width: 80vw;
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
    width: 900px;
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
                border: 2px solid #f0f1f3;
                border-radius: 12px;
                padding: 28px 40px;
                font-size: 184px;
            }
            &-right {
                flex: 1;
                margin: 0 0 0 32px;
                display: flex;
                flex-direction: column;
                .codeBar {
                    flex: 1;
                    width: 100%;
                    border-radius: 12px;
                    background-color: #183153;
                    ul {
                        list-style: none;
                        display: flex;
                        color: #74c0e1;
                        font-size: 14px;
                        padding: 12px 32px;
                        margin: 0;
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
                        margin: 0;
                        padding: 0 6px 0 32px;
                        code {
                            color: #fff;
                        }
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

<template>
    <div class="icons">
        <div class="icons-header">
            <IconSearcher />
        </div>
        <div class="icons-main">
            <NTabs type="segment">
                <NTabPane name="outlined" tab="Outlined">
                    <h1 class="icons-main-title">999 Icons</h1>
                    <div
                        v-for="item in 100"
                        :key="item"
                        style="
                            display: inline-flex;
                            margin: 8px;
                            align-items: center;
                            justify-content: center;
                            width: 120px;
                            height: 120px;
                            border-radius: 8px;
                            background-color: #fff;
                        "
                    >
                        <IconBookFilled size="32" />
                    </div>
                </NTabPane>
                <NTabPane name="filled" tab="Filled">
                    <h1 class="icons-main-title">998 Icons</h1>
                </NTabPane>
                <NTabPane name="twoTone" tab="TwoTone">
                    <h1 class="icons-main-title">996 Icons</h1>
                </NTabPane>
                <NTabPane name="colorful" tab="Colorful">
                    <h1 class="icons-main-title">994 Icons</h1>
                </NTabPane>
            </NTabs>
        </div>
    </div>
</template>

<script setup>
import { IconBookFilled } from 'icon-vue3';

useHead({
    title: '图标',
});
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
                width: 86vw;
            }
        }
        &-title {
            font-size: 20px;
            margin-bottom: 24px;
        }
    }
}
</style>

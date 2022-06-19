<template>
    <div class="docs">
        <div class="container">
            <h2 class="docs-title">代码演示</h2>
            <div class="docs-block">
                <p class="docs-block-title">基本用法</p>
                <p class="docs-block-subtitle">
                    通过 gupo-icons 引用 Icon 组件，不同主题的 Icon 组件名为图标名加主题做为后缀，也可以通过设置 spin 属性来实现动画旋转效果，size
                    属性来控制图标大小。
                </p>
                <div class="docs-block-render">
                    <IconHomeOutlined />
                    <IconLoadingOutlined :spin="true" />
                    <IconSettingFilled :size="26" />
                    <IconSmileOutlined :rotate="180" />
                    <IconSyncOutlined :spin="true" />
                </div>
                <div class="docs-block-code">
                    <CodeRender :code="baseCode" />
                </div>
            </div>
            <div class="docs-block">
                <p class="docs-block-title">多色图标</p>
                <p class="docs-block-subtitle">常规图标通过 color 属性设置颜色，双色图标可以通过 primaryColor 或者 secondaryColor 属性设置主题色。</p>
                <div class="docs-block-render">
                    <IconHomeOutlined color="#c03" />
                    <IconSmileTwoTone />
                    <IconCheckCircleTwoTone primaryColor="#3ba776" />
                    <IconHeartTwoTone primaryColor="#c03" secondaryColor="#3ba776" />
                </div>
                <div class="docs-block-code">
                    <CodeRender :code="colorCode" />
                </div>
            </div>
            <div class="docs-block">
                <p class="docs-block-title">使用 iconfont.cn</p>
                <p class="docs-block-subtitle">
                    对于使用 iconfont.cn 的用户，通过设置 createFromIconfont 方法参数对象中的 scriptUrl 字段， 即可轻松地使用已有项目中的图标。
                </p>
                <div class="docs-block-render">
                    <IconFont icon="tuichu" />
                    <IconFont icon="facebook" />
                    <IconFont icon="twitter" />
                </div>
                <div class="docs-block-code">
                    <CodeRender :code="iconfontCode" />
                </div>
            </div>
        </div>
        <MarkdownRender path="docs" />
    </div>
</template>

<script setup>
import {
    IconHomeOutlined,
    IconLoadingOutlined,
    IconSettingFilled,
    IconSmileOutlined,
    IconSyncOutlined,
    IconSmileTwoTone,
    IconHeartTwoTone,
    IconCheckCircleTwoTone,
    createFromIconfont,
} from 'icon-vue3';
import CodeRender from '../../components/CodeRender';

useHead({
    title: '文档',
});

const IconFont = createFromIconfont({
    scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
});

const baseCode = `
  import {
    IconHomeOutlined,
    IconLoadingOutlined,
    IconSettingFilled,
    IconSmileOutlined,
    IconSyncOutlined,
  } from 'icon-vue3';

  <IconHomeOutlined />
  <IconLoadingOutlined :spin="true" />
  <IconSettingFilled :size="26" />
  <IconSmileOutlined :rotate="rotate" />
  <IconSyncOutlined :spin="true" />`;
const colorCode = `
  import {
    IconHomeOutlined,
    IconSmileTwoTone,
    IconHeartTwoTone,
    IconCheckCircleTwoTone,
  } from 'icon-vue3';

  <IconHomeOutlined color="#c03" />
  <IconSmileTwoTone />
  <IconCheckCircleTwoTone primaryColor="#3ba776" />
  <IconHeartTwoTone primaryColor="#c03" secondaryColor="#3ba776" />`;
const iconfontCode = `
  <template>
      <IconFont icon="tuichu" />
      <IconFont icon="facebook" />
      <IconFont icon="twitter" />
  </template>

  import { createFromIconfont } from 'icon-vue3';

  const IconFont = createFromIconfont({
    scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
  });
  export default {
    components: {
      IconFont,
    },
  };`;
</script>

<style scoped lang="less">
.docs {
    &-main {
        width: 66.7vw;
    }
    &-title {
        border-left: 4px solid;
        font-size: 24px;
        padding: 0 0 0 10px;
        position: relative;
        color: #135ce0;
        letter-spacing: 2px;
        line-height: 1.8;
    }
    &-block {
        background-color: #f0f1f3;
        margin-bottom: 24px;
        padding: 24px;
        border-radius: 12px;
        &-title {
            margin: 0 0 16px;
            font-weight: 600;
            font-size: 20px;
            line-height: 1.6;
        }
        &-subtitle {
            margin-top: 8px;
            font-size: 15px;
            line-height: 26px;
        }
        :deep(&-render) {
            padding: 42px 24px 50px;
            background-color: #fff;
            border-radius: 12px;
            > * {
                margin: 0 6px;
            }
        }
        &-code {
            background-color: #fff;
            border-radius: 12px;
        }
    }
}
</style>

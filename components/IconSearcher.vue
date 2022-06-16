<template>
    <div class="iconSearcher">
        <div class="iconSearcher-input"><IconSearchOutlined /><input placeholder="Search 19,999 icons" type="text" /></div>
        <div class="iconSearcher-tips">Try <em>date</em>，<em>date</em>，<em>date</em>，<em>date</em>，<em>date</em>，<em>date</em></div>
    </div>
</template>

<script setup>
import { IconSearchOutlined } from 'icon-vue3';
</script>

<style scoped lang="less">
.iconSearcher {
    max-width: 66.4vw;
    margin: 0 auto;
    padding-bottom: 40px;
    &-input {
        position: relative;
        .gupoIcon {
            position: absolute;
            font-weight: 400;
            font-size: 20px;
            z-index: 1;
            top: 50%;
            transform: translateY(-50%);
            left: 24px;
        }
        input {
            width: 100%;
            display: inline-block;
            border: 2px solid #183153;
            padding: 18px 24px 18px 55px;
            border-radius: 200px;
            font-size: 16px;
            transition: all 0.25s;
            &:focus {
                outline: none;
                outline-offset: 1px;
                box-shadow: 0 0 0 1px #f0f1f3, 0 0 0 3px #74c0fc;
            }
        }
    }
    &-tips {
        padding: 12px 24px;
        em {
            font-size: 14px;
            color: #74c0fc;
        }
    }
}
</style>

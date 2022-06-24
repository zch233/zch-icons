<template>
    <div class="iconSearcherWrapper">
        <div class="iconSearcher">
            <div class="iconSearcher-input">
                <IconSearchOutlined /><input
                    :placeholder="`Search ${total} icons`"
                    v-model="searchValue"
                    @keydown.enter="router.push({ path: '/icons', query: { q: searchValue } })"
                    type="text"
                />
            </div>
            <div class="iconSearcher-tips">Try <em>date</em>，<em>date</em>，<em>date</em>，<em>date</em>，<em>date</em>，<em>date</em></div>
        </div>
    </div>
</template>

<script setup>
import { IconSearchOutlined } from 'icon-vue3';
import * as allIcons from 'icon-vue3';

const router = useRouter();
const route = useRoute();

const searchValue = ref(route.query.q || '');

const total = computed(() => Object.keys(allIcons).filter(v => v.indexOf('Icon') === 0).length);
</script>

<style scoped lang="less">
.iconSearcherWrapper {
    & .iconSearcher {
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
                font-style: normal;
            }
        }
    }
}
</style>

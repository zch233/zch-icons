<template>
    <div class="home">
        <IconSearcher />
        <div class="home-statistics">
            <div class="home-statistics-item">
                <b>{{ statistic.total }}</b>
                <p>total icon in<br />gupo icons</p>
            </div>
            <div class="home-statistics-item">
                <b>4</b>
                <p>styles<br />of icons</p>
            </div>
            <div class="home-statistics-item">
                <b>{{ statistic.simple }}</b>
                <p>new icon in<br />simple</p>
            </div>
            <div class="home-statistics-item">
                <b>{{ statistic.twotone }}</b>
                <p>new icon in<br />twotone</p>
            </div>
            <div class="home-statistics-item">
                <b>{{ statistic.colorful }}</b>
                <p>new icon in<br />colorful</p>
            </div>
        </div>
        <div class="home-banner">
            <div class="home-banner-item">
                <img src="../assets/home/banner1.png" alt="" />
                <span>Easy</span>
            </div>
            <div class="home-banner-item">
                <img src="~/assets/home/banner2.png" alt="" />
                <span>To</span>
            </div>
            <div class="home-banner-item">
                <img src="~/assets/home/banner3.png" alt="" />
                <span>Use</span>
            </div>
        </div>
        <div class="home-example">
            <b class="home-example-title">举个栗子🌰</b>
            <div class="home-example-item">
                <IconSketchSquareFilled />
                <p>sketch-square</p>
            </div>
            <div class="home-example-item">
                <IconZhihuSquareFilled />
                <p>zhihu-square</p>
            </div>
            <div class="home-example-item">
                <IconRedditSquareFilled />
                <p>reddit-square</p>
            </div>
            <div class="home-example-item">
                <IconQqSquareFilled />
                <p>qq-square</p>
            </div>
            <div class="home-example-item">
                <IconMediumSquareFilled />
                <p>medium-square</p>
            </div>
            <button class="home-example-button" @click="router.push('/icons')">
                View All Icons
                <IconDashboardFilled />
            </button>
        </div>
        <div class="home-sub">
            <div class="home-sub-profile">
                <p class="home-sub-title">任何风格，以满足您的需求</p>
                <p class="home-sub-tips">4 种独特的图标样式</p>
                <div class="home-sub-profile-items">
                    <div class="home-sub-profile-item">
                        <div>
                            <b>Filled</b>
                            <p>Great for bold statements or small sizes.</p>
                        </div>
                        <img src="~/assets/home/profile1.png" alt="" />
                    </div>
                    <div class="home-sub-profile-item">
                        <div>
                            <b>Outlined</b>
                            <p>Easy, readable icons that blend right in.</p>
                        </div>
                        <img src="~/assets/home/profile2.png" alt="" />
                    </div>
                    <div class="home-sub-profile-item long">
                        <div>
                            <b>TwoTone & Colorful</b>
                            <p>Gives an illustrated feel or a pop of color.</p>
                        </div>
                        <img src="~/assets/home/profile3.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import {
    IconZhihuSquareFilled,
    IconSketchSquareFilled,
    IconRedditSquareFilled,
    IconQqSquareFilled,
    IconMediumSquareFilled,
    IconDashboardFilled,
} from 'icon-vue3';
import * as allIcons from 'icon-vue3';
import * as filledIcons from 'icon-vue3/es/icons/filled';
import * as outlinedIcons from 'icon-vue3/es/icons/outlined';
import * as twotoneIcons from 'icon-vue3/es/icons/twotone';
import * as colorfulIcons from 'icon-vue3/es/icons/colorful';

const router = useRouter();
const statistic = computed(() => ({
    total: Object.keys(allIcons).filter(v => v.indexOf('Icon') === 0).length,
    simple: Object.keys(filledIcons).length + Object.keys(outlinedIcons).length,
    twotone: Object.keys(twotoneIcons).length,
    colorful: Object.keys(colorfulIcons).length,
}));
useHead({
    title: '😍',
});
</script>

<style scoped lang="less">
.home {
    * {
        margin: 0;
        padding: 0;
    }
    padding-top: 32px;
    & &-statistics {
        max-width: 66.4vw;
        display: flex;
        margin: 0 auto;
        &-item {
            text-align: center;
            flex: 1;
            b {
                color: #183143;
                font-size: 32px;
            }
            p {
                color: #5f697d;
                font-size: 16px;
                line-height: 1.7;
                margin-top: 0.8em;
            }
        }
    }
    & &-banner {
        display: flex;
        padding: 48px 0;
        width: 86vw;
        margin: 0 auto;
        justify-content: center;
        &-item {
            padding: 24px 16px;
            position: relative;
            span {
                position: absolute;
                left: 50%;
                transform: translateX(-50%);
                bottom: 2em;
                color: #183153;
                font-size: 20px;
            }
        }
    }
    & &-example {
        display: flex;
        align-items: center;
        justify-content: center;
        border-top: 2px solid #f0f1f3;
        padding: 48px 16px;
        .gupoIcon {
            color: #183153;
        }
        &-title {
            font-size: 24px;
            margin-right: 5em;
        }
        &-item {
            text-align: center;
            padding: 0 24px;
            .gupoIcon {
                font-size: 40px;
            }
            p {
                font-size: 12px;
                color: #5f697d;
                margin-top: 1em;
            }
        }
        &-button {
            margin-left: 2em;
            border: 2px solid #f0f1f3;
            padding: 15px 24px;
            border-radius: 8px;
            background-color: #fff;
            cursor: pointer;
            font-size: 16px;
            display: flex;
            align-items: center;
            transition: all 0.25s;
            &:hover {
                background-color: #c3c6d1;
                border-color: #183153;
            }
            .gupoIcon {
                font-size: 20px;
                margin-left: 1em;
            }
        }
    }
    & &-sub {
        background-color: #f0f1f3;
        &-title {
            font-size: 24px;
            margin-bottom: 8px;
        }
        &-tips {
            font-size: 16px;
            margin-bottom: 32px;
        }
        &-profile {
            padding: 48px 0;
            width: 86vw;
            margin: 0 auto;
            &-items {
                display: flex;
                justify-content: space-between;
                flex-wrap: wrap;
            }
            &-item {
                width: 49%;
                background-color: #fff;
                margin-bottom: 24px;
                border-radius: 12px;
                display: flex;
                overflow: hidden;
                align-items: flex-end;
                &.long {
                    width: 100%;
                }
                img {
                    margin-left: auto;
                }
                > div {
                    padding: 24px;
                    b {
                        font-size: 20px;
                    }
                    p {
                        color: #5f697d;
                        font-size: 14px;
                        margin-top: 1em;
                    }
                }
            }
        }
    }
}
</style>

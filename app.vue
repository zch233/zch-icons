<script lang="tsx">
export default defineComponent({
    setup() {
        return () => (
            <div class='nuxtApp'>
                <header class='nuxtApp-header'>
                    <b class='logo' data-word='GUPO'>
                        <span class='white'>GUPO</span>
                    </b>
                    <ul class='nav'>
                        <li class='nav-item'>Start</li>
                        <li class='nav-item'>Design</li>
                        <li class='nav-item'>Docs</li>
                        <li class='nav-item'>Icons</li>
                        <li class='nav-item'>Codeup</li>
                    </ul>
                </header>
                <NuxtPage />
            </div>
        );
    },
});
</script>

<style scoped lang="less">
.nuxtApp {
    background-color: #fff;
    &-header {
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
                padding: 10px 16px;
                margin-right: 16px;
                color: rgb(95, 105, 125);
            }
        }
    }
}
</style>

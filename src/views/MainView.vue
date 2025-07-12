<template>
    <HeaderComp :page_name="'main'" />
    <section class="banner">
        <div class="banner__text">
            <h1 class="banner__text__title desktop">Kwood - украшения ручной<br>работы</h1>
            <h1 class="banner__text__title mobile">Kwood - украшения ручной работы</h1>
            <h2><span>
                Создаем украшения, способные подчеркнуть<br>
                именно ваш образ
            </span></h2>
        </div>
        <div class="banner__img">
            <img class="banner__img__present" src="@/assets/images/goods-photos/present-ring.png" alt="">
            <img class="banner__img__bg" src="@/assets/images/banner-bg.png" alt="">
        </div>
    </section>
    <section class="about-us" id="about_us">
        <div class="about-us__text">
            <h1 class="about-us__text__title">О нас</h1>
            <p><span>
                Команда Kwood - это опытные специалисты,
                годами оттачивающие профессиональные
                навыки в работе с природными материалами
            </span></p>
        </div>
        <img class="about-us__img" src="@/assets/images/goods-photos/heart-pendant/1.webp" alt="...">
    </section>
    <section class="bestsellers" id="bestsellers">
        <h1 class="bestsellers__title section-title">Популярное</h1>
        <div class="bestsellers__wrapper">
            <div class="bestsellers__items">
                <ShopCard v-for="item in top_items" :key="item.id" :item="item" />
            </div>
        </div>
    </section>
    <!-- <section class="materials">
        <h1 class="materials__title section-title">Связь с природой</h1>
        <div class="materials__main">
            <p class="materials__info">
                тралалиро тралала
            здесь будет умни текст
            </p>

            <div class="materials__block block1">
                <img class="materials__block__img" src="@/assets/images/materials/dub.png" alt="">
                <div class="materials__block__info"></div>
            </div>
            <div class="materials__block block2">
                <img class="materials__block__img" src="@/assets/images/materials/amarant.png" alt="">
                <div class="materials__block__info"></div>
            </div>
            <div class="materials__block block3">
                <img class="materials__block__img" src="@/assets/images/materials/bereza.png" alt="">
                <div class="materials__block__info"></div>
            </div>
            <div class="materials__block block4">
                <img class="materials__block__img" src="@/assets/images/materials/sosna.png" alt="">
                <div class="materials__block__info"></div>
            </div>
        </div>
    </section> -->
    <section class="catalog-sect" id="catalog">
        <div class="catalog-sect__img-one">
            <RouterLink to="/catalog"><button class="to-shop">В каталог</button></RouterLink>
        </div>
        <div class="catalog-sect__img-two">
        </div>
        <div class="catalog-sect__img-three">
        </div>
    </section>
    <section class="indiv-order" id="order">
        <div class="indiv-order__top">
            <h3 class="indiv-order__top__subtitle">Не нашли ничего на свой вкус?</h3>
            <h2 class="indiv-order__top__title">Воплотим вашу мечту в реальность!</h2>
        </div>
        <div class="indiv-order__main">
            <h3 class="indiv-order__main__title">Напишите нам с описанием желанного украшения.</h3>
            <p class="indiv-order__main__text">Мы поможем со всем необходимым:
                от выбора наиболее подходящей породы
                до подбора нужного именно вам размера.
            </p>
            <div class="indiv-order__main__contacts">
                <a href="https://t.me/Kwood_jewelry" class="indiv-order__main__network" target="_blank">
                    <svg width="28" height="27" viewBox="0 0 28 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M27.9472 2.73719C28.008 2.32301 27.9688 1.89811 27.8337 1.50675C27.6987 1.11539 27.4728 0.771899 27.1795 0.512059C26.8862 0.25222 26.5363 0.0855435 26.1662 0.029395C25.7961 -0.0267534 25.4194 0.0296809 25.0753 0.192819L1.27004 11.4594C-0.38937 12.2449 -0.474289 14.9426 1.27004 15.7563C2.9975 16.5654 4.74988 17.3055 6.5239 17.9752C8.1499 18.5792 9.92346 19.1379 11.3448 19.2959C11.7332 19.8186 12.2219 20.3224 12.7202 20.7825C13.4817 21.4866 14.3977 22.2111 15.3444 22.9059C17.2404 24.2986 19.3439 25.6302 20.7611 26.4971C22.4553 27.5299 24.4836 26.3407 24.7871 24.2642L27.9472 2.73719ZM3.93873 13.5922L24.9932 3.62756L22.0447 23.7196C20.6539 22.8699 18.6507 21.5977 16.866 20.2864C16.0434 19.6928 15.2493 19.0508 14.4868 18.3633C14.2831 18.1762 14.0853 17.981 13.8938 17.7781L19.408 11.5814C19.6692 11.288 19.816 10.89 19.8162 10.4749C19.8163 10.0598 19.6697 9.66166 19.4087 9.36804C19.1476 9.07442 18.7935 8.90938 18.4242 8.90923C18.055 8.90909 17.7007 9.07384 17.4395 9.36725L11.4019 16.1538C10.3801 16.0067 8.95733 15.5811 7.39537 15.0021C6.23255 14.5666 5.08038 14.0959 3.94012 13.5907L3.93873 13.5922Z" fill="white"/>
                    </svg>
                </a>
                <a href="https://vk.com/kwood_jewelry" class="indiv-order__main__network" target="_blank">
                    <svg width="29" height="18" viewBox="0 0 29 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M28.637 14.5291C27.9848 13.2158 27.1254 12.016 26.0919 10.9757C25.7457 10.5855 25.3837 10.2095 25.0069 9.84881L24.9614 9.80446C24.8213 9.66877 24.6831 9.53129 24.5466 9.39205C25.9597 7.42697 27.1688 5.32291 28.1551 3.11252L28.1946 3.0238L28.2222 2.93029C28.3529 2.49511 28.5015 1.66791 27.9741 0.919833C27.4274 0.147778 26.5534 0.00871194 25.9672 0.00871194H23.2734C22.7093 -0.0173636 22.1514 0.135865 21.6797 0.446426C21.2081 0.756988 20.8469 1.20893 20.6479 1.73744C20.0682 3.1181 19.3424 4.43273 18.4828 5.65886V2.50231C18.4828 2.0947 18.4445 1.41136 18.0069 0.835913C17.4842 0.14538 16.7277 0.00871194 16.2026 0.00871194H11.9275C11.3697 -0.00412368 10.8283 0.198083 10.4154 0.573456C10.0025 0.94883 9.74985 1.46861 9.70968 2.02517L9.70609 2.07911V2.13306C9.70609 2.7145 9.93626 3.14369 10.1209 3.41343C10.2036 3.53451 10.2911 3.6448 10.3475 3.71433L10.3595 3.72992C10.4194 3.80425 10.459 3.8534 10.4985 3.90855C10.604 4.05001 10.7539 4.2706 10.797 4.83885V6.60475C9.93899 5.16765 9.23535 3.64384 8.69786 2.05873L8.68827 2.03236L8.67868 2.00718C8.53242 1.62475 8.29864 1.06849 7.8299 0.644099C7.28322 0.146579 6.63585 0.00871194 6.04722 0.00871194H3.31386C2.71803 0.00871194 1.99992 0.147778 1.46404 0.712433C0.93775 1.2687 0.877808 1.93525 0.877808 2.28771V2.44836L0.911375 2.60421C1.66696 6.11817 3.22671 9.40919 5.46818 12.2189C6.49237 13.8342 7.8829 15.1853 9.52696 16.1626C11.171 17.1399 13.0223 17.7159 14.9306 17.8439L14.9798 17.8475H15.0301C15.9005 17.8475 16.808 17.772 17.4902 17.3176C18.4097 16.7038 18.4828 15.7627 18.4828 15.2928V13.9285C18.719 14.1203 19.0115 14.3768 19.37 14.7221C19.8039 15.1561 20.1492 15.5325 20.4453 15.861L20.6036 16.036C20.8337 16.2926 21.0603 16.5455 21.2665 16.7529C21.5255 17.0131 21.8456 17.2996 22.246 17.5118C22.6812 17.7408 23.1379 17.8451 23.6223 17.8451H26.3568C26.9335 17.8451 27.7595 17.7084 28.3409 17.0347C28.9739 16.301 28.9259 15.4007 28.7269 14.7545L28.691 14.6382L28.637 14.5291ZM21.7796 14.6562C21.4081 14.2408 21.0256 13.8354 20.6323 13.4405L20.6287 13.437C19.0019 11.8689 18.243 11.5967 17.706 11.5967C17.4194 11.5967 17.1041 11.6279 16.8991 11.8844C16.8079 12.0075 16.7475 12.1505 16.7229 12.3016C16.6943 12.4776 16.6815 12.6557 16.6846 12.8339V15.2928C16.6846 15.5985 16.6342 15.7267 16.4927 15.8202C16.3045 15.9461 15.9029 16.048 15.0409 16.048C13.4036 15.9366 11.816 15.4382 10.4088 14.5937C9.00161 13.7492 7.81494 12.5828 6.94635 11.1903L6.93676 11.1747L6.92477 11.1603C4.8366 8.56335 3.38195 5.51572 2.67607 2.25894C2.68087 2.10309 2.71443 2.00838 2.76958 1.95084C2.82593 1.8909 2.96379 1.80698 3.31386 1.80698H6.04722C6.35052 1.80698 6.50877 1.87411 6.62266 1.97601C6.74974 2.0935 6.86243 2.29131 6.9967 2.64377C7.66805 4.61706 8.57438 6.46328 9.43395 7.82037C9.86313 8.49772 10.2851 9.06237 10.6664 9.46159C10.857 9.66059 11.0428 9.82604 11.2214 9.94352C11.3929 10.0562 11.5883 10.1461 11.7897 10.1461C11.8952 10.1461 12.0187 10.1341 12.1373 10.0826C12.2657 10.0262 12.3713 9.92823 12.437 9.80446C12.5605 9.57907 12.5953 9.24699 12.5953 8.81181V4.76812C12.5318 3.78746 12.2356 3.2348 11.9479 2.84278C11.8896 2.76444 11.8296 2.6873 11.7681 2.6114L11.7525 2.59222C11.7016 2.52993 11.6528 2.46596 11.6063 2.4004C11.5479 2.32672 11.5124 2.23751 11.5044 2.14385C11.5138 2.04859 11.5592 1.96052 11.6314 1.89767C11.7036 1.83482 11.7971 1.80195 11.8928 1.80578H16.2026C16.4496 1.80578 16.5323 1.86572 16.5743 1.92207C16.6342 1.99999 16.6846 2.16183 16.6846 2.50231V7.93067C16.6846 8.57564 16.9819 9.01202 17.4134 9.01202C17.9098 9.01202 18.2682 8.71111 18.894 8.08532L18.9048 8.07333L18.9144 8.06254C20.3183 6.35103 21.4653 4.444 22.3191 2.4016L22.3239 2.38722C22.3877 2.20655 22.5091 2.05182 22.6694 1.94678C22.8296 1.84175 23.0199 1.79221 23.2111 1.80578H25.9684C26.3424 1.80578 26.4647 1.90169 26.5055 1.95803C26.5474 2.01797 26.5774 2.14625 26.5055 2.39801C25.5209 4.59957 24.3035 6.68947 22.8742 8.63199L22.8646 8.64637C22.7267 8.85857 22.5745 9.09354 22.5529 9.36208C22.5289 9.6522 22.6536 9.91475 22.873 10.1977C23.0324 10.4327 23.3621 10.7551 23.6966 11.0824L23.7278 11.1136C24.0778 11.4565 24.4578 11.8281 24.7624 12.1878L24.7707 12.1961L24.7791 12.2057C25.687 13.1116 26.4421 14.1585 27.015 15.3059C27.1061 15.6176 27.0509 15.7783 26.979 15.861C26.8963 15.9569 26.7105 16.0468 26.358 16.0468H23.6223C23.4357 16.0519 23.2511 16.0085 23.0864 15.921C22.8846 15.8028 22.7013 15.6558 22.5421 15.4846C22.3707 15.3131 22.1848 15.1057 21.9571 14.8528L21.7796 14.6562Z" fill="white"/>
                    </svg>
                </a>
            </div>
        </div>
    </section>
    <FooterComp :page_name="'main'" />
</template>

<script>
    import heart_box from '@/assets/images/goods-photos/heart-pendant/1.png'
    import twin_rings_box from '@/assets/images/goods-photos/twin-rings/2.png'
    import ring_heart_box from '@/assets/images/goods-photos/heart-ring/1.png'
    import ButtonComp from '@/components/ButtonComp.vue'
    import HeaderComp from '@/components/HeaderComp.vue'
    import {RouterLink} from 'vue-router'
    import FooterComp from '@/components/FooterComp.vue'
    import ShopCard from '@/components/ShopCard.vue'
    import shop_data from '@/assets/data/dada'

    export default {
        components: { ButtonComp, HeaderComp, FooterComp, ShopCard },
        data() {
            return{
                top_items: [
                    shop_data[0],
                    shop_data[1],
                    shop_data[2],
                    // {
                    //     id: 1,
                    //     name: 'Подвеска "Сердце"',
                    //     cost: 600,
                    //     material: 'Амарант',
                    //     img: heart_box,
                    // },
                    // {
                    //     id: 2,
                    //     name: 'Кольца парные',
                    //     cost: 1000,
                    //     material: 'Дуб',
                    //     img: twin_rings_box,
                    // },
                    // {
                    //     id: 3,
                    //     name: 'Кольцо "Сердце"',
                    //     cost: 500,
                    //     material: 'Амарант',
                    //     img: ring_heart_box,
                    // },
                ],
            }
        }
    }
</script>

<style lang="scss" scoped>
    $dark-blue: #253745;
    $grey-blue: #4A5C6A;
    $grey-color: #CCD0CF;
    $light-grey: #F5F5F5;
    $bg-pink: #C3B0AC;
    $light-blue: #60829C;

    @font-face {
        font-family: 'Montserrat';
        src: url('@/assets/fonts/Montserrat-Regular.ttf');
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        color: #fff;
        font-family: 'Montserrat';
    }
    h1{
        font-size: 48px;

        @media (max-width: 600px) {
            font-size: 24px;
        }
    }
    h2, p{
        font-size: 24px;
    }
    @media (max-width: 600px) {
            h2{
                font-size: 14px;
            }
            p{
                font-size: 12px;
            }
        }
    h3{
        font-size: 14px;
    }
    h4{
        font-size: 12px;
    }
    span{
        color: $grey-color;
    }
    a{
        text-decoration: none;
    }
    body{
        background-color: $dark-blue;
    }
    section{
        margin-top: 150px;

        // @media(max-width: 600px) {
        //     // margin-top: 10px;
        // }
    }
    .banner{
        padding: 70px 30px 0 30px;
        position: relative;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        margin: 0;
        @media (max-width: 600px) {
            flex-direction: column;
            padding: 20px 0 0 15px;
            align-items: flex-end;
        }
        
        &__text{
            @media (max-width: 600px) {
                margin-right: 30px;
                margin-top: 80px;
            }
            &__title{
                margin-bottom: 52px;

                &.mobile{
                    display: none;
                }

                @media (max-width: 600px) {
                    margin-bottom: 20px;

                    &.desktop{
                        display: none;
                    }
                    &.mobile{
                        display: block;
                    }
                }
            }
        }
        &__img{
            // width: 570px;
            // height: 525px;
            // background: url('./assets/images/banner-bg.png') no-repeat center;
            // background-size: 130%;
            position: relative;
            @media (max-width: 600px) {
                padding-right: 10px;
                margin-top: 60px;
            }
            &__present{
                width: 375px;
                position: absolute;
                left: 50px;
                @media (max-width: 600px) {
                    width: 220px;
                    left: 40px;
                    // top: ;
                }
            }
            &__bg{
                @media (max-width: 600px) {
                    width: 330px;
                }
            }
        }
    }
    .about-us{
        display: flex;
        flex-direction: row;
        background-color: $grey-blue;
        padding: 0 30px 0 50px;

        @media (max-width: 600px) {
            flex-direction: column;
            align-items: center;
            background: transparent;
            padding: 0;
        }
        &__text{
            padding-top: 20px;
            &__title{
                margin-bottom: 15px;
                padding-bottom: 15px;
                border-bottom: 2px solid #fff;
                width: max-content;
            }

            @media(max-width: 600px) {
                background-color: $grey-blue !important;
                padding: 20px 0 45px 15px;
            }
        }
        &__img{
            width: 490px;
            height: max-content;
            margin-bottom: -70px;
            margin-top: 78px;
            @media (max-width: 600px) {
                margin-top: 10px;
                width: 95vw;
                // margin-bottom: -10px;
                // margin-right: -20px;
            }
        }
    }
    .bestsellers{
        margin-top: calc(150px + 70px);
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 50px;
        @media (max-width: 600px) {
            gap: 20px;
        }
        
        &__wrapper{
            @media (max-width: 600px) {
                overflow-x: scroll;
                width: 100vw;
                padding: 0 15px 15px 15px;
            }
        }
        &__items{
            display: flex;
            flex-direction: row;
            gap: 35px;

            @media (max-width: 600px) {
                // overflow-x: scroll;
                width: max-content;
            }
        }
    }
    .catalog-sect{
        display: grid;
        width: 100%;
        height: 100vh;
        gap: 10px;
        grid-template-areas: 
            "A B"
            "A C";
        // margin-bottom: 50px;
        @media(max-width: 600px) {
            grid-template-areas: 
                "A A"
                "B C";
            gap: 3px;
        }
        &__img-one{
            grid-area: A;
            width: 100%;
            height: 100%;
            background: url('@/assets/images/goods-photos/faceted-ring/1.webp') center;
            background-size: cover;
            position: relative;
            img{
                width: 100%;
            };

            .to-shop{
                position: absolute;
                right: 50px;
                top: 35px;
                background: $dark-blue;
                width:150px;
                height: 50px;
                border-radius: 25px;
                border: none;
                outline: none;
                font-size: 20px;
                @media (max-width: 600px) {
                    top: 5px;
                    right: 5px;
                    font-size: 10px;
                    width: 66px;
                    height: 20px;
                }
            }
        }
        &__img-two{
            grid-area: B;
            width: 100%;
            background: url('@/assets/images/goods-photos/twin-rings/2.webp') center;
            background-size: cover;
        }
        &__img-three{
            grid-area: C;
            width: 100%;
            background: url('@/assets/images/goods-photos/heart-pendant/2.webp') center;
            background-size: cover;
        }
    }
    .indiv-order{
        display: flex;
        flex-direction: column;
        gap: 45px;
        margin-bottom: 170px;
        margin-left: 45px;
        @media(max-width: 600px) {
            margin-left: 15px;
            gap: 30px;
        }


        &__top{
            border-left: 1px solid #fff;
            &__subtitle{
                padding: 15px 25px 0 10px;
                width: max-content;
                border-top: 1px solid #fff;
                font-size: 36px;
                color: #CCD0CF;

                @media(max-width: 600px) {
                    font-size: 15px;
                    padding-right: 0;
                }
            }
            &__title{
                padding-left: 10px;
                font-size: 48px;

                @media(max-width: 600px) {
                    font-size: 24px;
                }
            }
        }

        &__main{
            background-color: #4A5C6A;
            width: 980px;
            align-self: flex-end;
            @media(max-width: 600px) {
                width: 90vw;
            }

            &__title{
                font-size: 32px;
                padding: 10px 0 0 15px;

                @media(max-width: 600px) {
                    font-size: 15px;
                    padding: 10px;
                    padding-bottom: 0;
                }
            }
            &__text{
                // font-size: 24px;
                color: #CCD0CF;
                margin: 50px 0 25px 0;
                padding: 0 15px;
                @media(max-width: 600px) {
                    font-size: 15px;
                    padding: 0 10px;
                    font-size: 12px;
                    margin: 50px 0 25px 0;
                }
            }
            &__contacts{
                padding: 0 0 25px 15px;
                display: flex;
                flex-direction: row;
                align-items: center;
                gap: 25px;
                @media(max-width: 600px) {
                    gap: 15px;
                    padding: 0 0 10px 10px;
                }
            }
            &__network{
                width: 50px;
                height: 50px;
                border-radius: 50%;
                background: transparent;
                border: 2px solid #fff;
                outline: none;
                display: flex;
                align-items: center;
                justify-content: center;

                @media(max-width: 600px) {
                    width: 30px;
                    height: 30px;
                    border: 1px solid #fff;

                    svg{
                        width: 18px;
                    }
                }

                &:first-child{
                    padding: 1px 4px 0 0;
                    @media(max-width: 600px) {
                        padding-left: 3px;
                    }
                }
                &:last-child{
                    padding: 2px 1px 0 0;
                    @media(max-width: 600px) {
                        padding: 1px 1px 0 0;
                    }
                }
            }
        }
    }
    // .materials{
    //     &__title{
    //         margin: 0 auto;
    //         width: max-content;
    //         margin-bottom: 30px;
    //     }
    //     &__main{
    //         width: 100%;
    //         background: #4A5C6A;
    //         height: 438px;
    //         position: relative;
    //     }
    //     &__info{
    //         margin: 0 auto;
    //         width: 570px;
    //     }
    //     &__block{
    //         position: absolute;

    //         &__img{
    //             height: 220px;
    //         }
    //         &.block1{
    //             top: -20px;
    //             left: -150px;
    //         }
    //         &.block4{
    //             bottom: -20px;
    //             right: -150px;
    //         }
    //         &.block3{
    //             top: -20px;
    //             right: -70px;
    //         }
    //         &.block2{
    //             bottom: -20px;
    //             left: -70px;
    //         }
    //     }
    // }
</style>
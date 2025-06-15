<template>
    <!-- <GoodCard ref="good_card" /> -->
    <HeaderComp :page_name="'catalog'" />
    <section class="catalog" id="catalog-main">
        <button class="mobile-filter-btn" @click="visibleFilter = true">Настроить фильтр</button>
        <div class="catalog-filter">
            <div class="catalog-filter__wrapper">
                <h2 class="catalog-filter__wrapper__title">Категории</h2>
                <ul class="filter-list">
                    <li class="filter-item">
                        <input id="rings" class="filter-item__checkbox" type="checkbox">
                        Кольца
                    </li>
                    <li class="filter-item">
                        <input id="pendant" class="filter-item__checkbox" type="checkbox">
                        Подвески
                    </li>
                    <!-- <li class="filter-item">
                        <input class="filter-item__checkbox" type="checkbox">
                        Серьги
                    </li> -->
                    <li class="filter-item">
                        <input id="accessories" class="filter-item__checkbox" type="checkbox">
                        Аксессуары
                    </li>
                    <li class="filter-item">
                        <input id="all-types" class="filter-item__checkbox" type="checkbox" checked>
                        Все
                    </li>
                </ul>
            </div>
            <div class="catalog-filter__wrapper">
                <h2 class="catalog-filter__wrapper__title">Материал на фото</h2>
                <ul class="filter-list">
                    <li class="filter-item">
                        <input id="dub" class="filter-item__checkbox" type="checkbox">
                        Дуб
                    </li>
                    <li class="filter-item">
                        <input id="birch" class="filter-item__checkbox" type="checkbox">
                        Береза
                    </li>
                    <li class="filter-item">
                        <input id="amorant" class="filter-item__checkbox" type="checkbox">
                        Амарант
                    </li>
                    <li class="filter-item">
                        <input id="klen" class="filter-item__checkbox" type="checkbox">
                        Клен
                    </li>
                    <li class="filter-item">
                        <input id="all-material" class="filter-item__checkbox" type="checkbox" checked>
                        Все
                    </li>
                </ul>
            </div>
            <button class="add-filter">Применить фильтр</button>
        </div>
        <div class="catalog-filter mobile-filter" v-if="visibleFilter">
            <button class="close-filter" @click="visibleFilter = false">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.73341 11.0833L2.91675 10.2667L6.18342 7L2.91675 3.73333L3.73341 2.91667L7.00008 6.18333L10.2667 2.91667L11.0834 3.73333L7.81675 7L11.0834 10.2667L10.2667 11.0833L7.00008 7.81667L3.73341 11.0833Z" fill="#235347"/>
                </svg>
            </button>
            <div class="catalog-filter__wrapper">
                <h2 class="catalog-filter__wrapper__title">Категории</h2>
                <ul class="filter-list">
                    <li class="filter-item">
                        <input id="rings" class="filter-item__checkbox" type="checkbox">
                        Кольца
                    </li>
                    <li class="filter-item">
                        <input id="pendant" class="filter-item__checkbox" type="checkbox">
                        Подвески
                    </li>
                    <!-- <li class="filter-item">
                        <input class="filter-item__checkbox" type="checkbox">
                        Серьги
                    </li> -->
                    <li class="filter-item">
                        <input id="accessories" class="filter-item__checkbox" type="checkbox">
                        Аксессуары
                    </li>
                    <li class="filter-item">
                        <input id="all-types" class="filter-item__checkbox" type="checkbox" checked>
                        Все
                    </li>
                </ul>
            </div>
            <div class="catalog-filter__wrapper">
                <h2 class="catalog-filter__wrapper__title">Материал на фото</h2>
                <ul class="filter-list">
                    <li class="filter-item">
                        <input id="dub" class="filter-item__checkbox" type="checkbox">
                        Дуб
                    </li>
                    <li class="filter-item">
                        <input id="birch" class="filter-item__checkbox" type="checkbox">
                        Береза
                    </li>
                    <li class="filter-item">
                        <input id="amorant" class="filter-item__checkbox" type="checkbox">
                        Амарант
                    </li>
                    <li class="filter-item">
                        <input id="klen" class="filter-item__checkbox" type="checkbox">
                        Клен
                    </li>
                    <li class="filter-item">
                        <input id="all-material" class="filter-item__checkbox" type="checkbox" checked>
                        Все
                    </li>
                </ul>
            </div>
            <button class="add-filter">Применить фильтр</button>
        </div>
        <!-- <div class="catalog__main"> -->
            <!-- <div class="catalog-top">
                <h1 class="catalog__title">Каталог</h1>
            </div> -->
        <div class="catalog__body">
            <ShopCard v-for="item in shop_data" :key="item.id" :item="item" />
            <!-- <ShopCard @click="$refs.good_card.openModal(item)" v-for="item in shop_data" :key="item.id" :item="item" /> -->
        </div>
        <!-- </div> -->
    </section>
    <FooterComp :page_name="'catalog'" />
</template>

<script>
    // import heart_box from '@/assets/images/goods-photos/heart-pendant/heart-box.png'
    // import twin_rings_box from '@/assets/images/goods-photos/twin-rings/twin-rings-box.png'
    // import ring_heart_box from '@/assets/images/goods-photos/heart-ring/ring-heart-box.png'
    import HeaderComp from '@/components/HeaderComp.vue'
    import FooterComp from '@/components/FooterComp.vue'
    import ShopCard from '@/components/ShopCard.vue'

    import shop_data from '@/assets/data/dada'
    import ButtonComp from '@/components/ButtonComp.vue'
    import GoodCard from '@/components/popups/GoodCard.vue'

    export default {
        components: { HeaderComp, FooterComp, ShopCard, ButtonComp, GoodCard },
        data() {
            return{
                shop_data: shop_data,
                visibleFilter: false,
            }
        },
        mounted() {
            window.scrollTo(0, 0)
        }
        // data() {
        //     return{
        //         shop_items: [
        //             {
        //                 id: 1,
        //                 name: 'Подвеска "Сердце"',
        //                 cost: 600,
        //                 material: 'Амарант',
        //                 img: heart_box,
        //             },
        //             {
        //                 id: 2,
        //                 name: 'Кольца парные',
        //                 cost: 1000,
        //                 material: 'Дуб',
        //                 img: twin_rings_box,
        //             },
        //             {
        //                 id: 3,
        //                 name: 'Кольцо "Сердце"',
        //                 cost: 500,
        //                 material: 'Амарант',
        //                 img: ring_heart_box,
        //             },
        //             {
        //                 id: 4,
        //                 name: 'Кольцо "Сердце"',
        //                 cost: 500,
        //                 material: 'Амарант',
        //                 img: ring_heart_box,
        //             },
        //             {
        //                 id: 5,
        //                 name: 'Кольцо "Сердце"',
        //                 cost: 500,
        //                 material: 'Амарант',
        //                 img: ring_heart_box,
        //             },
        //             {
        //                 id: 6,
        //                 name: 'Кольцо "Сердце"',
        //                 cost: 500,
        //                 material: 'Амарант',
        //                 img: ring_heart_box,
        //             },
        //             {
        //                 id: 7,
        //                 name: 'Кольцо "Сердце"',
        //                 cost: 500,
        //                 material: 'Амарант',
        //                 img: ring_heart_box,
        //             },
        //         ],
        //     }
        // }
    }
</script>

<style scoped lang="scss">
    .close-filter{
        position: absolute;
            right: 20px;
            top: 25px;
            border: none;
            outline: none;
            background: transparent;
    }
    .catalog{
        // padding: 0 60px;
        // width: 100%;
        margin: 100px 20px 150px 20px;
        // margin-top: 100px;
        // margin-bottom: 150px;
        display: flex;
        flex-direction: row;
        gap: 30px;

        @media(max-width: 600px) {
            flex-direction: column;
            // margin-left: 0;
            // margin-right: 0;
        }

        .mobile-filter-btn{
            display: none;
            height: 40px;
            border-radius: 8px;
            font-size: 16px;
            font-weight: 600;
            letter-spacing: 0.02em;
            background: #60829C;
            border: none;
            outline: none;

            @media(max-width: 600px) {
                display: block;
                // margin: 0 20px;
            }
        }
        &-filter{
            width: 100%;
            height: max-content;
            padding: 20px 10px 15px 10px;
            background-color: #f5f5f5;
            border-radius: 12px;

            @media(max-width: 600px) {
                display: none;

                &.mobile-filter{
                    display: block;
                    position: absolute;
                    top: 0px;
                    left: 0;
                    z-index: 10;
                }
            }
            
            &__wrapper{
                margin-bottom: 55px;

                &__title{
                    color: #000;
                    font-size: 24px;
                    margin-bottom: 20px;
                }
                .filter-list{
                    display: flex;
                    flex-direction: column;
                    gap: 15px;
                }
                .filter-item{
                    color: #000;
                    display: flex;
                    flex-direction: row;
                    gap: 15px;
                    align-items: center;
                    padding-left: 30px;
                    position: relative;

                    input[type='checkbox'] {
                        width: 1px;
                        height: 1px;
                        // margin-bottom: 20px;
                        position: absolute;
                        left: 0;
                        top: -14px;

                        &::before{
                            content: '';
                            font-size: 0;
                            border: 1px solid #000;
                            border-radius: 10px;
                            height: 20px;
                            padding-right: 20px;
                            padding-bottom: 20px;
                        }
                        // &::after{
                        //     content: '';
                        //     font-size: 0;
                        //     padding-bottom: 6px;
                        //     padding-left: 12px;
                        //     border-bottom: 2px solid #000;
                        //     border-left: 2px solid #000;
                        //     transform: rotate(45deg);
                        // }
                        &:checked::before{
                            background: #60829C;
                            border: none;
                        }
                    }
                }
            }
            .add-filter{
                width: 100%;
                height: 50px;
                background-color: #60829C;
                border-radius: 8px;
                border: none;
                outline: none;
                font-size: 16px;
                font-weight: 600;
                letter-spacing: 0.02em;
            }
        }

        &__top{
            padding: 0 40px !important;
        }

        &__title{
            margin-bottom: 50px;
        }
        &__body{
            display: grid;
            grid-template-columns: repeat(4, max-content);
            gap: 15px 20px;
            // overflow-x: scroll;
            // width: 100vw;
            @media(max-width: 600px) {
                grid-template-columns: repeat(2, max-content);
                // margin: 0 auto;
                gap: unset;
                row-gap: 15px;
                justify-content: space-between;
            }
        }
    }
</style>
<template>
    <HeaderComp />
    <section class="catalog">
        <div class="catalog-top">
            <h1 class="catalog__title">Каталог</h1>
        </div>
        <div class="catalog__body">
            <ShopCard v-for="item in shop_data" :key="item.id" :item="item" />
        </div>
    </section>
    <FooterComp />
</template>

<script>
    import heart_box from '@/assets/images/goods-photos/heart-box.png'
    import twin_rings_box from '@/assets/images/goods-photos/twin-rings-box.png'
    import ring_heart_box from '@/assets/images/goods-photos/ring-heart-box.png'

    import HeaderComp from '@/components/HeaderComp.vue'
    import FooterComp from '@/components/FooterComp.vue'
    import ShopCard from '@/components/ShopCard.vue'

    import shop_data from '@/assets/data/dada'

    export default {
        components: { HeaderComp, FooterComp, ShopCard },
        data() {
            return{
                shop_data: shop_data,
            }
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
    .catalog{
        // padding: 0 60px;
        // width: 100%;
        margin: 0 auto;
        margin-top: 100px;
        margin-bottom: 150px;

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
        }
    }
</style>
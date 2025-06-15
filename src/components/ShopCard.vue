<template>
    <GoodCard ref="good_card" />
    <div class="top-item">
        <div class="top-item__img" @click="$refs.good_card.openModal(item)">
            <img :src='item.img' alt="">
        </div>
        <div class="top-item__body">
            <h4 cass="top-item__cost" @click="$refs.good_card.openModal(item)">{{ item.cost }} ₽</h4>
            <div class="top-item__body__wrapper" @click="$refs.good_card.openModal(item)">
                <h3 class="top-item__name">{{ item.title }} "{{ item.name }}"</h3>
                <h3 class="top-item__name mobile-title">{{ shorterText() }}</h3>
                <p class="top-item__material">{{ item.material[0] }}</p>
            </div>
            <ButtonComp />
        </div>
    </div>
</template>

<script>
import ButtonComp from '@/components/ButtonComp.vue'
import GoodCard from './popups/GoodCard.vue';

export default {
    props: {
        item: {
            type: Object,
            required: true,
        }
    },
    components: { ButtonComp, GoodCard },
    methods: {
        shorterText() {
            const text = this.item.title + ' ' + '"' + this.item.name + '"'
            return text.length > 17 ? text.slice(0, 15) + '...' : text
        }
    },
}
</script>

<style lang="scss">
    $grey-color: #CCD0CF;


.top-item {
    width: 280px !important;
    height: 350px;
    border-radius: 16px;
    border: 2px solid #9BA8AB;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    cursor: pointer;

    @media(max-width: 600px) {
        width: 163px !important;
        height: 215px;
        justify-content: unset;
        gap: 10px;

        .main-button {
            font-size: 12px;
            height: 30px;
        }
    }

    &__img {
        width: 100%;
        height: max-content;

        img {
            width: 100%;
            height: 100%;
            border-radius: 16px 16px 0 0;
        }
    }

    &__body {
        padding: 0 15px 10px 15px;
        display: flex;
        // justify-content: flex-end;
        flex-direction: column;
        gap: 10px;

        @media(max-width: 600px) {
            gap: unset;
            justify-content: space-between;
            padding: 0 8px 5px 8px;
            height: 100%;
        }
    }

    &__cost {
        @media(max-width: 600px) {
            font-size: 12px;
        }
    }

    &__name{
        &.mobile-title{
            display: none;
        }
        @media(max-width: 600px) {
            display: none;

            &.mobile-title{
                display: block !important;
            }
        }
    }
    &__material {
        font-size: 14px;
        color: $grey-color;

        @media(max-width: 600px) {
            font-size: 12px;
        }
    }
}
</style>
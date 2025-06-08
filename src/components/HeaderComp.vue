<template>
    <header class="header">
        <RouterLink to="/">
            <img src="@/assets/images/project-logo.png" class="header__logo" alt="logo">
        </RouterLink>
        <ul class="header__nav">
            <li><a href="/#about_us">О нас</a></li>
            <li><a href="/#bestsellers">Бестселлеры</a></li>
            <!-- <li>Каталог</a></li> -->
            <li>
                <RouterLink to="/catalog">Каталог</RouterLink>
            </li>

            <!-- This will open order popup -->
            <li><a href="#order">Заказать украшение</a></li>
        </ul>
    </header>
</template>

<script>
    import {RouterLink} from 'vue-router'

    export default{}
</script>

<style lang="scss">
    $light-grey: #F5F5F5;


    .header{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 20px 30px !important;
        background-color: $light-grey;
        z-index: 2;
        position: fixed;
        top: 0;
        width: 100vw;
        // opacity: 0.7;
        @media (max-width: 600px) {
            padding: 15px;

            &__logo{
                height: 20px !important;
            }
        }

        &__logo{
            height: 30px;
        }

        &__nav{
            display: flex;
            flex-direction: row;
            align-items: center;
            list-style-type: none;
            gap: 30px;
            @media (max-width: 600px) {
                display: none;
            }
            li a{
                color: #000 !important;
                font-weight: 600;
            }
        }
    }
</style>
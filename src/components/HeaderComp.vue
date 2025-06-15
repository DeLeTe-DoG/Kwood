<template>
    <ContactPopup ref="contact_popup" />

    <header class="header">
        <RouterLink to="/">
            <img src="@/assets/images/project-logo.png" class="header__logo" alt="logo">
        </RouterLink>
        <ul class="header__nav">
            <li v-if="page_name == 'main'"><a href="#about_us">О нас</a></li>
            <li v-if="page_name == 'main'"><a href="#bestsellers">Бестселлеры</a></li>
            <!-- <li>Каталог</a></li> -->
            <li>
                <RouterLink v-if="page_name == 'main'" to="/catalog">Каталог</RouterLink>
                <RouterLink v-if="page_name == 'catalog'" to="/">Главная</RouterLink>
            </li>

            <!-- This will open order popup -->
            <li><a @click="$refs.contact_popup.openPopup()">Заказать украшение</a></li>
        </ul>
        <button class="burger-btn" v-if="!visibleMenu" @click="openMenu()">
            <svg width="18" height="13" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0.947368 0C0.696111 0 0.455144 0.0978245 0.277478 0.271953C0.0998117 0.446081 0 0.68225 0 0.928505C0 1.17476 0.0998117 1.41093 0.277478 1.58506C0.455144 1.75919 0.696111 1.85701 0.947368 1.85701H17.0526C17.3039 1.85701 17.5449 1.75919 17.7225 1.58506C17.9002 1.41093 18 1.17476 18 0.928505C18 0.68225 17.9002 0.446081 17.7225 0.271953C17.5449 0.0978245 17.3039 0 17.0526 0H0.947368ZM0 6.49954C0 6.25328 0.0998117 6.01711 0.277478 5.84298C0.455144 5.66886 0.696111 5.57103 0.947368 5.57103H17.0526C17.3039 5.57103 17.5449 5.66886 17.7225 5.84298C17.9002 6.01711 18 6.25328 18 6.49954C18 6.74579 17.9002 6.98196 17.7225 7.15609C17.5449 7.33022 17.3039 7.42804 17.0526 7.42804H0.947368C0.696111 7.42804 0.455144 7.33022 0.277478 7.15609C0.0998117 6.98196 0 6.74579 0 6.49954ZM0 12.0715C0 11.8252 0.0998117 11.5891 0.277478 11.4149C0.455144 11.2408 0.696111 11.143 0.947368 11.143H17.0526C17.3039 11.143 17.5449 11.2408 17.7225 11.4149C17.9002 11.5891 18 11.8252 18 12.0715C18 12.3177 17.9002 12.5539 17.7225 12.728C17.5449 12.9022 17.3039 13 17.0526 13H0.947368C0.696111 13 0.455144 12.9022 0.277478 12.728C0.0998117 12.5539 0 12.3177 0 12.0715Z" fill="#235347"/>
            </svg>
        </button>
        <button class="close-menu" v-if="visibleMenu" @click="closeMenu()">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.73341 11.0833L2.91675 10.2667L6.18342 7L2.91675 3.73333L3.73341 2.91667L7.00008 6.18333L10.2667 2.91667L11.0834 3.73333L7.81675 7L11.0834 10.2667L10.2667 11.0833L7.00008 7.81667L3.73341 11.0833Z" fill="#235347"/>
            </svg>
        </button>
        <ul class="header__nav mobile-nav" v-if="visibleMenu">
            <li v-if="page_name == 'main'"><a href="#about_us">О нас</a></li>
            <li v-if="page_name == 'main'"><a href="#bestsellers">Бестселлеры</a></li>
            <!-- <li>Каталог</a></li> -->
            <li v-if="page_name == 'main'">
                <RouterLink to="/catalog">Каталог</RouterLink>
            </li>
            <li v-if="page_name == 'catalog'">
                <RouterLink to="/">Главная</RouterLink>
            </li>

            <!-- This will open order popup -->
            <li><a @click="$refs.contact_popup.openPopup()">Заказать украшение</a></li>
        </ul>
    </header>
</template>

<script>
    import {RouterLink} from 'vue-router'
    import ContactPopup from './popups/ContactPopup.vue'

    export default{
        data() {
            return{
                visibleMenu: false,
            }
        },
        components: { ContactPopup },
        props: {
            page_name: {
                type: String,
                required: true,
            }
        },
        methods: {
            openMenu() {
                this.visibleMenu = true
            },
            closeMenu() {
                this.visibleMenu = false
            },
            // reloadPage() {
            //     window.location.reload()
            // }
        }
    }
</script>

<style lang="scss">
    $light-grey: #F5F5F5;

    // .scroll-disabled{
    //     overflow-y: hidden !important;
    // }

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
            flex-direction: column;
            align-items: flex-start;
            justify-content: unset;
            gap: 30px;

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
                // display: none;
                flex-direction: column;
                align-items: flex-start;
                gap: 20px;
                display: none;

                &.mobile-nav{
                    display: flex;
                    height: 100vh;
                }
            }
            li a{
                color: #000 !important;
                font-weight: 600;
            }
        }
        .burger-btn, .close-menu{
            position: absolute;
            right: 20px;
            top: 25px;
            border: none;
            outline: none;
            background: transparent;

            display: none;

            @media(max-width: 600px) {
                display: block;
            }
        }
        // .close-btn{
            
        // }
    }
</style>
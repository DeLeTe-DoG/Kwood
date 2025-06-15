<template>
    <button class="main-button" @click="$refs.contact_popup.openPopup()">Отправить заявку</button>

    <ContactPopup ref="contact_popup" />
</template>

<script>
import ContactPopup from './popups/ContactPopup.vue';

    export default{
        components: { ContactPopup },
        data() {
            return{
                visiblePopup: false,
            }
        },
        methods: {
            openPopup() {
                this.visiblePopup = true
            }
        }
    }
</script>

<style>
    .main-button{
        width: 100%;
        height: 50px;
        background-color: #60829C;
        border-radius: 8px;
        border: none;
        font-size: 16px;
        font-weight: 600;
        letter-spacing: 0.02em;
        cursor: pointer;
    }
</style>

<template>
    <body>
        <div>
            <Header />
            <Navbar />
            <router-view> </router-view>
            <Footer />

        </div>
    </body>
</template>

<script>
    import Header from './Header.vue';
    import Navbar from './Navbar.vue';
    import Footer from './Footer.vue';

    export default { 
        components: {
            Header,
            Navbar,
            Footer
        },
        data(){
            return {
            }
        },
        mounted(){
        },
        methods:{
        }
    }
</script>
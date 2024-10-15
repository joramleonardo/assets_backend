
<template>
    <main>
        <!-- <Header /> -->
        <router-view></router-view>
        <!-- <vue-progress-bar></vue-progress-bar> -->
    </main>
</template>
<script>
    // import Header from './components/Header.vue';
    import Sidebar from './components/Sidebar.vue';
    // import Footer from './components/Footer.vue';

    export default {
        components: {
            // Header,
            Sidebar,
            // Footer
        }
    }
</script>

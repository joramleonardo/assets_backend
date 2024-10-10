
<template>
    <main>
        <div id="wrapper">
            <Sidebar />
            <div id="content-wrapper" class="d-flex flex-column">
                <Navbar />
                <div id="content">
                    <router-view> </router-view>
                </div>
            </div>
        </div>
        <!-- <FlashMessage position="right bottom"> </FlashMessage> -->
    </main>
</template>

<script>
    import Sidebar from './Event_Sidebar.vue';
    import Navbar from './Navbar.vue';

    export default { 
        components: {
            Sidebar,
            Navbar
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
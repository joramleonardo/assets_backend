
<template>
    <main>
        <div id="wrapper">
            <Sidebar />
            <router-view> </router-view>
        </div>
        <!-- <FlashMessage position="right bottom"> </FlashMessage> -->
    </main>
</template>

<script>
    import Sidebar from './Event_Sidebar.vue';

    export default { 
        components: {
            Sidebar
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
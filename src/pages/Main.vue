<template>
    <div>
        <header-component/>
        <div class="main">
            <div class="loading">
                <img src="static/img/loading.gif" alt="loading-img">
            </div>
            <sidebar></sidebar>
            <router-view></router-view>
        </div>
        <other-component/>
    </div>
</template>

<script>
    import HeaderComponent from './Header.vue'
    import OtherComponent from './Other.vue'
    import Sidebar from '../components/Sidebar.vue'
    export default{
        data(){
            return{

            }
        },
        components:{
            HeaderComponent,
            OtherComponent,
            Sidebar
        }
    }
</script>

<style type="stylesheet/less">
    @import "../assets/less/pages/Dashboard.less";
</style>
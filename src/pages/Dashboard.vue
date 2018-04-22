<template>
    <div class="dashboard">
        <header-component/>

        <other-component/>
    </div>
</template>

<script>
    import HeaderComponent from './Header.vue'
    import OtherComponent from './Other.vue'
    export default{
        data(){
            return{

            }
        },
        components:{
            'other-component':OtherComponent,
            HeaderComponent,
        }
    }
</script>

<style type="stylesheet/less">
    @import "../assets/less/pages/Dashboard.less";
</style>

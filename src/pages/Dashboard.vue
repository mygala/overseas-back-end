<template>
    <div class="dashboard">
        <div class="content">
            <page-header></page-header>
        </div>
    </div>
</template>

<script>
    import PageHeader from '../components/PageHeader.vue'
    export default{
        data(){
            return{

            }
        },
        components:{
            PageHeader
        }
    }
</script>

<style type="stylesheet/less">
    @import "../assets/less/pages/Dashboard.less";
</style>

<template>
    <div class="sidebar clearfix">
        <ul class="sidebar-panel nav">
            <li>
                <router-link :to="{path: '/Dashboard'}">
                    <span class="icon">
                        <i class="fa fa-tachometer"></i>
                    </span>
                    Dashboard
                </router-link>
            </li>
            <li>
                <a href="#">
                    <span class="icon">
                        <i class="fa fa-graduation-cap"></i>
                    </span>
                    Operate
                    <span class="caret"></span>
                </a>
                <ul>
                    <li>
                        <a href="javascript:;">Operating Position</a>
                    </li>
                    <li>
                        <a href="javascript:;">SEO</a>
                    </li>
                    <li>
                        <a href="javascript:;">CPS</a>
                    </li>
                    <li>
                        <a href="javascript:;">Ads</a>
                    </li>
                </ul>
            </li>
            <li>
                <a href="javascript:;">
                    <span class="icon">
                        <i class="fa fa-quote-right"></i>
                    </span>
                    Post
                </a>
            </li>
            <li>
                <a href="javascript:;">
                    <span class="icon">
                        <i class="fa fa-list"></i>
                    </span>
                    Category
                </a>
            </li>
            <li>
                <a href="javascript:;">
                    <span class="icon">
                        <i class="fa fa-image"></i>
                    </span>
                    Media Library
                </a>
            </li>
            <li>
                <a href="javascript:;">
                    <span class="icon">
                        <i class="fa fa-line-chart"></i>
                    </span>
                    Income
                </a>
            </li>
            <li>
                <a href="javascript:;">
                    <span class="icon">
                        <i class="fa fa-user"></i>
                    </span>
                    User
                </a>
            </li>
            <li>
                <a href="javascript:;">
                    <span class="icon">
                        <i class="fa fa-group"></i>
                    </span>
                    Partner
                </a>
            </li>
            <li>
                <a href="javascript:;">
                    <span class="icon">
                        <i class="fa fa-cog"></i>
                    </span>
                    Settings
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
    export default{
        data(){
            return{

            }
        }
    }
</script>

<style type="stylesheet/less">
    @import "../assets/less/components/Sidebar.less";
</style>

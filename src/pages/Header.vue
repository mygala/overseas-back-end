<template>
    <div class="header">
        <div id="top" class="clearfix">

            <!-- Start App Logo -->
            <div class="applogo">
                <a href="javascript:;" class="logo">MyGala</a>
            </div>
            <!-- End App Logo -->

            <!-- Start Sidebar Show Hide Button -->
            <a href="javascript:;" class="sidebar-open-button">
                <i class="fa fa-bars"></i>
            </a>
            <a href="javascript:;" class="sidebar-open-button-mobile">
                <i class="fa fa-bars"></i>
            </a>
            <!-- End Sidebar Show Hide Button -->

            <!-- Start Sidepanel Show-Hide Button -->
            <a href="#sidepanel" class="sidepanel-open-button">
                <i class="fa fa-outdent"></i>
            </a>
            <!-- End Sidepanel Show-Hide Button -->

            <!-- Start Top Right -->
            <ul class="top-right">
                <li class="dropdown link">
                    <a href="#" data-toggle="dropdown" class="dropdown-toggle profilebox">
                        <img src="img/profileimg.png" alt="img">
                        <b>Jonathan Doe</b>
                        <span class="caret"></span>
                    </a>
                    <ul class="dropdown-menu dropdown-menu-list dropdown-menu-right">
                        <li>
                            <a href="javascript:;">
                                <i class="fa falist fa-power-off"></i>Logout
                            </a>
                        </li>
                    </ul>
                </li>

            </ul>
            <!-- End Top Right -->
        </div>
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
    @import "../assets/less/pages/Header.less";
</style>
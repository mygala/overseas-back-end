<template>
    <div class="login">
        <div class="login-form">
            <form>
                <div class="top">
                    <h1>MyGala</h1>
                    <h4>A Deal Platform</h4>
                </div>
                <div class="form-area">
                    <div class="group">
                        <input type="text" name="username" v-model="userInfo.username" class="form-control" placeholder="Username">
                        <i class="fa fa-user"></i>
                    </div>
                    <div class="group">
                        <input type="password" name="password" v-model="userInfo.password" class="form-control" placeholder="Password">
                        <i class="fa fa-key"></i>
                    </div>
                    <div class="checkbox checkbox-primary">
                        <input type="checkbox" id="remember-me" name="remember-me" v-model="userInfo.rememberMe">
                        <label for="remember-me">Remember Me</label>
                    </div>
                    <button type="submit" class="btn btn-default btn-block">LOGIN</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    export default{
        data(){
            return{
                userInfo: {
                    username: "",
                    password: "",
                    rememberMe: false
                }
            }
        },
        watch: {

            userInfo: {
                handler (newVal, oldVal) {
                    console.log("username", newVal, oldVal);
                },
                deep: true
            }
        },
        mounted () {

            // 页面加载时，光标定位到Username
            $("input[name='username']").focus();

        }
    }
</script>

<style type="stylesheet/less">
    @import "../assets/less/pages/Login.less";
</style>
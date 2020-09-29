<template>
  <div class="login-container">
    <h2>这里是登录界面</h2>
    <div class="login-box">
        <el-form :model="loginForm" :rules="loginRules">
            <el-form-item  prop="username">
                <el-input 
                    v-model="loginForm.username"
                    prefix-icon="el-icon-user"
                    ></el-input>
            </el-form-item>

             <el-form-item prop="password">
                <el-input 
                    v-model="loginForm.password"
                    prefix-icon="el-icon-lock"
                    ></el-input>
            </el-form-item>

            <el-form-item class="login-btn">
                <el-button type="primary" @click="login">登录</el-button>
                <el-button @click="resetForm">重置</el-button>
            </el-form-item>
        </el-form>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            loginForm:{
                username:'',
                password:''
            },
            loginRules: {
                 username:[
                     { required:true,message:'请输入用户名',trigger:'blur' }
                 ],
                 password:[
                     { required:true,message:'请输入密码', trigger:'blur' }
                 ]
             }
        }
       
    },
    methods:{
        resetForm:()=>{

        }
    }

}
</script>

<style scoped>
.login-container{
    height: 100%;
    background: url('http://end.haixue.com/images/admin-logbg.png') no-repeat center center;
    overflow: hidden;
}
.login-box{
    width: 340px;
    position: relative;
    top: 50%;
    margin: 0 auto;
}
.login-btn{
    text-align: right;
}

</style>
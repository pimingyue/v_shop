<template>
  <div class="login-container">
    <div class="login-box">
        <el-form ref="loginFormRef" :model="loginForm" :rules="loginRules">
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
                    type="password"
                    show-password
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
        login() {
            this.$refs.loginFormRef.validate((valid)=>{
                if(!valid) return;
                this.$http.post('login',this.loginForm)
                .then(res => {
                    if(res.data.meta.status == 200){
                        this.$message.success('登录成功！')                      
                        window.sessionStorage.setItem('token',res.data.data.token)
                        this.$router.push('/home')
                    }else{
                        this.$message.error('登录失败')
                    }
                    
                })
                .catch(err => {
                     console.log(err)
                })
            })

        },
        resetForm() {
            // this.$refs(loginFormRef).resetFields();
            this.$refs.loginFormRef.resetFields();
         
        }
    }

}
</script>

<style scoped>
.login-container{
    height: 100%;
    background: #2d2d2d;
    overflow: hidden;
}
.login-box{
    width: 340px;
    position: relative;
    top: 20%;
    margin: 0 auto;
    background: #fff;
    padding: 30px;
    border-radius: 10px;
}
.login-btn{
    text-align: right;
}

</style>
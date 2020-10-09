<template>
    <el-container>
            <el-header>
                <h2>后台管理系统</h2>
                <el-button @click="loginout">退出</el-button>
            </el-header>
            <el-container>
                <el-aside width="200px">
                     <el-menu
                        class="el-menu-vertical-demo"
                        >
                        <el-submenu index="1">
                            <template slot="title">
                            <i class="el-icon-location"></i>
                            <span>导航一</span>
                            </template>
                            <el-menu-item-group>
                            <template slot="title">分组一</template>
                            <el-menu-item index="1-1">选项1</el-menu-item>
                            <el-menu-item index="1-2">选项2</el-menu-item>
                            </el-menu-item-group>
                            <el-menu-item-group title="分组2">
                            <el-menu-item index="1-3">选项3</el-menu-item>
                            </el-menu-item-group>
                            <el-submenu index="1-4">
                            <template slot="title">选项4</template>
                            <el-menu-item index="1-4-1">选项1</el-menu-item>
                            </el-submenu>
                        </el-submenu>
                        <el-menu-item index="2">
                            <i class="el-icon-menu"></i>
                            <span slot="title">导航二</span>
                        </el-menu-item>
                     </el-menu>
                </el-aside>
                <el-main>Main</el-main>
            </el-container>
    </el-container>
</template>

<script>
export default {
    data(){
        return{

        }
    },
    methods:{
        loginout() {
            window.sessionStorage.clear();
            this.$router.push('/login')
        }
    }
}
</script>

<style scoped>
.el-container{
    height: 100%;
}
.el-header{
    background: #002140;
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.el-aside{
    background: #001529;
    height: 100%;
     color: #fff;
}

</style>>
    

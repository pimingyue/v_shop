<template>
    <el-container>
            <el-header>
                <h2>后台管理系统</h2>
                <el-button @click="loginout">退出</el-button>
            </el-header>
            <el-container>
                <el-aside :width="isCollapse? 64+'px' : 200+'px'">
                    <div class="toggle-button" @click="toggleCospan">|||</div>
                     <el-menu
                        class="el-menu-vertical-demo" 
                        unique-opened
                        :collapse="isCollapse"
                        :collapse-transition="false"
                        router
                        :default-active="activePath"
                        >
                        <el-submenu 
                            :index="item.id+''" 
                            v-for="item in meauList" 
                            :key="item.id"
                            >
                            <template slot="title">
                                <i :class="icons[item.id]"></i>
                                <span>{{item.authName}}</span>
                            </template>
                            <!-- 二级菜单 -->
                            <el-menu-item 
                                class="sectitle"
                                :index="'/'+subItem.path" 
                                v-for="subItem in item.children" :key="subItem.id" 
                                @click="savaNavStatus('/'+subItem.path)">
                                <template>
                                    <i class="el-icon-menu"></i>
                                    {{subItem.authName}}
                                </template>
                               
                            </el-menu-item>

                        </el-submenu>
                     
                     </el-menu>
                </el-aside>
                <el-main>
                    <div>
                        <router-view></router-view>
                    </div>
                </el-main>
            </el-container>
    </el-container>
</template>

<script>
export default {
    data(){
        return{
            meauList:[],
            icons:{
                '125':'el-icon-user-solid',
                '103':'el-icon-key',
                '101':'el-icon-shopping-bag-1',
                '102':'el-icon-s-order',
                '145':'el-icon-s-data'
            },
            isCollapse:false,
            activePath:''
        }
    },
    created(){
        this.getMeauList()
        this.activePath = window.sessionStorage.getItem('activePath')
    },
    methods:{
        loginout() {
            window.sessionStorage.clear();
            this.$router.push('/login')
        },
        getMeauList(){
            this.$http.get('menus')
            .then(res => {
                if(res.data.meta.status == 200){
                    this.meauList = res.data.data
                }
            })
            .catch(err => {
                console.error(err); 
            })
        },
        toggleCospan(){
            this.isCollapse = !this.isCollapse
        },
        // 保存链接的激活状态
        savaNavStatus(activePath){
            window.sessionStorage.setItem('activePath',activePath);
            this.activePath = activePath
            

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

.el-menu{
    background-color: #ddd;
}
.toggle-button{
    font-size: 20px;
    padding: 5px 0;
    cursor: pointer;
    letter-spacing: 2px;
}

.sectitle{
    margin-left: 20px;
    box-sizing: border-box;
}
.el-main{
    background: #f1f1f1;
}

</style>>
    

<template>
   <div>
        <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/welcome' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>权限管理</el-breadcrumb-item>
            <el-breadcrumb-item>角色列表</el-breadcrumb-item>
        </el-breadcrumb>
        
       
        <template>
        <el-table
            :data="rolesList"
            style="width: 100%"
            class="table"
            >
            <el-table-column type="expand">
                <template slot-scope="scope">
                    <h2>{{ scope.row }}</h2>
                </template>
            </el-table-column>
           
            <el-table-column
                label="#"
                type="index">
            </el-table-column>
            <el-table-column
            label="角色名称"
            prop="roleName">
            </el-table-column>
            <el-table-column
            label="角色描述"
            prop="roleDesc">
            </el-table-column>
            <el-table-column
            label="操作"
            >

            </el-table-column>
        </el-table>
        </template>

         <div> {{rolesList}} </div>


    </div>
</template>

<script>
export default {
    data() {
        return {
            rolesList:[]
        }
    },
    created(){
        this.getRoleList() 
    },
    methods:{

        getRoleList:function(){
            this.$http.get('roles')
            .then(res => {
                console.log(res)
                if(res.data.meta.status == 200){
                    this.$message.success('获取角色列表成功！')
                    this.rolesList = res.data.data 
                }
               
            })
            .catch(err => {
                console.error(err); 
            })
        }

    },
}
</script>

<style>

.table{
    border: 1px solid #ddd;
}

</style>
<template>
  <div>
   
   <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/welcome' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>用户管理</el-breadcrumb-item>
        <el-breadcrumb-item>用户列表</el-breadcrumb-item>
    </el-breadcrumb>

    <el-card class="box-card">
        <div class="search-box">
           
            <el-input 
                placeholder="请输入内容"  
                class="input-with-select" 
                v-model="queryInfo.query"
                clearable
                @clear="getUserList"
                >
                <el-button slot="append" icon="el-icon-search" @click="getUserList"></el-button>
            </el-input>
            <el-button 
                type="primary" 
                class="add-users"
                @click="dialogVisible = true"
                >添加用户</el-button>
        </div>
        <el-table
            border
            class="table"
            stripe
            :data="userList"
            >
            <el-table-column
                label="#"
                width="80"
                prop="id"
                >
            </el-table-column>
            <el-table-column
                label="姓名"
                width="180"
                prop="username"
                >
            </el-table-column>
            <el-table-column               
                label="邮箱"
                width="180"
                prop="email"
                >
            </el-table-column>
            <el-table-column
                label="电话"
                prop="mobile"
                >
            </el-table-column>
             <el-table-column
                label="角色"
                prop="role_name"
                >
            </el-table-column>
             <el-table-column
                label="状态"
                width="100"
                >
                
                <template slot-scope="scope">
                   <el-switch v-model="scope.row.mg_state" @change="modifyUserStatus(scope.row)">
                    </el-switch>
                </template>
            </el-table-column>
             <el-table-column
                label="操作">
                <template slot-scope="scope">
                    <el-button type="primary" icon="el-icon-edit"></el-button>
                    <el-button type="danger" icon="el-icon-delete"></el-button>
                    <!-- 分配角色 -->
                    <el-tooltip effect="dark" content="分配角色" placement="top" :enterable="false">
                        <el-button type="warning" icon="el-icon-setting"></el-button>
                    </el-tooltip>
                </template>
            </el-table-column>
        </el-table>

        <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="queryInfo.pagenum"
            :page-sizes="[1, 2, 5, 10]"
            :page-size="queryInfo.pagesize"
            layout="total, sizes, prev, pager, next, jumper"
            :total="total">
        </el-pagination>
       
    </el-card>

   
    <el-dialog title="收货地址" :visible.sync="dialogVisible" width="50%">
        <el-form :model="form">
            <el-form-item label="姓名" :label-width="formLabelWidth">
                <el-input  autocomplete="off" ></el-input>
            </el-form-item>
             <el-form-item label="密码" :label-width="formLabelWidth">
                <el-input  autocomplete="off" ></el-input>
            </el-form-item>
             <el-form-item label="邮箱" :label-width="formLabelWidth">
                <el-input  autocomplete="off"></el-input>
            </el-form-item>

            <el-form-item label="手机号码" :label-width="formLabelWidth">
                <el-input  autocomplete="off"></el-input>
            </el-form-item>
            
        </el-form>
        <div slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" >确 定</el-button>
        </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
    data(){
        return{
            userList:[],
            queryInfo:{
               query:'',
               pagenum:1,
               pagesize:2

            },
            total:0,
            dialogVisible: true,
            formLabelWidth:'120px'
          
        }
    },
    
    created(){
       this.getUserList() 
    },
    methods: {
        getUserList(){
            this.$http.get('users',{params:this.queryInfo})
                .then(res => {
                    this.userList =  res.data.data.users;
                    this.total = res.data.data.total
                })
                .catch(err => {
                console.error(err); 
            })
        },
        // 监听pagesize改变
        handleSizeChange(newSize){
           
            this.queryInfo.pagesize = newSize
            this.getUserList()
        },

        // 监听页码值得改变
        handleCurrentChange(newPage){
            this.queryInfo.pagenum = newPage
            this.getUserList()
        },

        modifyUserStatus(userInfo){
        
             this.$http.put(`users/${userInfo.id}/state/${userInfo.mg_state}`)
             .then(res => {
                 console.log(res)
                 if(res.data.meta.status != 200){
                     userInfo.mg_state = !userInfo.mg_state
                 }

                 this.$message.success('更新用户状态成功')
             })
             .catch(err => {
                 console.error(err); 
             })
           
        },
        
    },
    

    

}
</script>

<style>
.box-card,.table{
    margin-top: 20px;
}

.input-with-select{
    width: 40%;
}

.search-box{
    width: 50%;
    display: flex;
}
.add-users{
    margin-left: 20px;
}

.el-pagination{
    text-align: left;
    margin-top: 20px;
}

.el-form-item{
    width: 60%;
    margin: 10px auto;
}


</style>>
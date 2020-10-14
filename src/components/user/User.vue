<template>
  <div>
   
   <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/welcome' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>用户管理</el-breadcrumb-item>
        <el-breadcrumb-item>用户列表</el-breadcrumb-item>
    </el-breadcrumb>

    <el-card class="box-card">
        <div class="search-box">
            <el-input placeholder="请输入内容"  class="input-with-select">
                <el-button slot="append" icon="el-icon-search"></el-button>
            </el-input>
            <el-button type="primary" class="add-users">添加用户</el-button>
        </div>
        <el-table
            border
            class="table">
            <el-table-column
                label="#"
                width="80">
            </el-table-column>
            <el-table-column
                label="姓名"
                width="180">
            </el-table-column>
            <el-table-column               
                label="邮箱"
                width="180">
            </el-table-column>
            <el-table-column
                label="电话">
            </el-table-column>
             <el-table-column
                label="角色">
            </el-table-column>
             <el-table-column
                label="状态">
            </el-table-column>
             <el-table-column
                label="操作">
                <template >
                    <el-button type="primary" icon="el-icon-edit"></el-button>
                    <el-button type="danger" icon="el-icon-delete"></el-button>
                    <el-button type="warning" icon="el-icon-star-off"></el-button>
                </template>
            </el-table-column>
        </el-table>
       
    </el-card>

    <div class="container">
    </div>
  </div>
</template>

<script>
export default {

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


</style>>
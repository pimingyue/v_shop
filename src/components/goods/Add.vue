<template>

  <div>
    <h2>图片上传</h2>
    <!-- action 表示图片要上传的API地址 -->
    <el-upload
      class="upload-demo"
      :action="uploadUrl"
      list-type="picture">
      <el-button size="small" type="primary">点击上传</el-button>
      <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
    </el-upload>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 上传图片的URL地址
       uploadUrl:'http://127.0.0.1:8888/api/private/v1/upload'
    }
  },
}
</script>

<style>

</style>>
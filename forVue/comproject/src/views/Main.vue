<template>
  <el-container>
    <el-aside width="200px">
      <common-aside></common-aside>
    </el-aside>
    <el-container>
      <el-header>
        <common-header></common-header>
      </el-header>
      <el-main class="main-wrapper">Main</el-main>
    </el-container>
  </el-container>
</template>

<script>
import CommonAside from '_c/CommonAside'
import CommonHeader from '_c/CommonHeader'

export default {
  components: {
    CommonAside,
    CommonHeader
  },
}
</script>

<style lang="less" scoped>
.el-container {
  height: 100%;
}
.el-header {
  padding: 0;
}
.el-main {
  // border: 1px solid red;
}
</style>

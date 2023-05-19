<template>
  <div class="">
    <el-row style="height: 100%;">
      <el-col :span="4"  style="min-height: 100%; background-color: #324057;">
        <el-menu :default-active="defaultActive" style="min-height: 100%;" theme="dark" router>
          <el-menu-item index="/index"><i class="el-icon-menu"></i>首页</el-menu-item>
          <el-submenu index="2">
            <template slot="title"><i class="el-icon-document"></i>链接管理</template>
            <el-menu-item index="/list">链接列表</el-menu-item>
            <el-menu-item index="/add">添加链接</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-col>
      <el-col :span="20" style="height: 100%;overflow: auto;">
        <keep-alive>
          <router-view :key='$route.fullPath'></router-view>
        </keep-alive>
      </el-col>
    </el-row>
  </div>
</template>
<script>
  export default {
    computed: {
      defaultActive: function(){
        return this.$route.path.replace('/', '');
      }
    },
  }
</script>

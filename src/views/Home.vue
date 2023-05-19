<template>
  <el-container style="height: 500px; border: 1px solid #eee">
    <el-container>
      <el-header>
        <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
          <el-tab-pane label="热榜" name="hot">

          </el-tab-pane>
          <el-tab-pane label="订阅" name="subscribe">订阅</el-tab-pane>
          <el-tab-pane label="最新" name="newest">最新</el-tab-pane>
        </el-tabs>
      </el-header>
      <el-main>
        <div v-show="showTabs === 'hot'">
          <el-tabs v-model="activeUrlName"  @tab-click="urlClick">
            <el-tab-pane v-for="item in urlData" :key="item.id" :label="item.name" :value="item.value" :name="item.pathName">
            </el-tab-pane>
          </el-tabs>
          <indexList :pathName="pathName" />
        </div>

      </el-main>
    </el-container>
  </el-container>
</template>

<script>
  import {
    service as request
  } from '@/utils/request'
  import indexList from './hotList/indexList'
  export default {
    name: 'Home',
    components: {
      indexList
    },
    data() {
      return {
        activeName: 'hot',
        urlData: [],
        activeUrlName: '',
        pathName: '',
        showTabs: 'hot'
      }
    },
    created() {
      this.initHotUrl()
    },
    methods: {
      initHotUrl(){
        request({
          url: 'hotUrl/hotUrl/queryAll',
          type: 'get'
        }).then((response) => {
          this.urlData = response.data.data
          this.activeUrlName = this.urlData[0].pathName
          this.pathName = this.urlData[0].pathName
          console.log(response)
        }).catch((response) => {})
      },
      handleClick(tab, event) {
        this.showTabs = tab.name
      },
      urlClick(tab, event) {
        this.pathName = tab.name
      }
    }
  }
</script>

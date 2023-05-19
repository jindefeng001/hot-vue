<template>
  <div class="app-container">
    <!-- 折叠面板-->
    <el-collapse v-model="activeNames" style="padding-left: 20px;">
      <el-collapse-item name="1">
        <template slot="title">
          <i class="el-icon-tickets" /> <span>筛选条件</span>
          <i v-if="activeNames != '1'" class="el-icon-right" />
          <i v-if="activeNames == '1'" class="el-icon-bottom" />
        </template>
        <div style="margin-top: 15px">
          <el-form :inline="true" :model="listQuery" size="mini">
            <el-form-item label="网站标识：">
              <el-input v-model="listQuery.pathName" class="input-width" placeholder="网站标识" />
            </el-form-item>
            <el-form-item label="网站名称：">
              <el-input v-model="listQuery.name" class="input-width" placeholder="网站名称" />
            </el-form-item>
            <el-form-item label="网址链接：">
              <el-input v-model="listQuery.url" class="input-width" placeholder="网址链接" />
            </el-form-item>
            <el-form-item label="链接状态：">
              <el-select v-model="listQuery.isUse" class="input-width" placeholder="全部" clearable>
                <el-option v-for="item in stateOptions" :key="item.value" :label="item.label" :value="item.value" />
              </el-select>
            </el-form-item>
            <el-form-item label="">
              <div>
                <el-button type="primary" size="mini" @click="handleSearchList()">
                  <i class="el-icon-search" /> 查询
                </el-button>
                <el-button style="margin-right: 15px" size="mini" @click="handleResetSearch()">
                  <i class="el-icon-refresh-left" /> 重置
                </el-button>
              </div>
            </el-form-item>
          </el-form>
        </div>
      </el-collapse-item>
    </el-collapse>
    <!--  热榜链接列表 -->
    <div class="table-container" style="width: 100%;">
      <el-table ref="orderTable" v-loading="listLoading" :data="list" style="width: 100%;" size="small">
        <el-table-column label="序号" width="70" align="center" type="index" :index="indexMethod" />
        <el-table-column label="网站标识" align="center" :show-overflow-tooltip="true">
          <template slot-scope="scope">{{ scope.row.pathName }}</template>
        </el-table-column>
        <el-table-column label="网站名称" align="center" :show-overflow-tooltip="true">
          <template slot-scope="scope">{{ scope.row.name }}</template>
        </el-table-column>
        <el-table-column label="网址链接" align="center" :show-overflow-tooltip="true">
          <template slot-scope="scope">{{ scope.row.url }}</template>
        </el-table-column>
        <el-table-column label="需抽取CSS" align="center" :show-overflow-tooltip="true">
          <template slot-scope="scope">{{ scope.row.cssPath }}</template>
        </el-table-column>
        <el-table-column label="首页需抽取css" align="center" :show-overflow-tooltip="true">
          <template slot-scope="scope">{{ scope.row.homeCssPath }}</template>
        </el-table-column>
        <el-table-column label="是否使用" align="center" :show-overflow-tooltip="true">
          <template slot-scope="scope">
            <span v-show="scope.row.isUse == 0">未使用</span>
            <span v-show="scope.row.isUse == 1">使用中</span>
<!--            {{ scope.row.isUse }}-->
          </template>
        </el-table-column>
        <el-table-column label="操作" width="250" align="center">
          <template slot-scope="scope">
<!--            <el-switch-->
<!--              v-model="scope.row.isUse"-->
<!--              active-value="1"-->
<!--              inactive-value="0"-->
<!--              @change="updateIsUse(scope.row)"-->
<!--              active-color="#13ce66"-->
<!--              inactive-color="#ff4949">-->
<!--            </el-switch>-->
            <el-button size="mini" v-if="scope.row.isUse == 0" @click="updateIsUse(scope.row,1)">
              启用
            </el-button>
            <el-button size="mini" v-if="scope.row.isUse == 1" @click="updateIsUse(scope.row,0)">
              停用
            </el-button>
            <el-button size="mini" @click="handleUpdateView(scope.row)">
              编辑
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <!-- 分页器-->
    <div class="pagination-container">
      <el-pagination :current-page.sync="listQuery.pageNum" :page-size="listQuery.pageSize" :page-sizes="[5,10,15]"
                     :total="total" background layout="total, sizes,prev, pager, next,jumper" @size-change="handleSizeChange"
                     @current-change="handleCurrentChange" />
    </div>
  </div>
</template>
<script>
  import {
    service as request
  } from '@/utils/request'
  const defaultListQuery = {
    pageNum: 1,
    pageSize: 10,
    pageType: 1,
    pathName: null,
    name: null,
    url: null,
    isUse: null
  }
  export default {
    name: 'urlList',
    data() {
      return {
        listQuery: Object.assign({}, defaultListQuery),
        listLoading: true,
        list: new Array(20),
        total: 1,
        activeNames: '1',
        stateOptions: [{
            label: '未启用',
            value: 0
          },
          {
            label: '启用中',
            value: 1
          }
        ]
      }
    },
    created() {
      this.getList()
    },
    methods: {
      getList() {
        request({
          url: 'hotUrl/hotUrl/queryAllForPage',
          type: 'get',
          params: this.listQuery
        }).then((response) => {
          this.listLoading = true
          setTimeout(() => {
            console.log(response)
            this.list = response.data.data.records
            this.total = response.data.total
            this.listLoading = false
          }, 100)
        }).catch((response) => {})
      },
      handleResetSearch() {
        this.listQuery = Object.assign({}, defaultListQuery)
        this.createTimeValue = ''
        this.getList()
      },
      handleSearchList() {
        this.listQuery.pageNum = 1
        this.getList()
      },
      handleSizeChange(val) {
        this.listQuery.pageNum = 1
        this.listQuery.pageSize = val
        this.getList()
      },
      handleCurrentChange(val) {
        this.listQuery.pageNum = val
        this.getList()
      },
      indexMethod(index) {
        return index + (this.listQuery.pageNum - 1) * this.listQuery.pageSize + 1
      },
      handleUpdateView(row) {
        this.$router.push('/update/' + row.id)
      },
      updateIsUse(row, isUse) {
        row.isUse = isUse
        request({
          url: 'hotUrl/hotUrl/' + row.id,
          headers: {
            'Content-Type': 'application/json'
          },
          method: 'put',
          data: row
        }).then((response) => {
          if (response.data != '') {
            // 修改成功
            this.$message({
              message: '操作成功！',
              type: 'success',
              duration: 1000
            })
          } else {
            this.$message({
              message: '操作失败',
              type: 'error',
              duration: 1000
            })
          }
        }).catch((response) => {
          this.$message({
          message: '操作失败',
          type: 'error',
          duration: 1000
        })
        })
      }
    }
  }
</script>
<style scoped>
  .input-width {
    width: 150px;
  }

  .table-container {
    overflow: hidden;
    margin-top: 20px;
  }
</style>

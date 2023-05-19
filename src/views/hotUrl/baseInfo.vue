<template>
  <div>
    <el-card class="box-card">
      <div slot="header">
        <span>基本信息</span>
      </div>
      <div style="">
        <el-form ref="addFrom" :model="hotUrl" :rules="rules" label-width="150px" size="small">
          <el-row>
            <el-col :span="12" :offset="6">
              <el-form-item label="网站标识：" prop="pathName">
                <el-input v-model.trim="hotUrl.pathName" />
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12" :offset="6">
              <el-form-item label="网站名称：" prop="name">
                <el-input v-model.trim="hotUrl.name" />
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12" :offset="6">
              <el-form-item label="网址链接：" prop="url">
                <el-input v-model.trim="hotUrl.url" />
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12" :offset="6">
              <el-form-item label="需抽取CSS：" prop="cssPath">
                <el-input v-model="hotUrl.cssPath" />
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12" :offset="6">
              <el-form-item label="首页需抽取css：" prop="homeCssPath">
                <el-input v-model="hotUrl.homeCssPath" />
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
      </div>
      <!-- 分割线 保存按钮-->
      <div style="text-align:center;margin:18px 0;">
        <el-button @click="onSubmit('addFrom')" :loading="saving">保存</el-button>
        <el-button @click="closePage()">关闭</el-button>
      </div>
    </el-card>
  </div>
</template>
<script>
  import {
    service as request
  } from '@/utils/request'

  export default {
    name: 'urlBaseInfo',
    props: {
      hotUrl: {
        type: Object,
        required: true
      }
    },
    data() {
      return {
        rules: {
          pathName: [{
            required: true,
            message: '请输入网站标识',
            trigger: 'blur'
          }
          ],
          name: [{
            required: true,
            trigger: 'blur',
            message: '请输入网站名称'
          }],
          url: [{
            required: true,
            message: '请输入网址链接',
            trigger: 'blur'
          }]
        },
        saving: false
      }
    },
    computed: {
    },
    watch: {
      hotUrl: {
        handler: function(nv, ov) {

        },
        deep: true
      }
    },
    mounted() {
    },
    methods: {
      onSubmit(formName) {
        // 保存验证
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$confirm('是否保存数据？', '提示', {
              confirmButtonText: '确定',
              cancelButtonText: '取消',
              type: 'warning'
            }).then(() => {
              this.handleData()
            })
          } else {
            this.$message({
              message: '验证失败！',
              type: 'error',
              duration: 2000
            })
            return false
          }
        })
      },
      handleData() {
        if (this.hotUrl.id) {
          // 修改数据
          this.updateData()
        } else {
          // 保存数据
          this.saveData()
        }
      },
      updateData() {
        this.saving = true
        // 修改链接
        const formData = Object.assign({}, this.hotUrl)
        request({
          url: 'hotUrl/hotUrl/' + this.hotUrl.id,
          headers: {
            'Content-Type': 'application/json'
          },
          method: 'put',
          data: formData
        }).then((response) => {
          if (response.data != '') {
            // 修改成功
            this.$message({
              message: '保存成功！',
              type: 'success',
              duration: 1000
            })
            this.$router.push({
              path: '/list'
            })
          } else {
            this.$message({
              message: '保存失败',
              type: 'error',
              duration: 1000
            })
          }
          this.saving = false
        }).catch((response) => {
          this.saving = false
        })
      },
      saveData() {
        this.saving = true
        const formData = Object.assign({}, this.hotUrl)
        // 保存数据
        request({
          url: 'hotUrl/hotUrl/',
          headers: {
            'Content-Type': 'application/json'
          },
          method: 'post',
          data: formData
        }).then((response) => {
          if (response.data != '') {
            this.$message({
              message: '保存成功！',
              type: 'success',
              duration: 1000
            })
            this.$router.push({
              path: '/list'
            })
          } else {
            this.$message({
              message: '保存失败',
              type: 'error',
              duration: 1000
            })
          }
          this.saving = false
        }).catch((response) => {
          this.saving = false
        })
      },
      closePage() {
        // 关闭页面
        this.$confirm('您是否确定关闭本页面？', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          // 跳转页面
          this.$router.push({
            path: '/urlList'
          })
        }).catch(() => {
        })
      }

    }
  }
</script>


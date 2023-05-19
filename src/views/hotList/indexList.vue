<template>
    <div class="list-item-desc-box">
      <div v-for="item in listData" class="list-header">
        <el-row>
          <el-col :span="24">
            <el-link  :href="item.url" class="list-item-title">{{item.title}}</el-link>
          </el-col>
        </el-row>
      </div>
    </div>
</template>

<script>
    import {
        service as request
    } from '@/utils/request'
    // import HelloWorld from '@/components/HelloWorld.vue'
    export default {
        name: 'Home',
        components: {
        },
        props: {
            pathName: {
                type: String,
                default: ''
            }
        },
        data() {
            return {
                activeName: 'hot',
                listData: [],
                activeUrlName: ''
            }
        },
        created() {
            this.initHotList()
        },
        watch: {
            pathName(val) {
                this.initHotList()
            }
        },
        methods: {
            initHotList(){
                console.log(this.pathName)
                request({
                    url: 'hotList/hotList/' + this.pathName,
                    type: 'get'
                }).then((response) => {
                  this.listData = response.data.data.listDetail
                    console.log(this.listData)
                }).catch((response) => {})
            }
        }
    }
</script>

<style>
  .list-item-desc-box {
    color: #363636;
    font-size: 13px;
    font-family: -apple-system,BlinkMacSystemFont,Helvetica Neue,PingFang SC,Microsoft YaHei,Source Han Sans SC,Noto Sans CJK SC,WenQuanYi Micro Hei,sans-serif;
    box-sizing: border-box;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .list-header {
    color: #363636;
    font-size: 13px;
    font-family: -apple-system,BlinkMacSystemFont,Helvetica Neue,PingFang SC,Microsoft YaHei,Source Han Sans SC,Noto Sans CJK SC,WenQuanYi Micro Hei,sans-serif;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    margin-bottom: 10px;
  }
  .list-item-title {
    font-family: -apple-system,BlinkMacSystemFont,Helvetica Neue,PingFang SC,Microsoft YaHei,Source Han Sans SC,Noto Sans CJK SC,WenQuanYi Micro Hei,sans-serif;
    box-sizing: border-box;
    font-size: 14px;
    text-decoration: none;
    font-weight: 700;
    margin: 0;
    cursor: pointer;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    color: rgb(54, 54, 54);
  }
</style>

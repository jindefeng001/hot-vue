<template>
  <div>
    <base-info :hotUrl="hotUrl" />
  </div>
</template>
<script>
  import baseInfo from './baseInfo'
  import {
    service as request
  } from '@/utils/request'
  const defaultUrl = {
    id: '',
    pathName: '',
    name: '',
    url: '',
    cssPath: '',
    homeCssPath: ''
  }
  export default {
    name: 'addUrl',
    components: { baseInfo },
    data() {
      return {
        hotUrl: Object.assign({}, defaultUrl)
      }
    },
    created() {
      if (this.$route.params.id) {
        this.initData()
      }
    },
    methods: {
      initData() {
        request({
          url: 'hotUrl/hotUrl/' + this.$route.params.id,
          type: 'get'
        }).then((response) => {
          console.log(response)
          this.hotUrl = response.data.data
        }).catch((response) => {})
      }
    }
  }
</script>

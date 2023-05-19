const httpConfig = {
  'development': {// 开发环境，默认
    geccoUrl: 'http://localhost:8001/', // 爬虫
    commonUrl: 'http://localhost:8761/', // 
    hotListUrl: 'http://localhost:8000/', // 列表
    hotUrl: 'http://localhost:8003/', // 网址
  },
  'production': {// 生产环境 npm run build:prod的时候执行这个环境
    rfqBaseUrl: 'https://store.cmbchina.com:8143/productAddBack/', // 询报价的地址，默认地址
    workflowBaseUrl: 'https://store.cmbchina.com:8243/workflow/', // 工作流的地址
    providerBaseUrl: 'https://supplier.cmbchina.com/', // 供应商的地址
    productBaseUrl: 'https://store.cmbchina.com:8043/', // eshop的地址
    userBaseUrl: 'https://store.cmbchina.com:8143/zcyBase/',
    ftpBaseUrl: 'https://store.cmbchina.com:8000/',
    // uploadBaseUrl: 'http://119.167.155.29:8010/ifq_boot/'
    uploadBaseUrl: 'https://store.cmbchina.com:8143/productAddBack/'
  },
  'staging': {// uat环境 npm run build:stage的时候执行这个环境
    rfqBaseUrl: 'https://shopuat.cmbchina.com:8143/productAdd_back/', // 询报价的地址，默认地址
    workflowBaseUrl: 'https://shopuat.cmbchina.com:8243/workflow/', // 工作流的地址
    providerBaseUrl: 'https://163.53.88.200/productAddOptimize/', // 供应商的地址
    productBaseUrl: 'https://shopuat.cmbchina.com:8043/productAddOptimize/', // eshop的地址
    userBaseUrl: 'https://shopuat.cmbchina.com:8143/zcy_base/',
    ftpBaseUrl: 'https://shopuat.cmbchina.com:8000/',
    // uploadBaseUrl: 'http://119.167.155.29:8010/ifq_boot/'
    uploadBaseUrl: 'https://shopuat.cmbchina.com:8143/productAdd_back/'
  }
}
export default function getGlobal() {
  const env = process.env.NODE_ENV
  return httpConfig[env]
}

const httpConfig = {
  'development': {// 开发环境，默认
    // rfqBaseUrl: 'http://172.16.3.25:8086/rfq_boot/', // 询报价的地址，默认地址
    // workflowBaseUrl: 'http://172.16.3.25:8098/rfq_workflow/', // 工作流的地址
    // providerBaseUrl: 'http://172.16.3.25:7080/provider/', // 供应商的地址
    // productBaseUrl: 'http://172.16.3.25:7080/product//', // eshop的地址
    // userBaseUrl: 'http://172.16.3.25:8888/uc_base/',
    // ftpBaseUrl: 'http://172.16.3.25:8000/',
    // uploadBaseUrl: 'http://172.16.3.25:8086/rfq_boot/'
    rfqBaseUrl: 'http://localhost:8086/rfq_boot/', // 询报价的地址，默认地址
    workflowBaseUrl: 'http://localhost:8088/ ru/', // 工作流的地址
    providerBaseUrl: 'http://localhost:8081/provider/', // 供应商的地址
    productBaseUrl: 'http://localhost:8080/eshop/', // eshop的地址
    userBaseUrl: 'http://localhost:8888/uc_base/',
    ftpBaseUrl: 'http://119.167.155.29:8000/',
    uploadBaseUrl: 'http://localhost:8086/rfq_boot/'
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

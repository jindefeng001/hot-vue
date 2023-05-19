
// If your port is set to 80,
// use administrator privileges to execute the command line.
// For example, Mac: sudo npm run
const port = 8023 // dev port

const geccoUrl = 'http://localhost:8001'
const commonUrl = 'http://localhost:8761'
const hotListUrl = 'http://localhost:8000'
const hotUrl = 'http://localhost:8003'

// All configuration item explanations can be find in https://cli.vuejs.org/config/
module.exports = {
  devServer: {// 环境配置
    host: 'localhost',
    port: port,
    https: false,
    hotOnly: false,
    open: true, //配置自动启动浏览器
    proxy: {
      '/gecco': {
        target: geccoUrl,
        changeOrigin: true,
        pathRewrite: {
          '^/gecco': ''
        }
      },
      '/common': {
        target: commonUrl,
        changeOrigin: true,
        pathRewrite: {
          '^/common': ''
        }
      },
      '/hotList': {
        target: hotListUrl,
        changeOrigin: true,
        pathRewrite: {
          '^/hotList': ''
        }
      },
      '/hotUrl': {
        target: hotUrl,
        changeOrigin: true,
        pathRewrite: {
          '^/hotUrl': ''
        }
      }
    }
  }
};

const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: 'https://full-stack-vue-jw3j.onrender.com'
  }
  
})

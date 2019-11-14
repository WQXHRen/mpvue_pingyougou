import Vue from 'vue'
import App from './App'
import request from '@/utils/request.js'

Vue.config.productionTip = false
App.mpType = 'app'

// 将wx.request添加到vue原型
Vue.prototype.$axios = request

const app = new Vue(App)
app.$mount()

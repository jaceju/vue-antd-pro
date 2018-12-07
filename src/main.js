// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import PouchDB from 'pouchdb'
import Antd from 'ant-design-vue'
import axios from 'axios'
import Viser from 'viser-vue'
import App from './App'
import router from './router/lazy'
import store from './store'
import 'ant-design-vue/dist/antd.css'
import '@/mock'

Vue.prototype.$axios = axios
Vue.config.productionTip = false
Vue.use(Viser)
Vue.use(Antd)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  mounted () {
    const db = new PouchDB('admindb')
    db.get('currUser').then(doc => {
      this.$store.commit('account/setuser', doc.user)
    })
  },
  render: h => h(App)
}).$mount('#app')

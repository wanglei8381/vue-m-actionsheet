require('./style.css')
var Vue = require('vue')
Vue.use(require('vue-m-touch'))

/* eslint-disable no-new */
new Vue({
  el: '#app',
  data: function () {
    return {
      msg: '选择...',
      open: false,
      list: ['拍照', '图库中选择', '云盘']
    }
  },
  methods: {
    choose: function () {
      this.open = true
    },
    cancel () {
      this.open = false
    },
    confirm (index) {
      this.open = false
      this.msg = this.list[index]
    }
  },
  components: {
    'actionsheet': require('../../index.vue')
  }
})

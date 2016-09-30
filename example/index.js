require('./style.css');
var Vue = require('vue');

new Vue({
    el: 'body',
    data: function () {
        return {
            msg: '选择...',
            open: false,
            picker: null,
            list: [
                {label: '拍照', value: 'paizhao'},
                {label: '图库中选择', value: 'tuku'},
                {label: '云盘', value: 'yunpan'}
            ]
        };
    },
    methods: {
        choose: function () {
            this.open = true;
        }
    },
    watch: {
        'picker': function (picker) {
            this.msg = '[' + picker.value + '][' + picker.label + ']';
        }
    },
    components: {
        'actionsheet': require('../src')
    }
})
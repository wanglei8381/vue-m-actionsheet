#vue-m-actionsheet
 <h5>基于vue的移动端actionsheet</h5>
##Install
npm install vue-m-actionsheet
##Use
<pre>
var Vue = require('vue');
Vue.component('actionsheet', require('vue-m-actionsheet'));
//在模版文件中使用,组件从距离顶部的位置开始, color样式颜色
//&lt;actionsheet>&lt;/actionsheet>

//通过props传值
props:
{
    list: {//显示的数组,数组中对象格式是{label:'显示的内容',value:'值'}
        type: Array,
        required: true
    },
    open: {//开启关闭
        type: Boolean,
        required: true,
        default: false,
        twoWay: true
    },
    picker: {//接受选择的结果
        type: Object,
        // required: true,
        twoWay: true
    },
    label: {//label的别名
        type: String,
        required: false,
        default: 'label'
    },
    value: {//value的别名
        type: String,
        required: false,
        default: 'value'
    }
}
</pre>
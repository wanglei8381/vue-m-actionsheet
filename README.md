#vue-m-actionsheet
 基于vue的移动端actionsheet
##Install
npm install vue-m-actionsheet
##Use
```
import Actionsheet from 'vue-m-actionsheet'

//通过props传值

props:
{
    //数组中对象格式是{label:'显示的内容'}或直接['A']
    list: {
        type: Array,
        required: true
    },
    // 开启关闭
    open: {
        type: Boolean,
        required: true,
        default: false
    },
    // label的别名
    label: {
        type: String,
        required: false,
        default: 'label'
    },
    // 选中一个返回下标, 需要设置open=false关闭
    confirm: {
        type: Function,
        default () {}
    },
    // 需要设置open=false关闭
    cancel: {
      type: Function,
      default () {}
    }
}
```
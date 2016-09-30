require('./style.css');
module.exports = {
    template: require('./template.html'),
    data(){
        return {fade: false};
    },
    props: {
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
    },
    watch: {
        open(val){
            if (val) {
                setTimeout(()=> {
                    this.fade = true;
                }, 1);
            }
        }
    },
    methods: {
        choose(item){
            this.close();
            this.picker = item;
        },
        close(){
            this.fade = false;
            setTimeout(()=> {
                this.open = false;
            }, 300);
        }
    }
};
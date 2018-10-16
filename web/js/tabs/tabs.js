/**
 *  Vue TABS
 */
Vue.component('tabs', {
    props: {
        //这里的value是为了可以使用v-model
        value: {
            type: [String, Number]
        }
    },
    data: function(){
        return {
            currentValue: this.value,
            //用于渲染tabs标题
            navList: []
        }
    },
    template : '<div class="tabs">' +
            '<div class="tabs-bar"><div v-bind:class="tabCls(item)"  v-for="(item, index) in navList"  v-on:click="handleChange(index)">{{item.label}}</div></div>' +
                '<div class="tabs-content"><slot></slot></div>'+
            '</div>',
    methods : {
        //点击tab时触发
        handleChange: function(index){
            var nav = this.navList[index];
            var name = nav.name;
            //改变当前选中的tab，并触发下面的watch
            this.currentValue = name;
            //更新value
            this.$emit('input', name);
            //触发自定义事件，供父级使用
            this.$emit('on-click', name);
        },
        getTabs : function(){
            //通过遍历子组件，得到所有pane组件
            return  this.$children.filter(function(item){
                return item.$options.name === 'pane';
            })
        },
        updateNav: function(){
            this.navList = [];
            //设置对this的引用
            var me = this;
            this.getTabs().forEach(function(pane, index){
                me.navList.push({
                    label : pane.label,
                    name: pane.name || index
                });
                //如果没有给pane设置name，就默认设置它的索引
                if(!pane.name) pane.name = index;
                //设置当前选中的tab索引
                if(index === 0){
                    if(!me.currentValue){
                        me.currentValue = pane.name || index;
                    }
                }
            });
            this.updateStatus();
        },
        updateStatus: function(){
            var tabs = this.getTabs();
            var me = this;
            //显示当前选中的tab对应的pane组件，隐藏没有选中
            tabs.forEach(function(tab){
                return tab.show = tab.name === me.currentValue;
            })
        },
        tabCls : function(item){
            return [
                'tabs-tab',
                {
                    'tabs-tab-active': item.name === this.currentValue
                }
            ]
        },
    },
    watch: {
        value : function(val){
            this.currentValue = val;
        },
        currentValue : function(){
            //在当前选中的tab发生变化是，更新pane的显示状态
            this.updateStatus();
        }
    }
});









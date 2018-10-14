/**
 * Shopping Cart JS
 */
$(function () {
    /**
     *  实例化VueJS
     * @type {Vue}
     */
    var app = new Vue({
        el: '#app',
        data : {
            list: [
                {
                    id :1,
                    name :'Iphone 7',
                    price : 6188,
                    count: 1,
                    state: false,
                },  {
                    id :2,
                    name :'Ipad Pro',
                    price : 588,
                    count: 2,
                    state: false,
                },{
                    id :3,
                    name :'MackBook Pro',
                    price : 21488,
                    count: 1,
                    state: false,
                },
            ]
        },
        methods: {
            //减少
            handleReduce: function(index){
                if(this.list[index].count == 1) return;
                this.list[index].count--;
            },
            //增加dataChange
            handleAdd: function(index){
                this.list[index].count++;
            },
            //删除
            handleRemove:function(index){
                this.list.splice(index, 1);
            },
            selectAll: function(event){
                var _this = this;
                console.log(event.currentTarget.checked);
                if(!event.currentTarget.checked){
                    for(var i = 0; i < this.list.length; i++){
                        this.list[i].state = false;
                    }
                }else{
                    for(var i = 0; i < this.list.length; i++){
                        this.list[i].state = true;
                    }
                }
            }
        },
        computed: {
            totalPrice: function(){
                var total = 0;
                for(var i = 0; i < this.list.length; i ++){
                    var item = this.list[i];
                    if(item.state){
                        total += item.price * item.count;
                    }
                }
                var reg = /([-+]?\d{3})(?=\d)/g;
                console.log(reg);
                //正则判断 千号分隔
                return total.toString().replace(reg, function($0, $1){
                    return $1 + ',';
                });
            }
        }
    })
});
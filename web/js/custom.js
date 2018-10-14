$(function () {
    /**
     *  实例化VueJS
     * @type {Vue}
     */
    // var app = new Vue({
    //     <!-- el指定的ID为css选择器-->
    //     el:'#demo',
    //     <!-- 变量统统放在data中-->
    //     data: {
    //         msg: 'Kevin ',
    //         Show: true,
    //         Hide: false,
    //         newitem: {text:''},
    //         items : [
    //             {text: 'Hello Kevin', },
    //         ]
    //     },
    //     methods: {
    //         doThis: function (e){
    //             console.log(this);
    //             console.log(e.target);
    //             console.log('Hello ' + this.msg + '!');
    //         },
    //         additem: function(newitem){
    //             this.items.push(newitem);
    //             this.newitem = {text: ''}
    //         },
    //         deleteItem: function(index, e){
    //             this.items.splice(index, 1);
    //         }
    //     }
    // });
    var padDate = function(value){
        return value < 10 ? '0' + value : value;
    };
    var app = new Vue({
            el: '#app',
            data : {
                date : new Date()
            },
            filters : {
                formatDate : function(value){ //value就是要过滤的数据
                    var date = new Date(value);
                    var year = date.getFullYear();
                    var month = padDate(date.getMonth() + 1);
                    var day = padDate(date.getDate());
                    var hours = padDate(date.getHours());
                    var minutes = padDate(date.getMinutes());
                    var seconds = padDate(date.getSeconds());
                    //整理好的数据返回
                    return year + '-' + month + '-' + day + ' ' + hours + ':' + minutes + ':' + seconds;
                }
            },
            mounted :  function(){
                var _this = this;
                this.timer = setInterval(function(){
                    _this.date = new Date();
                }, 1000);
            },

     })
});
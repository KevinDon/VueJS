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
        <!-- el指定的ID为css选择器-->
        el:'#demo',
        <!-- 变量统统放在data中-->
        data: {
            msg: 'Kevin ',
            Show: true,
            Hide: false,
            newitem: {text:''},
            items : [
                {text: 'Hello Kevin', },
            ]
        },
        methods: {
            doThis: function (e){
                console.log(this);
                console.log(e.target);
                console.log('Hello ' + this.msg + '!');
            },
            additem: function(newitem){
                this.items.push(newitem);
                this.newitem = {text: ''}
            },
            deleteItem: function(index, e){
                this.items.splice(index, 1);
            }
        }
    });


})
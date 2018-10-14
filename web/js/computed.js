$(function () {
    /**
     *  实例化VueJS
     * @type {Vue}
     */
    var app = new Vue({
        el: '#app',
        data : {
            firstName: 'Kevin',
            lastName: 'Don',
            isActive: true,
            isError: 'fail',
        },
        methods: {
            setName: function(){
                //设置fullName的值
                this.fullName = 'Kevin Tang';
            }
        },
        computed: {
            classes: function(){
                return {
                    active: this.isActive && this.isError,
                    'text-fail' : this.error && this.error.type === 'fail'
                }
            },
            fullName : {
                //getter用于读取
                get :function(){
                    return this.firstName + ' ' + this.lastName;
                },
                //setter写入时触发
                set: function(newValue){
                    var names = newValue.split(' ');
                    this.firstName = names[0];
                    this.lastName = names[1];
                }
            }
        }

    })
});
$(function(){
    var app = new Vue({
        el : '#app',
        data : {
            message : 'Hello World'
        },
        methods: {

        },
        mounted: function(){
            console.log(this.message);
        }
    });
});
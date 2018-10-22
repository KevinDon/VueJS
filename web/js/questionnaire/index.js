$(function(){
    var app = new Vue({
        el : '#app',
        data: {
            pageOneShow: true,
            pageTwoShow: false,
            pageThreeShow: false,
            nopass: true,
            gender: [{ type: 'radio', id :'man', name: '男', value: 1}, { type: 'radio', id :'woman', name: '女', value:2 },{ type: 'radio', id:'secrecy', name: '保密', value: 3}]
        },
        methods : {
            checkPass : function(){
                //console.log('nopass');
                this.nopass =false;
            },
            goToNext: function(page){
                this.nopass = true;
                console.log(page);
                this.pageOneShow= false;
            }

        }
    });
});
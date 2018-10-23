$(function(){
    var app = new Vue({
        el : '#app',
        data: {
            page : [{show: true}, {show: false}, { show: false}],
            nopass: true,
            gender: [{ type: 'radio', id :'man', name: '男', value: 1}, { type: 'radio', id :'woman', name: '女', value:2 },{ type: 'radio', id:'secrecy', name: '保密', value: 3}],
            hobbies : [{ type: 'checkbox', id :'book', name: '看书', value:  'book'}, { type: 'checkbox', id :'run', name: '跑步', value:  'run'}, { type: 'checkbox', id :'movie', name: '看电影', value:  'movie'},{ type: 'checkbox', id :'swim', name: '游泳', value:  'swim'}]
        },
        methods : {
            checkPass : function(){
                //console.log('nopass');
                this.nopass =false;
            },
            goToNext: function(page){
                this.nopass = true;
                this.page[page].show = false;
                this.page[parseInt(page) + 1].show = true;
            },
            goToPre: function(page){
                this.nopass = false;
                this.page[page].show = false;
                this.page[parseInt(page) - 1].show = true;
            }
        }
    });
});
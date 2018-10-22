$(function(){
    var app = new Vue({
        el : '.swiper-contanier',
        data : {
            main: [
                //error true，代表有错误，提示错误,  false，代表正确，提示正确, normal，代表默认，显示默认值
                {'name' : 'username', 'info': '用户名（以英文开头+英文数字）', 'type': 'text',  'error': '', 'errorInfo' : '请输入正确信息'},
                {'name' : 'passwd', 'info': '设置密码', 'type': 'password', 'error': '',  'errorInfo' : ''},
                {'name' : 'passwd_confirm', 'info': '在输入一遍密码', 'type': 'password', 'error':'' , 'errorInfo' : '密码不匹配'},
                {'name' : 'gwno', 'info': '身份证', 'type': 'text', 'error':'',  'errorInfo' : '这是测试' }
            ],
            userInfo : {
                username: '',
                passwd : '',
                passwd_confirm: '',
                gwno: ''
            }
        },
        methods: {
            checkUserId: function(msg){
                if(msg !== ""){
                    //this.$http.post('localhost/username?' + msg, function(data){
                        //console.log(data);
                        if(false){
                            this.main[0].error =  false;
                        }else{
                            this.main[0].error = true;
                        }
                    //});
                }else{
                    this.main[0].error = 'normal';
                }
            },
            checkUserPwd : function(){
                if(this.userInfo.passwd_confirm !== ''){
                    this.userInfo.passwd == this.userInfo.passwd_confirm && this.userInfo.passwd_confirm != '' ? this.main[2].error = false: this.main[2].error = true;
                }
            },
            check: function(msg, i){
                var index = i;
                this.userInfo[msg] != '' ? this.main[index].effect = true : this.main[index].effect = false;
                switch (msg) {
                    case 'username':
                        this.checkUserId(this.userInfo[msg]);
                        break;
                    case 'passwd':
                        this.userInfo.passwd !== ''? this.main[1].error = false : this.main[1].error = "normal";
                        this.checkUserPwd();
                        break;
                    case 'passwd_confirm':
                        this.checkUserPwd();
                        break;
                    case 'gwno' :
                        this.userInfo.gwno !== ''?this.main[3].error = false : this.main[3].error = 'normal';
                        break;
                }
            }
        },
        ready: function(){

        },
        mounted: function(){
        }
    });
});
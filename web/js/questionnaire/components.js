Vue.component('my-button', {
    props: ['value', 'nopass', 'label', 'curpage'],
    //通过value去disable button
    template : '<button v-bind:disabled="nopass" v-on:click="goToNext()">{{label}}</button>',
    methods : {
        goToNext : function(){
            this.$emit('handle', this.curpage);
        }
    },
    watch: {
        curpage : function(newValue, oldValue){
            console.log(newValue);
        }
    }
});

Vue.component('my-form-content', {
    //通过value去disable button
    template : '<div class="content"><slot></slot></div>',

    methods : {

    }
});

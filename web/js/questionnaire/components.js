Vue.component('my-button', {
    props: ['value', 'nopass', 'label'],
    //通过value去disable button
    template : '<button v-bind:disabled="nopass" v-on:click="goToNext()">{{label}}</button>',
    methods : {
        goToNext : function(){
            this.$emit('handle', 'child');
        }
    }
});
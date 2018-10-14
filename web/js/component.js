$(function () {
    /**
     *  Component VueJS
     * @type {Vue}
     */
    Vue.component('my-component', {
        props: ['value'],
        template: '<input v-bind:value="value" v-on:input="updateValue"/> ',
        data: function(){
            return {
                counter : 0
            }
        },
        methods: {
            handleClick: function(){
              this.counter++;
              this.$emit('input', this.counter);
            },
            handleIncrease: function(){
                this.counter++;
                this.$emit('increase', this.counter);
            },
            handleReduce: function(){
                this.counter--;
                this.$emit('reduce', this.counter);
            },
            updateValue: function(event){
                this.$emit('input', event.target.value);
            }
        }
    });
    var app = new Vue({
        el: '#app',
        data : {
            total: 2
        },
        methods: {
            handleReduce: function(){
                this.total --;
            }
        },
        computed: {

        }

    })

});
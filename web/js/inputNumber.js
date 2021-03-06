$(function(){
    function isValueNumber(value){
        var reg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
        return reg.test(value + ' ');
    };

    Vue.component('input-number', {
        template: '<div class="input-number">' +
            '<input type="text" v-bind:value="currentValue" v-on:change="handleChange" v-on:keyup.up="handleUp" v-on:keyup.down="handleDown"  />' +
            '<button v-on:click="handleDown" v-bind:disabled="currentValue <= min">-</button>' +
            '<button v-on:click="handleUp" v-bind:disabled="currentValue >= max">+</button>' +
            '</div>',
        methods: {
            /**
             * 减少函数
             */
            handleDown: function(){
                if(this.currentValue <= this.min) return;
                this.currentValue -= 1;
            },
            /**
             * 增加函数
             */
            handleUp: function(){
                if(this.currentValue >= this.max) return;
                this.currentValue += 1;
            },
            /**
             * 直接修改input框值
             */
            handleChange: function (event) {
                var val = event.target.value.trim();
                var max = this.max;
                var min = this.min;
                if (isValueNumber(val)){
                    val = Number(val);
                    this.currentValue = val;
                    if(val > max){
                        this.currentValue = max;
                    }else if(val < min){
                        this.currentValue = min;
                    }
                }else{
                    event.target.value = this.currentValue;
                }
            },
            updateValue: function (val) {
                if(val > this.max) val == this.max;
                if(val > this.min) val == this.min;
                this.currentValue = val;
            }
        },
        props: {
            max : {
                type: Number,
                default: Infinity
            },
            min : {
                type: Number,
                default: -Infinity
            },
            value : {
                type: Number,
                default: 0
            }
        },
        data: function(){
            return {
                currentValue : this.value
            }
        },
        watch: {
            currentValue: function(val){
                this.$emit('input', val);
                this.$emit('on-change', val);
            },
            value: function(val){
                this.updateValue(val);
            }
        },
        /**
         * 初始化数据
         */
        mounted: function(){
            this.updateValue(this.value);
        }
    });
});

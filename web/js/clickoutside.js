Vue.directive('clickoutside', {
    bind: function(el, binding, vnode){
        function documentHandler(e){
            console.log(e);
            if(el.contains(e.target)) {
                return false;
            }
            if(binding.expression){
                binding.value(e);
            }
        }
        //document绑定事件
        el._vueClickOutside_ = documentHandler;
        document.addEventListener('click', documentHandler);
    },
    unbind: function(el, binding){
        document.removeEventListener('click', el._vueClickOutside_);
        delete  el._vueClickOutside_;
    }
});
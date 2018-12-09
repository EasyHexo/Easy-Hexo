<template>
    <script src="//cdn1.lncld.net/static/js/3.0.4/av-min.js"></script>
    <script src='//unpkg.com/valine/dist/Valine.min.js'></script>

    <!-- 添加 Valine -->
    <div id="vcomments"></div>
    <script>
        export default {
            created () {
                this.$nextTick(() => {
                    new Valine(Object.assign({
                        el: '#vcomments' ,
                        notify:true, 
                        verify:true, 
                        avatar:'mm', 
                        placeholder: '🦜 来说话啊~' 
                    }), { ...this.$themeConfig.valine });     
                })
            }
        }
    </script>
</template>
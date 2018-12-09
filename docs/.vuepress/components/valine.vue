<template>
    <script src="//cdn1.lncld.net/static/js/3.0.4/av-min.js"></script>
    <script src='//unpkg.com/valine/dist/Valine.min.js'></script>

    <!-- 添加 Valine -->
    <div id="vcomments"></div>
    <script>
        new Valine({
            el: '#vcomments' ,
            appId: 'ESvDkjHus9gVRVp3CB6EsR1o-gzGzoHsz',
            appKey: 'VxvYP7M4pOSCguXajHYCFWey',
            notify:true, 
            verify:true, 
            avatar:'mm', 
            placeholder: '🦜 来说话啊~' 
        });     

    </script>
</template>
var title = 'Easy Hexo 👨‍💻';

module.exports = {
    title: title,
    description: '轻松入门 Hexo',
    base: '/Easy-Hexo/',
    head: [
        ['link', {
            rel: 'icon',
            href: 'https://i.loli.net/2018/10/18/5bc852dfd5270.jpg'
        }]
    ],
    themeConfig: {
        serviceWorker: {
            updatePopup: true // Boolean | Object, 默认值是 undefined.
            // 如果设置为 true, 默认的文本配置将是: 
            // updatePopup: { 
            //    message: "New content is available.", 
            //    buttonText: "Refresh" 
            // }
        },
        nav: [{
            text: 'Hexo 安装与配置',
            link: '/1-Hexo-install-and-config/'
        }, {
            text: '主题安装与配置',
            items: [{
                    text: '概要',
                    link: '/2-Theme-use-and-config/'
                },
                {
                    text: 'Hexo-theme-next 5.x.x',
                    link: '/2-Theme-use-and-config/2-1-hexo-theme-next-5.x.x/'
                },
                {
                    text: 'Hexo-theme-next 6.x.x',
                    link: '/2-Theme-use-and-config/2-2-hexo-theme-next-6.x.x/'
                },
                {
                    text: 'Hexo-theme-yilia',
                    link: '/2-Theme-use-and-config/2-3-hexo-theme-yilia/'
                },
                {
                    text: 'Hexo-theme-apollo',
                    link: '/2-Theme-use-and-config/2-4-hexo-theme-apollo/'
                }
            ]
        }],
        sidebar: {
            '/1-Hexo-install-and-config/': [
                '',
                '1-1-meet-hexo'],
            '/2-Theme-use-and-config/': [
                //'/',
                '',
                '2-1-hexo-theme-next-5.x.x/',
                '2-2-hexo-theme-next-6.x.x/',
                '2-3-hexo-theme-yilia/',
                '2-4-hexo-theme-apollo/'
            ]
        }
    }
}
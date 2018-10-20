var title = 'Easy Hexo 👨‍💻';

module.exports = {
    title: title,
    description: '轻松入门 Hexo',
    base: '/Easy-Hexo',
    themeConfig: {
        nav: [{
            text: 'Hexo 安装与配置',
            link: '/1-Hexo-install-and-config/'
          }
        ],
        sidebar: {
          '/1-Hexo-install-and-config/': ['']
        }
    }
}
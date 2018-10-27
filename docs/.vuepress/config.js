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

        nav: [{
            text: 'Hexo 安装与配置',
            items: [{
                    text: '概要',
                    link: '/1-Hexo-install-and-config/'
                },
                {
                    text: '认识 Hexo',
                    link: '/1-Hexo-install-and-config/1-1-meet-hexo.html'
                },
                {
                    text: '安装 Hexo',
                    link: '/1-Hexo-install-and-config/1-2-install-hexo.html'
                },
                {
                    text: '配置 Hexo',
                    link: '/1-Hexo-install-and-config/1-3-config-hexo.html'
                },
                {
                    text: '部署 Hexo',
                    link: '/1-Hexo-install-and-config/1-4-deploy-hexo.html'
                },
                {
                    text: '持续集成 CI',
                    link: '/1-Hexo-install-and-config/1-5-continuous-integration.html'
                }
            ]

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
        }, {
            text: '插件使用与配置',
            link: '/3-Plugins-use-and-config/'
        }, {
            text: '高级 Hexo 玩家',
            link: '/4-High-order-hexo-gamer/'
        }, {
            text: '补充内容',
            items: [{
                    text: '概要',
                    link: '/5-Add/'
                },
                {
                    text: '参考资料',
                    link: '/5-Add/5-1-quote.html'
                }
            ]
        }],
        sidebar: {
            '/1-Hexo-install-and-config/': [
                '',
                '1-1-meet-hexo.html',
                '1-2-install-hexo.html',
                '1-3-config-hexo.html',
                '1-4-deploy-hexo.html',
                '1-5-continuous-integration.html'
            ],
            '/2-Theme-use-and-config/': [
                //'/',
                '',
                '2-1-hexo-theme-next-5.x.x/',
                '2-2-hexo-theme-next-6.x.x/',
                '2-3-hexo-theme-yilia/',
                '2-4-hexo-theme-apollo/'
            ],
            '/3-Plugins-use-and-config/': [
                ''
            ],
            '/4-High-order-hexo-gamer/': [
                ''
            ],
            '/5-Add/': [
                '',
                '5-1-quote.html'
            ]
        },
        repo: 'EasyHexo/Easy-Hexo',
        repoLabel: 'GitHub',
        docsDir: 'docs',
        docsBranch: 'master',
        editLinks: true,
        editLinkText: '在 GitHub 上编辑此页'
    }
}
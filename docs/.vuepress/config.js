var title = 'Easy Hexo 👨‍💻';

module.exports = {
    title: title,
    description: '轻松入门 Hexo',
    base: '/Easy-Hexo/',
    head: [
        ['link', {
            rel: 'icon',
            href: 'data:image/jpeg;base64,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'
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
                },
                {
                    text: 'Hexo-theme-material',
                    link: '/2-Theme-use-and-config/2-5-hexo-theme-material/'
                },
                {
                    text: 'Hexo-theme-material-x',
                    link: '/2-Theme-use-and-config/2-6-hexo-theme-material-x/'
                },
                {
                    text: 'Hexo-theme-bmw',
                    link: '/2-Theme-use-and-config/2-7-hexo-theme-bmw/'
                }
            ]
        }, {
            text: '插件使用与配置',
            items: [{
                    text: '概要',
                    link: '/3-Plugins-use-and-config/'
                },
                {
                    text: 'hexo-tag-aplayer',
                    link: '/3-Plugins-use-and-config/3-1-hexo-tag-aplayer/'
                },
                {
                    text: 'hexo-tag-dplayer',
                    link: '/3-Plugins-use-and-config/3-2-hexo-tag-dplayer/'
                }
            ]

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
                },
                {
                    text: 'YAML 语法简介',
                    link: '/5-Add/5-2-yaml.html'
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
                '2-4-hexo-theme-apollo/',
                '2-5-hexo-theme-material/',
                '2-6-hexo-theme-material-x/',
                '2-7-hexo-theme-bmw/'
            ],
            '/3-Plugins-use-and-config/': [
                '',
                '3-1-hexo-tag-aplayer/',
                '3-2-hexo-tag-dplayer/'
            ],
            '/4-High-order-hexo-gamer/': [
                ''
            ],
            '/5-Add/': [
                '',
                '5-1-quote.html',
                '5-2-yaml.html'
            ]
        },
        repo: 'EasyHexo/Easy-Hexo',
        repoLabel: 'GitHub',
        docsDir: 'docs',
        docsBranch: 'master',
        editLinks: true,
        editLinkText: '在 GitHub 上编辑此页'
    },
    configureWebpack: {
        resolve: {
            alias: {
                '@img': __dirname + '/\img'
            }
        }
    }
}
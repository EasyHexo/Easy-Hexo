var title = 'Easy Hexo 👨‍💻';

module.exports = {
    title: title,
    description: '轻松入门 Hexo',

    themeConfig: {
        sidebar: {
            '/1-Preparations/': [''],
            '/2-Toolchain/': [
                '',
                '2-1-TerminalEnv',
                '2-2-DevTools'
            ],
            '/3-VSCode/': [
                '',
                '3-1-Git',
                '3-2-Python',
                '3-3-HelpNeeded'
            ],
            '/4-GUI/': [''],
            '/5-Experience/': [''],
            '/6-Reference/': [''],
            '/': ['']
        },
        lastUpdated: 'Last Updated'
    }
}
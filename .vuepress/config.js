module.exports = {
    title: 'Bill, Junru Zhong',
    description: 'I am serious.',
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            {
                text: 'About',
                items: [
                    { text: 'About Me', link: '/about/index' },
                    { text: 'This Site', link: '/about/site' }
                ]
            },
            { text: 'Résumé', link: '/cv/'},
            { 
                text: 'Teaching',
                items: [
                    { text: 'Timetable', link: '/teaching/timetable' },
                    { text: 'CPGU IT Tutorial', link: '/it-tutorial/'}
                ]
            },
            {
                text: 'Projects',
                items: [
                    { text: 'Project Index', link: '/projects/index' },
                    {
                        text: '2017',
                        items: [
                            { text: 'SE Retail Management', link: '/projects/se-system' }
                        ]
                    },
                    {
                        text: '2014 - 2016',
                        items: [
                            { text: 'Environment Monitoring System', link: '/projects/env-system' }
                        ]
                    }
                ]
            },
            { text: 'Blog', link: 'https://billzhonggz.com/blog'},
            { text: 'Github', link: 'https://github.com/billzhonggz' },
        ],
        lastUpdated: 'Last Updated',
        ga: 'UA-115900587-1'
    }
}
module.exports = {
    title: 'Bill, Junru Zhong',
    description: 'Personal Website 3.0 - Preview',
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: 'About', link: '/about/' },
            { text: 'Résumé', link: '/cv/'},
            { 
                text: 'Teaching',
                items: [
                    { text: 'Timetable', link: '/teaching/timetable' },
                    {
                        text: 'Guides',
                        items: [
                            { text: 'Configure Hadoop', link: '/teaching/guides/hadoop'}
                        ]
                    }
                ]
            },
            {
                text: 'Projects',
                items: [
                    { text: 'Index', link: '/projects/index' },
                    { text: 'Intel Cup', link: '/projects/intel-cup' }
                ]
            },
            { text: 'Blog', link: 'https://billzhonggz.com/blog'},
            { text: 'Github', link: 'https://github.com/billzhonggz' },
        ],
        lastUpdated: 'Last Updated'
    }
}
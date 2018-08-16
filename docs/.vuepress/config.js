module.exports = {
  title: 'Parallax',
  description: 'Docs and stuff.',
  serviceWorker: true,
  themeConfig: {
  	lastUpdated: 'Last Updated',
    editLinks: true,
    nav: [
      {
        text: 'Process',
        link: '/process/',
      },
      {
        text: 'Frontend',
        link: '/frontend/'
      },
      {
        text: 'Backend',
        link: '/backend/'
      },
      {
        text: 'Old Docs',
        link: 'http://docs.exposecms.com/docs/category/general'
      }
    ],
    sidebar: {
    	'/process/': [
    		{
    			title: 'Git',
    			collapsable: false,
    			children: [
		    		'git/conventions',
		    		'git/commands',
		    		'git/cloning-a-repo',
		    		'git/pull-requests',
		    		'git/apps',
		    		'git/erasing-history'
    			]
    		},
    	],
    	'/frontend/': [
    		{
    			title: 'Snippets',
    			collapsable: false,
    			children: [
    				'snippets/fetch'
    			]
    		}
    	],
    	'/': [
    		['', 'Introduction'],
    		'updating-docs'
    	]
    }
  }
}

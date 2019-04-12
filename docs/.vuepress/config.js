module.exports = {
	home: true,
	title: 'Wayshon 小站',
	description: 'Wayshon Front-End Developer',
	head: [ [ 'link', { rel: 'icon', href: '/favicon.ico', type: 'image/x-icon' } ] ],
	serviceWorker: true,
	themeConfig: {
		nav: [
			{ text: '主页', link: '/' },
			{ text: '归档', link: '/archives' },
			{ text: '关于我', link: '/about' },
			{ text: 'Github', link: 'https://www.github.com/wayshon' }
		],
        activeHeaderLinks: false,
	},
	footer: 'MIT Licensed | Copyright © 2018-present Wayshon',
};

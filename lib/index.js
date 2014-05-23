/**
 * sails-generate-views
 *
 * Usage:
 * `sails generate views`
 *
 * @type {Object}
 */

module.exports = {

	templatesDirectory: require('path').resolve(__dirname,'../templates'),

	before: require('./before'),

	targets: {
		'./views/403.handlebars': { copy: 'views/403.handlebars' },
		'./views/404.handlebars': { copy: 'views/404.handlebars' },
		'./views/500.handlebars': { copy: 'views/500.handlebars' },
		'./views/homepage.handlebars': { copy: 'views/homepage.handlebars' },
		'./views/partials/links.handlebars': { copy: 'views/partials/links.handlebars' },
		'./views/layouts/layout.handlebars': { copy: 'views/layouts/layout.handlebars' }
	},

	after: require('./after')

};

curl = {
    baseUrl: 'js',
    paths: {
        'jquery': 'ext/jquery-1.8.2',
        'jquery-hashchange': 'ext/jquery-hashchange',
        'curl/plugin/twig': '../modules/twig/twig',
        'curl/plugin/css': '../modules/curl/src/curl/plugin/css',
	'curl/plugin/md': '../modules/papyrus/papyrus-md',
	'curl/plugin/js': '../modules/curl/src/curl/plugin/js',
	'curl/plugin/text': '../modules/curl/src/curl/plugin/text',
	'curl/plugin/blossom': '../modules/blossom/blossom',
	'bootstrap/css': '../modules/bootstrap/docs/assets/css',
	'bootstrap/less': '../modules/bootstrap/less',
	'less':'../modules/less.js/dist/less-1.3.1.js'
    },
    packages: {
	'lodash': {
	    'location':'../modules/lodash',
	    'main':'lodash'
	},
	'markdown': {
	    'path': '../modules/markdown-js/lib',
	    'main': 'markdown.js'
	},
	'papyrus': {
	    'location':'../modules/papyrus',
	    'main':'papyrus-md'
	},
	'phloem': {
	    'location':'../modules/phloem',
            'main':'phloem'
        },
        'twig': {
            'path':'../modules/twig',
            'main':'twig',
        },
        'blossom': {
            'path':'../modules/blossom',
            'main':'blossom',
        },

        'foliage' : {
            'location':'../modules/foliage',
            'main':'foliage'
        },
        'epiphyte' : {
            'location':'../modules/epiphyte',
            'main':'remoteAdapter',
            'lib': 'ext'
        },
        'when' : {
            'location': '../modules/when',
            'main': 'when'
        }
    }
};



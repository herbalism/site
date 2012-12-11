// This is a configuration for curl. It declares where packages are found and paths to resources.
curl = {
    baseUrl: 'js',
    paths: {
	// needed for foliage
        'jquery': 'ext/jquery-1.8.2',
	// needed for twig to detect location changes
        'jquery-hashchange': 'ext/jquery-hashchange',
	// used to present foliage-modules as pages in a "Single Page Application"
        // used like this twig!page
        'curl/plugin/twig': '../modules/twig/twig',
	// used to load stylesheets the same way as modules.
        // used like this: css!stylesheet.css
        'curl/plugin/css': '../modules/curl/src/curl/plugin/css',
	// path to the bootstrap stylesheet
	'bootstrap/css': '../modules/bootstrap/docs/assets/css'
    },
    packages: {
	// lodash is an underscore drop in replacement.
	'lodash': {
	    'location':'../modules/lodash',
	    'main':'lodash'
	},
	// when is a promise framework
	'when' : {
            'location': '../modules/when',
            'main': 'when'
        },
	// basic data constructs based on when
	'phloem': {
	    'location':'../modules/phloem',
            'main':'phloem'
        },
	// used to build SPAs
        'twig': {
            'path':'../modules/twig',
            'main':'twig',
        },
	// used to build dom-structures
        'foliage' : {
            'location':'../modules/foliage',
            'main':'foliage'

        },
	// used to connect to a remote store
        'epiphyte' : {
            'location':'../modules/epiphyte',
            'main':'remoteAdapter',
            'lib': 'ext'
        }
    }
};



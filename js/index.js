define(['foliage', 
	'overview', 
	'md!foliage/readme.md',
	'md!twig/README.md',
        'md!epiphyte/README.md',
	'md!phloem/README.md',
	'md!papyrus/README.md'
       ], 
       function(f, 
		overview, 
		foliage,
		twig,
	        epiphyte,
		phloem,
		papyrus) {
    return f.div({'class': 'container'},
		 f.div({'class': 'row'},
		       f.div({'class': 'span12'},
			     f.div({'class': 'row'},
				   f.ul(
				       {'class': 'thumbnails'},
				       overview(foliage, 'foliage'),
				       overview(twig, 'twig'),
				       overview(phloem, 'phloem'),
				       overview(epiphyte, 'epiphyte'),
				       overview(papyrus, 'papyrus'))))));
})

define(['foliage', 
	'overview', 
	'md!foliage/readme.md'], 
       function(f, 
		overview, 
		foliage) {
    return f.div({'class': 'container'},
		 f.div({'class': 'row'},
		       f.div({'class': 'offset2 span8'},
			     overview(foliage))))
})

define(['foliage', 'lodash'], function(f, _) {
    return function(article) {
	var intro =  ['markdown', article.AST[1], article.AST[2]]
	console.log(intro);

	console.log(article.AST);
	

	return f.div({'class':'row'},
	    f.div({'class':'span2'}, 
		  f.img({src:'http://placekitten.com/160/160', 'class':'img-rounded span3'})),
		  f.div({'class':'span5'},article.toFoliage(intro)))
    }
})

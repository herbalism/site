define(['foliage', 'lodash'], function(f, _) {
    return function(text) {
	var paragraphs = _.map(text.split(/[\n\r]{2}/), function(v){return f.pre(v)});
	return f.div({'class':'row'},
	    f.div({'class':'span2'}, 
		  f.img({src:'http://placekitten.com/160/160', 'class':'img-rounded span3'})),
		  f.div({'class':'span5'},paragraphs[0]))
    }
})

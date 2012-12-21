define(['foliage', 'foliage/foliage-event', 'lodash'], function(f, on, _) {
    return function(article) {
	var title = article.AST[1][2];
	var intro = article.AST[2]

	var popover = function(title, body) {
	    var htmlFactory = $('<div />');
	    body(htmlFactory);
	    var html = htmlFactory.html();
	    return function(parent) {
		$(parent).popover({title: title,
				   content: html,
				   html: true,
				   trigger:'hover'});
	    }
	}

	return f.li({'class':'span3'}, 
		    f.div({'class':'thumbnail'},
			  popover(title, article.toFoliage(intro)),
			  f.img({src:'http://placekitten.com/160/160', 'class':'img-rounded span3'}),
			  f.strong(article.toFoliage(title))))
    }
})

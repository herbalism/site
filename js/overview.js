define(['require', 'foliage', 'foliage/foliage-event', 'lodash', 'twig-base'], function(require, f, on, _, base) {
    return function(article, name) {
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
                          f.a(f.img({src:'modules/'+name+'/logo.svg', 'class':'img-rounded span3'}),
                              on.click(function() {
                                  base.location.hash = "#components/"+name;
                              })
                             ),
			  f.strong(article.toFoliage(title))))
    }
})

function portfolioResizing () {
	if($(window).outerWidth() <= 1024) {
		if($('.portfolio>.header').length == 0) {
			$('<div/>').addClass('header').prependTo($('.portfolio'));
			$('.portfolio .case').appendTo($('.portfolio .header'));
			$('.portfolio .portf_content .title').appendTo($('.portfolio .header'));
		}
	} else {
		if($('.portfolio>.header').length) {
			$('.portfolio .header .case').prependTo($('.portfolio'));
			$('.portfolio .header .title').prependTo($('.portfolio .portf_content'));
			$('.portfolio>.header').remove();
		}		
	}
}

portfolioResizing();
$(window).resize(portfolioResizing);


$('.sidebar-slide').click(function(){
	$(".leftbar, .opacity-substrate, body").addClass('fixed');
});

$('.opacity-substrate').click(function(){
	$(".leftbar, .opacity-substrate, body").removeClass('fixed');
});


	


var _adaptiveMenu = function(){
	if($(".nav").hasClass('show-nav')){
	$(".nav").removeClass('show-nav');
		}else{
	$(".nav").addClass('show-nav');
	}
};

$(".mob-nav").on('click', _adaptiveMenu);
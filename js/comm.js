$(function(){
	$(window).scroll(function(){
		if( $(window).scrollTop() > 0){
			$('#header').addClass('scroll');
		}else{
			$('#header').removeClass('scroll');
		}
	});
	
	if( $(window).scrollTop() > 0){
		$('#header').addClass('scroll');
	}else{
		$('#header').removeClass('scroll');
	}

	$('.menu').click(function(){
		$('.menu_wrap').fadeIn(200);
		$('.menu_wrap').addClass('on');
		$('html, body').css({
			'overflow' : 'hidden'
		})
		return false;
	});
	$('.btn_menu.close').click(function(){
		$('.menu_wrap').fadeOut(200);
		$('.menu_wrap').removeClass('on');
		$('#headerwrap #gnb > li > a').removeClass();
		$('#gnb .dep02').stop().hide();
		$('html, body').css({
			'overflow' : ''
		})
		return false;
	});
	$('#header #gnb > li > a').click(function(){
		if( $(this).next().is('.dep02') ){
			if( $(this).next().css('display') == 'block' ){
				$('#header #gnb > li > a').removeClass('on');
				$('#gnb .dep02').hide();
			}else{
				$('#header #gnb > li > a').removeClass('on');
				$('#gnb .dep02').hide();
				$(this).addClass('on');
				$(this).next().show();
			}
		}
		
	});

})
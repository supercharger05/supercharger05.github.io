$(document).ready(function() {

	//PRICES=================================================//

	var s9_14 = 3110;
	var t9_plus_11 = 2471;
	var l3_plus = 1728;
	var a3 = 1244;
	var v9 = 430;
	var apw3_plus_plus = 112;

	//=================================================PRICES//

	
	//DISPLAY PRICES==================================================//

	$('#s9_14 .price span').html(s9_14);
	$('#t9_plus_11 .price span').html(t9_plus_11);
	$('#l3_plus .price span').html(l3_plus);
	$('#a3 .price span').html(a3);
	$('#v9 .price span').html(v9);
	$('#apw3_plus_plus .price span').html(apw3_plus_plus);

	//==================================================DISPLAY PRICES//

	
	//HOW-TO-BUY========================================================//

	$('.how-to-buy-btn').on('click',function() {
		$('.how-to-buy h4').toggleClass('hide');
		$('.how-to-buy-btn figure').toggleClass('how-to-buy-btn-borders');
	});

	$('.how-to-buy a').on('click',function() {
		$('.how-to-buy h4').addClass('hide');
		$('.how-to-buy-btn figure').addClass('how-to-buy-btn-borders');
	});

	$(document).scroll(function() {
		if (window.innerHeight + window.scrollY > document.body.clientHeight) {
	        $('.how-to-buy').fadeOut(200);
	    }else {
	    	$('.how-to-buy').fadeIn(200);
	    }
	});

	//========================================================HOW-TO-BUY//


	//ARROW===========================================//

	$(window).bind('scroll',function() {
		if ($(window).width()<992) {
			if ($(window).scrollTop()>2500) {
				$('#arrow').fadeIn(200);
			}else {
				$('#arrow').fadeOut(200);
			}
		}else {
			if ($(window).scrollTop()>1000) {
				$('#arrow').fadeIn(200);
			}else {
				$('#arrow').fadeOut(200);
			}
		}
	});

	//===========================================ARROW//


	//CROSS=============================================================================//

	$('.cross').click(function() {
		if ($(this).closest('.notice').find('.info div:nth-child(1)').attr('class')==='1') {
			$(this).css({
			  '-moz-transform':'rotate('+0+'deg)',
	          '-webkit-transform':'rotate('+0+'deg)',
	          '-o-transform':'rotate('+0+'deg)',
	          '-ms-transform':'rotate('+0+'deg)',
	          'transform': 'rotate('+0+'deg)'
			}).attr('title','показать');
			$(this).closest('.notice').find('.info div:nth-child(1)').removeClass('1')
																	 .addClass('2')
																	 .slideUp(300);
		}else {
			$(this).css({
			  '-moz-transform':'rotate('+45+'deg)',
	          '-webkit-transform':'rotate('+45+'deg)',
	          '-o-transform':'rotate('+45+'deg)',
	          '-ms-transform':'rotate('+45+'deg)',
	          'transform': 'rotate('+45+'deg)'
			}).attr('title','скрыть');
			$(this).closest('.notice').find('.info div:nth-child(1)').removeClass('2')
																	 .addClass('1')
																	 .slideDown(300);
		}
	});

	//=============================================================================CROSS//


	//LINE===============================//

	//$('#line-logo').click(function() {
	//	$('.line').fadeIn(500);
	//});

	//$('#close').click(function() {
	//	$('.line').fadeOut(500);
	//});

	//===============================LINE//


	//SMOOTH SCROLL========================================//

	//smooth scroll (how-to-buy)
	$(".how-to-buy>a, .to-top[href^='#']").on('click',function(e) {

	   // prevent default anchor click behavior
	   e.preventDefault();

	   // store hash
	   var hash = this.hash;

	   // animate
	   $('html, body').animate({
	       scrollTop: $(hash).offset().top
	     }, 700, function(){

	       // when done, add hash to url
	       // (default click behaviour)
	       window.location.hash = hash;
	     });

	});

	//========================================SMOOTH SCROLL//


	//ALERTS================================================================================//

	//function orderStopping () {
	//	alert('Дорогие пользователи!\nВ связи с тем что за последнее время число людей желающих приобрести у нас телефон выросло в несколько раз и нам сперва необходимо выполнить уже принятые заказы, мы вынуждены на короткое время приостановить прием новых заказов.\nС уважением Администрация!\n\nHormatly ullanyjylar!\nSoňky wagtyň içinde bizden telefon satyn almak isleýän adamlaryň sany bir näçe esse artanlygy sebäpli we biz ilkinji nobatda eýýäm kabul eden zakazlarymyzy ýerine ýetirmäge borçly bolanymyz üçin, biz wagtlaýyn täze zakazlary kabul etmekden saklamanmaly bolýarys.\nHormatlamak bilen Administrasiýa!');
	//}
	//orderStopping();

	//================================================================================ALERTS//
});
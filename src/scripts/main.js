/* Application specific js here */

//jQuery to collapse the navbar on scroll
// $(window).scroll(function() {
// 	if ($(".navbar").offset().top > 50) {
// 		$(".navbar-fixed-top").addClass("top-nav-collapse");
// 	} else {
// 		$(".navbar-fixed-top").removeClass("top-nav-collapse");
// 	}
// });

//jQuery for page scrolling feature - requires jQuery Easing plugin
// $(function() {
// 	$('a.page-scroll').bind('click', function(event) {
// 		var $anchor = $(this);
// 		$('html, body').stop().animate({
// 			scrollTop: $($anchor.attr('href')).offset().top
// 		}, 1500, 'easeInOutExpo');
// 		event.preventDefault();
// 	});
// });



/* Custom function for Facebook sharewindow version 1.0
function fbShare(url, title, descr, winWidth, winHeight) {
	var winTop = (screen.height / 2) - (winHeight / 2);
	var winLeft = (screen.width / 2) - (winWidth / 2);
	window.open(
		'https://www.facebook.com/sharer/sharer.php?app_id=808662262561066&amp;sdk=joey&amp;' +
		'&p[summary]=' + descr + '&p[url]=' + url,
		'sharer', 'top=' + winTop + ',left=' + winLeft +
		',toolbar=0,status=0,width=' + winWidth + ',height=' + winHeight);
}*/


/* Custom function for Facebook sharewindow version 2.0 */

function fbs_click(u, t) {
	//u = location.href;
	//t = document.title;
	window.open('http://www.facebook.com/sharer.php?u=' + encodeURIComponent(u) +
		'&t=' + encodeURIComponent(t), 'sharer',
		'toolbar=0,status=0,width=626,height=436');
	return false;
}

function twitter_click(t) {

	window.open('http://twitter.com/share?text=' + encodeURIComponent(t),
		'sharer',
		'toolbar=0,status=0,width=626,height=436');
	return false;
}



/**
 * detect IE
 * returns version of IE or false, if browser is not Internet Explorer
 */
function detectIE() {
	var ua = window.navigator.userAgent;

	var msie = ua.indexOf('MSIE ');
	if (msie > 0) {
		// IE 10 or older => return version number
		return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
	}

	var trident = ua.indexOf('Trident/');
	if (trident > 0) {
		// IE 11 => return version number
		var rv = ua.indexOf('rv:');
		return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
	}

	var edge = ua.indexOf('Edge/');
	if (edge > 0) {
		// IE 12 => return version number
		return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
	}

	// other browser
	return false;
}



$(document).ready(function() {



	var $container = $('#news-container');
	// init
	$container.isotope({
		// options
		itemSelector: '.news-item',
		layoutMode: 'fitRows'
	});



	// filter items on button click
	$('#filters').on('click', 'button', function() {
		$('button').removeClass('active');
		var filterValue = $(this).attr('data-filter');
		$container.isotope({
			filter: filterValue
		});
		$(this).addClass('active');
	});



	if ($("html").hasClass("oldie")) {
		$('#progressBar').hide();
	};

	$('.expander').readmore({
		speed: 175,
		collapsedHeight: 100,
		moreLink: '<a href="#"><span class="expand-style">More&nbsp;<i class="fa fa-angle-double-right"></i></span></a>',
		lessLink: '<a href="#"><span class="expand-style"><i class="fa fa-angle-double-left"></i>&nbsp;</span></a>',
		afterToggle: function() {
			progressBarInit();
		}
	});



	/* ---------------------------------------------- Sticky sidebar ------------------------------------*/

	/* activate sidebar */
	$('#sidebar-photo').affix({
		offset: {
			top: 485
		}
	});

	/* activate sidebar */
	$('#sidebar-no-photo').affix({
		offset: {
			top: 55
		}
	});

	/* activate scrollspy menu */
	var $body = $(document.body);
	var navHeight = $('.navbar').outerHeight(true) + 10;

	$body.scrollspy({
		target: '#leftCol',
		offset: navHeight
	});

	/* smooth scrolling sections */
	$('a[href*=#]:not([href=#])').click(function() {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//,
				'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html,body').animate({
					scrollTop: target.offset().top - 50
				}, 1500);
				return false;
			}
		}
	});



}); // document.ready

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



$(document).ready(function() {
	progressBarInit();
	// $(function() {
	// 	$('[data-toggle="tooltip"]').tooltip()
	// })
});



$(document).ready(function() {

	$('#flat').addClass("active");
	$('#progressBar').addClass('flat');

	$('#flat').on('click', function() {
		$('#progressBar').removeClass().addClass('flat');
		$('a').removeClass();
		$(this).addClass('active');
		$(this).preventDefault();
	});

	$('#single').on('click', function() {
		$('#progressBar').removeClass().addClass('single');
		$('a').removeClass();
		$(this).addClass('active');
		$(this).preventDefault();
	});

	$('#multiple').on('click', function() {
		$('#progressBar').removeClass().addClass('multiple');
		$('a').removeClass();
		$(this).addClass('active');
		$(this).preventDefault();
	});

	$('#semantic').on('click', function() {
		$('#progressBar').removeClass().addClass('semantic');
		$('a').removeClass();
		$(this).addClass('active');
		$(this).preventDefault();
		alert('hello');
	});

	$(document).on('scroll', function() {

		maxAttr = $('#progressBar').attr('max');
		valueAttr = $('#progressBar').attr('value');
		percentage = (valueAttr / maxAttr) * 100;

		if (percentage < 49) {
			document.styleSheets[0].addRule('.semantic', 'color: red');
			document.styleSheets[0].addRule(
				'.semantic::-webkit-progress-value',
				'background-color: red');
			document.styleSheets[0].addRule('.semantic::-moz-progress-bar',
				'background-color: red');
		} else if (percentage < 98) {
			document.styleSheets[0].addRule('.semantic', 'color: orange');
			document.styleSheets[0].addRule(
				'.semantic::-webkit-progress-value',
				'background-color: orange');
			document.styleSheets[0].addRule('.semantic::-moz-progress-bar',
				'background-color: orange');
		} else {
			document.styleSheets[0].addRule('.semantic', 'color: green');
			document.styleSheets[0].addRule(
				'.semantic::-webkit-progress-value',
				'background-color: green');
			document.styleSheets[0].addRule('.semantic::-moz-progress-bar',
				'background-color: green');
		}
	});

});


$('.expander').readmore({
	speed: 175,
	collapsedHeight: 60,
	moreLink: '<a href="#"><span class="expand-style">More&nbsp;<i class="fa fa-angle-double-right"></i></span></a>',
	lessLink: '<a href="#"><span class="expand-style"><i class="fa fa-angle-double-left"></i>&nbsp;</span></a>',
	afterToggle: function() {
		progressBarInit();
	}
});


/*
Function to initialize the progress bar.
This is called if elements on the page are expanded (e.g., the bios on the 'Commission' page)
*/


function progressBarInit() {
	var getMax = function() {
		return $(document).height() - $(window).height();
	}

	var getValue = function() {
		return $(window).scrollTop();
	}

	if ('max' in document.createElement('progress')) {
		// Browser supports progress element
		var progressBar = $('progress');

		// Set the Max attr for the first time
		progressBar.attr({
			max: getMax()
		});

		$(document).on('scroll', function() {
			// On scroll only Value attr needs to be calculated
			progressBar.attr({
				value: getValue()
			});
		});

		$(window).resize(function() {
			// On resize, both Max/Value attr needs to be calculated
			progressBar.attr({
				max: getMax(),
				value: getValue()
			});
		});
	} else {
		var progressBar = $('.progress-bar'),
			max = getMax(),
			value, width;

		var getWidth = function() {
			// Calculate width in percentage
			value = getValue();
			width = (value / max) * 100;
			width = width + '%';
			return width;
		}

		var setWidth = function() {
			progressBar.css({
				width: getWidth()
			});
		}

		$(document).on('scroll', setWidth);
		$(window).on('resize', function() {
			// Need to reset the Max attr
			max = getMax();
			setWidth();
		});
	}
}



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

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


/************************************** Custom function for Facebook sharewindow version 2.0 */

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


/*********************************************************************************************/



/************************************** Browser detect ***************************************/


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

String.prototype.capitalizeFirstLetter = function() {
	return this.charAt(0).toUpperCase() + this.slice(1);
}



$(document).ready(function() {


	/*********** Routines here to increase font size and filter entries on meeting page *************/


	var clickCount = 0;
	var direction = '+';

	$(function() {
		$('[data-toggle="tooltip"]').tooltip();
	});



	/* Meeting page filter *************************************** */

	// $('#meeting-filter').show();
	//
	// $(".chosen-select").chosen({
	//   max_selected_options: 5
	// });
	//
	// $('.chosen-select').on('change', function(evt, params) {
	//   //console.log($('.chosen-select').chosen().val());
	//   var filterValue = $('.chosen-select').chosen().val();
	//   var filterString = "";
	//   if (filterValue != null && filterValue !== undefined) {
	//     var arrayLength = filterValue.length;
	//     for (var i = 0; i < arrayLength; i++) {
	//
	//       filterString = filterString + '.' + filterValue[i].toLowerCase();
	//       if (i + 1 != arrayLength) {
	//         filterString = filterString + ', ';
	//       }
	//
	//     }
	//
	//   } else {
	//     filterString = "*";
	//   }
	//
	//   console.log(filterString);

	/* Isotope filter *************************************** */

	//   $container.isotope({
	//     filter: filterString
	//   });
	// });


	var $container = $('#news-container');

	$container.isotope({

		itemSelector: '.news-item',
		layoutMode: 'fitRows'
	});

	//$('#example').multiselect();

	// $container.isotope({
	// 	filter: 'jails'
	// });

	// $('#example').multiselect();
	//
	//

	$('#example').show().multiselect({
		includeSelectAllOption: true,
		buttonText: function(options, select) {
			if (options.length === 0) {
				return 'Display All';
			} else if (options.length > 3) {
				return options.length + ' categories selected';
			} else {
				var labels = [];
				options.each(function() {
					if ($(this).attr('label') !== undefined) {
						labels.push($(this).attr('label'));
					} else {
						labels.push($(this).html());
					}
				});
				return labels.join(', ') + '';
			}
		}
	});



	$('#example').on('change', function(evt, params) {
		var options = $('#example option:selected');

		var values = $.map(options, function(option) {
			return '.' + option.value;
		});


		if (values.length === 0) {
			values = "*";
		}
		var filterString = String(values);
		console.log('Selected filter: ' + values);

		//console.log(String(values).length + ' ' + '.jails'.length)


		$container.isotope({
			filter: filterString
		});
	});



	//	filter items on button click
	// $('#filters').on('click', 'button', function() {
	// 	//alert('click')
	// 	$('button').removeClass('active');
	// 	var filterValue = $(this).attr('data-filter');
	// 	alert(filterValue);
	// 	$container.isotope({
	// 		filter: filterValue
	// 	});
	// 	$(this).addClass('active');
	// });



	/* ------------------ Font adjuster --------------------- */

	// $('#adjust-font').click(function() {
	// 	var direction = '+';
	// 	var curSize = parseInt($('.article-content').css('font-size'));
	// 	var maxSize = 28;
	// 	var minSize = 22;
	//
	// 	if (curSize > maxSize) {
	//
	// 		curSize = minSize;
	// 		direction = '+';
	// 	}
	//
	// 	if (curSize < minSize - 1) {
	//
	// 		curSize = maxSize;
	// 		direction = '-';
	//
	// 	}
	//
	// 	if (direction === '+') {
	// 		curSize = curSize + 1;
	// 	}
	//
	// 	if (direction === '-') {
	// 		curSize = curSize - 1;
	// 	}
	//
	//
	//
	// 	console.log('Current font size: ' + curSize);
	// 	console.log('Current direction: ' + direction);
	//
	// 	$('.article-content').css('font-size', curSize);
	// 	// Re-calculate the progress bar for the page
	// 	progressBarInit();
	//
	// });

	$('#adjust-font').click(function() {

		var size;
		var sizeLabel;

		clickCount = clickCount + 1;

		$('.article-content > *').css('font-size', function(i, value) {


			if (direction === '+') {
				size = parseInt(value) + 1;
			}

			if (direction === '-') {
				size = parseInt(value) - 1;
			}



			return size;
		});

		progressBarInit();

		if (clickCount > 3) {

			if (direction === '+') {
				direction = '-';
			} else if (direction === '-') {
				direction = '+';
			}

			clickCount = 0;
		}

		if (clickCount == 0) {
			if (direction === '+') {
				sizeLabel = 'Default';
				$('#sizeLabel').html(sizeLabel);
			} else {
				sizeLabel = '';
				$('#sizeLabel').html('');
			}
		} else {
			sizeLabel = '';
			$('#sizeLabel').html('');
		}

		console.log('clickCount: ' + clickCount);
		console.log('direction: ' + direction);
		console.log('sizeLabel: ' + sizeLabel);


	});

	// $('#adjust-font').click(function() {
	// 	clickCount = clickCount + 1;
	// 	if (clickCount >= 4) {
	// 		clickCount = 0;
	// 		if (direction === '+') {
	// 			direction = '-';
	// 		} else {
	// 			direction = '+';
	// 		}
	// 	}
	// 	$('.article-content > *').css('font-size', function(i, value) {
	// 		console.log('Click count: ' + clickCount)
	// 		if (direction === '+') {
	// 			return parseInt(value) * 1.1;
	// 		} else {
	// 			return parseInt(value) / 1.1;
	// 		}
	// 	});
	// });



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
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(
				/^\//,
				'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(
					1) +
				']');
			if (target.length) {
				$('html,body').animate({
					scrollTop: target.offset().top - 50
				}, 1500);
				return false;
			}
		}
	});



}); // document.ready


;(function($) {

	var container = $(".ba-rating");
	var index = -1;



	$(".ba-star").hover(
		// When the mouse hover over any Star. All the Stars to the left change color to yellow
		function(){
			$(this).removeClass('ba-star--grey').removeClass('ba-star--yellow').addClass("ba-star--yellow");
			$(this).prevAll().removeClass('ba-star--grey').removeClass('ba-star--yellow').addClass("ba-star--yellow");
			$(this).nextAll().removeClass('ba-star--grey').removeClass('ba-star--yellow').addClass("ba-star--grey");
		},
		//When the mouse move away, the color yellow disappears:
		function(){
			$(this).removeClass("ba-star--yellow");
			$(this).prevAll().removeClass("ba-star--yellow");

			if (index >= 0) {
			//Return the previously chosen choice (if any) back in yellow
				// Recall the choice using its index
					// "get" returns a DOM element, NOT a jQuery object
					var chosenStar = container.children().get(index);
					//Convert to jQuery object
					var $rating = $(chosenStar);

				//Make them yellow again
				$rating.removeClass('ba-star--grey').removeClass('ba-star--yellow').addClass("ba-star--yellow");
				$rating.prevAll().removeClass('ba-star--grey').removeClass('ba-star--yellow').addClass("ba-star--yellow");
			}
		}
	);




	$(".ba-star").click(
		function(){
			$(this).removeClass('ba-star--grey').removeClass('ba-star--yellow').addClass("ba-star--yellow");
			$(this).prevAll().removeClass('ba-star--grey').removeClass('ba-star--yellow').addClass("ba-star--yellow");
			$(this).nextAll().removeClass('ba-star--grey').removeClass('ba-star--yellow').addClass("ba-star--grey");
			index = $(this).index();
		}
	);

	$(function() {

	  $('.ba-tabs-list').on('click', 'li:not(.open-active)', function() {
	    $(this)
	      .addClass('open-active').siblings().removeClass('open-active')
	      .closest('.ba-game-tabs').find('.ba-tabs__content').removeClass('content-open').eq($(this).index()).addClass('content-open');
	  });

	});

}) (jQuery);

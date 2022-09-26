jQuery(document).ready(function ($) {
  $(document).scroll(function () {
    scroll_pos = $(this).scrollTop();
    if (scroll_pos > $(".history-item-wrap").offset().top) {
      $(".nav-inner").css({ position: "fixed", left: "0px" });
			
    }
    if (scroll_pos < $(".history-item-wrap").offset().top) {
      $(".nav-inner").css({ position: "absolute", left: "-72px" });
			
    }
		 if (scroll_pos > $(".tickerwrapper").offset().top-900) {
			$('.history .stickyNav').css({display: 'none'});
		 }
		 if (scroll_pos < $(".tickerwrapper").offset().top-500) {
			$('.history .stickyNav').css({display: 'block'});
		 }
		 /*if($('.nav-inner').height() > 1080 ){ 
			 console.log($('.nav-inner').height() );
			$(".nav-inner").css({ 'overflow-y' : 'scroll'});
			}*/
  });
  var item = $(".kiada-archive-item"),
    nav = $("ul.kiada-archive-works-list");

  $("ul.kiada-archive-works-list > li:first-child > a").addClass("active");

  $(window).on("scroll", function () {
    var cur_pos = $(this).scrollTop();
    var item = $(".kiada-archive-item"),
      nav = $("ul.kiada-archive-works-list");

    item.each(function () {
      var top = $(this).offset().top,
        bottom = top + $(this).outerHeight();
			var nothis = nav.find('a[href="#' + $(this).attr("id") + '"]');

      if (cur_pos >= top && cur_pos <= bottom) {
        nav.find("a").removeClass("active");
				 nav.find("li").removeClass("active");
        item.removeClass("active");
			
        $(this).addClass("active");
				
				nothis.parent().addClass("active");
        nav.find('a[href="#' + $(this).attr("id") + '"]').addClass("active");
      }
    });
  });
  nav.find("a").on("click", function () {
    var $el = $(this),
      id = $el.attr("href");

    $("html, body").animate(
      {
        scrollTop: $(id).offset().top + 1 + "px",
      },
      500
    );

    return false;
  });
	 $(".timetable-btn").click(function () {
    $(".history-modal").fadeIn("slow");
  });
  $(".btn-close").click(function () {
    $(".history-modal").fadeOut("slow");
  });
});

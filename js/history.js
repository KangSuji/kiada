jQuery(document).ready(function ($) {
  //$('.mobile-header').css({position: 'unset'});
  $(document).scroll(function () {
    const windowWidth = $(window).width();
    scroll_pos = $(this).scrollTop();
    if (scroll_pos > $(".history-item-wrap").offset().top) {
      $(".nav-inner").css({ position: "fixed", left: "0px" });
    }

    if (windowWidth <= 1200) {
      if (scroll_pos < $(".history-item-wrap").offset().top) {
        $(".nav-inner").css({ position: "absolute", left: "-10%" });
      }
    } else if (windowWidth > 1200) {
      if (scroll_pos < $(".history-item-wrap").offset().top) {
        $(".nav-inner").css({ position: "absolute", left: "-72px" });
      }
    }
    if (scroll_pos > $(".tickerwrapper").offset().top - 900) {
      $(".history .stickyNav").css({ display: "none" });
    }
    if (scroll_pos < $(".tickerwrapper").offset().top - 500) {
      $(".history .stickyNav").css({ display: "block" });
    }
    //아카이브 색상 변경----------------------------
    if (scroll_pos > $(".no-rotate").offset().top) {
      $(".wrap-2016, .wrap-2017, .wrap-2018, .wrap-2019, .wrap-2020, .wrap-2021").css({ "background-color": "#000000" });
    }
    if (scroll_pos < $(".no-rotate").offset().top - 900) {
      $(".wrap-2016").css({ "background-color": "#1f0e0d" });
    }
    if (scroll_pos < $(".no-rotate").offset().top - 900) {
      $(".wrap-2017").css({ "background-color": "#1e0a0c" });
    }
    if (scroll_pos < $(".no-rotate").offset().top - 900) {
      $(".wrap-2018").css({ "background-color": "#001a13" });
    }
    if (scroll_pos < $(".no-rotate").offset().top - 900) {
      $(".wrap-2019").css({ "background-color": "#2b1803" });
    }
    if (scroll_pos < $(".no-rotate").offset().top - 900) {
      $(".wrap-2020").css({ "background-color": "#091c0b" });
    }
    if (scroll_pos < $(".no-rotate").offset().top - 900) {
      $(".wrap-2021").css({ "background-color": "#110f1e" });
    }
    //---------------------------------
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
jQuery(document).ready(function ($) {
  $(document).scroll(function () {
    scroll_pos = $(this).scrollTop();

    if (scroll_pos > $(".kiada-support").offset().top - 500) {
      $(".nav-inner").css({ display: "none" });
    }
    if (scroll_pos < $(".kiada-support").offset().top - 500) {
      $(".nav-inner").css({ display: "block" });
    }
  });
});

// var isVisible = false;

// $(window).on("scroll", function () {
//   if (checkVisible($(".tickerwrapper")) && !isVisible) {
//     console.log("???");
//     $(".history-color-wrap").css({ position: "fixed" });
//     isVisible = true;
//   }
// });

//아카이브 배경높이 설정
function checkVisible(elm, eval) {
  eval = eval || "object visible";
  var viewportHeight = $(window).height(), // Viewport Height
    scrolltop = $(window).scrollTop(), // Scroll Top
    y = $(elm).offset().top,
    elementHeight = $(elm).height();

  if (eval == "object visible") return y < viewportHeight + scrolltop && y > scrolltop - elementHeight;
  if (eval == "above") return y < viewportHeight + scrolltop;
}
$(document).ready(function () {
  resizeContent();
});

$(window).resize(function () {
  resizeContent();
});

function resizeContent() {
  var windowHeight = $(window).height();

  var topHeight = $(".header").height();

  $(".history-color-wrap").css({ height: windowHeight + topHeight + "px" });
}

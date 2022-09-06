$(function () {
  AOS.init();
  //pc gnb depth2
  $(".gnb_wrap").on("mouseenter", function (event) {
    event.preventDefault();

    $(".header").addClass("over");
    $(".logo img").attr("src", "images/logo-kiada2020-white-1.svg");
  });

  $(".gnb_wrap").on("mouseleave", function (event) {
    event.preventDefault();

    $(".header").removeClass("over");
    $(".logo img").attr("src", "images/logo-kiada2020-green.svg");
  });
  var rellax = new Rellax(".rellax");
});

jQuery(function ($) {
  var $tickerWrapper = $(".tickerwrapper");
  var $list = $tickerWrapper.find(".ticker");
  var $clonedList = $list.clone();
  var listWidth = 10;
  $list.find("span").each(function (i) {
    listWidth += $(this, i).outerWidth(true);
  });
  var endPos = $tickerWrapper.width() - listWidth;
  $list.add($clonedList).css({ width: listWidth + "px" });
  $clonedList.addClass("cloned").appendTo($tickerWrapper);
  $(window).resize(function () {
    var $outerHeight = $list.find("span").outerHeight();
    $tickerWrapper.css("height", $outerHeight);
  });
  var infinite = new TimelineMax({ repeat: -1, paused: true });
  var time = 40;
  infinite
    .fromTo($list, time, { rotation: 0.01, x: 0 }, { force3D: true, x: -listWidth, ease: Linear.easeNone }, 0)
    .fromTo($clonedList, time, { rotation: 0.01, x: listWidth }, { force3D: true, x: 0, ease: Linear.easeNone }, 0)
    .set($list, { force3D: true, rotation: 0.01, x: listWidth })
    .to($clonedList, time, { force3D: true, rotation: 0.01, x: -listWidth, ease: Linear.easeNone }, time)
    .to($list, time, { force3D: true, rotation: 0.01, x: 0, ease: Linear.easeNone }, time)
    .progress(1)
    .progress(0)
    .play();

  $(".slick-slide-wrap").slick({
    infinite: true,
    fade: true,
    cssEase: "linear",
    nextArrow: $("#next"),
    prevArrow: $("#prev"),
  });

  $(".mo-slick").slick({
    infinite: true,
    fade: true,
    cssEase: "linear",
    nextArrow: $("#m-next"),
    prevArrow: $("#m-prev"),
  });
});

jQuery(document).ready(function ($) {
  $(document).scroll(function () {
    scroll_pos = $(this).scrollTop();

    if (scroll_pos > $(".kiada-support").offset().top - 500) {
      $(".stickyNav").css({ display: "none" });
    }
    if (scroll_pos < $(".kiada-support").offset().top - 500) {
      $(".stickyNav").css({ display: "block" });
    }
  });

  $(".info-more-btn").click(function () {
    $(this).prev(".program-right").css({ height: "auto" });
    $(this).css({ display: "none" });
  });
});

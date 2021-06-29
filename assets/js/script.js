$(function () {
  // Handler for .ready() called.
  const xlarge = 1199.98;
  window.addEventListener("load", function () {
    if ($(window).width() >= xlarge) {
      let hMain = $('main').height();
      let hHeader = $('header').height();

      if (hMain > hHeader)
        $('header').height(hMain);
      else
        $('main').height(hHeader);
    }
  });

  $(window).resize(function () {
    if ($(window).width() >= xlarge) {
      let hMain = $('main').height();
      let hHeader = $('header').height();
      if (hMain > hHeader)
        $('header').height(hMain);
      else
        $('main').height(hHeader);
    }
});
});
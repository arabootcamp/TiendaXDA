$(function () {
  // Handler for .ready() called.
  const xlarge = 1199.98;
  const medium = 767.98;

  if ($(window).width() >= xlarge)
    $('header').height($('main').height());
  else {
    if ($(window).width() >= medium)
      $('header').height(0.44 * $(window).width());
    else
      $('header').height(0.58 * $(window).width());
  }
  console.log("load: header " + $('header').height() + " main " + $('main').height());

  $(window).resize(function () {
    console.log("resize");
    if ($(window).width() >= xlarge)
      $('header').height($('main').height());
    else {
      if ($(window).width() >= medium)
        $('header').height(0.44 * $(window).width());
      else
        $('header').height(0.58 * $(window).width());
    }
    console.log("windows.width " + $(window).width());
    console.log("main " + $('main').height());
    console.log("header " + $('header').height());
  });
});
/*user hovers on nav item and shooting stars fly across screen, as well as yellow orb appearing around nav item*/

$('.nav__link').hover(function(e) {
  $('#starshooter1').addClass('main__starshooter1');
  $('#starshooter2').addClass('main__starshooter2');
  $('#starshooter3').addClass('main__starshooter3');
  $(this).addClass('nav__link--hover');
}, function() {
  $('#starshooter1').removeClass('main__starshooter1');
  $('#starshooter2').removeClass('main__starshooter2');
  $('#starshooter3').removeClass('main__starshooter3');
  $(this).removeClass('nav__link--hover');
});

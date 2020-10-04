/*$('.nav__link').hover(function(e){
 $(this).addClass('.nav__link--hover');
}, function(){
$(this).removeClass('.nav__link--hover');
});*/

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

$(document).ready(function(){
  slider();
})

function slider() {
  var next = $('.next > .fa-angle-right');
  var prev = $('.prev > .fa-angle-left');

  next.click(function(){
    var current = $('.active');
    current.removeClass('active').next().addClass('active');

    if (current.hasClass('last')) {
      $('.first').addClass('active');
    }
  })

  prev.click(function(){
    var current = $('.active');
    // console.log('ok');
    current.removeClass('active').prev().addClass('active');

    if (current.hasClass('first')) {
      $('.last').addClass('active');
    }
  })
}








// if (nextImage.length) {
//   current.removeClass('.active').css(transform, -50%);
//   nextImage.addClass('.active').css(transform, 50%);
// }


//
// function() {
//
// }
// var next = $('.next');
//
// next.click(function(){
//   $(this).show("active", { direction: "left" }, 1000);
// });

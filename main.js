$(document).ready(function(){
  $('.next').click(function(){
    var current = $('.active');
    var nextImage = current.next();

    if (nextImage.length) {
      current.removeClass('.active');
      nextImage.addClass('.active');
    }
  })
})






//
// function() {
//
// }
// var next = $('.next');
//
// next.click(function(){
//   $(this).show("active", { direction: "left" }, 1000);
// });

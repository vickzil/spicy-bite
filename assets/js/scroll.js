$(document).ready(function () {
  //smoothscroll 

  var scrollLink = $('.scroll');

  scrollLink.click(function (e) {
    e.preventDefault();
    $('ul li a').css({
      'font-weight': 'normal',
      'color': '#f1f1f1'
    });
    $(this).css({
      'font-weight': 'bold',
      'color': 'lightgreen'
    });

    $('body, html').animate({
      scrollTop: $(this.hash).offset().top
    }, 1000);

  });

  // toggle Hamburger Menu

  $('.burger').click(function () {
    $('.nav-group').toggleClass('navgroup');
  });

});
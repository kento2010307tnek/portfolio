jQuery(function($) {
    $('.mainvisual').bgSwitcher({
        images: ['img/mainimage_01.png','img/mainimage_02.png'], 
        interval: 4500,
        effect: "fade", 
        duration: 1400, 
    });
});

$(function() {
    $('nav li a').on('click', function(event) {
      $('#menu').prop('checked', false);
    });
});

$(function() {
    $('nav li a').on('click', function(event) {
      $('#menu').prop('checked', false);
    });
});

$(function() {
    $('.slider').slick({
        autoplay:false,
        autoplaySpeed:5000,
    })
});

$(function() {
    var topBtn = $('.pagetop');
});

ScrollReveal().reveal('.inner',{
    duration: 2000,
    viewFactor: 0.2,
    origin: 'bottom',
    reset: false
});
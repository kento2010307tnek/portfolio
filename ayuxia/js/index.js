$(function() {
    $(".faqlist dt").on("click", function() {
    $(this).next().slideToggle();
    });
    $("#nav-toggle").on("click",function(){
     $("nav ul li").slideToggle();
     $(this).toggleClass("open");
});
    $("nav a").on("click",function(){
    $("#nav-toggle").click();
        });
    ScrollReveal().reveal('.scroll');
});

$(function() {
var topBtn = $('.pagetop');
topBtn.hide();

$(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
        topBtn.fadeIn();
    } else {
        topBtn.fadeOut();
    }
});
topBtn.click(function () {
    $('body,html').animate({
        scrollTop: 0
    }, 500);
    return false;
});
});
$(function() {
    var topBtn = $('.pagetop');

    topBtn.hide();
    
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            topBtn.fadeIn();
        } else {
            topBtn.fadeOut();
        }
    });
    topBtn.click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 100);
        return false;
    });
});

$(function() {
    $('#nav-content a').on('click', function(event) {
    $('#nav-input').prop('checked', false);
    });
});

$(function () {
    $(".ac-ttl").click(function () {
        $(".ac-ttl").not(this).removeClass("open");
        $(".ac-ttl").not(this).next().slideUp(300);
        $(this).toggleClass("open");
        $(this).next().slideToggle(300);
    });
});

$(".mainimage").ripples();({
    dropRadius: 1000,
    resolution: 500,
    perturbance: 0.1
});

jQuery(function($) {
    $('.main-image').bgSwitcher({
        images: ['img/main-image.png','img/main-image-4.png','img/main-image-2.png','img/main-image-3.png'], // 切り替える背景画像を指定
    });
});

$(function(){
	$("#nav-toggle").on("click",function(){
		$("nav ul li").slideToggle();
		$(this).toggleClass("open");
	});
});

$(function () {
    var dateToday = new Date(new Date().getTime());
    var oneDayAhead = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
    $("#checkIn").datepicker({
        changeMonth: true,
        minDate: dateToday,
        dateFormat: "yy-mm-dd",
    });
    $("#checkOut").datepicker({
        changeMonth: true,
        minDate: oneDayAhead,
        dateFormat: "yy-mm-dd",
    });
});
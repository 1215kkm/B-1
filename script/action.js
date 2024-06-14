setInterval(function(){
    $('.slide ul').animate({left:-1200}, 1000, function(){
        $('.slide li').eq(0).appendTo($('.slide ul'))
        $('.slide ul').css({left:0})
    })
}, 2000);




/* notice, gallery */
$('#gal').click(function(){
    $('.gallery').show();
    $('.notice').hide();

    $('.title_box h2').removeClass()
    $('#gal').addClass('on')
})

$('#noti').click(function(){
    $('.gallery').hide();
    $('.notice').show();

    $('.title_box h2').removeClass()
    $('#noti').addClass('on')
})


/* popup */
$('.notice li').eq(0).click(function(){
    $('.popup').show();
})

$('.popup a').click(function(){
    $('.popup').hide();
})


 $(".slider").slick({
            dots: true,
            autoplay: true,
            autoplaySpeed: 3000,
            arrows: true,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        arrows: true,
                        dots: true
                        }
                }
            ]
        });


 $('#sub_title .btn').click(function(e){
 	e.preventDefault();
 	$('.nav').slideToggle();
 	$(this).toggleClass('on');

 	if ($('.btn').hasClass('on')) {
 		$('.btn').find('i').attr('class', 'fa fa-angle-up');
 	} else {
 		$('.btn').find('i').attr('class', 'fa fa-angle-down');
 	}
 });
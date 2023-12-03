$(()=> {
	console.log("ready");
	$('.mujcarousel').slick();
});

$(document).on('ready', function() {
      $(".vertical-center-4").slick({
        dots: false,
        vertical: true,
        centerMode: true,
        slidesToShow: 3,
        slidesToScroll: 1,
      });
      $(".vertical-center-3").slick({
        dots: false,
        vertical: true,
        centerMode: true,
        slidesToShow: 3,
        slidesToScroll: 1
      });
      $(".vertical-center-2").slick({
        dots: false,
        vertical: true,
        centerMode: true,
        slidesToShow: 3,
        slidesToScroll: 1
      });
      $(".vertical-center").slick({
        dots: false,
        vertical: true,
        centerMode: true,
      });
      $(".vertical").slick({
        dots: false,
        vertical: true,
        slidesToShow: 3,
        slidesToScroll: 1
      });
      $(".regular").slick({
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
      });
      $(".center").slick({
        dots: false,
        infinite: true,
        centerMode: true,
        slidesToShow: 3,
        slidesToScroll: 1,
      });
      $(".variable").slick({
        dots: false,
        infinite: true,
        variableWidth: true
      });
      
      $(".lazy").slick({
        lazyLoad: 'ondemand',
        infinite: true
      });
    });

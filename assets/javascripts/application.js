function main() { 

          function parallax(){
                var scrolled = $(window).scrollTop();
                $('.bg').css('top', -(scrolled * 0.5) + 'px');
                $('.scroll').css('top', 101-(scrolled * 0.095) + 'vh');

                $('.scroll').animate({'opacity':'1'},1500);

            }
            $(window).scroll(function(e){
                parallax();
            });
    
             $('span').click(function(){
                    scrollDown();
                  });

                function scrollDown() {
                  $id = event.target.id;
                  $('html, body').animate({ 
                    scrollTop: $('#'+$id+'Page').offset().top
                  },'slow');  
                };
              
               $('.slider-for').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                fade: true,
                asNavFor: '.slider'
              });
              $('.slider').slick({
                autoplay: true,  
                autoplaySpeed: 6000,
                dots: true,
                asNavFor: '.slider-for',
                infinite: true,
                adaptiveHeight: true,
              });

            }

window.onload = function() {
    main();   

}


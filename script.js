$(document).ready(function(){
    
    /*Scroll on buttons*/
    $('.js--scroll-to-destinations').click(function(){
        $('html, body').animate({scrollTop: $('.js--section-destinations').offset().top}, 1000);
    });
    
     $('.js--scroll-to-about').click(function(){
        $('html, body').animate({scrollTop: $('.js--section-about').offset().top}, 1000);
    });
    
     $('.js--scroll-to-destinations').click(function(){
        $('html, body').animate({scrollTop: $('.js--section-destinations').offset().top}, 1000);
    });
    
      $('.js--scroll-to-gallery').click(function(){
        $('html, body').animate({scrollTop: $('.js--section-gallery').offset().top}, 1000);
    });
    
      $('.js--scroll-to-form').click(function(){
        $('html, body').animate({scrollTop: $('.js--section-form').offset().top}, 1000);
    });
    
       $('.js--scroll-to-home').click(function(){
        $('html, body').animate({scrollTop: $('.js--home').offset().top}, 1000);
    });
    
    /*Animation on scroll*/
    
    $('.js--wp-1').waypoint(function(direction){
        $('.js--wp-1').addClass('animated fadeInUp'); 
       }, {offset: "90%"
    });

     $('.js--wp-2').waypoint(function(direction){
        $('.js--wp-2').addClass('animated fadeInUp');                  
    }, {offset: "70%"
       });
    
     $('.js--wp-3').waypoint(function(direction){
        $('.js--wp-3').addClass('animated fadeInUp');                  
    }, {offset:"50%"
       });
   
    
});


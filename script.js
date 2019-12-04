

jQuery(document).ready(function(){
didScroll = true;



 // Transition effect for navbar
          $(window).scroll(function() {
          // checks if window is scrolled more than 500px, adds/removes solid class
          
          if($(this).scrollTop() > 200) { 
              $('.navbar').addClass('bg-dark');
              $('.navbar').removeClass('bg-transparent')
           
          } 

          else {
              $('.navbar').removeClass('bg-dark');
            $('.navbar').addClass('bg-transparent');
          }
        });


//scroll animation
    $('#scrolldown').click (function() {
      $('html, body').animate({scrollTop: $('#about').offset().top }, 'slow');
      return false;
    });
 

    $('#scrollup-load').click (function() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
   return false;
});

       $(window).scroll(function() {
          // checks if window is scrolled more than 500px, adds/removes solid class
          
          if($(this).scrollTop() < 600) { 

              $('body').removeClass('#scrollup-load'); 
          } 

          else {
              $('body').addClass('#scrollup-load');
            
          }
        });




});



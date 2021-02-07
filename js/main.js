/*global $, window, document, window */
// external js: flickity.pkgd.js

//Caching The Scroll Top 
            
          

        $(document).ready(function(){
              "use strict";
            


            $('.main-carousel').flickity({
              // options
              cellAlign: 'left',
              contain: true
            });

        
        var  scrollButton = $("#scroll-top"); 
            
            //Caching The Scroll Top 
            
            
            $(window).scroll(function (){
                
                $(this).scrollTop() >=500 ?   scrollButton.fadeIn() : scrollButton.fadeOut();
                
                 
                
                scrollButton.click(function(){
                   
                    $('html,body').animate({scrollTop : 0 } , 600);
                    return false;
                });
            });
            

        });



//*********************************************


   $(function(){
       
       var  nav = $(".nav-wrapper") ;
       
       $(window).scroll(function(){
           var scroll = $(window).scrollTop();
            if (scroll >= 400){
              nav.addClass("navbar-fixed-top") ; 
                
            }
           else{
                nav.removeClass("navbar-fixed-top") ; 
           }
           
       });
   });
    






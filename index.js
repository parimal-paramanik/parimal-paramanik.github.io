$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('#main-nav').addClass("sticky");
        }else{
            $('#main-nav').removeClass("sticky");
        }
        
    })

    // togel/menu nevbar script
    $('.menu-btn').click(function(){
        $('#main-nav .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });


    $('.menu li a').click(function(){
        $('#main-nav .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    //   typing animation script 
       var typed = new Typed (".panku",{
        strings:["Full-Stack Web-Developer", "Node-js Backend Developer"],
        typeSpeed:100,
        backSpeed:60,
        loop:true
       })


       var typed = new Typed (".panku2",{
        strings:["Full-Stack Web-Developer", "Node-js Backend Developer"],
        typeSpeed:100,
        backSpeed:60,
        loop:true
       });

    // owl carousel script
    $('.carousel').owlCarousel({
         margin:20,
         loop:true,
         autoplayTimeOut:2000,
         autoplayHoverPause:true,
         responsive:{
            0:{
                items:1,
                nav:false
            },
            600:{
                items:1,
                nav:false
            },
            1000:{
                items:1,
                nav:false
            }
         }
    })




});


// resume section 

document.getElementById("resume-link-1").onclick = () => {
    window.open(
      "https://drive.google.com/file/d/1CigpKUPFR9W4bgD60oX4RLNY89LmWGm0/view?usp=drive_link"
    );
  };
  
  document.getElementById("resume-link-2").onclick = () => {
    window.open(
      "https://drive.google.com/file/d/1CigpKUPFR9W4bgD60oX4RLNY89LmWGm0/view?usp=drive_link"
    );
  };
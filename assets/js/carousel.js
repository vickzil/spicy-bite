$('.image-carousel').owlCarousel({
      stagePadding: 0,

      // AUTOPLAY IS SET TO TRUE
      loop:true,

      //MARGIN IS THE SPACE BETWEEN ITEMS
      margin:20,

      nav:true,
      // AUTOPLAY IS SET TO TRUE, CHANGE TO FALSE TO STOP AUTOPLAY
      autoplay:true,

      // AUTOPLAY TIME INTERVAL
      autoplayTimeout:2000,
      navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
      responsive:{
        0:{
          items:2
        },
        600:{
          items:2
        },
        1000:{
          items:4
        }
      }
     });

//#################  TESTIMONIAL CAROUSEL SETTINGS   ############################
$('.testimonial-carousel').owlCarousel({
      stagePadding: 0,

      // AUTOPLAY IS SET TO TRUE
      loop:true,

      //MARGIN IS THE SPACE BETWEEN ITEMS
      margin:20,
      nav:true,
      // AUTOPLAY IS SET TO TRUE, CHANGE TO FALSE TO STOP AUTOPLAY
      autoplay:true,

      // AUTOPLAY TIME INTERVAL
      autoplayTimeout:2000,
      responsive:{
        0:{
          items:1
        },
        600:{
          items:2
        },
        1000:{
          items:3
        }
      }
     });
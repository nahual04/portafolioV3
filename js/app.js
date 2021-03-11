//SLICKY SLIDER
$(document).on('ready', function() {
    $(".regular").slick({
        dots: false,
        infinite: false,
        variableWidth: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
  
        responsive: [
          {
            breakpoint: 1440,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 1025,
            settings: {
              slidesToShow: 3.2,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 3.5,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 769,
            settings: {
              slidesToShow: 2.2,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 427,
            settings: {
              slidesToShow: 1.3,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 321,
            settings: {
              slidesToShow: 1.1,
              slidesToScroll: 1
            }
          }
        ]
    });
  
  });
  //SLICKY SLIDER

  
  
  
window.addEventListener('load',function(){
    new Glider(document.querySelector('.carousel__list'),{
        slidesToShow: 3,
        slidesToScroll: 3,
        draggable: true,
        dots: '.carousel__indicators',
        arrows: {
            prev: '.carousel__before',
            next: '.carousel__after' 
        },
        responsive: [
          {
            // screens greater than >= 0px
            breakpoint: 0,
            settings: {
              // Set to `auto` and provide item width to adjust to viewport
              slidesToShow: 3,
              slidesToScroll: 2,
              draggable: true,

            }
          },{
            // screens greater than >= 567px
            breakpoint: 576,
            settings: {
              // Set to `auto` and provide item width to adjust to viewport
              slidesToShow: 3,
              slidesToScroll: 3,
              draggable: true,

            }
          },{
              // screens greater than >= 567px
              breakpoint: 768,
              settings: {
                // Set to `auto` and provide item width to adjust to viewport
                slidesToShow: 3,
                slidesToScroll: 3,
                draggable: true,

              }
            },{
                // screens greater than >= 992px
                breakpoint: 992,
                settings: {
                  // Set to `auto` and provide item width to adjust to viewport
                  slidesToShow: 4,
                  slidesToScroll: 3,
                  draggable: true,
                }
              },{
              // screens greater than >= 1024px
              breakpoint: 1200,
              settings: {
                slidesToShow: 5,
                slidesToScroll: 4,
                draggable: true,
              }
            }
          ]
    });
    new Glider(document.querySelector('.carousel__list--2'),{
      slidesToShow: 3,
      slidesToScroll: 3,
      draggable: true,
      dots: '.carousel__indicators',
      arrows: {
          prev: '.carousel__recomendation--before',
          next: '.carousel__recomendation--after' 
      },
      responsive: [
        {
          // screens greater than >= 0px
          breakpoint: 0,
          settings: {
            // Set to `auto` and provide item width to adjust to viewport
            slidesToShow: 3,
            slidesToScroll: 2,
            draggable: true,

          }
        },{
          // screens greater than >= 567px
          breakpoint: 576,
          settings: {
            // Set to `auto` and provide item width to adjust to viewport
            slidesToShow: 3,
            slidesToScroll: 3,
            draggable: true,

          }
        },{
            // screens greater than >= 567px
            breakpoint: 768,
            settings: {
              // Set to `auto` and provide item width to adjust to viewport
              slidesToShow: 3,
              slidesToScroll: 3,
              draggable: true,

            }
          },{
              // screens greater than >= 992px
              breakpoint: 992,
              settings: {
                // Set to `auto` and provide item width to adjust to viewport
                slidesToShow: 4,
                slidesToScroll: 3,
                draggable: true,

              }
            },{
            // screens greater than >= 1024px
            breakpoint: 1200,
            settings: {
              slidesToShow: 5,
              slidesToScroll: 4,
              draggable: true,

            }
          }
        ]
  });
});


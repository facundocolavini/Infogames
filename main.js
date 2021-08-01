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


/* Slider Gallery */

const modal = document.querySelector('.modal');
const previews = document.querySelectorAll('.item__img');
const posters = document.querySelectorAll('.poster');
const original = document.querySelector('.modal__img');
//Games images
const crash = ["crash_4_1","crash_4_2","crash_4_3","crash_4_4"];
const littleNightmareII = ["Little_Nightmares_II_1","Little_Nightmares_II_2","Little_Nightmares_II_3","Little_Nightmares_II_4"];

previews.forEach((preview,i) => {
  preview.addEventListener("click",()=>{
    modal.classList.add("open");
    original.classList.add("open");
    //Dynamic changes images
    const imgOriginal = preview.getAttribute("data-original");
    console.log(imgOriginal);
    original.src= `${imgOriginal}${crash[i]}.jpg`;
  });
});

modal.addEventListener("click",(e)=>{
  if(e.target.classList.contains('modal')){
    modal.classList.remove('open');
    original.classList.remove("open");
  }
});  


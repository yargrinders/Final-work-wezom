$('.single-slide').slick({
  slidesToShow: 1,
  arrows: false,
  dots: true,
  dotsClass: 'slick-dots', 
  slidesToScroll: 1,
  autoplay: true,
  variableWidth: true,
  autoplaySpeed: 1000,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
      }
    }
  ]
});
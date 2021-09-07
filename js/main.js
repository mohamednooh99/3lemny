$(function () {
  $(document).on('mouseenter', '.card.my-2', function () {
    $(this).find('.overlay2').css('top','0')
  })
  $(document).on('mouseleave', '.card.my-2', function () {
    console.log("hh");
    $(this).find('.overlay2').css('top','-100%')
  })

})
$('.owl-carousel').owlCarousel({
  rtl: true,
  loop: true,
  margin: 10,
  nav: true,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 3
    },
    1000: {
      items: 5
    }
  }
})
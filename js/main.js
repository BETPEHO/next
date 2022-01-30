$(function(){
  $('.product__name').slick({
    prevArrow: `<button type="button" class="product-prev"><img src="images/productprev.png" alt=""></button>`,
    nextArrow: `<button type="button" class="product-next"><img src="images/productnext.png" alt=""></button>`,
    
    slidesToShow: 1,
    slidesToScroll: 1,
    focusOnSelect: true,
    dots: true,
    asNavFor: '.product__content',
    
       
});

$('.product__content').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    asNavFor: '.product__name',    
  });


});









const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

new WOW().init();

jQuery('.drawer-icon').on('click', function(e) {
  e.preventDefault();

  jQuery('.drawer-icon').toggleClass('is-active');
  jQuery('.drawer-content').toggleClass('is-active');
  jQuery('.drawer-background').toggleClass('is-active');

  return false;
});

jQuery('a[href^="#"]').on('click', function() {
  // headerの高さを取得
  var header = jQuery('header').innerHeight();

  // attr()はhtmlの要素を取得する
  var id = jQuery(this).attr('href');

  var position = 0;
  if(id != '#') {
    // 指定したidの位置を取得する
    var position = jQuery(id).offset().top - header;
  }

  jQuery('html,body').animate({
    scrollTop: position
  },
  1200);
});

jQuery(window).on('scroll', function() {
  if(jQuery(this).scrollTop() > 100) {
    jQuery('.toTop').addClass('is-show');
  }else {
    jQuery('.toTop').removeClass('is-show');
  }
});


jQuery('header-nav a').on('click', function() {
  jQuery(this).removeClass('is-active');
  jQuery(this).addClass('is-active');
});
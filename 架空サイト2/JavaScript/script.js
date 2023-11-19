jQuery('a[href^="#"]').on('click', function() {
  // headerの高さを取得
  var header = jQuery('header').innerHeight();

  // attr()はhtmlの要素を取得する
  var id = jQuery(this).attr('href');

  // 指定したidの位置を取得する
  var position = jQuery(id).offset().top - header;

  jQuery('html,body').animate({
    scrollTop: position
  },
  1000);
});

//drawer-icon
jQuery('.drawer-icon').on('click', function(e) {
  e.preventDefault();

  jQuery('.drawer-icon').toggleClass('is-active');
  jQuery('.drawer-content').toggleClass('is-active');
  jQuery('.drawer-background').toggleClass('is-active');

  return false;
});
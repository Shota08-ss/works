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
  900);
});

$(window).on('scroll', function() {
  var windowHeight = $(window).height();
  var scrollTop = $(window).scrollTop();
  $('section').each(function() {
    var elementOffset = $(this).offset().top;
    if (elementOffset < (scrollTop + windowHeight)) {
      $(this).addClass('wow animated fadeIn');
    }
  });
});

//drawer-icon
jQuery('.drawer-icon').on('click', function(e) {
  e.preventDefault();

  jQuery('.drawer-icon').toggleClass('is-active');
  jQuery('.drawer-content').toggleClass('is-active');
  jQuery('.drawer-background').toggleClass('is-active');
  jQuery('.drawer__menu').toggleClass('is-displayNone');

  return false;
});

jQuery('.drawer-content__item a').on('click', function(e) {
  e.preventDefault();

  jQuery('.drawer-icon').removeClass('is-active');
  jQuery('.drawer-content').removeClass('is-active');
  jQuery('.drawer-background').removeClass('is-active');
  jQuery('.drawer__menu').removeClass('is-displayNone');

  return false;
});

'use strict';

$(document).ready(function () {
	let $form = $('#js-form')
  $form.submit(function(e) {
    $.ajax({
    url: $form.attr('action'),
    data: $form.serialize(),
    type: "POST",
    dataType: "xml",
    statusCode: {
        0: function() {
          //送信に成功したときの処理
          $form.slideUp()
          $( '#js-success' ).slideDown()
        },
        200: function() {
          //送信に失敗したときの処理
          $form.slideUp()
          $( '#js-error' ).slideDown()
        }
      }
    });
    return false;
  });
});

jQuery(function() {
  // アコーディオン
  jQuery('.accordion__head').click(function() {
    jQuery(this).next().slideToggle();
    jQuery(this).children('.accordion__icon').toggleClass('is-open');
  });
});

if (document.querySelector('.swiper')) {
  // Swiperの初期化
  const swiper = new Swiper('.swiper', {
    // オプション設定
    loop: true,
    autoplay: {
      delay: 0,
    },
    speed: 6000,
    centeredSlides: true,
    allowTouchMove: false, // スワイプ無効
    breakpoints: {
      768: {
        width: 323,
      }
    },
    width: 248,
    loopedSlides: 4, // 画像の表示枚数
    spaceBetween: 40, // 画像間の余白（px）
  });
}
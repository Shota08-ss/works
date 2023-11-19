const swiper = new Swiper('.swiper', {
  // オプション設定
  loop: true,
  autoplay: {
    delay: 3000,
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
  // navigation: {
  //   nextEl: '.swiper-button-next',
  //   prevEl: '.swiper-button-prev',
  // },
  scrollbar: {
    el: '.swiper-scrollbar',
  },

  speed: 1000,
  effect: 'slide',
  width: 400,
  loopedSlides: 6, // 画像の表示枚数
  spaceBetween: 40, // 画像間の余白（px）

  breakpoints: {
    768: {
      spaceBetween: 20,
      width: 274,
    }
  },

  slideToClickedSlide: true,
  onClick: function(swiper,event){
     swiper.slideNext();
  }
});

jQuery(function() {
  // アコーディオン
  jQuery('.accordion__head').on('click', function() {
    jQuery(this).next().slideToggle();
    jQuery(this).children('.accordion__icon').toggleClass('is-open');
  });
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
  600);
});

$(function() {
  $("#name, #subname, #checkbox").on("input change", function() {
    var name = $("#name").val();
    var subname = $("#subname").val();
    var checkboxChecked = $("#checkbox").prop("checked");
    
    // すべての入力フォームが記入されているかチェック
    if (name && subname && checkboxChecked) {
      $("#btn").prop("disabled", false); // ボタンを有効にする
      $("#btn").css("background-color", "#FFAA3B");
      $("#btn : hover").css("background-color", "#F18900");
    } else {
      $("#btn").prop("disabled", true); // ボタンを無効にする
      $("#btn").css("background-color", "#B2B2B2");
      $("#btn").css("color", "#fff");
    }
  });
});

//drawer-icon
jQuery('.drawer-icon').on('click', function(e) {
  e.preventDefault();

  jQuery('.drawer-icon').toggleClass('is-active');
  jQuery('.drawer-content').toggleClass('is-active');
  jQuery('.drawer-background').toggleClass('is-active');

  return false;
});
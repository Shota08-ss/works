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

// ローディング画面
function loadedPage() {
  const loadingID = document.getElementById("js_loading");
  loadingID.classList.add("loaded");
}

if (!sessionStorage.getItem('visited')) {
  sessionStorage.setItem('visited', 'first');
  window.addEventListener('load', function () {
    setTimeout(loadedPage, 2000);
  });
  setTimeout(loadedPage, 5000);
}else {
  loadedPage();
}

$(document).ready(function () {
	//formの必要事項に全て記述があるか判定して色をかえる
  $(function() {
    $("#name, #email, #phone, #address").on("input change", function() {
      var name = $("#name").val();
      var email = $("#email").val();
      var phone = $("#phone").val();
      var address = $("#address").val();
      // すべての入力フォームが記入されているかチェック
      if (name && email && phone && address) {
        $("#btn").prop("disabled", false); // ボタンを有効にする
        $("#btn").css("background-color", "#E8B374");
        $("#btn").css("color", "#4E4E4E");
      } else {
        $("#btn").prop("disabled", true); // ボタンを無効にする
        $("#btn").css("background-color", "#FFEEB2");
        $("#btn").css("color", "#4E4E4E");
      }
    });
  });
	
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
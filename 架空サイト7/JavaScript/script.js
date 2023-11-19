$(document).ready(function () {

  jQuery('.drawer-icon').on('click', function(e) {
    e.preventDefault();

    jQuery('.drawer-icon').toggleClass('is-active');
    jQuery('.drawer-content').toggleClass('is-active');
    jQuery('.drawer-background').toggleClass('is-active');

    return false;
  });

  //スムーススクロール
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
    600);
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

    //formの必要事項に全て記述があるか判定して色をかえる
  $(function() {
    $("#name, #email, #comment, #checkbox").on("input change", function() {
      var name = $("#name").val();
      var email = $("#email").val();
      var comment = $("#comment").val();
      var checkboxChecked = $("#checkbox").prop("checked");

      // すべての入力フォームが記入されているかチェック
      if (name && email && comment && checkboxChecked) {
        $("#btn").prop("disabled", false); // ボタンを有効にする
        $("#btn").css("background-color", "#3EA1D1");
        $("#btn").css("color", "#fff");
      } else {
        $("#btn").prop("disabled", true); // ボタンを無効にする
        $("#btn").css("background-color", "#fff");
        $("#btn").css("color", "#3EA1D1");
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
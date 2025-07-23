$(function () {
  // 헤더 고정 스크롤 처리
  function handleHeaderScroll() {
    const curr = $(window).scrollTop();
    if (curr > 50) {
      $('.header, #header').addClass('fixed scroll');
    } else {
      $('.header, #header').removeClass('fixed scroll');
    }
  }

  // 초기 스크롤 상태 체크
  handleHeaderScroll();

  // 스크롤 이벤트
  $(window).scroll(function () {
    handleHeaderScroll();
  });

  // gnb 호버 효과
  $('.gnb').mouseenter(function () {
    $('.menuHover').addClass('on');
    $('.header').addClass('on');
  });

  $('.menuHover').mouseleave(function () {
    $('.menuHover').removeClass('on');
    $('.header').removeClass('on');
  });

  // 메뉴 내부 hover 시 상위 dep1 강조
  $('.gnb .dep2 li').hover(
    function () {
      $(this).parent().prev('span').addClass('on');
    },
    function () {
      $(this).parent().prev('span').removeClass('on');
    }
  );

  $('.menuWrap .dep2 a').hover(
    function () {
      $(this).parent().prev('.dep1').addClass('on');
    },
    function () {
      $(this).parent().prev('.dep1').removeClass('on');
    }
  );

  // 전체메뉴 열기
  $('#allMenu, .btn_menu.open').on('click', function () {
    $('.allMenu_wrap, .menu_wrap').fadeIn(200).addClass('on');
    $('body').addClass('fixed'); // 스크롤 막기
    return false;
  });

  // 전체메뉴 닫기
  $('#allMenuClose, .btn_menu.close').on('click', function () {
    $('.allMenu_wrap, .menu_wrap').fadeOut(200).removeClass('on');
    $('#header #gnb > li > a').removeClass('on');
    $('#gnb .dep02').stop().hide();
    $('.menu li').removeClass('active');
    $('body').removeClass('fixed'); // 스크롤 해제
    return false;
  });

  // 서브메뉴 토글 (모바일 전용)
  $('.menu .dep1').click(function () {
    const $li = $(this).closest('li');
    const isOpen = $li.hasClass('active');

    $('.menu li').removeClass('active'); // 전체 닫고
    if (!isOpen) {
      $li.addClass('active'); // 클릭한 것만 열기
    }
  });

  // 푸터 폼 토글
  $('.formTit').click(function () {
    $('.footerForm').toggleClass('on');
  });

  // 데스크탑용 메뉴 열기 (gnb)
  $('#header #gnb > li > a').click(function () {
    if ($(this).next().is('.dep02')) {
      if ($(this).next().css('display') == 'block') {
        $('#header #gnb > li > a').removeClass('on');
        $('#gnb .dep02').hide();
      } else {
        $('#header #gnb > li > a').removeClass('on');
        $('#gnb .dep02').hide();
        $(this).addClass('on');
        $(this).next().show();
      }
    }
  });

  // magnificPop 초기화
  $(document).on('mouseover', function () {
    if (typeof magnificPop !== 'undefined' && magnificPop.init) {
      magnificPop.init();
    }
  });
});

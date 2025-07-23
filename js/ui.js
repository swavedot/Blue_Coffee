$(function () {
  // dep2 a 호버 시 dep1에 'on' 클래스 추가/제거
  // HTML 구조에 따라 dep1이 ul이 아닌 div이므로 prev() 대신 closest('.dep1')을 사용하는 것이 더 안전합니다.
  $('.menuWrap .dep2 a').hover(
      function () {
          // dep2 a의 부모 li -> dep2 (ul) -> dep1 (div)를 찾아 'on' 클래스 추가
          $(this).closest('.dep2').prev('.dep1').addClass('on');
      },
      function () {
          // dep2 a의 부모 li -> dep2 (ul) -> dep1 (div)를 찾아 'on' 클래스 제거
          $(this).closest('.dep2').prev('.dep1').removeClass('on');
      }
  );

  // gnb 진입 시 .menuHover와 .header에 'on' 클래스 추가
  $('.gnb').mouseenter(function () {
      $('.menuHover').addClass('on');
      $('.header').addClass('on');
  });

  // .menuHover 이탈 시 'on' 클래스 제거
  $('.menuHover').mouseleave(function () {
      $('.menuHover').removeClass('on');
      $('.header').removeClass('on');
  });

  // gnb dep2 li 호버 시 이전 span에 'on' 클래스 추가/제거
  // HTML 구조상 dep2 li의 부모 ul.dep2의 이전 요소가 span이 맞습니다.
  $('.gnb .dep2 li').hover(
      function () {
          $(this).closest('.dep2').prev('span').addClass('on');
      },
      function () {
          $(this).closest('.dep2').prev('span').removeClass('on');
      }
  );

  // --- 핵심 수정 부분 ---
  // ✅ 서브메뉴 열기/닫기 로직
  // HTML 구조: .gnb > .dep1 > span > a
  // 따라서, .gnb .dep1 내부의 span 안에 있는 a 태그에 클릭 이벤트를 걸어야 합니다.
  $('.gnb .dep1 span a').on('click', function (e) {
      e.preventDefault(); // a 태그의 기본 링크 이동 동작 방지

      // 클릭된 a 태그의 부모 span -> 부모 .dep1 요소를 찾습니다.
      const $clickedDep1 = $(this).closest('.dep1');
      // 해당 dep1 내부의 .dep2를 찾습니다.
      const $dep2 = $clickedDep1.find('.dep2');

      // 이미 열려있는지 확인
      const isOpen = $clickedDep1.hasClass('active');

      // 다른 모든 열린 서브메뉴 닫기
      // 클릭된 .dep1을 제외한 모든 .dep1에서 'active' 클래스를 제거하고 .dep2를 닫습니다.
      $('.gnb .dep1').not($clickedDep1).removeClass('active');
      $('.gnb .dep1').not($clickedDep1).find('.dep2').stop().slideUp();


      // 클릭한 .dep1의 'active' 클래스를 토글하고 .dep2를 열거나 닫습니다.
      $clickedDep1.toggleClass('active');
      $dep2.stop().slideToggle(); // .dep2를 슬라이드 애니메이션으로 열고 닫습니다.
  });

  $('.gnb .dep1').on('mouseenter', function() {
        // 이미 'active' 상태(클릭으로 열린 상태)가 아니라면 호버로 열기
        if (!$(this).hasClass('active')) {
            $(this).find('.dep2').stop().slideDown(); // 서브메뉴 열기
            $(this).addClass('hovered'); // 호버 상태를 나타내는 클래스 추가 (옵션)
        }
    }).on('mouseleave', function() {
        // 'active' 상태가 아니라면 호버로 열린 서브메뉴 닫기
        if (!$(this).hasClass('active')) {
            $(this).find('.dep2').stop().slideUp(); // 서브메뉴 닫기
            $(this).removeClass('hovered'); // 호버 상태 클래스 제거
        }
   });

   $(document).on('click', function(e) {
    // 클릭된 요소가 .gnb 메뉴 영역 내부(dep1, dep2 등)에 포함되지 않고
    // .header 영역 내부에도 포함되지 않는 경우 (전체 헤더에 영향을 주지 않기 위해)
    if (!$(e.target).closest('.gnb').length && !$(e.target).closest('.header').length) {
        // 모든 dep1에서 'active' 클래스 제거 및 dep2 닫기
        $('.gnb .dep1').removeClass('active');
        $('.gnb .dep1').find('.dep2').stop().slideUp();
    }
  });



  // footerForm 토글
  $('.formTit').click(function () {
      $('.footerForm').toggleClass('on');
  });

  // 스크롤 이벤트: main_logo 고정 및 숨기기
  $(window).on('scroll', function () {
      const curr = $(this).scrollTop();

      if (curr > 50) {
          $('.main_logo').addClass('fixed');
      } else {
          $('.main_logo').removeClass('fixed');
      }

      if (curr > 350) {
          $('.main_logo').addClass('hide');
      } else {
          $('.main_logo').removeClass('hide');
      }
  });

  // Magnific Popup 초기화 (이 부분이 어떤 라이브러리를 사용하는지 확인 필요)
  // $(document).on('mouseover', function () {
  //   magnificPop.init();
  // });

  // 스크롤 이벤트: header 고정
  $(window).scroll(function () {
      var curr = $(this).scrollTop();

      if (curr > 50) {
          $('.header').addClass('fixed');
      } else {
          $('.header').removeClass('fixed');
      }
  });
});
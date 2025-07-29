document.addEventListener('DOMContentLoaded', () => {
  const subMenu = document.querySelector('.sub_menu');

  if (subMenu) {
    // 전체 영역 중 첫 클릭이 드롭다운 타이틀(::before)일 때만 열고 닫기
    subMenu.addEventListener('click', (e) => {
      // 드롭다운 메뉴 항목(a 태그)을 누르면 닫히지 않게 함
      if (e.target.tagName !== 'A') {
        subMenu.classList.toggle('show');
      }
    });
  }
});

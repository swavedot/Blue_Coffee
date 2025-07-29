document.addEventListener('DOMContentLoaded', () => {
  // [1] 아코디언 동작
  const foldItems = document.querySelectorAll('.fold-item');
  foldItems.forEach(item => {
    const button = item.querySelector('.btn-fold.detail-info');
    if (button) {
      button.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        foldItems.forEach(i => i.classList.remove('active'));
        if (!isActive) item.classList.add('active');
      });
    }
  });

  // [2] 즐겨찾기 (이미지 토글)
  const bookmark = document.querySelector('.chk-bookmark');
  if (bookmark) {
    bookmark.addEventListener('click', () => {
      bookmark.classList.toggle('active');
      if (bookmark.classList.contains('active')) {
        console.log('⭐ 즐겨찾기 ON');
      } else {
        console.log('☆ 즐겨찾기 OFF');
      }
    });
  }

  // [3] 픽업/배달 버튼 토글 기능
  // const toggleButtons = document.querySelectorAll('.pickup-delivery-buttons .toggle-btn');
  // toggleButtons.forEach(button => {
  //   button.addEventListener('click', () => {
  //     if (button.classList.contains('active')) {
  //       button.classList.remove('active');
  //     } else {
  //       toggleButtons.forEach(btn => btn.classList.remove('active'));
  //       button.classList.add('active');
  //     }
  //     console.log('선택 모드:', button.dataset.mode);
  //   });
  });
// });

document.addEventListener('DOMContentLoaded', () => {
  const checkbox = document.querySelector('input.mem2[type=checkbox]');
  const label = checkbox.nextElementSibling;

  // 초기 상태에 따라 이미지 설정
  function updateLabelImage() {
    if (checkbox.checked) {
      label.style.backgroundImage = "url('./images/mem_check_on.svg')";
    } else {
      label.style.backgroundImage = "url('./images/mem_check_off.svg')";
    }
  }

  updateLabelImage(); // 페이지 로드 시 초기 세팅

  checkbox.addEventListener('change', () => {
    updateLabelImage();
  });
});

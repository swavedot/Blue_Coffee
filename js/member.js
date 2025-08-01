document.addEventListener('DOMContentLoaded', () => {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');

    question.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      // 모든 항목 닫기
      faqItems.forEach(i => {
        i.classList.remove('active');
      });

      // 클릭한 항목만 열기
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });
});

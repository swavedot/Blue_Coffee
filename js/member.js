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
        const a = i.querySelector('.faq-answer');
        a.style.maxHeight = '0';
        a.style.paddingTop = '0';
        a.style.paddingBottom = '0';
        a.style.paddingLeft = '20px';
      });

      // 클릭한 항목만 열기
      if (!isActive) {
        item.classList.add('active');
        answer.style.maxHeight = '300px';
        answer.style.paddingTop = '20px';
        answer.style.paddingBottom = '20px';
        answer.style.paddingLeft = '20px';
      }
    });
  });
});
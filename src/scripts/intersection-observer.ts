const setupIntersectionObserver = () => {
  document.querySelectorAll('[data-intersection-observer]').forEach((el) => {
    const threshold = (el as HTMLElement).dataset.threshold;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { 
      threshold: threshold ? parseFloat(threshold) : 0.1
    });
    
    observer.observe(el);
  });
};

export default setupIntersectionObserver; 
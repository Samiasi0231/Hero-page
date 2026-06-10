document.addEventListener('DOMContentLoaded', () => {
  const nav = document.querySelector('.nav');

  const handleNavScroll = () => {
    if (window.scrollY > 20) {
      nav.style.background      = 'rgba(10, 9, 8, 0.88)';
      nav.style.backdropFilter  = 'blur(12px)';
      nav.style.WebkitBackdropFilter = 'blur(12px)';
      nav.style.borderBottomColor = 'rgba(242, 237, 228, 0.1)';
    } else {
      nav.style.background      = '';
      nav.style.backdropFilter  = '';
      nav.style.WebkitBackdropFilter = '';
      nav.style.borderBottomColor = '';
    }
  };

  window.addEventListener('scroll', handleNavScroll, { passive: true });


  
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const target = document.querySelector(link.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });


  
  const reelBtn = document.querySelector('.btn-ghost');

  if (reelBtn) {
    reelBtn.addEventListener('click', () => {
      
      console.log('Open showreel video');
    });
  }

});

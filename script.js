// Counting Up animacio
document.addEventListener('DOMContentLoaded', () => {
  const counters = document.querySelectorAll('.social-count');
  function animate(el, target, duration) {
    const startIdo = performance.now();

    function step(now) {
      const eltelt = now - startIdo;
      let haladas = Math.min(eltelt / duration, 1);
      const ease = 1 - Math.pow(1 - haladas, 3); 
      const jelenlegi = Math.floor(ease * target);
      if (jelenlegi < 1000) {
        el.textContent = jelenlegi; 
      }
      else {
        const tizedes = (jelenlegi / 1000).toFixed(1);
        el.textContent = tizedes + 'k+';
      }
      if (haladas < 1) {
        window.requestAnimationFrame(step);
      }
      else {
        if (target < 1000) {
            el.textContent = target;
        }
        else {
             el.textContent = (target / 1000).toFixed(1) + 'k+';
        }
      }
    }
    window.requestAnimationFrame(step);
  }
  counters.forEach((counterEl) => {
    const target = parseInt(counterEl.getAttribute('data-target')) || 0;
    animate(counterEl, target, 2500); 
  });
});
    
// DarkMode On/Off
    const switchInput = document.getElementById('darkModeSwitch');
    const htmlElement = document.documentElement;
    const temaMost = localStorage.getItem('theme');
    
    if (temaMost === 'light') {
        htmlElement.setAttribute('data-bs-theme', 'light');
        if(switchInput) switchInput.checked = true;
    } else {
        htmlElement.setAttribute('data-bs-theme', 'dark');
    }

    if (switchInput) {
        switchInput.addEventListener('change', function() {
            if (this.checked) {
                htmlElement.setAttribute('data-bs-theme', 'light');
                localStorage.setItem('theme', 'light');
            } else {
                htmlElement.setAttribute('data-bs-theme', 'dark');
                localStorage.setItem('theme', 'dark');
            }
        });
    };

// Loading screen
window.addEventListener('load', () => {
    const loadingScreen = document.getElementById('loader-wrapper');
    setTimeout(() => {
        if (loadingScreen) {
            loadingScreen.classList.add('loaded');            
            setTimeout(() => {
                loadingScreen.style.display = 'none';
            }, 500);
        }
    }, 500); 
});
// Counting Up animacio
document.addEventListener('DOMContentLoaded', () => {
  const szamlalo = document.querySelectorAll('.social-item .count');
  function ezerK(szam) {
    if (szam >= 1000) {
      const ezres = szam / 1000;
      return Math.round(ezres) + 'k+';
    }
    return szam + '+';
  }
  function animate(el, target, duration) {
    let start = 0;
    const startIdo = performance.now();
    function step(now) {
      const eltelt = now - startIdo;
      const haladas = Math.min(eltelt / duration, 1);
      const jelenlegi = Math.floor(haladas * target);
      el.textContent = jelenlegi.toLocaleString('hu-HU');
      if (haladas < 1) {
        window.requestAnimationFrame(step);
      } else {
        el.textContent = ezerK(target);
      }
    }
    requestAnimationFrame(step);
  }
  szamlalo.forEach((countEl) => {
    const parent = countEl.closest('.social-item');
    const target = parseInt(parent.getAttribute('data-target')) || 0;
    animate(countEl, target, 3000);
  });
});
document.addEventListener('DOMContentLoaded', () => {
    
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
    }
});

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
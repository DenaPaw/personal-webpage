const toggle = document.getElementById('dark-toggle');
const root = document.documentElement;

if (localStorage.getItem('theme') === 'dark') {
    root.classList.add('dark');
    toggle.checked = true;
  }
  
  toggle.addEventListener('change', () => {
    if (toggle.checked) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  });
  

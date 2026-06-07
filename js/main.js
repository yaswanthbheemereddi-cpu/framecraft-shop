// Nav scroll
window.addEventListener('scroll',()=>{
  const nav = document.getElementById('nav');
  if (nav) nav.classList.toggle('scrolled',scrollY>50);
  const bt = document.getElementById('bt');
  if (bt) bt.classList.toggle('show',scrollY>400);
});
// Hamburger
const hbg = document.getElementById('hbg');
if (hbg) hbg.onclick=()=>document.getElementById('navlinks').classList.toggle('open');
// Back to top
const bt = document.getElementById('bt');
if (bt) bt.onclick=()=>window.scrollTo({top:0,behavior:'smooth'});

// Reveal on scroll
const io=new IntersectionObserver(e=>e.forEach(x=>{if(x.isIntersecting)x.target.classList.add('active')}),{threshold:.12});
window.observeReveal = (el) => io.observe(el);
document.querySelectorAll('.reveal').forEach(r=>io.observe(r));

// Theme Toggle (Day Mood / Night Mood)
const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'light') {
  document.body.classList.add('light-mode');
}

document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById('themeToggle');
  if (toggleBtn) {
    if (document.body.classList.contains('light-mode')) {
      toggleBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
    } else {
      toggleBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';
    }
    toggleBtn.onclick = () => {
      document.body.classList.toggle('light-mode');
      const isLight = document.body.classList.contains('light-mode');
      localStorage.setItem('theme', isLight ? 'light' : 'dark');
      toggleBtn.innerHTML = isLight ? '<i class="fa-solid fa-sun"></i>' : '<i class="fa-solid fa-moon"></i>';
      toggleBtn.style.transform = 'rotate(360deg)';
      setTimeout(() => { toggleBtn.style.transform = 'none'; }, 400);
    };
  }
});

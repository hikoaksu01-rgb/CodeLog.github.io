
// script.js - lightweight interactivity
document.addEventListener('DOMContentLoaded', ()=> {
  // simple mobile nav toggle
  const btn = document.querySelector('#menuBtn');
  const links = document.querySelector('#navLinks');
  if(btn){
    btn.addEventListener('click', ()=> {
      links.classList.toggle('open');
    });
  }

  // simple form handling (no server): validate and show message
  const form = document.querySelector('#contactForm');
  if(form){
    form.addEventListener('submit', (e)=>{
      e.preventDefault();
      const name = form.querySelector('[name=name]').value.trim();
      const email = form.querySelector('[name=email]').value.trim();
      if(!name || !email.includes('@')) {
        alert('Lütfen isim ve geçerli bir e-posta girin.');
        return;
      }
      // mock "send"
      const msg = document.querySelector('#formMsg');
      msg.textContent = 'Mesajınız alındı — teşekkürler ' + name + '!';
      msg.style.opacity = 1;
      form.reset();
      setTimeout(()=> msg.style.opacity = 0, 4000);
    });
  }

  // small scroll reveal
  const obs = new IntersectionObserver((entries)=> {
    entries.forEach(ent=>{
      if(ent.isIntersecting) ent.target.classList.add('reveal');
    });
  }, {threshold:0.15});
  document.querySelectorAll('.feature, .hero-card, .gallery img').forEach(el=>obs.observe(el));
});

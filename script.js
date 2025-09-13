// Scroll animations
const sections = document.querySelectorAll('section.hidden');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

sections.forEach(section => observer.observe(section));

// Vinyle et souvenirs
const vinyle = document.getElementById('vinyle');
const container = document.getElementById('souvenirs-container');

// URLs images souvenirs
const images = [
  'souvenir1.png',
  'souvenir2.png',
  'souvenir3.png'
];

vinyle.addEventListener('click', () => {
  images.forEach((src,index) => {
    const img = document.createElement('img');
    img.src = src;
    img.className = 'souvenir';
    img.style.top = '50%';
    img.style.left = '50%';
    container.appendChild(img);

    // Force rendu pour animation
    img.getBoundingClientRect();

    const angle = Math.random()*2*Math.PI;
    const distance = 150 + Math.random()*50;
    const x = Math.cos(angle)*distance;
    const y = Math.sin(angle)*distance;

    img.style.transform = `translate(${x}px,${y}px) rotate(${Math.random()*360}deg)`;
    img.style.opacity = 1;

    // Supprime après animation
    setTimeout(()=>{
      img.style.opacity = 0;
      setTimeout(()=>img.remove(),500);
    },2000+index*100);
  });
});

// Bouton envoyer
document.getElementById('sendBtn').addEventListener('click', () => {
  alert('Merci !');
});

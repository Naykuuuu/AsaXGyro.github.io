const vinyle = document.getElementById('vinyle');
const container = document.getElementById('souvenirs-container');

// Liste d'images de souvenirs (mettez vos URLs)
const images = [
  'souvenir1.png',
  'souvenir2.png',
  'souvenir3.png',
  'souvenir4.png'
];

vinyle.addEventListener('click', () => {
  images.forEach((src, index) => {
    const img = document.createElement('img');
    img.src = src;
    img.className = 'souvenir';
    img.style.top = '50%';
    img.style.left = '50%';
    container.appendChild(img);

    // Force le rendu pour lancer l'animation
    img.getBoundingClientRect();

    // Translation aléatoire
    const angle = Math.random() * 2 * Math.PI;
    const distance = 150 + Math.random() * 50; // distance du centre
    const x = Math.cos(angle) * distance;
    const y = Math.sin(angle) * distance;

    img.style.transform = `translate(${x}px, ${y}px) rotate(${Math.random()*360}deg)`;
    img.style.opacity = 1;

    // Supprime l'image après 2s
    setTimeout(() => {
      img.style.opacity = 0;
      setTimeout(() => img.remove(), 500);
    }, 2000 + index*100); // léger décalage
  });
});


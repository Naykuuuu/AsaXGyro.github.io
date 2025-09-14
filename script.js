// Scroll animations
const sections = document.querySelectorAll('section.hidden');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
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
  "souvenir4.png",
  "souvenir5.png",
  "souvenir6.png"
];

// Fonction pour vérifier si l'image existe
function imageExists(url, callback) {
  const img = new Image();
  img.onload = () => callback(true);
  img.onerror = () => callback(false);
  img.src = url;
}

vinyle.addEventListener('click', () => {
  container.innerHTML = ''; // vide le container à chaque clic

  images.forEach((src, index) => {
    imageExists(src, exists => {
      if (!exists) return; // ignore si le fichier est manquant

      const img = document.createElement('img');
      img.src = src;
      img.className = 'souvenir';
      img.style.top = '50%';
      img.style.left = '50%';
      container.appendChild(img);

      // Force rendu pour animation
      img.getBoundingClientRect();

      const angle = Math.random() * 2 * Math.PI;
      const distance = 150 + Math.random() * 50;
      const x = Math.cos(angle) * distance;
      const y = Math.sin(angle


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

// Vinyles et souvenirs
const vinyles = [
  { vinyleId:'vinyle', containerId:'souvenirs-container1', images:['souvenir1.png','souvenir2.png','souvenir3.png'], audioId:'audio' },
  { vinyleId:'vinyle1', containerId:'souvenirs-container2', images:['souvenir4.png','souvenir5.png','souvenir6.png'], audioId:'audio1' }
];

function imageExists(url, callback){
  const img = new Image();
  img.onload = () => callback(true);
  img.onerror = () => callback(false);
  img.src = url;
}

function setupVinyle(v){
  const vinyle = document.getElementById(v.vinyleId);
  const container = document.getElementById(v.containerId);

  vinyle.addEventListener('click',()=>{
    v.images.forEach((src,index)=>{
      imageExists(src,exists=>{
        if(!exists) return;

        const img = document.createElement('img');
        img.src = src;
        img.className = 'souvenir';
        img.style.top = '50%';
        img.style.left = '50%';
        container.appendChild(img);

        img.getBoundingClientRect(); // force rendu

        const angle = Math.random()*2*Math.PI;
        const distance = 150 + Math.random()*50;
        const x = Math.cos(angle)*distance;
        const y = Math.sin(angle)*distance;

        img.style.transform = `translate(${x}px,${y}px) rotate(${Math.random()*360}deg)`;
        img.style.opacity = 1;

        setTimeout(()=>{
          img.style.opacity = 0;
          setTimeout(()=>img.remove(),500);
        }, 2000 + index*100);
      });
    });
  });
}

// Initialise tous les vinyles
vinyles.forEach(v=>setupVinyle(v));

// Bouton envoyer
const sendBtn = document.getElementById('sendBtn');
if (sendBtn) {
  sendBtn.addEventListener('click', () => {
    alert('Hit the face of Asa and Gyro !');
  });
}

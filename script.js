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
  { vinyleId:'vinyle1', containerId:'souvenirs-container1', images:['souvenir1.png','souvenir2.png','souvenir3.png'], audioId:'audio1' },
  { vinyleId:'vinyle2', containerId:'souvenirs-container2', images:['souvenir4.png','souvenir5.png','souvenir6.png'], audioId:'audio2' }
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
        if(!exists) return

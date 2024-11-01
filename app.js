const TituloProyect = document.getElementsByClassName('text-proyect')[0];
const h1Titulo = document.createElement('h1');

h1Titulo.textContent = "<Proyectos />";
TituloProyect.appendChild(h1Titulo);
// ----------------------- SCROLL -------------------------------------------------
window.addEventListener('scroll', function(){
  let navbar = document.querySelector('header')
  navbar.classList.toggle('sticky', window.scrollY > 0);
})

var languaje = {};
async function cargarJSON() {
  const resp = await fetch('languaje.json');
  const data = await resp.json();
  languaje = data;
};

const btnSwitch = document.querySelector('#switch');
const aboutMe = document.getElementById('about-me-text');
const linkHome = document.getElementById('home-link');
const linkProjects = document.getElementById('projects-link');
const linkAbout = document.getElementById('about-link');
const linkCertifications = document.getElementById('certifications-link');
const nameB = document.getElementById('name');
const dev = document.getElementById('dev');
const linksPage = document.querySelectorAll('.overlay-button .page');
const linksCode = document.querySelectorAll('.overlay-button .code');
const viewMore = document.getElementById('view-more');
const textAbout = document.getElementById('text-about');
const textCertifications = document.getElementById('certifications-text');
btnLang = ["Ver más", "menos"];

btnSwitch.addEventListener('click', async () => {
  btnSwitch.classList.toggle('active');
  await cargarJSON();

  if (btnSwitch.classList.contains('active')) {
    aboutMe.textContent = languaje.AboutMe.english;
    linkHome.textContent = languaje.Links.english.home;
    linkProjects.textContent = languaje.Links.english.projects;
    linkAbout.textContent = languaje.Links.english.about;
    linkCertifications.textContent = languaje.Links.english.certifications;
    nameB.textContent = languaje.home.english.hello;
    dev.textContent = languaje.home.english.dev;
    h1Titulo.textContent = "<Projects />";
    linksPage.forEach(link => {
      link.textContent = languaje.Projects.english.text;  
    });
    linksCode.forEach(link => {
      link.textContent = languaje.Projects.english.code;  
    });
    btnLang = [
      viewMore.textContent = languaje.Projects.english.view,
      viewMore.textContent = languaje.Projects.english.less,
    ];
    textAbout.textContent = languaje.Links.english.about;
    textCertifications.textContent = languaje.Links.english.certifications;
    
  } else {
    aboutMe.textContent = languaje.AboutMe.spanish;
    linkHome.textContent = languaje.Links.spanish.home;
    linkProjects.textContent = languaje.Links.spanish.projects;
    linkAbout.textContent = languaje.Links.spanish.about;
    linkCertifications.textContent = languaje.Links.spanish.certifications;
    nameB.textContent = languaje.home.spanish.hello;
    dev.textContent = languaje.home.spanish.dev;
    h1Titulo.textContent = "<Proyectos />";
    linksPage.forEach(link => {
      link.textContent = languaje.Projects.spanish.text;  
    });
    linksCode.forEach(link => {
      link.textContent = languaje.Projects.spanish.code;  
    });
    btnLang = [
      viewMore.textContent = languaje.Projects.spanish.view,
      viewMore.textContent = languaje.Projects.spanish.less,
    ];
    textAbout.textContent = languaje.Links.spanish.about;
    textCertifications.textContent = languaje.Links.spanish.certifications;
  };
});

// ------------------------ MOSTRAR MÁS -------------------------------------
const hidden = document.getElementsByClassName('proyects-container');
const btnMostrarImg = document.getElementById('mostrar-img');

btnMostrarImg.addEventListener('click', async () => {
  await cargarJSON();
  btnMostrarImgs(btnLang);
  
  function btnMostrarImgs(btnLang){
    for (let i = 0; i < hidden.length; i++) {
      const elementoPadre = hidden[i];
      const childrenList = elementoPadre.children;
    
      for (let j = 2; j < childrenList.length; j++) {
        const nodo = childrenList[j];
        nodo.classList.toggle('hidden');
      }
    }
    const i = document.getElementById('mostrar-i')
    if (viewMore.textContent === btnLang[1]) {
      viewMore.textContent = btnLang[0]
      i.classList.add('fa-solid', 'fa-caret-down')
      btnMostrarImg.append(i)
      
    } else {
      viewMore.textContent = btnLang[1];
      i.classList.remove('fa-caret-down')
      i.classList.add('fa-caret-up')
      btnMostrarImg.append(i)
    }
  // console.log(btnLang);
  }
})

//-------------------------- FIN MOSTRAR MÁS -----------------------------------------

// ------------------------------ Carrousel -------------------------------------------------

let imgCarrousel = [
  "imagen/js.webp",
  "imagen/css1.webp",
  "imagen/css2.webp",
  "imagen/a1.webp",
  "imagen/cyber.webp",
  "imagen/cisco.webp"
]

document.imagen.src = imgCarrousel[0]

let sliderDer = document.querySelector('.slider-der');
let sliderIzq = document.querySelector('.slider-izq');

var contadorSlide = 0;

function derecha () {
  contadorSlide++;
  contadorSlide === imgCarrousel.length ? contadorSlide = 0 : contadorSlide;
  document.imagen.src = imgCarrousel[contadorSlide] 
}
let interval = setInterval(derecha, 5000);
sliderDer.addEventListener('click', function(){
  clearInterval(interval);
  derecha()
  interval = setInterval(derecha, 5000);
})

function izquierda () {
  contadorSlide--;
  contadorSlide < 0 ? contadorSlide = imgCarrousel.length -1 : contadorSlide;
  document.imagen.src = imgCarrousel[contadorSlide]
}

sliderIzq.addEventListener('click', function(){
  clearInterval(interval);
  derecha()
  interval = setInterval(derecha, 5000);
})



















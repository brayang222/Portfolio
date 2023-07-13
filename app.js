const TituloProyect = document.getElementsByClassName('text-proyect')[0];
const h1Titulo = document.createElement('h1');

h1Titulo.textContent = "<Projects />";
TituloProyect.appendChild(h1Titulo);

// ----------------------- SCROLL -------------------------------------------------
window.addEventListener('scroll', function(){
  let navbar = document.querySelector('header')
  navbar.classList.toggle('sticky', window.scrollY > 0);
})

// ------------------------ MOSTRAR MÁS -------------------------------------
const hidden = document.getElementsByClassName('proyects-container');
const btnMostrarImg = document.getElementById('mostrar-img');

btnMostrarImg.addEventListener('click', () => {
  
  for (let i = 0; i < hidden.length; i++) {
    const elementoPadre = hidden[i];
    const childrenList = elementoPadre.children;
  
    for (let j = 2; j < childrenList.length; j++) {
      const nodo = childrenList[j];
      nodo.classList.toggle('hidden');
    }
  }
  const i = document.getElementById('mostrar-i')
  if (btnMostrarImg.textContent === 'Menos') {
    btnMostrarImg.textContent = 'Ver más'
    i.classList.add('fa-solid', 'fa-caret-down')
    btnMostrarImg.append(i)
    
  } else {
    btnMostrarImg.textContent = 'Menos';
    i.classList.remove('fa-caret-down')
    i.classList.add('fa-caret-up')
    btnMostrarImg.append(i)
  }

})

//-------------------------- FIN MOSTRAR MÁS -----------------------------------------

const btnSwitch = document.querySelector('#switch');
const languaje = document.getElementById('languaje');

btnSwitch.addEventListener('click', () => {
  
  btnSwitch.classList.toggle('active');

  if (btnSwitch.classList.contains('active')) {
    languaje.textContent = `Quick learner, learning with the latest technologies and
    programming practices, with a solid
    web programming training
    basic knowledge of php, c#, javascript
    and visual basic of excel (creating macros),
    also data management with MySQL. My
    ability to analyze, design and
    Developing efficiently allows me to deliver exceptional results.`
  } else {
    languaje.textContent = `Aprendiz rápido, aprendiendo con las últimas tecnologías y
    prácticas de programación, con una sólida
    formación en programación web, con
    conocimientos básicos de php, c#, JavaScript
    y visual basic de excel (creando macros),
    también manejo de datos con MySQL. Mi
    capacidad para analizar, diseñar y
    desarrollar eficientemente me permite entregar resultados excepcionales.`
  };

});

// ------------------------------ Carrousel -------------------------------------------------

let imgCarrousel = [
  "imagen/js.webp",
  "imagen/css1.webp",
  "imagen/css2.webp",
  "imagen/a1.webp"
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



















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
    languaje.textContent = `programmer with a strong background in web development and outstanding skills in
      efficient design and the development of exceptional solutions. My ability to analyze and create,
      coupled with my focus on the latest technologies, ensures the delivery of outstanding results. 
      Nice to meet you!
    `
  } else {
    languaje.textContent = `Programador con una sólida formación en desarrollo web y habilidades
     destacadas en el diseño eficiente y desarrollo de soluciones excepcionales. Mi capacidad para 
     analizar y crear, junto con mi enfoque en las últimas tecnologías, garantiza la entrega de resultados
      sobresalientes. ¡Encantado en conocerte!`
  };
});

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



















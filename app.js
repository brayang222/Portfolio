const TituloProyect = document.getElementsByClassName('text-proyect')[0];
const h1Titulo = document.createElement('h1');

h1Titulo.textContent = "<Proyects />";


TituloProyect.appendChild(h1Titulo);
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
    languaje.textContent = `I am a fast learner, always willing to learn new skills, 
  keep up to date with the latest technologies and programming practices, with a
   strong background in web programming, with basic knowledge of php, c#, 
   javascript and excel visual basic (creating macros), Data management with MySQL
    and a passion for solving complex problems as well. My ability to analyze,
     design and develop efficiently allows me to deliver exceptional results.`
  } else {
    languaje.textContent = `Soy un aprendiz rápido, siempre dispuesto a
    adquirir nuevas habilidades, mantenerme
    actualizado con las últimas tecnologías y
    prácticas de programación, con una sólida
    formación en programación web, con
    conocimientos básicos de php, c#, JavaScript
    y visual basic de excel (creando macros),
    también manejo de datos con MySQL y una
    pasión por resolver problemas complejos. Mi
    capacidad para analizar, diseñar y
    desarrollar eficientemente me permite entregar resultados excepcionales.`
  };

});





















const btn = document.querySelector('.icon');
const icon = btn.querySelector('.fa-bars');
const x = document.getElementById('myLinks');
let menu = false;
btn.onclick = function () {
  if (x.style.display === 'block') {
    x.style.display = 'none';
    icon.classList.replace('fa-times', 'fa-bars');
  } else {
    x.style.display = 'block';
    icon.classList.replace('fa-bars', 'fa-times');
  }
};
btn.addEventListener('click', () => {
  if (!menu) {
    icon.classList.replace('fa-bars', 'fa-times');
    menu = true;
  } else {
    icon.classList.replace('fa-times', 'fa-bars');
    menu = false;
  }
});
x.addEventListener('click', () => {
  if (x.style.display === 'block') {
    x.style.display = 'none';
    icon.classList.replace('fa-times', 'fa-bars');
    menu = false;
  } else {
    x.style.display = 'flow';
    menu = true;
  }
});

const box1 = document.querySelector('.contenido');
box1.innerHTML = `   
<div class="box2 click-card" tabindex="0">
<h3 class="dashbord1">Profesional Art Printing Data</h3>
<p class="texto1"> A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard</p>

<div class="botones8">
    <ul>
        <li>
            <bUtton type="button">HTML</bUtton>
        </li>
        <li> <button type="button">BootStrap</button></li>
        <li> <button type="button">Ruby</button></li>
    </ul>
</div>
<div class="brian1">

    <button type="button" class="see">See Proyect</button>
</div>
</div>

<div class="box3 click-card" tabindex="0">
<h3 class="dashbord">Data Dashboard Healthcare</h3>
<p class="texto3">A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard</p>

<div class="botones3">
    <ul>
        <li>
            <button type="button">HTML</bUtton>
        </li>
        <li> <button type="button">BootStrap</button></li>
        <li> <button type="button">Ruby</button></li>
    </ul>
</div>
<div class="brian">
    <button type="button" class="see">See Proyect</button>
</div>
</div>
<div class="box4 click-card" tabindex="0">
<h3 class="dashbord2">Website Protfolio</h3>
<p class="texto3">A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard</p>

<div class="botones3">
    <ul>
           <li>
            <button type="button">HTML</bUtton>
        </li>
        <li> <button type="button">BootStrap</button></li>
        <li> <button type="button">Ruby</button></li>
    </ul>
</div>
<div class="brian">
    <button type="button" class="see">See Proyect</button>
</div>
</div>
<div class="box click-card" tabindex="0">
<h3 class="dashbord">Profesional Art Printing Data more</h3>
<p class="texto3">A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard</p>

<div class="botones3">
    <ul>
           <li>
            <button type="button">HTML</bUtton>
        </li>
        <li> <button type="button">BootStrap</button></li>
        <li> <button type="button">Ruby</button></li>
    </ul>
</div>
<div class="brian">
    <button type="button" class="see">See Proyect</button>
</div>
</div>
<div class="box3 click-card" tabindex="0">
<h3 class="dashbord">Data Dashboard Healthcare</h3>
<p class="texto3">A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard</p>

<div class="botones3">
    <ul>
           <li>
            <bUtton type="button">HTML</bUtton>
        </li>
        <li> <button type="button">BootStrap</button></li>
        <li> <button type="button">Ruby</button></li>
    </ul>
</div>
<div class="brian">
    <button type="button" class="see">See Proyect</button>
</div>
</div>
<div class="box4 click-card" tabindex="0">
<h3 class="dashbord">Website Protfolio</h3>
<p class="texto3">A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard</p>

<div class="botones3">
    <ul>
           <li>
            <bUtton type="button">HTML</bUtton>
        </li>
        <li> <button type="button">BootStrap</button></li>
        <li> <button type="button">Ruby</button></li>
    </ul>
</div>
<div class="brian">
    <button type="button" class="see">See Proyect</button>
</div>
</div>  `;

const details = [
  {
    name: 'Fit Academy School',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
    image: './Desktop/pop.png',
    technologies: ['ruby', 'css', 'javascript', 'bootsrap'],
    source: 'https://github.com/latinogan/mobile4',
    live: 'https://latinogan.github.io/mobile4/',
  },
  {
    name: 'Data Dasboard Healty Care',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
    image: './Desktop/pop.png',
    technologies: ['ruby', 'css', 'javascript', 'bootsrap'],
    source: 'https://github.com/latinogan/mobile4',
    live: 'https://latinogan.github.io/mobile4/',
  },
  {
    name: 'Website Portafolio',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
    image: './Desktop/pop.png',
    technologies: ['ruby', 'css', 'javascript', 'bootsrap'],
    source: 'https://github.com/latinogan/mobile4',
    live: 'https://latinogan.github.io/mobile4/',
  },
  {
    name: 'Profesional Art Printing ',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
    image: './Desktop/pop.png',
    technologies: ['ruby', 'css', 'javascript', 'bootsrap'],
    source: 'https://github.com/latinogan/mobile4',
    live: 'https://latinogan.github.io/mobile4/',
  },
  {
    name: 'Data Dash Bord',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
    image: './Desktop/pop.png',
    technologies: ['ruby', 'css', 'javascript', 'bootsrap'],
    source: 'https://github.com/latinogan/mobile4',
    live: 'https://latinogan.github.io/mobile4/',
  },
  {
    name: 'Web side Portafolio',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
    image: './Desktop/pop.png',
    technologies: ['ruby', 'css', 'javascript', 'bootsrap'],
    source: 'https://github.com/latinogan/mobile4',
    live: 'https://latinogan.github.io/mobile4/',
  },
];
const box2 = document.getElementById('box1');
box2.insertAdjacentHTML('afterend', `   
    <div id="modulo">
    <div class="content">
        <div class="heading">
            <h2></h2>
            <div class="close">
                <i class="fa fa-times" aria-hidden="true"></i>
            </div>
        </div>
        <div class="pop">
            <ul class="pop1">
                <li  class="pop2">
                    <button type="button"  disabled="disabled">HTML</button>
                </li>
                <li  class="pop2"> <button type="button" disabled="disabled">BootStrap</button></li>
                <li  class="pop2"> <button type="button"  disabled="disabled">Ruby on rails</button></li>
            </ul>
        </div>
        
        <div class="img-p-button">
            <img class="image" src="./Desktop/pop.png" alt="live pop">
            <div class="p-button">
                <p class="description"></p>
                <div class="double-button">
                    <a class="first-button" href="/">See Live <img src="./Desktop/rondom.png" alt="github source">
                    </a>
                    <a class="first-button" href="/">See Source <img class="popimg" src="./Desktop/popbtn.png" alt="github web"> </a>
                </div>
            </div>
        </div>
    </div>
    
    </div>  `);

const SeeProjectButton = document.querySelectorAll('.see');
SeeProjectButton.forEach((item, i) => {
  item.addEventListener('click', () => {
    const windowPop = document.querySelector('#modulo');
    windowPop.style.display = 'block';
    const projectDetail = details[i];
    const heading = document.querySelector('.heading h2');
    heading.textContent = projectDetail.name;
    const paragraph = document.querySelector('.img-p-button .description');
    paragraph.textContent = projectDetail.description;
    const picture = document.querySelector('.img-p-button .image');
    picture.src = projectDetail.image;
    const languages = document.querySelectorAll('.pop1.pop2');
    languages.forEach((li, s) => {
      li.textContent = projectDetail.technologies[s];
    });
    const live = windowPop.querySelectorAll('.first-button')[0];
    live.href = projectDetail.live;
    const source = windowPop.querySelectorAll('.first-button')[1];
    source.href = projectDetail.source;
  });
});

const SeeCardButton = document.querySelectorAll('.click-card');
SeeCardButton.forEach((item, i) => {
  item.addEventListener('click', () => {
    const windowPop = document.querySelector('#modulo');
    windowPop.style.display = 'block';
    const projectDetail = details[i];
    const heading = document.querySelector('.heading h2');
    heading.textContent = projectDetail.name;
    const paragraph = document.querySelector('.img-p-button .description');
    paragraph.textContent = projectDetail.description;
    const picture = document.querySelector('.img-p-button .image');
    picture.src = projectDetail.image;
    const languages = document.querySelectorAll('.pop1.pop2');
    languages.forEach((li, s) => {
      li.textContent = projectDetail.technologies[s];
    });
    const live = windowPop.querySelectorAll('.first-button')[0];
    live.href = projectDetail.live;
    const source = windowPop.querySelectorAll('.first-button')[1];
    source.href = projectDetail.source;
  });
});
const closeProjectButton = document.querySelector('.close');
closeProjectButton.addEventListener('click', () => {
  const windowPop = document.querySelector('#modulo');
  windowPop.style.display = 'none';
});

//storage data

const formName = document.querySelector('#name');
const formEmail = document.querySelector('#mail');
const formText = document.querySelector('#msg');

function storeData() {
  const formData = {
    name: formName.value,
    email: formEmail.value,
    msg: formText.value,
  };
  localStorage.setItem('formData', JSON.stringify(formData));
}

function loadData() {
  if (!localStorage.getItem('formData')) {
    storeData();
  }

const localData = JSON.parse(localStorage.getItem('formData'));
formName.setAttribute('value', localData.name);
formEmail.setAttribute('value', localData.email);
formText.innerText = localData.msg;
}
loadData();
formName.addEventListener('change', storeData);
formEmail.addEventListener('change', storeData);
formText.addEventListener('change', storeData);

Array.from(form.elements).forEach((formElement) => formElement.addEventListener('input', loadData));
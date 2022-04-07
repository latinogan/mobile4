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
    name: 'Profesional Art Printing',
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
    name: 'Website Portafolio',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
    image: './Desktop/pop.png',
    technologies: ['ruby', 'css', 'javascript', 'bootsrap'],
    source: 'https://github.com/latinogan/mobile4',
    live: 'https://latinogan.github.io/mobile4/',
  },
  {
    name: 'Fit Academy School',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
    image: './Desktop/pop.png',
    technologies: ['ruby', 'css', 'javascript', 'bootsrap'],
    source: 'https://github.com/latinogan/mobile4',
    live: 'https://latinogan.github.io/mobile4/',
  },
  {
    name: 'HealtyCare',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
    image: './Desktop/pop.png',
    technologies: ['ruby', 'css', 'javascript', 'bootsrap'],
    source: 'https://github.com/latinogan/mobile4',
    live: 'https://latinogan.github.io/mobile4/',
  },
];

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
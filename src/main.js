import './main.css';

const element = document.createElement('div');
element.classList.add('test');

const span = document.createElement('span');
span.innerHTML = 'Lil testin\' 🥸';
element.appendChild(span);

document.body.appendChild(element);
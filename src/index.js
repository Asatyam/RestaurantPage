import home from './home';
import menu from './menu';
import contact from './contact';

const content = document.getElementById('content');


const heading = document.createElement('div');
heading.setAttribute('id', 'heading');
const headingText = document.createElement('h1');
headingText.textContent = 'Keep Eating';
headingText.style.cssText =
  'font-family:helvetica;text-align:center;padding:40px;';
heading.appendChild(headingText);
content.appendChild(heading);

const buttons = document.createElement('div');
buttons.setAttribute('id', 'tabs');
const arr = ['Home', 'Menu', 'Contact'];

for (let i = 0; i < 3; i++) {
  const btn = document.createElement('button');
  btn.textContent = arr[i];
  btn.setAttribute('id', arr[i]);
  btn.style.cssText =
    'padding:6px 12px 6px 12px;border-radius:10px;margin:10px;background-color:lightgreen;cursor:pointer;';
  buttons.appendChild(btn);
}
heading.appendChild(buttons);
heading.style.cssText = 'background-color:cyan;';
buttons.style.cssText = 'display:flex;justify-content:center;gap:30px;';

const mainContent = document.createElement('div');
mainContent.setAttribute('id', 'mainContent');
content.appendChild(mainContent);

home();

const Home = document.getElementById('Home');
const Menu = document.getElementById('Menu');
const Contact = document.getElementById('Contact');

Home.addEventListener('click', home);

Menu.addEventListener('click', menu);

Contact.addEventListener('click', contact);

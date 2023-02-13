export default function home()
{
     mainContent.textContent = '';
  const home = document.createElement('div');
  home.setAttribute('id', 'home');
  const fline = document.createElement('p');
  fline.textContent = 'Best pizza in your country';

  const sline = document.createElement('p');
  sline.textContent = 'Made with passion since 1908';
  const homeText = document.createElement('div');
  homeText.setAttribute('id', 'homeText');
  homeText.appendChild(fline);
  homeText.appendChild(sline);

  home.appendChild(homeText);
  const homeImage = document.createElement('div');
  homeImage.setAttribute('id', 'homeImage');
  const pizza = document.createElement('img');
  pizza.setAttribute('src', '../dist/pizza.jpeg');
  homeImage.appendChild(pizza);
  home.appendChild(homeImage);

  mainContent.appendChild(home);
}
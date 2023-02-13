export default function menu() {
  mainContent.textContent = '';
  const menu = document.createElement('div');
  menu.setAttribute('id', 'menu');
  
  for (let i = 0; i < 8; i++) {
    const cell = document.createElement('div');
    menu.appendChild(cell);
    cell.textContent = `Pizza ${i}`;
    const image = document.createElement('img');
    image.setAttribute('src', '../dist/pizza.jpeg');
    cell.appendChild(image);
    cell.style.border = '1px solid black';
    cell.style.display = 'flex';
    cell.style.flexDirection = 'column';
  }
  mainContent.appendChild(menu);
  
}

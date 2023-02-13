export default function contact() {
    mainContent.textContent = '';
    const contact = document.createElement('div');
    contact.setAttribute('id', 'contact');
    const contc = ['Phone', 'Email', 'Address', 'State', 'Country'];
    for (let i = 0; i < 5; i++) {
      const cell = document.createElement('p');
      cell.textContent = contc[i];
      contact.appendChild(cell);
      contact.style.border = '2px solid green';
    }
    mainContent.appendChild(contact);
}

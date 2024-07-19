const mainContentDiv = document.querySelector('.main-content');
function createContact(){
      const text = document.createElement('h1');
      text.textContent = 'Please do not contact us ! We are too lazy to pickup!' ;
      mainContentDiv.appendChild(text);
}

export {createContact} ;
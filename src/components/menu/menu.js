import './styles.css';

const mainContentDiv = document.querySelector('.main-content');

function createMenu() {

    for (let i = 1; i <= 10; i++) {
        const card = document.createElement('div');
        const imageContainer = document.createElement('div');
        const infoContainer = document.createElement('div');

        card.classList.add('card');
        imageContainer.classList.add('img-container');
        infoContainer.classList.add('info');

        infoContainer.textContent = ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur, quis qui omnis sequi minima porro aut. Maxime veniam, temporibus cum nisi doloremque eveniet facilis deleniti aliquid quidem ipsam. Mollitia, dolor!';

        card.appendChild(imageContainer);
        card.appendChild(infoContainer);
        mainContentDiv.appendChild(card);
    }
}

export { createMenu };
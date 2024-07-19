import restaurantImage from './kristaps-grundsteins-tQMXs0ee8B0-unsplash.jpg' ;
function createHome(){
    
    const contentDiv = document.querySelector('.main-content');
    const heading = document.createElement('h1');
    const img = document.createElement('img');
    const paragraph = document.createElement('p');

    heading.textContent = "Welcome to the homepage of the Restaurant!";
    img.src = restaurantImage ;
    paragraph.textContent = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium illo exercitationem vel esse doloribus hic praesentium quibusdam! Non nam a consectetur, nostrum quisquam iste, quasi reiciendis ullam beatae tempore porro! Lorem, ipsum dolor sit amet consectetur adipisicing elit. A tempore illum dolorum magni velit ducimus impedit corporis placeat recusandae sunt! Atque ex, magnam eligendi accusantium accusamus nostrum veniam debitis aspernatur? Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores eos consequatur iusto ipsa aliquam natus cum id inventore ea deleniti, alias laudantium corporis, perspiciatis quod molestiae quia voluptatibus maxime nulla?' ;
    
    contentDiv.appendChild(heading);
    contentDiv.appendChild(img);
    contentDiv.append(paragraph);

}

export { createHome } ;
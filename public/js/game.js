
const jogo = document.querySelector('.jogo');

const personagens = [
    'clair',
    'michel',
    'jay',
    'junior',
    'kady'
];
const createElement = (tag, className) => {
    const element = document.createElement(tag);
    element.className = className;
    return element;
}

const createCarta = (personagem) => {

    const carta = createElement('div', 'carta');
    const frente = createElement('div', 'parte frente');
    const tras = createElement('div', 'parte tras');

    frente.style.backgroundImage = `url('./assets/${personagem}.png')`


    carta.appendChild(frente);
    carta.appendChild(tras);


    return carta;
}

const loadGame = () => {
    const duplicatePersonagens = [ ...personagens, ...personagens ];

    duplicatePersonagens.forEach((personagem) => {
        const carta = createCarta(personagem);
        jogo.appendChild(carta);
    })
}
loadGame();
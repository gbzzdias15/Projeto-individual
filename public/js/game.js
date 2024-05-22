
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

let primeira = '';
let segunda = '';

const end = () => {
    const cartasViradas = document.querySelectorAll('.acerto')

if(cartasViradas.length == 10) {

    setTimeout(() => {

        alert('Parabens, você foi uma fera');
            
    }, 600)
}

}

const checkCarta = () => {
    const primeiroP = primeira.getAttribute('data-personagem')
    const segundoP = segunda.getAttribute('data-personagem')

    if (primeiroP == segundoP) {

        primeira.firstChild.classList.add('acerto')
        segunda.firstChild.classList.add('acerto')

        primeira = '';
        segunda = '';

        end();

    } else {
        setTimeout(() => {

            primeira.classList.remove('revelar');
            segunda.classList.remove('revelar');
    
            primeira = '';
            segunda = '';
            
        }, 600)
    }


}

const revelar = ({ target }) => {

    if (target.parentNode.className.includes('revelar')) {
        return;
    }

    if (primeira == '') {

        target.parentNode.classList.add('revelar');
        primeira = target.parentNode

    } else if (segunda == '') {
        target.parentNode.classList.add('revelar');
        segunda = target.parentNode


        checkCarta();

    }

}

const createCarta = (personagem) => {

    const carta = createElement('div', 'carta');
    const frente = createElement('div', 'parte frente');
    const tras = createElement('div', 'parte tras');

    frente.style.backgroundImage = `url('./assets/${personagem}.png')`


    carta.appendChild(frente);
    carta.appendChild(tras);

    carta.addEventListener('click', revelar);
    carta.setAttribute('data-personagem', personagem)

    return carta;
}

const loadGame = () => {
    const duplicatePersonagens = [...personagens, ...personagens];

    const shuffledArray = duplicatePersonagens.sort(() => Math.random() - 0.4)


    shuffledArray.forEach((personagem) => {
        const carta = createCarta(personagem);
        jogo.appendChild(carta);
    })
}
loadGame();
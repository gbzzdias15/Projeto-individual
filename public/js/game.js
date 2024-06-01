
const jogo = document.querySelector('.jogo');
const timer = document.querySelector('.timer')
const mensagem = document.querySelector('.mensagem')
const jogador = document.querySelector('.jogador')

const personagens = [
    'clair',
    'michel',
    'jay',
    'junior',
    'kady',
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

<<<<<<< HEAD
    if (cartasViradas.length == 10) {
        clearInterval(loop)
        setTimeout(() => {

            mensagem.innerHTML = `<span style="color: green; ">Parabens Player:${jogador.innerHTML} seu tempo foi de ${timer.innerHTML} Segundos!</span>`

        }, 600)

        if (sessionStorage.VEZESJOGADAS_USUARIO == undefined) {
            sessionStorage.VEZESJOGADAS_USUARIO = 0
        }
        sessionStorage.VEZESJOGADAS_USUARIO = Number(sessionStorage.VEZESJOGADAS_USUARIO) + 1

        var tempo = Number(timer.innerHTML)
        var idUsuario = sessionStorage.ID_USUARIO
        var jogadas = sessionStorage.VEZESJOGADAS_USUARIO
        console.log(jogadas)

        fetch("/jogo/inserir", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({

                tempoServer: tempo,
                jogadasServer: jogadas,
                idUsuarioServer: idUsuario,



            }),
        })
            .then(function (resposta) {
                console.log("resposta: ", resposta);

                if (resposta.ok) {

                    console.log('enviando para o banco')



                } else {
                    throw "Houve um erro ao tentar enviar para o banco!";
                }
            })
            .catch(function (resposta) {
                console.log(`#ERRO: ${resposta}`);

            });

        return false;
    }
=======
if(cartasViradas.length == 10) {

    setTimeout(() => {

        alert('Parabens, você foi uma fera');
            
    }, 600)
}
>>>>>>> bb77e24e9e0ff8554e38e5ed3cf85879eae5aa31

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
    // const duplicatePersonagens = [...personagens, ...personagens];

    const shuffledArray = personagens.sort(() => Math.random() - 0.4)


    shuffledArray.forEach((personagem) => {
        const carta = createCarta(personagem);
        jogo.appendChild(carta);
    })
}

const começar = () => {
    this.loop = setInterval(() => {

        const tempo = Number(timer.innerHTML);
        timer.innerHTML = tempo + 1

    }, 1000)
}

window.onload = () => {
    começar();
    loadGame();
}
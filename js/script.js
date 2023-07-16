const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const newGameButton = document.querySelector('.new-game');
let counter = document.querySelector('.counter');

let points = 0;
counter.innerHTML = 0;

const jump = () => {
  mario.classList.add('jump');

  setTimeout(() => {
    mario.classList.remove('jump');
  }, 500);
};

const loop = setInterval(() => {
  const pipePosition = pipe.offsetLeft;
  const marioPosition = +window
    .getComputedStyle(mario)
    .bottom.replace('px', '');

  if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 100) {
    pipe.style.animation = 'none';
    pipe.style.left = `${pipePosition}px`;

    mario.style.animation = 'none';
    mario.style.bottom = `${marioPosition}px`;
    mario.src = './images/game-over.png';
    mario.style.width = '75px';
    mario.style.marginLeft = '50px';

    clearInterval('loop');
  } else {
    points += 1;
    counter.innerHTML = points;
  }
}, 10);

newGameButton.addEventListener('click', () => {
  window.location.reload();
});

document.addEventListener('keydown', jump);

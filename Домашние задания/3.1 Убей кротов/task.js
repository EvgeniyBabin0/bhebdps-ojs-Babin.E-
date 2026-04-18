const dead = document.getElementById('dead');
const lost = document.getElementById('lost');

for (let i = 1; i <= 9; i += 1) {
  getHole(i).onclick = function () {
    if (this.classList.contains('hole_has-mole')) {
      dead.textContent = Number(dead.textContent) + 1;

      if (Number(dead.textContent) === 10) {
        alert('Победа!');
        dead.textContent = 0;
        lost.textContent = 0;
      }
    } else {
      lost.textContent = Number(lost.textContent) + 1;

      if (Number(lost.textContent) === 5) {
        alert('Вы проиграли!');
        dead.textContent = 0;
        lost.textContent = 0;
      }
    }
  };
}
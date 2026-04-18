const rotators = Array.from(document.querySelectorAll('.rotator'));

rotators.forEach((rotator) => {
  const cases = Array.from(rotator.querySelectorAll('.rotator__case'));

  const rotate = () => {
    const currentIndex = cases.findIndex((item) =>
      item.classList.contains('rotator__case_active'),
    );

    cases[currentIndex].classList.remove('rotator__case_active');

    const nextIndex = currentIndex === cases.length - 1 ? 0 : currentIndex + 1;
    const nextCase = cases[nextIndex];

    nextCase.classList.add('rotator__case_active');

    if (nextCase.dataset.color) {
      nextCase.style.color = nextCase.dataset.color;
    }

    const nextSpeed = Number(nextCase.dataset.speed) || 1000;
    setTimeout(rotate, nextSpeed);
  };

  const activeCase = rotator.querySelector('.rotator__case_active');

  if (activeCase.dataset.color) {
    activeCase.style.color = activeCase.dataset.color;
  }

  const startSpeed = Number(activeCase.dataset.speed) || 1000;
  setTimeout(rotate, startSpeed);
});
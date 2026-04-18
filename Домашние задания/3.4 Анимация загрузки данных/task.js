const loader = document.getElementById('loader');
const itemsContainer = document.getElementById('items');

function renderCurrencies(currencies) {
  let itemsHTML = '';

  for (const code in currencies) {
    const currency = currencies[code];

    itemsHTML += `
      <div class="item">
        <div class="item__code">${currency.CharCode}</div>
        <div class="item__value">${currency.Value}</div>
        <div class="item__currency">руб.</div>
      </div>
    `;
  }

  itemsContainer.innerHTML = itemsHTML;
}

function loadCurrencies() {
  const request = new XMLHttpRequest();
  request.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');

  request.addEventListener('load', function () {
    const response = JSON.parse(request.responseText);
    const currencies = response.response.Valute;

    renderCurrencies(currencies);
    loader.classList.remove('loader_active');
  });

  request.send();
}

loadCurrencies();
const tooltipLinks = document.querySelectorAll('.has-tooltip');

let tooltip = null;
let activeLink = null;

function createTooltip() {
  tooltip = document.createElement('div');
  tooltip.className = 'tooltip';
  document.body.appendChild(tooltip);
}

function showTooltip(link) {
  if (!tooltip) {
    createTooltip();
  }

  const text = link.getAttribute('title');
  tooltip.textContent = text;

  const linkRect = link.getBoundingClientRect();

  const left = linkRect.left + window.scrollX;
  const top = linkRect.top + window.scrollY - tooltip.offsetHeight;

  tooltip.style.left = left + 'px';
  tooltip.style.top = top + 'px';

  tooltip.classList.add('tooltip_active');
  activeLink = link;
}

function hideTooltip() {
  if (tooltip) {
    tooltip.classList.remove('tooltip_active');
  }
  activeLink = null;
}

tooltipLinks.forEach(function (link) {
  link.addEventListener('click', function (event) {
    event.preventDefault();

    if (activeLink === link) {
      hideTooltip();
      return;
    }

    hideTooltip();
    showTooltip(link);
  });
});

document.addEventListener('click', function (event) {
  const target = event.target;

  if (
    !target.classList.contains('has-tooltip') &&
    tooltip &&
    !tooltip.contains(target)
  ) {
    hideTooltip();
  }
});
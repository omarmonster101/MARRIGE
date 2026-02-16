const tabs = document.querySelectorAll('.tab');
const panes = document.querySelectorAll('.tab-content');

function activateTab(tab) {
  tabs.forEach((t) => {
    t.classList.remove('active');
    t.setAttribute('aria-selected', 'false');
  });
  panes.forEach((p) => p.classList.remove('active'));

  tab.classList.add('active');
  tab.setAttribute('aria-selected', 'true');

  const target = document.getElementById(tab.dataset.tab);
  if (target) target.classList.add('active');
}

tabs.forEach((tab) => {
  tab.addEventListener('click', () => activateTab(tab));
  tab.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      activateTab(tab);
    }
  });
});

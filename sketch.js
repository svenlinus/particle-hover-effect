const el = document.getElementById('music');
el.addEventListener('mouseover', () => {
  el.src = 'money.gif';
});
el.addEventListener('mouseout', () => {
  el.src = 'reverse-money.gif';
});
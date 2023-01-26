const el = document.getElementById('music');
el.addEventListener('mouseover', () => {
  el.src = 'money2.gif';
});
el.addEventListener('mouseout', () => {
  el.src = 'reverse-money2.gif';
});
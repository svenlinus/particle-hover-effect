const el = document.getElementById('music');
el.addEventListener('mouseover', () => {
  el.src = 'slow-music.gif';
});
el.addEventListener('mouseout', () => {
  el.src = 'reverse-music.gif';
});
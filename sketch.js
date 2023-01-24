const el = document.getElementById('music');
el.addEventListener('mouseover', () => {
  el.src = 'music.gif';
});
el.addEventListener('mouseout', () => {
  el.src = 'reverse-music.gif';
});
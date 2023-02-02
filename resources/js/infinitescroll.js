const scrollContainer = document.querySelector('.scroll-container');

scrollContainer.addEventListener('mouseover', function() {
this.style.overflowX = 'hidden';
});

scrollContainer.addEventListener('mouseout', function() {
this.style.overflowX = 'scroll';
});
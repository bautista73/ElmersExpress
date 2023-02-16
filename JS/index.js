// Service Box JS

const cells = document.querySelectorAll('.card');

document.addEventListener("click", function(event) {
  cells.forEach(cell => {
    if (cell.classList.contains("is-expanded") && !cell.contains(event.target)) {
      cell.classList.remove("is-expanded");
      cell.classList.add("is-collapsed");
      cells.forEach(otherCell => {
        otherCell.classList.remove("is-inactive");
      });
    }
  });
});

cells.forEach(cell => {
  const expander = cell.querySelector('.js-expander');
  expander.addEventListener('click', function() {
    const thisCell = this.closest('.card');

    if (thisCell.classList.contains('is-collapsed')) {
      cells.forEach(otherCell => {
        if (otherCell !== thisCell) {
          otherCell.classList.remove('is-expanded');
          otherCell.classList.add('is-collapsed');
          otherCell.classList.add('is-inactive');
        }
      });
      thisCell.classList.remove('is-collapsed');
      thisCell.classList.add('is-expanded');
    } else {
      thisCell.classList.remove('is-expanded');
      thisCell.classList.add('is-collapsed');
      cells.forEach(otherCell => {
        otherCell.classList.remove('is-inactive');
      });
    }
  });

  const collapser = cell.querySelector('.js-collapser');
  collapser.addEventListener('click', function() {
    const thisCell = this.closest('.card');

    thisCell.classList.remove('is-expanded');
    thisCell.classList.add('is-collapsed');
    cells.forEach(otherCell => {
      otherCell.classList.remove('is-inactive');
    });
  });
});


// FAB event listener JS 

const container = document.querySelector('.container');
const checkbox = document.getElementById('toggle');

document.addEventListener('click', function(event) {
  const isClickInsideContainer = container.contains(event.target);
  if (!isClickInsideContainer) {
    checkbox.checked = true;
  }
});



  

  
  
  
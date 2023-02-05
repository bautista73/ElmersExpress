function paypalLink() {
    window.open("https://www.paypal.com/paypalme/elmersexpress", "_blank");
}

function servicesLink() {
    window.open("services.html", "_self");
}

//services showcase JS
const options = document.querySelectorAll('.option');
options.forEach(option => {
  option.addEventListener('click', e => {
    const targetId = e.target.id;
    const displayItem = document.querySelector(`#display-${targetId}`);
    const displayItems = document.querySelectorAll('.display-item');
    displayItems.forEach(item => {
      item.style.display = 'none';
    });
    displayItem.style.display = 'flex';
  });
});

let slideIndex = 1;
let slides = document.getElementsByClassName("slide");
let dots = document.getElementsByClassName("dot");
let dotmark = "&#9675;";
let dotmark_active = "&#9679;";
function slide_toggle(current_index) {
  slides[slideIndex - 1].classList.remove("active");
  dots[slideIndex-1].innerHTML = dotmark;
  slideIndex += current_index;
  if (slideIndex < 1) slideIndex = slides.length;
  if (slideIndex > slides.length) slideIndex = 1;
  slides[slideIndex - 1].classList.add("active");
  dots[slideIndex-1].innerHTML = dotmark_active;
}
function getSlide(index){
  if (index < 1) index = slides.length;
  if (index > slides.length) index = 1;
  slides[slideIndex - 1].classList.remove("active");
  dots[slideIndex-1].innerHTML = dotmark;
  slideIndex = index;
  slides[slideIndex -1].classList.add("active");
  dots[slideIndex -1].innerHTML = dotmark_active;
}
showSlides();
function showSlides() {
    var i;
    slides[slideIndex - 1].classList.remove("active");
    dots[slideIndex-1].innerHTML = dotmark;
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1} 
    slides[slideIndex - 1].classList.add("active");
    dots[slideIndex-1].innerHTML = dotmark_active;
    setTimeout(showSlides, 40000); 
}
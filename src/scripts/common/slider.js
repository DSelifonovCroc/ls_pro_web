const slides = document.querySelectorAll('#slides .slide');
const next = document.getElementById('next');
const previous = document.getElementById('previous');
const controls = document.querySelectorAll('.controls');

let currentSlide = 0;

const goToSlide = n => {
    slides[currentSlide].className = 'slide';
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].className = 'slide showing';
}

const setupListners = () => {
    next.onclick = () => goToSlide(currentSlide+1);
    previous.onclick = () => goToSlide(currentSlide-1);
}

const showButtons = () => {
    for(var i = 0; i < controls.length; i++){
        controls[i].style.display = 'inline-block';
    }
}

const sliderInit = () => {
    if (slides.length !== 0){
        setupListners();
        showButtons();
    }
}

export default sliderInit;
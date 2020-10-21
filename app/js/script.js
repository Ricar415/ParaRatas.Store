const btnHamburguer = document.querySelector('#btnHamburguer');
const header = document.querySelector('.header');
const fade = document.querySelectorAll('.has-fade');
const body = document.querySelector('body');
btnHamburguer.addEventListener('click', function(){
    if(header.classList.contains('open')){
        header.classList.remove('open');
        fade.forEach(function(element){
            element.classList.add('fade-out');
            element.classList.remove('fade-in');
        });
        body.classList.remove('noscroll');
    } else {
        header.classList.add('open');
        fade.forEach(function(element){
            element.classList.remove('fade-out');
            element.classList.add('fade-in');
        });
        body.classList.add('noscroll');
    }
});
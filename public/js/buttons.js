document.addEventListener('DOMContentLoaded', function() {
    const button = document.querySelector('.minimize');
    const audio = new Audio("https://www.myinstants.com/en/instant/fart/?utm_source=copy&utm_medium=share")
    button.addEventListener('click', function() {

        confirm(`💨 ... Mais t'as pété ? 👀`);
        audio.play();
    });
});
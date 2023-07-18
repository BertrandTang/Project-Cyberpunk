document.addEventListener('DOMContentLoaded', function() {
    const button = document.querySelector('.minimize');
    const audio = new Audio("../mp3/dry-fart.mp3")
    button.addEventListener('click', function() {
        audio.play();
        confirm(`💨 ... Mais t'as pété ? 👀`);
        
    });
});
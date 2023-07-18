document.addEventListener('DOMContentLoaded', function() {
    const button = document.querySelector('.minimize');
  //  const button2 = document.querySelector('.maximize');

    const audio = new Audio("../mp3/dry-fart.mp3")
  //  const audio2 = new Audio("../mp3/never-gonna-give-you-up.m4a")

    button.addEventListener('click', function() {
        audio.play();
        confirm(`💨 ... Mais t'as pété ? 👀`);
    });

 /*   button2.addEventListener('click', function() {
        audio2.play();
    }); */
});
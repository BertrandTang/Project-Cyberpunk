document.getElementById('toggle').addEventListener('change', function() {
    var nav = document.querySelector('.nav');
    if (this.checked) {
      nav.style.top = '0';
      nav.style.transform = 'scale(1)';
    } else {
      nav.style.top = '-100%';
      nav.style.transform = 'scale(0)';
    }
  });
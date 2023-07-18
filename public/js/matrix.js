    const canvas = document.querySelector('#Matrix');
    const context = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const katakana = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン';
    const latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const nums = '0123456789';
    
    const alphabet = katakana + latin + nums;

    // On gère la taille des charactères
    const fontSize = 15;
    const columns = canvas.width / fontSize;
    
    const rainDrops = [];

    // Rideau de code 0 ou 100
   for (let x = 0; x < columns; x++) {
      rainDrops[x] = 100;
    } 
    
    const draw = () => {

     // Changer la couleur du background 
        context.fillStyle = 'rgba(245, 245, 245, 0.05)';
        context.fillRect(0, 0, canvas.width, canvas.height);
    
     
        context.fillStyle = 'rgba(255, 255, 255, 0.05)';
        context.font = fontSize + 'px monospace';
    
    for (let i = 0; i < rainDrops.length; i++) {
        const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
        context.fillText(text, i * fontSize, rainDrops[i] * fontSize);
    
       if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.980) {
          rainDrops[i] = 0;
        }
        rainDrops[i]++;

    // La couleur des caractères, ici on assigne des couleurs aléatoire parce qu'on est gays
        const color = `hsl(${Math.random() * 360}, 80%, 40%)`;
        context.fillStyle = color;
      }
    };

    // On gère la vitesse dans l'interval
    setInterval(draw, 15);
  
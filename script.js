const typewriterText = "I know things haven't been perfect lately... but you are perfect for how you are.";
let charIndex = 0;

function typeWriter() {
    if (charIndex < typewriterText.length) {
        document.getElementById("typewriter").innerHTML += typewriterText.charAt(charIndex);
        charIndex++;
        setTimeout(typeWriter, 60);
    }
}

// Logic to start music and transition from Page 1
function startExperience() {
    const music = document.getElementById("bgMusic");
    music.play();
    
    // Create Heart Particles
    setInterval(createHeart, 300);
    
    nextPage('p1', 'p2');
}

function nextPage(curr, next) {
    document.getElementById(curr).classList.remove('active');
    document.getElementById(next).classList.add('active');
}

function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '❤️';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 2 + 3 + 's';
    document.getElementById('particle-container').appendChild(heart);
    
    setTimeout(() => { heart.remove(); }, 4000);
}

window.onload = typeWriter;

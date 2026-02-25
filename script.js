// Typewriter Effect for Page 1
const text = "I know words aren't enough... but I wanted to show you something.";
let i = 0;

function typeWriter() {
    if (i < text.length) {
        document.getElementById("typewriter").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
    }
}

// Start typewriter on load
window.onload = typeWriter;

// Navigation and Music Trigger
function nextPage(currentId, nextId) {
    // Play music on first interaction (browsers block auto-play)
    const music = document.getElementById("bgMusic");
    if (currentId === 'p1') {
        music.play().catch(e => console.log("Music needs interaction first"));
    }

    document.getElementById(currentId).classList.remove('active');
    document.getElementById(nextId).classList.add('active');
}

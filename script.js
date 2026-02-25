// All your messages stored here
const messages = {
    text1: "I know things haven't been perfect... but you are perfect to me.",
    text2: "I looked back at this and realized... I never want to lose this smile again. The way i do the things in the past.. I didn't treat you they way you be treated and now i want to be the best the way you want to me..",
    text3: "I know I messed up, but let me make it up to you starting today. Sorry for all the frickin things.. In your special day i am just making this small peace of suprise for you so it could be your memorable one.",
    text4: "Every second with you is a gift I don't deserve, but I'll cherish forever. Many many happy birthday and may your all dreams become true very soon and never ever think of giving up because remember at that time you have to do it for yourself and always remember me in your bad days i will be in your side for sure."
};

let isTyping = false;

function typeWriter(elementId, text, speed, callback) {
    let i = 0;
    isTyping = true;
    const element = document.getElementById(elementId);
    element.innerHTML = ""; // Clear existing text
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        } else {
            isTyping = false;
            // Show the "Tap to continue" hint after typing is done
            const hintId = elementId.replace('text', 'hint');
            const hint = document.getElementById(hintId);
            if(hint) hint.style.opacity = "1";
            if(callback) callback();
        }
    }
    type();
}

// Special function for the first tap (Starts music)
function startExperience() {
    if (isTyping) return;
    const audio = document.getElementById('bgMusic');
    audio.play().catch(e => console.log("Audio play blocked"));
    
    // Switch to page 2 and start typing text2
    nextPage('p1', 'p2');
    setTimeout(() => {
        typeWriter('text2', messages.text2, 50);
    }, 500);
}

// Logic for tapping through pages
function handleTap(currentId, nextId, nextTextId) {
    if (isTyping) return; // Prevent skipping while typing
    
    nextPage(currentId, nextId);
    
    // Small delay before starting next page typing for smooth transition
    setTimeout(() => {
        typeWriter(nextTextId, messages[nextTextId], 40);
    }, 600);
}

function nextPage(curr, next) {
    document.getElementById(curr).classList.remove('active');
    document.getElementById(next).classList.add('active');
}

// Start typing the very first message on load
window.onload = () => {
    typeWriter('text1', messages.text1, 70);
};
    

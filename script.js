document.addEventListener("DOMContentLoaded", function () {
    let countdownElement = document.getElementById("countdown");
    let birthdayMessage = document.getElementById("birthday-message");
    let fireworksContainer = document.getElementById("fireworks");
    let stickersContainer = document.getElementById("stickers");
    let birthdaySong = document.getElementById("birthday-song");

    let countdown = 5;

    function startCountdown() {
        let countdownInterval = setInterval(function () {
            countdownElement.textContent = countdown;
            countdown--;

            if (countdown < 0) {
                clearInterval(countdownInterval);
                countdownElement.style.opacity = "0"; // Hide countdown
                showFireworks();
                showStickers();
                showBirthdayMessage();
                requestAudioPermission();
            }
        }, 1000);
    }

    function showFireworks() {
        fireworksContainer.style.display = "block";
        for (let i = 0; i < 30; i++) {
            let firework = document.createElement("div");
            firework.classList.add("firework");
            firework.style.left = Math.random() * 100 + "vw";
            firework.style.top = Math.random() * 100 + "vh";
            firework.style.background = `hsl(${Math.random() * 360}, 100%, 50%)`;
            firework.style.animation = `fireworks 1s ease-out infinite`;
            fireworksContainer.appendChild(firework);
        }
    }

    function showStickers() {
        let stickers = ["🎂", "🎈", "🎊", "🎆", "🌊", "🐬", "🐳"];
        for (let i = 0; i < 15; i++) {
            let sticker = document.createElement("div");
            sticker.textContent = stickers[Math.floor(Math.random() * stickers.length)];
            sticker.style.position = "absolute";
            sticker.style.fontSize = Math.random() * 40 + 30 + "px";
            sticker.style.left = Math.random() * 100 + "vw";
            sticker.style.animation = `float ${Math.random() * 3 + 2}s linear infinite`;
            stickersContainer.appendChild(sticker);
        }
    }

    function showBirthdayMessage() {
        setTimeout(() => {
            birthdayMessage.style.display = "block";
        }, 500);
    }

    function requestAudioPermission() {
        let playButton = document.createElement("button");
        playButton.textContent = "Click to Play Music 🎵";
        playButton.style.position = "fixed";
        playButton.style.top = "50%";
        playButton.style.left = "50%";
        playButton.style.transform = "translate(-50%, -50%)";
        playButton.style.padding = "15px 30px";
        playButton.style.fontSize = "20px";
        playButton.style.background = "blue";
        playButton.style.color = "white";
        playButton.style.border = "none";
        playButton.style.cursor = "pointer";
        document.body.appendChild(playButton);

        playButton.addEventListener("click", function () {
            birthdaySong.play();
            playButton.remove(); // Remove button after playing
        });
    }

    startCountdown();
});

document.addEventListener("DOMContentLoaded", function () {
    // Function to display welcome message
    function welcomeMessage() {
        alert("Welcome to the website!");
    }

    // Function to check if audio is supported and play it
    function playAudio() {
        var audio = new Audio("path/to/your/audiofile.mp3");

        // Check if the browser supports the Audio element
        if (audio.canPlayType) {
            audio.play().catch(error => {
                console.log("Audio playback failed: ", error);
                alert("Sorry, your browser doesn't support audio playback or there was an error.");
            });
        } else {
            alert("Sorry, your browser doesn't support audio playback.");
        }
    }

    // Function to handle the "game" audio message
    function playGameMessage() {
        alert("To play the game, please listen to the voice instructions.");
        // You can trigger game-specific audio here
        var gameAudio = new Audio("path/to/your/gameaudio.mp3");
        gameAudio.play().catch(error => {
            console.log("Game audio playback failed: ", error);
        });
    }

    // Call the welcome message function when the page loads
    welcomeMessage();

    // After 5 seconds, play the audio message (or a different interval if you'd like)
    setTimeout(function () {
        playAudio();
    }, 5000); // 5000 milliseconds = 5 seconds

    // Call the playGameMessage function after another delay (e.g., after 10 seconds)
    setTimeout(function () {
        playGameMessage();
    }, 10000); // 10 seconds after page load
})
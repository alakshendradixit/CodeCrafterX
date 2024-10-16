// Function to show pop-up message
function showPopup() {
    alert("Welcome to the website! You've logged in successfully.");
}

// Function to play the audio voice message
function playVoiceMessage() {
    const audio = new Audio('path_to_your_audio_file.mp3'); // Replace with your audio file path
    audio.play();
}

// Call the popup function immediately when the user logs in
showPopup();

// Call the voice message function after a delay (e.g., 3 minutes)
setTimeout(function () {
    playVoiceMessage();
}, 180000); // 180000 ms = 3 minutes
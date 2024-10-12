document.addEventListener('DOMContentLoaded', function() {
    const counterElement = document.getElementById('counter');

    if (counterElement) {
        let count = 0;
        const targetCount = 1000;
        const speed = 10;
        function updateCounter() {
            if (count < targetCount) {
                count++;
                counterElement.textContent =count;
            } else {
                clearInterval(counterInterval);
            }
        }

        const counterInterval= setInterval(updateCounter, speed);

    } else {
        console.error('Error : Element with ID "counter" not found in the HTML!');
    }

})
 
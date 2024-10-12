document.addEventListener('DOMContentLoaded', function() {
    console.log("About page loaded successfully.");

    const toggleButton =document.querySelector('#learn-more');
    if (toggleButton){
        toggleButton.addEventListener('click', function() {
            const moreInfo = document.querySelector('#more-info');
            if (moreInfo) {
                moreInfo.style.display === 'none' ? 'block' : 'none';
            }
        });
    }
});
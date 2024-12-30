const maxLength = 11;
const paragraph = document.getElementById('text');
if (paragraph.innerText.length > maxLength) {
paragraph.innerText = paragraph.innerText.substring(0, maxLength);
}






document.addEventListener('DOMContentLoaded', () => {
    const tapButton = document.querySelector('.combat_tap_button');
    const tapImg = document.querySelector('.combat_tap');
    const energyValue = document.getElementById('energy_value');

    let clickCount = parseInt(localStorage.getItem('clickCount') || '0');
    let energy = parseInt(localStorage.getItem('energy') || '7000');

    function updateUI() {
        tapButton.textContent = clickCount;
        energyValue.textContent = `${energy} / 7000`;
    }

    updateUI();

 
    tapButton.addEventListener('click', () => {
        clickCount++;
        localStorage.setItem('clickCount', clickCount);
        tapButton.textContent = clickCount;
    });

    tapImg.addEventListener('click', () => {
        if (energy > 0) {
            energy -= 1;
            clickCount++; 
            localStorage.setItem('energy', energy);
            localStorage.setItem('clickCount', clickCount);
            updateUI();
        }
    });


    setInterval(() => {
        if (energy < 7000) {
            energy += 20;
            if (energy > 7000) energy = 7000;
            localStorage.setItem('energy', energy);
            updateUI();
        }
    }, 10000);
});






document.addEventListener('DOMContentLoaded', function() {
    const image = document.getElementById('combatImage');

    image.addEventListener('touchstart', function() {
        image.classList.add('enlarged');
    });

    image.addEventListener('touchend', function() {
        image.classList.remove('enlarged');
    });


    image.addEventListener('click', function() {
        image.classList.toggle('enlarged');
    });
});


document.addEventListener('dblclick', function(e) {
    e.preventDefault();
  }, { passive: false });
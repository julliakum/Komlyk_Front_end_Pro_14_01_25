function getCurrentTimeDigits() {
    const now = new Date();

    const hours = now.getHours().toString().padStart(2, '0').split('');
    const minutes = now.getMinutes().toString().padStart(2, '0').split('');
    const seconds = now.getSeconds().toString().padStart(2, '0').split('');

    return [...hours, ...minutes, ...seconds];
}

function getUnitContainer(name) {
    return document.querySelector(`.${name}`);
}

function updateUnitIfNeeded(unitName, currentDigits, previousDigits) {
    if (currentDigits.join('') === previousDigits.join('')) return;

    const container = getUnitContainer(unitName);
    container.innerHTML = '';

    currentDigits.forEach(digit => {
        const img = document.createElement('img');
        img.src = `digits/${digit}.png`;
        img.alt = digit;
        container.appendChild(img);
    });
}


let previousTime = '';

function updateClock() {
    const currentTime = getCurrentTimeDigits();
    const previousDigits = previousTime.split('');
    previousTime = currentTime.join('');

    updateUnitIfNeeded('hours', currentTime.slice(0, 2), previousDigits.slice(0, 2));
    updateUnitIfNeeded('minutes', currentTime.slice(2, 4), previousDigits.slice(2, 4));
    updateUnitIfNeeded('seconds', currentTime.slice(4, 6), previousDigits.slice(4, 6));
}

function startClock() {
    updateClock();
    setInterval(updateClock, 1000);
}

startClock();

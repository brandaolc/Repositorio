document.addEventListener('DOMContentLoaded', () => {
    const valueElement = document.getElementById('value');
    const incrementButton = document.getElementById('increment');
    const decrementButton = document.getElementById('decrement');

    let counter = 0;

    incrementButton.addEventListener('click', () => {
        counter++;
        valueElement.textContent = counter;
    });

    decrementButton.addEventListener('click', () => {
        counter--;
        valueElement.textContent = counter;
    });
});

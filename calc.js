document.addEventListener("DOMContentLoaded", function() {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.button');
    let currentInput = '';

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const value = this.textContent;

            if (value === 'C') {
                currentInput = '';
                display.textContent = '';
            } else if (value === '←') {
                currentInput = currentInput.slice(0, -1);
                display.textContent = currentInput;
            } else if (value === '=') {
                try {
                    const result = eval(currentInput);
                    if (isNaN(result) || !isFinite(result)) {
                        throw new Error('Invalid Input');
                    }
                    display.textContent = result;
                    currentInput = result;
                } catch (error) {
                    display.textContent = 'Error';
                    currentInput = '';
                }
            } else {
                currentInput += value;
                display.textContent = currentInput;
            }
        });
    });
});

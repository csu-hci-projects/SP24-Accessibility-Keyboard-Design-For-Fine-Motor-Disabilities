document.addEventListener('DOMContentLoaded', function () {
    const keyboard = document.getElementById('keyboard');
    const output = document.getElementById('output');
    const clearBtn = document.getElementById('clearBtn');

    const keys = [
        '1', '2', '3', '4', '5', '6', '7', '8', '9', '0',
        'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P',
        'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';',
        'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/',
        'Space', 'Backspace'
    ];

 keys.forEach(key => {
        const keyElement = document.createElement('div');
        keyElement.classList.add('key');
        keyElement.textContent = key;

        keyElement.addEventListener('click', function () {
            handleKeyPress(key);
        });

        keyboard.appendChild(keyElement);
    });

    clearBtn.addEventListener('click', function () {
        output.value = '';
    });

    function handleKeyPress(key) {
        if (key === 'Space') {
            output.value += ' ';
        } else if (key === 'Backspace') {
            output.value = output.value.slice(0, -1);
        } else {
            output.value += key;
        }
    }
});

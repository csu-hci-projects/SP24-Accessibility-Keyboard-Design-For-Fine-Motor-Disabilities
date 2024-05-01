document.addEventListener('DOMContentLoaded', function () {
    const output = document.getElementById('output');
    const clearBtn = document.getElementById('clearBtn');

    const keys = [
        '1', '2', '3', '4', '5', '6', '7', '8', '9', '0',
        'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P',
        'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';',
        'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '?'
    ];

    keys.forEach(key => {
        const keyElement = document.createElement('div');
        keyElement.classList.add('key');
        keyElement.textContent = key;

        keyElement.addEventListener('click', function () {
            handleKeyPress(key);
        });

        if (['B', 'M', 'I', 'A'].includes(key)) {
            keyElement.classList.add('key-special', 'letter');
        }

        document.querySelector('.keyboard').appendChild(keyElement);
    });

    const spaceKey = document.createElement('div');
    spaceKey.classList.add('key', 'key-space');
    spaceKey.textContent = 'Space';
    spaceKey.addEventListener('click', function () {
        handleKeyPress('Space');
    });
    document.querySelector('.keyboard').appendChild(spaceKey);

    const backspaceKey = document.createElement('div');
    backspaceKey.classList.add('key', 'key-backspace');
    backspaceKey.textContent = 'Delete';
    backspaceKey.addEventListener('click', function () {
        handleKeyPress('Backspace');
    });
    document.querySelector('.keyboard').appendChild(backspaceKey);

    clearBtn.addEventListener('click', function () {
        output.textContent = '';
    });

    function handleKeyPress(key) {
        if (key === 'Space') {
            output.textContent += ' ';
        } else if (key === 'Backspace') {
            output.textContent = output.textContent.slice(0, -1);
        } else {
            output.textContent += key;
        }
    }
});

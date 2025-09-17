document.addEventListener('DOMContentLoaded', () => {
    const guessInput = document.getElementById('guessInput');
    const guessButton = document.getElementById('guessButton');
    const message = document.getElementById('message');
    const list = document.getElementById('list');
    let randomNumber = Math.floor(Math.random() * 100) + 1;
    let attempts = 0;

    guessButton.addEventListener('click', () => {
        const userGuess = parseInt(guessInput.value);
        attempts++;

        if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
            message.textContent = 'Por favor, insira um número válido entre 1 e 100.';
            return;
        }

        message.classList.remove('right', 'wrong');

       
        if (userGuess === randomNumber) {
           
            list.innerHTML = '';

            const guessItem = document.createElement('li');
            guessItem.textContent = `Palpite: ${userGuess} - Parabéns! Você acertou!`;
            guessItem.classList.add('correct');
            message.textContent = `Você acertou o número ${randomNumber} em ${attempts} tentativas!`;
            message.classList.add('right');

            
            randomNumber = Math.floor(Math.random() * 100) + 1;
            attempts = 0; 

            guessInput.value = ''; 
            guessInput.focus();
        } else {
            const guessItem = document.createElement('li');
            if (userGuess < randomNumber) {
                guessItem.textContent = `Palpite: ${userGuess} - Tente um número maior!`;
                guessItem.classList.add('too-low');
                message.textContent = 'Tente um número maior!';
                message.classList.add('wrong');
            } else {
                guessItem.textContent = `Palpite: ${userGuess} - Tente um número menor!`;
                guessItem.classList.add('too-high');
                message.textContent = 'Tente um número menor!';
                message.classList.add('wrong');
            }

            list.appendChild(guessItem);

            guessInput.value = ''; 
            guessInput.focus(); 
        }
    });
});

const jeronimoboton = document.getElementById('jeronimoboton');
const numerosboton = document.getElementById('numerosboton');
const colorboton = document.getElementById('colorboton');
const resultadoDiv = document.getElementById('resultado');
const body = document.body;

jeronimoboton.addEventListener('click', () => {
    alert('Jerónimo');
});

numerosboton.addEventListener('click', () => {
    let numbersText = '';
    for (let i = 1; i <= 10; i++) {
        numbersText += i + ' ';
    }
    resultadoDiv.textContent = numbersText;
});

colorboton.addEventListener('click', () => {
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');
    body.style.backgroundColor = randomColor;
});
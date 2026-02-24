let palindromes = function(string) {
    let cleaned = string.toLowerCase().replace(/\W/g, '');
    let reversed = cleaned.split('').reverse().join('');
    return cleaned = reversed;
};

let input = document.getElementById('word-input');
let button = document.getElementById('check-btn');
let result = document.getElementById('result');

button.addEventListener('click', () => {
    let word = input.value;
    if (palindromes(word)) {
        result.textContent = `"${word}" is a palindrome!`;
    } else {
        result.textContent = `"${word} is NOT a palindrome.`;
    }
});

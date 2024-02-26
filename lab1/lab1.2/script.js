function findLongestWord() {
    const inputText = document.getElementById('number1').value;
    const words = inputText.split(/\s+/); 

    let longestWord = '';
    let maxLength = 0;

    for (const word of words) {
        if (word.length > maxLength) {
            longestWord = word;
            maxLength = word.length;
        }
    }

    const resultElement = document.getElementById('result1');
    resultElement.textContent = `Найдовше слово: ${longestWord}, його довжина: ${maxLength}`;
}

function showAuthorInfo() {
    const authorInfo = document.getElementById('author-info');
    authorInfo.style.display = 'block';
}

function hideAuthorInfo() {
    const authorInfo = document.getElementById('author-info');
    authorInfo.style.display = 'none';
}

function convertAndDisplay() {
    findLongestWord();
}

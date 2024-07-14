const palindromes = function (word) {
    const wantedAlpha = 'abcdefghijklmnopqrstuvwxyz0123456789';

    const formattedWord = Array.from(word.toLowerCase())
                               .filter((alpha) => wantedAlpha.includes(alpha))
                               .join('');

    const reverseWord = formattedWord.split('').reverse().join('');

    return formattedWord == reverseWord;
};

// Do not edit below this line
module.exports = palindromes;

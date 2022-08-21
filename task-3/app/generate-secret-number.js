/** функция создающай кодовой число */
function generateSecretNumber({ secretMinLength, secretMaxLength }) {
    const randomLength = random(secretMinLength, secretMaxLength)
    const arrayOfRandomNumbers = Array(randomLength).fill(null).map(() => random(0, 9));
    return arrayOfRandomNumbers.join('');
}

function random(min, max) {
    return Math.round(min + Math.random() * (max - min));
}

module.exports = {
    generateSecretNumber
}
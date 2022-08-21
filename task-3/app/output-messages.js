function showGameRules({ secretMinLength, secretMaxLength, maxSteps }) {
    console.log(`
        Правила игры:

        Компьютер загадывает число из нескольких различающихся цифр (от ${secretMinLength} до ${secretMaxLength}).
        Вам дается ${maxSteps} попыток на то, чтобы угадать это число.
    
    `)
}

/** функция выдающая результат сравнения */
function showHint({ matchedNotInPlace, matchedInPlace }) {
    const notInPlace = !matchedNotInPlace.length ? '0' : `${matchedNotInPlace.length} (${matchedNotInPlace.join(', ')})`;
    const inPlace = `${matchedInPlace.length} (${matchedInPlace.join(', ')})`;

    console.log(`
        Не угадали...
        Совпавших цифр не на своих местах - ${notInPlace}
        Цифр на своих местах - ${inPlace}
    `)
}

module.exports = {
    showGameRules,
    showHint
}
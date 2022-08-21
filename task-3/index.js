const readlineSync = require('readline-sync');

/** функция, описывающая правила игры */
function showGameRules(secretMinLength, secretMaxLength, maxSteps) {
    console.log(`
        Правила игры:

        Компьютер загадывает число из нескольких различающихся цифр (от ${secretMinLength} до ${secretMaxLength}).
        Вам дается ${maxSteps} попыток на то, чтобы угадать это число.
    
    `)
}

/** функция, создающай кодовой число */
function generateSecretNumber(secretMinLength, secretMaxLength) {
    const randomLength = random(secretMinLength, secretMaxLength)
    const arrayOfRandomNumbers = Array(randomLength).fill(null).map(() => random(0, 9));
    return arrayOfRandomNumbers.join('');
}

function random(min, max) {
    return Math.round(min + Math.random() * (max - min));
}

/** функция, запрашивающее число у пользователя */
function promptUserNumber() {
    return readlineSync.question('Введите число... ');
}

/** функция, сравнивающая числа */
function compareNumbers(secretNumber, userNumber) {
    if (secretNumber === userNumber) {
        return 'success';
    }

    const matchedNotInPlace = [];
    const matchedInPlace = [];
    const checkedNums = {};

    for (let i = 0; i < secretNumber.length; i++) {
        const currentSecretLetter = secretNumber[i];
        const currentUserLetter = userNumber[i];

        if (currentSecretLetter === currentUserLetter) {
            matchedInPlace.push(currentUserLetter);
            
            if (checkedNums[currentUserLetter]) {
                checkedNums[currentUserLetter].push(i)
            } else {
                checkedNums[currentUserLetter] = [i]
            }

            continue;
        } else {
            const match = secretNumber.match(currentUserLetter);

            if (match) {
                const index = match.index;
                const matchValue = match[0];
                const alreadyRegistered = checkedNums[currentUserLetter] && checkedNums[currentUserLetter].includes(index);

                if (!alreadyRegistered) {
                    if (checkedNums[currentUserLetter]) {
                        checkedNums[currentUserLetter].push(index)
                    } else {
                        checkedNums[currentUserLetter] = [index]
                    }

                    matchedNotInPlace.push(matchValue);
                }
            }

        }
    }

    return {
        matchedNotInPlace,
        matchedInPlace
    }
}

/** функция, выдающая результат сравнения */
function showHint(result) {
    const notInPlace = !result.matchedNotInPlace.length ? '0' : `${result.matchedNotInPlace.length} (${result.matchedNotInPlace.join(', ')})`;
    const inPlace = `${result.matchedInPlace.length} (${result.matchedInPlace.join(', ')})`;

    console.log(`
        Не угадали...
        Совпавших цифр не на своих местах - ${notInPlace}
        Цифр на своих местах - ${inPlace}
    `)
}


function app() {
    const secretMinLength = 3;
    const secretMaxLength = 6;
    const maxSteps = 10;

    let steps = maxSteps;
    let secretNotFound = true;

    showGameRules(secretMinLength, secretMaxLength, maxSteps);

    const secretNumber = generateSecretNumber(secretMinLength, secretMaxLength);

    while (secretNotFound && !!steps) {
        const userNumber = promptUserNumber();
        const compareResult = compareNumbers(secretNumber, userNumber);

        if (compareResult === 'success') {
            secretNotFound = false;
        } else {
            showHint(compareResult);
        }

        steps = steps - 1;
    }

    if (secretNotFound) {
        console.log('Secret was not found...')
    } else {
        console.log('Success!')
    }
}

app()

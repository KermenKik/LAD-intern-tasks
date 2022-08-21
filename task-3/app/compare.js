/** функция сравнивающиая числа */
function compareNumbers(secretNumber, userNumber) {
    const matchedNotInPlace = [];
    const matchedInPlace = [];

    if (secretNumber === userNumber) {
        return;
    }

    const cache = {};

    for (let i = 0; i < userNumber.length; i++) {
        const currentSecretLetter = secretNumber[i];
        const currentUserLetter = userNumber[i];

        if (currentSecretLetter === currentUserLetter) {
            matchedInPlace.push(currentUserLetter);
            if (cache[currentUserLetter]) {
                cache[currentUserLetter].push(i)
            } else {
                cache[currentUserLetter] = [i]
            }

            continue;
        }

        const match = secretNumber.match(new RegExp(currentUserLetter));

        if (match) {
            const index = match.index;
            const alreadyRegistered = cache[currentUserLetter] && cache[currentUserLetter].includes(index);

            if (!alreadyRegistered) {
                if (cache[currentUserLetter]) {
                    cache[currentUserLetter].push(index)
                } else {
                    cache[currentUserLetter] = [index]
                }

                matchedNotInPlace.push(currentUserLetter);
            }
        }
    }

    return {
        matchedNotInPlace,
        matchedInPlace
    }
}

module.exports = {
    compareNumbers
}
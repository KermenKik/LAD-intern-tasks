const { compareNumbers } = require('./compare.js')
const { generateSecretNumber } = require('./generate-secret-number.js')
const { showGameRules, showHint } = require('./output-messages.js')
const { promptUserNumber } = require('./prompt-user-number.js')

function app() {
    const gameConfig = {
        secretMinLength: 3,
        secretMaxLength: 6,
        maxSteps: 10,
    };
    let steps = gameConfig.maxSteps;
    let secretNotFound = true;

    showGameRules(gameConfig);

    const secretNumber = generateSecretNumber(gameConfig);

    while (secretNotFound && !!steps) {
        const userNumber = promptUserNumber();
        const compareResult = compareNumbers(secretNumber, userNumber);

        if (!compareResult) {
            secretNotFound = false
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

module.exports = {
    app
}

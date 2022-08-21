const readlineSync = require('readline-sync');

/** функция запрашивающее число у пользователя */
function promptUserNumber() {
    return readlineSync.question('Введите число... ');
}

module.exports = {
    promptUserNumber
}
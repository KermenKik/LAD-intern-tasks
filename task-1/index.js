/** В данном тексте изменить наименование дней недели на английский вариант. Например, строка "Старший братец ПОНЕДЕЛЬНИК ..." будет преобразована в "Старший братец MONDAY..."  */

let str = `Старший братец ПОНЕДЕЛЬНИК –
работяга, не бездельник.
Он неделю открывает
всех трудиться зазывает.

ВТОРНИК следует за братом
у него идей богато.

А потом СРЕДА-сестрица,
не пристало ей лениться.

Брат ЧЕТВЕРГ и так, и сяк,
он мечтательный чудак.

ПЯТНИЦА-сестра сумела
побыстрей закончить дело.

Предпоследний брат СУББОТА
не выходит на работу.

В гости ходит ВОСКРЕСЕНЬЕ,
очень любит угощенье
`;

const translations = {
    'ПОНЕДЕЛЬНИК': 'MONDAY',
    'ВТОРНИК': 'TUESDAY',
    'СРЕДА': 'WEDNESDAY',
    'ЧЕТВЕРГ': 'THURSDAY',
    'ПЯТНИЦА': 'FRIDAY',
    'СУББОТА': 'SATURDAY',
    'ВОСКРЕСЕНЬЕ': 'SUNDAY',
};

function replaceDays(string) {
    const regExp = new RegExp(Object.keys(translations).join('|'), 'g');

    string = string.replace(regExp, function(matchedDay) {
        return translations[matchedDay];
    });

    return string;
}

const result = replaceDays(str);

console.log(result);

const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    let result = '';

    for (let i = 0; i < expr.length; i += 10) {
        let subStr = expr.slice(i, i + 10);
        let morseStr = '';

        if (subStr == '**********') {
            result += ' ';
            continue;
        }
        for (k = 0; k < subStr.length; k += 2) {
            if (subStr.slice(k, k + 2) == '00') {
                continue;
            }
            switch (subStr.slice(k, k + 2)) {
                case '00':
                    continue;
                case '10':
                    morseStr += '.';
                    break;
                case '11':
                    morseStr += '-';
                    break;
            }
        }
        if (MORSE_TABLE.hasOwnProperty(morseStr)) {
            result += MORSE_TABLE[morseStr];
        }
    }
    return result;
}

module.exports = {
    decode
}
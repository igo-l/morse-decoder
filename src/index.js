const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let letter;
    let decodeSentence ='';
    for (let i = 0; i < expr.length; i += 10){
        letter = expr.substring(i, i + 10);
        letter = letter.replace(/11/g, '-').replace(/10/g, '.').replace(/0/g, '');
          for (let key in MORSE_TABLE)
            if (letter === key)
                decodeSentence+= MORSE_TABLE[key];
        if (letter === '**********') decodeSentence+= ' ';
    }
    return decodeSentence;
}

module.exports = {
    decode
}
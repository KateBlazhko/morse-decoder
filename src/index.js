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
    let arr = [];
    let letter;
    for (let i = 0; i < expr.length; i = i + 10 ) {
      letter = [(expr.substr(i , 10))];
      arr.push(letter);
    }
    let toDotDash = [];
    arr.forEach((element,index) => {
      toDotDash[index] = '';
      for (let i = 0; i < 10; i = i + 2 ) {
        letter = (element[0].substr(i , 2));
          if (letter === '10') {
          toDotDash[index] += '.';
        }
        if (letter === '11') {
          toDotDash[index] += '-';
        }
      }
    });
    return toDotDash.map(element => (element !== '') ? MORSE_TABLE[element] : ' ')
                    .join('');

  }

module.exports = {
    decode
}
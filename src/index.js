const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0"
};

function decode(expr) {
  const result = ""; // result string
  const space = "**********"; //space string
  for (i = 0; i < expr.length; ) {
    let symbols = expr.slice(i, i + 10); // get 10 symbols
    let morse = ""; // for code
    if (symbols == space) result += " ";
    else {
      for (i = 0; i < symbols.length; ) {
        let el = symbols.slice(i, i + 2); // get 2 symbols
        if (el === 10) {
          //check 10
          morse += ".";
        } else if (el === 11) {
          //check 11
          morse += "-";
        }
        i = i + 2;
      }
      for (let key in MORSE_TABLE) {
        //get key

        if (key == morse) {
          //check key
          result += MORSE_TABLE[key]; //write key
        }
      }
    }
    i = i + 10;
  }
  return result;
}

module.exports = {
  decode
};

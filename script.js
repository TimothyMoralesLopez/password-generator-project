function getPassword(length = 16) {
  if (length < 1) {
    throw Error("Invalid length! Please try again!"); 
  }

  let myPassword = ""; 
  let myChar;

  for (let i = 0; i < length; i++) {
    myChar = getRandomChar();
    myPassword += myChar; 
  }

  return myPassword; 
}

function getRandomCapital() {
  return String.fromCharCode(getRandomNum(65, 90));
}

function getRandomLowercase() {
  return String.fromCharCode(getRandomNum(97, 122)); 
}

function getRandomSpecial() {
  const specialString = '~`!@#$%^&*()-_+={}[]|\;:"<>,./?';
  return specialString.charAt(getRandomNum(0, specialString.length - 1));
}

function getRandomChar() {
  const charString = 'AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz0123456789`~!@#$%^&*()-_+={}[]|\;:"<>,./?';
  return charString.charAt(getRandomNum(0, charString.length - 1)); 
}

function getRandomNum(min, max) {
  if (min > max) {
    let temp = min;
    min = max; 
    max = temp; 
  }
  return (Math.floor(Math.random() * (max - min + 1)) + min);
}

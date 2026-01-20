function getRandomNum(min, max) {
  if (min > max) {
    let temp = min;
    min = max; 
    max = temp; 
  }
  return (Math.floor(Math.random() * (max - min + 1)) + min);
}

function getRandomChar() {
  const charString = 'AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz0123456789`~!@#$%^&*()-_+={}[]|\;:"<>,./?';
  return charString.charAt(getRandomNum(0, charString.length - 1)); 
}

function getPassword(length = 16) {
  if (length < 1) {
    throw Error("Invalid length! Please try again!"); 
  }

  let myPassword = ""; 

  for (let i = 0; i < length; i++) {
    myPassword += getRandomChar(); 
  }

  return myPassword; 
}

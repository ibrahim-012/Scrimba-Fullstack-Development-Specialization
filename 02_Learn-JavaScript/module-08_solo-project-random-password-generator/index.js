const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

const btnGeneratePassword = document.getElementById("btn-pwd");
const passwordContainer = document.getElementById("pwd-container");
const divPasswordOne = document.getElementById("pwd-1");
const divPasswordTwo = document.getElementById("pwd-2");
const divPasswordThree = document.getElementById("pwd-3");
const divPasswordFour = document.getElementById("pwd-4");
const copyAlert = document.getElementById("copy-alert");

let passwordLength = 15;

btnGeneratePassword.addEventListener("click", function () {
  generatePassword(divPasswordOne);
  generatePassword(divPasswordTwo);
  generatePassword(divPasswordThree);
  generatePassword(divPasswordFour);

  // password container becomes visible only when generate password button is clicked
  passwordContainer.style.display = "flex";

  // password copied alert becomes visible only when generate password button is clicked
  copyAlert.style.display = "block";

  // text and background color reset when new passwords generated
  copyAlert.style.backgroundColor = "#273549";
  copyAlert.textContent = "Click on any password to copy it";
});

divPasswordOne.addEventListener("click", function () {
  copyPassword(divPasswordOne);
  copyAlert.textContent = "Password copied!";

  // background color matches hover color to show which password has been copied
  copyAlert.style.backgroundColor = "#059669";
});

divPasswordTwo.addEventListener("click", function () {
  copyPassword(divPasswordTwo);
  copyAlert.textContent = "Password copied!";
  copyAlert.style.backgroundColor = "#0EA5E9";
});

divPasswordThree.addEventListener("click", function () {
  copyPassword(divPasswordThree);
  copyAlert.textContent = "Password copied!";
  copyAlert.style.backgroundColor = "#8B5CF6";
});

divPasswordFour.addEventListener("click", function () {
  copyPassword(divPasswordFour);
  copyAlert.textContent = "Password copied!";
  copyAlert.style.backgroundColor = "#F43F5E";
});

function generatePassword(passwordDiv) {
  let password = "";
  for (let i = 0; i < passwordLength; i++) {
    let index = Math.floor(Math.random() * characters.length);
    password += characters[index];
  }
  passwordDiv.textContent = password;
}

function copyPassword(passwordDiv) {
  let copyText = passwordDiv.textContent;
  navigator.clipboard.writeText(copyText);
}

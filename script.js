document.addEventListener("DOMContentLoaded", function (event) {
  var result;
  
  function addText(str) {
    document.getElementById("showTextBox").innerText = str;
  } 

  function getText() {
    return document.getElementById("userText").value;
  }

  // function getRegexCode() {
  //   return document.getElementById("codeInput").value;
  // }

  //function that will create an object with the pairs of words the user input. Original word - word that will replace.
  function createReplacerObj() {
    var replacer = {};
    var originalWords = document.querySelectorAll(".original");
    var replacingWords = document.querySelectorAll(".replacer");

    for (var i = 0; i < originalWords.length; i++) {
      replacer[originalWords[i].value] = replacingWords[i].value
    }
    return replacer;
  }

  //this function return a regex pattern based on the user input
  function createRegexCode() {
    var originalWords = document.querySelectorAll(".original");
    var regexCode = "";

    for (var i = 0; i < originalWords.length; i++) {
      if (i < originalWords.length - 1) {
        regexCode += originalWords[i].value + "|";
      } else {
        regexCode += originalWords[i].value;
      }
    }

    return regexCode;
  }

  //this function applies the replace function based on the regex code (created with creteRegexCode function) and the string (the text) provided by the user.
  function applyRegex(str) {
    var re = new RegExp(createRegexCode(), "g");
    var str = str.replace(re, function (match) {
      return createReplacerObj()[match];
    })
    result = str;
  }

  function showResult () {
    var resultBox = document.getElementById("resultBox");
    var resultText = document.getElementById("resultText");
    resultText.classList.remove("hidden");
    resultBox.innerText = result;
  }


  //Main function of the program.
  function main() {
    var userText = document.getElementById("userText");
    var myForm = document.getElementById("myForm");

    userText.addEventListener("keyup", function (event) {
      addText(getText());
    });

    myForm.addEventListener("submit", function (event) {
      applyRegex(getText());
      showResult();
      event.preventDefault();
    });
  };

  main();
});


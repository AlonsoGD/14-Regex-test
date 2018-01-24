// function convertHTML(str) {
//     // &colon;&rpar;
//     return str;
// }

// convertHTML("test");


// Convert the characters & , < , > , " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

// Remember to use Read - Search - Ask
// if you get stuck.Try to pair program.Write your own code.

// Here are some helpful links:
document.addEventListener("DOMContentLoaded", function (event) {
  var regexCode;

  function addText(str) {
    document.getElementById("showTextBox").innerText = str;
  } 
  function getText() {
    return document.getElementById("userText").value;
  }
  function getRegexCode() {
    return document.getElementById("codeInput").value;;
  }

  function applyRegex() {
    var re = new RegExp(regexCode, "i")
    var result = getText().match(re);
    console.log(result);
  }

  function main() {
    var userText = document.getElementById("userText");
    var myForm = document.getElementById("myForm");

    userText.addEventListener("keyup", function (event) {
      addText(getText());
    });

    myForm.addEventListener("submit", function (event) {
      regexCode = getRegexCode();
      applyRegex();
      event.preventDefault();
    });
  };

  main();
});


////////////////////


// var newstring = "Simple patterns are constructed of characters for which you want to find a direct match. For example, the pattern /abc/ matches character combinations in strings only when exactly the characters 'abc' occur together and in that order. Such a match would succeed in the strings"

// var re = /match/;
// var str = "there is an abc"
// var result = newstring.match(re);
// console.log(result);
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


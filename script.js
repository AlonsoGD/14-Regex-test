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

  function createReplacerObj() {
    var replacer;
    var originalValue = document.getElementById("original_1").value;
    var replacerValue = document.getElementById("replacer_1").value;
    return replacer = {
      [originalValue] : replacerValue,
    }
  }

  function applyRegex(str) {
    var re = new RegExp(document.getElementById("original_1").value, "g");
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


var counter = 0;
var app = angular.module("app", []);
counter = 'Test';
  function random_rgba() {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
  }
  function updateCounter() {
    if (!counter) {
      console.log('Counter does not have a value');
      counter = 0;
    }
    var label = document.getElementById('counter');
    const btn = document.getElementById('myButton');
    label.innerHTML = ++counter;
    btn.style.color = random_rgba();
  }

  function displayText() {
    var text = document.getElementById('myText');
     var textValue = text.value;
     var nameLabel = document.getElementById('nameLabel');
     nameLabel.innerHTML = textValue;
  }
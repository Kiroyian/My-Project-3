let display = document.getElementById('display');

  function input(value) {
    display.value += value;
  }

  function calculate() {
    try {
      display.value = eval(display.value);
    } catch (e) {
      display.value = 'Syntax Error';
    }
  }

  function clearDisplay() {
    display.value = '';
  }
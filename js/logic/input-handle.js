function inputHandle(obj) {

  const button = obj.button;
  const sign = obj.sign;
  const signOutput = obj.signOutput;
  const input = obj.inputOutput;
  const storage = obj.storageOutput;
  const number = +button;

  // click on number button
  if ( button && !Number.isNaN(number) && typeof number === 'number' ) {
    if (input.dataset.isPrevBtnEqual === 'true') {
      input.textContent = number;
      input.dataset.isPrevBtnEqual = 'false';

    } else if (input.textContent === '0') {
      input.textContent = number;

    } else input.textContent += number;

  //  click on sign (not '=' and not 'clear')
  } else if ( (sign !== '=') && (sign !== 'clear') ) {
    if (storage.textContent && signOutput.textContent && input.textContent) {
      storage.textContent = result[signOutput.textContent](+storage.textContent, +input.textContent);
      signOutput.textContent = sign;
      clearOutput(input);

    } else {
      signOutput.textContent = sign;
      storage.textContent = input.textContent;
      clearOutput(input);
    }

  //  click on 'clear'
  } else if ( (sign !== '=') && (sign === 'clear') ) {
    input.textContent = 0;
    clearOutput(signOutput, storage);

  //  click on '='
  } else if ( (sign === '=') && (sign !== 'clear') ) {
    if ( storage.textContent && signOutput.textContent && input.textContent ) {
      input.textContent = result[signOutput.textContent](+storage.textContent, +input.textContent);
      clearOutput(signOutput, storage);
      input.dataset.isPrevBtnEqual = 'true';
    }
  }

}

function clearOutput(...args) {
  for (let arg of args) {
    arg.textContent = '';
  }
}

const result = {
  '+': function (a, b) {
    return a + b;
  },
  '-': function (a, b) {
    return a - b;
  },
  '*': function (a, b) {
    return a * b;
  },
  '/': function (a, b) {
    return a / b;
  }
};
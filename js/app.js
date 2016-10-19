const calc = document.querySelector('.calc');
const header = document.querySelector('.calc__name');
const storageOutput = document.querySelector('.calc__storage-output');
const signOutput = document.querySelector('.calc__sign-output');
const inputOutput = document.querySelector('.calc__input-output');
const buttons = document.querySelector('.calc__cells');

buttons.onclick = function (event) {
  const target = event.target;
  const button = target.textContent;
  const sign = target.dataset.sign;

  const params = {
    button: button,
    sign: sign,
    signOutput: signOutput,
    inputOutput: inputOutput,
    storageOutput: storageOutput
  };

  inputHandle(params);
};

// drag'n'drop function
header.onmousedown = function (event) {

  const coords = getCoords(calc);
  const shiftX = event.pageX - coords.left;
  const shiftY = event.pageY - coords.top;

  calc.style.position = 'absolute';

  moveAt(event);

  document.onmousemove = function (event) {
    moveAt(event);
  };

  calc.onmouseup = function() {
    document.onmousemove = null;
    calc.onmouseup = null;
  };

  function moveAt(event) {
    calc.style.left = event.pageX - shiftX + 'px';
    calc.style.top = event.pageY - shiftY + 'px';
  }

  function getCoords(elem) {
    const box = elem.getBoundingClientRect();

    return {
      top: box.top + pageYOffset,
      left: box.left + pageXOffset
    };

  }

};

calc.ondragstart = function() {
  return false;
};

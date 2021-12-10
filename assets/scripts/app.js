const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

function getUserNumberInput() {
  return parseInt(userInput.value);
}

function creatAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription); //from vendor file
}
function writeToLog(
  operationIdentifier,
  prevResult,
  operationNumber,
  newResult
) {
  const logEntry = {
    operation: operationIdentifier,
    prevResult: prevResult,
    Number: operationNumber,
    result: newResult,
  };
  logEntries.push(logEntry);
  console.log(logEntries);
}

function calculateResult(calculationType) {
  if (
    calculationType !== 'ADD' &&
    calculationType !== 'SUBTRACTION' &&
    calculationType !== 'MULTIPLICATION' &&
    calculationType !== 'DIVIDE'
  ) {
    return;
  }
  if (
    calculationType === 'ADD' ||
    calculationType === 'SUBTRACTION' ||
    calculationType === 'MULTIPLICATION' ||
    calculationType === 'DIVIDE'
  ) {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    let mathOperator;
    if (calculationType === 'ADD') {
      currentResult += enteredNumber;
      mathOperator = '+';
    } else if (calculationType === 'SUBTRACTION') {
      currentResult -= enteredNumber;
      mathOperator = '-';
    } else if (calculationType === 'MULTIPLICATION') {
      currentResult *= enteredNumber;
      mathOperator = '*';
    } else if (calculationType === 'DIVIDE') {
      currentResult /= enteredNumber;
      mathOperator = '/';
    }

    creatAndWriteOutput(mathOperator, initialResult, enteredNumber);
    writeToLog(calculationType, initialResult, enteredNumber, currentResult);
  }
}
function add() {
  calculateResult('ADD');
}

function subtraction() {
  calculateResult('SUBTRACTION');
}

function multiplication() {
  calculateResult('MULTIPLICATION');
}

function divide() {
  calculateResult('DIVIDE');
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtraction);
multiplyBtn.addEventListener('click', multiplication);
divideBtn.addEventListener('click', divide);

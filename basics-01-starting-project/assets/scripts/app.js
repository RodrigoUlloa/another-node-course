const defaultResult = 0;
let currentResult = defaultResult;
let logEntries= [];

function getUserNumberInput() {
  return parseInt(userInput.value);
}

function createAndWriteLog(operator, resultBeforeCalc, calcNumber){
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`
  outputResult(currentResult, calcDescription)
}

function writeToLog(operationIdentifier, prevResult, operationNumber, newResult){
  const logEntry = {
    operation: operationIdentifier,
    prevResult: prevResult,
    number: operationNumber,
    result: newResult
  };
  logEntries.push(logEntry);
  console.log(logEntries);
}

function calculateResult(calculationType){
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult 
  if (calculationType === 'ADD') {
    currentResult += enteredNumber;
    mathOperator = '+';
  } else {
    currentResult -= enteredNumber;
    mathOperator = '-'
  }
  
  createAndWriteLog(mathOperator, initialResult, enteredNumber);
  writeToLog(calculationType, initialResult, enteredNumber, currentResult)
}

function add(){
  calculateResult('ADD');
}

function subtract(){
  calculateResult('SUBTRACT');
}

function mutiply(){
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult
  currentResult *= enteredNumber;
  createAndWriteLog('*', initialResult, enteredNumber);
  writeToLog('MULTIPLY', initialResult, enteredNumber, currentResult)
}

function divide(){
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult
  currentResult /= enteredNumber;
  createAndWriteLog('/', initialResult, enteredNumber);
  writeToLog('DIVDE', initialResult, enteredNumber, currentResult)
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', mutiply);
divideBtn.addEventListener('click', divide);
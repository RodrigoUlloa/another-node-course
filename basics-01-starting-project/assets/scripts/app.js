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

function add(){
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult 
  currentResult += enteredNumber;
  //currentRestult++ increment variable+1 // currentResult-- dicrement-1
  createAndWriteLog('+', initialResult, enteredNumber);
  writeToLog('ADD', initialResult, enteredNumber, currentResult)
}

function subtract(){
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult
  currentResult = currentResult - enteredNumber;
  createAndWriteLog('-', initialResult, enteredNumber);
  writeToLog('SUBTRACT', initialResult, enteredNumber, currentResult)
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
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

function add(){
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult 
  currentResult += enteredNumber;
  //currentRestult++ increment variable+1 // currentResult-- dicrement-1
  createAndWriteLog('+', initialResult, enteredNumber);
  logEntries.push(enteredNumber);
  console.log(logEntries[1]);
  
}

function subtract(){
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult
  currentResult = currentResult - enteredNumber;
  createAndWriteLog('-', initialResult, enteredNumber);
}

function mutiply(){
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult
  currentResult *= enteredNumber;
  createAndWriteLog('*', initialResult, enteredNumber);
}

function divide(){
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult
  currentResult /= enteredNumber;
  createAndWriteLog('/', initialResult, enteredNumber);
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', mutiply);
divideBtn.addEventListener('click', divide);
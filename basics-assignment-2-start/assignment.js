const task3Element = document.getElementById('task-3');

function simpleAlert(){
  alert('chupala');
}

function callAlert(name){
  return `Hola ${name}`
}

simpleAlert()
callAlert('puto');

task3Element.addEventListener('click', simpleAlert);

function chain(first, second, thrid){
  return `${first} ${second} ${thrid}`
}

alert(chain('puto','cerdo','choto'));
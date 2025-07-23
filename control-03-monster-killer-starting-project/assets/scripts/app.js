const ATTACK_VALUE = 10;
const STRONG_ATTACK_VALUE = 17;
const MONSTER_ATTACK_VALUE = 16;
const HEAL_VALUE = 20;

const enteredValue = prompt('cuanta vida queri', '100');

let chosenMaxLife = parseInt(enteredValue);

if (isNaN(chosenMaxLife) || chosenMaxLife <= 0) {
  chosenMaxLife = 100;
}

let currentMonterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;
let hasBonusLife = true;

adjustHealthBars(chosenMaxLife);

function reset() {
  currentMonterHealth = chosenMaxLife;
  currentPlayerHealth = chosenMaxLife;
  resetGame(chosenMaxLife);
}

function endRound() {
  const initialPlayerHealth = currentMonterHealth;
  const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
  currentPlayerHealth -= playerDamage;

  if (currentPlayerHealth <= 0 && hasBonusLife ){
    hasBonusLife = false;
    removeBonusLife();
    currentPlayerHealth = initialPlayerHealth;
    setPlayerHealth(initialPlayerHealth);
    alert('jackpot!! BONUS LIFE');
  }

  if (currentMonterHealth <= 0 && currentPlayerHealth > 0){
    alert('c muere');
  } else if (currentPlayerHealth <= 0 && currentMonterHealth > 0) {
    alert('me muero unu');
  } else if (currentPlayerHealth <= 0 && currentMonterHealth <= 0) {
    alert('empate');
  }

  if(currentMonterHealth <= 0 || currentPlayerHealth <= 0){
    reset();
  }
}

function attackMonster(mode) {
  let maxDamage;
  if (mode === 'ATTACK'){
    maxDamage = ATTACK_VALUE;
  } else if (mode === 'STRONG_ATTACK') {
    maxDamage = STRONG_ATTACK_VALUE;
  }
  const damage = dealMonsterDamage(maxDamage);
  currentMonterHealth -= damage;
  endRound();
}

function attackHandler()  {
  attackMonster('ATTACK');
}

function strongAstrongAttackBtn(){
  attackMonster('STRONG_ATTACK');
}

function healPlayerHandler(){
  let healValue;
  if (currentPlayerHealth >= chosenMaxLife - HEAL_VALUE){
    alert('ya teni mucha vida deja de wear');
    healValue = chosenMaxLife - currentPlayerHealth;
  } else {
    healValue = HEAL_VALUE;
  }
  increasePlayerHealth(healValue);
  currentPlayerHealth += healValue;
  endRound();
}

attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAstrongAttackBtn);
healBtn.addEventListener('click', healPlayerHandler)
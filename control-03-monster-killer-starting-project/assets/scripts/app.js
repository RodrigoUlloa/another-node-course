const ATTACK_VALUE = 10;
const STRONG_ATTACK_VALUE = 17;
const MONSTER_ATTACK_VALUE = 16;
const HEAL_VALUE = 20;

const MODE_ATTACK = 'ATTACK';
const MODE_STRONG_ATTACK = 'STRONG_ATTACK';
const LOG_EVENT_PLAYER_ATTACK = 'PLAYER_ATTACK';
const LOG_EVENT_PLAYER_STRONG_ATTACK = 'PLAYER_STRONG_ATTACK';
const LOG_EVENT_MONSTER_ATTACK = 'MONSTER_ATTACK';
const LOG_EVENT_PLAYER_HEAL = 'PLAYER_HEAL';
const LOG_EVENT_GAME_OVER = 'GAME_OVER';

const enteredValue = prompt('cuanta vida queri', '100');

let chosenMaxLife = parseInt(enteredValue);
let battleLog = [];

if (isNaN(chosenMaxLife) || chosenMaxLife <= 0) {
  chosenMaxLife = 100;
}

let currentMonterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;
let hasBonusLife = true;

adjustHealthBars(chosenMaxLife);

function writeTolog(ev,val, monsterHealth, playerHealth) {
  let logEntry = {
    event: ev,
    value: val,
    finalMonsterHealth: monsterHealth,
    finalPlayerHealth: playerHealth
  }
  if (ev === LOG_EVENT_PLAYER_ATTACK) {
    logEntry.target = 'MONSTER';
  } else if (ev === LOG_EVENT_PLAYER_STRONG_ATTACK){
    logEntry = {
      event: ev,
      value: val,
      target:'MONSTER',
      finalMonsterHealth: monsterHealth,
      finalPlayerHealth: playerHealth
    };
  } else if (ev === LOG_EVENT_MONSTER_ATTACK){
    logEntry = {
      event: ev,
      value: val,
      target:'PLAYER',
      finalMonsterHealth: monsterHealth,
      finalPlayerHealth: playerHealth
    };
    
  } else if (ev === LOG_EVENT_PLAYER_HEAL){
    logEntry = {
      event: ev,
      value: val,
      target:'PLAYER',
      finalMonsterHealth: monsterHealth,
      finalPlayerHealth: playerHealth
    };
  } else if ( ev === LOG_EVENT_GAME_OVER){
    logEntry = {
      event: ev,
      value: val,
      finalMonsterHealth: monsterHealth,
      finalPlayerHealth: playerHealth
    };
  }
  battleLog.push(logEntry);
}


function reset() {
  currentMonterHealth = chosenMaxLife;
  currentPlayerHealth = chosenMaxLife;
  resetGame(chosenMaxLife);
}

function endRound() {
  const initialPlayerHealth = currentMonterHealth;
  const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
  currentPlayerHealth -= playerDamage;
  writeTolog(
    LOG_EVENT_MONSTER_ATTACK,
    playerDamage,
    currentMonterHealth,
    currentPlayerHealth
  );

  if (currentPlayerHealth <= 0 && hasBonusLife ){
    hasBonusLife = false;
    removeBonusLife();
    currentPlayerHealth = initialPlayerHealth;
    setPlayerHealth(initialPlayerHealth);
    alert('jackpot!! BONUS LIFE');
  }

  if (currentMonterHealth <= 0 && currentPlayerHealth > 0){
    alert('c muere el mounstete');
    writeTolog(
      LOG_EVENT_GAME_OVER,
      'PLAYER WON',
      currentMonterHealth,
      currentPlayerHealth
    );
  } else if (currentPlayerHealth <= 0 && currentMonterHealth > 0) {
    alert('me muero unu');
    writeTolog(
      LOG_EVENT_GAME_OVER,
      'Monster WON',
      currentMonterHealth,
      currentPlayerHealth
    );
  } else if (currentPlayerHealth <= 0 && currentMonterHealth <= 0) {
    alert('empate');
    writeTolog(
      LOG_EVENT_GAME_OVER,
      'DRAW',
      currentMonterHealth,
      currentPlayerHealth
    );
  }

  if(currentMonterHealth <= 0 || currentPlayerHealth <= 0){
    reset();
  }
}

function attackMonster(mode) {
  let maxDamage;
  let logEvent;
  if (mode === MODE_ATTACK){
    maxDamage = ATTACK_VALUE;
    logEvent = LOG_EVENT_PLAYER_ATTACK;
  } else if (mode === MODE_STRONG_ATTACK) {
    maxDamage = STRONG_ATTACK_VALUE;
    logEvent = LOG_EVENT_PLAYER_STRONG_ATTACK;
  }
  const damage = dealMonsterDamage(maxDamage);
  currentMonterHealth -= damage;
  writeTolog(
    logEvent,
    damage,
    currentMonterHealth,
    currentPlayerHealth
  );
  endRound();
}

function attackHandler()  {
  attackMonster(MODE_ATTACK);
}

function strongAstrongAttackBtn(){
  attackMonster(MODE_STRONG_ATTACK);
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
  writeTolog(
    LOG_EVENT_PLAYER_HEAL,
    healValue,
    currentMonterHealth,
    currentPlayerHealth
  );
  endRound();
}

function printLogHandler(){
  console.log(battleLog);
}

attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAstrongAttackBtn);
healBtn.addEventListener('click', healPlayerHandler);
logBtn.addEventListener('click', printLogHandler);
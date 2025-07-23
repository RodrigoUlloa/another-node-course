const ATTACK_VALUE = 10;
const STRONG_ATTACK_VALUE = 17;
const MONSTER_ATTACK_VALUE = 16;
const HEAL_VALUE = 20;

let chosenMaxLife = 100;
let currentMonterHealt = chosenMaxLife;
let currentPlayerHealt = chosenMaxLife;

adjustHealthBars(chosenMaxLife);

function endRound() {
  const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
  currentPlayerHealt -= playerDamage;
  if (currentMonterHealt <= 0 && currentPlayerHealt > 0){
    alert('c muere');
  } else if (currentPlayerHealt <= 0 && currentMonterHealt > 0) {
    alert('me muero unu')
  } else if (currentPlayerHealt <= 0 && currentMonterHealt <= 0) {
    alert('empate')
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
  currentMonterHealt -= damage;
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
  if (currentPlayerHealt >= chosenMaxLife - HEAL_VALUE){
    alert('ya teni mucha vida deja de wear');
    healValue = chosenMaxLife - currentPlayerHealt;
  } else {
    healValue = HEAL_VALUE;
  }
  increasePlayerHealth(healValue);
  currentPlayerHealt += healValue;
  endRound();
}

attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAstrongAttackBtn);
healBtn.addEventListener('click', healPlayerHandler)
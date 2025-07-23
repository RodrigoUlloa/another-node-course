const ATTACK_VALUE = 10;
const STRONG_ATTACK_VALUE = 17;
const MONSTER_ATTACK_VALUE = 14;

let chosenMaxLife = 100;
let currentMonterHealt = chosenMaxLife;
let currentPlayerHealt = chosenMaxLife;

adjustHealthBars(chosenMaxLife);

function attackMonster(mode) {
  let maxDamage;
  if (mode === 'ATTACK'){
    maxDamage = ATTACK_VALUE;
  } else if (mode === 'STRONG_ATTACK') {
    maxDamage = STRONG_ATTACK_VALUE;
  }
  const damage = dealMonsterDamage(maxDamage);
  currentMonterHealt -= damage;
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

function attackHandler()  {
  attackMonster('ATTACK');
}

function strongAstrongAttackBtn(){
  attackMonster('STRONG_ATTACK');
}

attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAstrongAttackBtn);
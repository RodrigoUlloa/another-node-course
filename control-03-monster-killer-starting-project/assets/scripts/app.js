const ATTACK_VALUE = 10;
const MONSTER_ATTACK_VALUE = 10;

let chosenMaxLife = 100;
let currentMonterHealt = chosenMaxLife;
let currentPlayerHealt = chosenMaxLife;

adjustHealthBars(chosenMaxLife);

function attackHandler() {
  const damage = dealMonsterDamage(ATTACK_VALUE);
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

attackBtn.addEventListener('click', attackHandler);
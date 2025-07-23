const ATTACK_VALUE = 10;

let  chosenMaxLife = 100;
let currentMonterHealt = chosenMaxLife;
let currentPlayerHealt = chosenMaxLife;

adjustHealthBars(chosenMaxLife);

function attackHandler() {
  const damage = dealMonsterDamage(ATTACK_VALUE);
  currentMonterHealt -= damage;
}

attackBtn.addEventListener('click', attackHandler);
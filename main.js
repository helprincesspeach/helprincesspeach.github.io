function iShoot(enemy) {
	enemy.classList.add("dead");

	if (!livingEnemies().length) {
		window.location = "https://helprincesspeach.github.io/map.html";
	}
}

function enemyAttacksMe (enemy) {
	enemy.classList.add("showing");
	setTimeout(()=> {
		enemyShootsMe(enemy);
	}, 1000);


	setTimeout( ()=>{
		enemy.classList.remove("showing");
	}, 3000);

}

function enemyShootsMe (enemy) {
	if (!enemy.classList.contains("dead")) {
		enemy.classList.add("shooting");
	updateHealthPoints(healthPoints - 20);


	setTimeout( ()=> {
		enemy.classList.remove("shooting");
	}, 200);


	}
	
}

function livingEnemies() {
	return document.querySelectorAll(".enemy:not(.dead)");
}

function randomEnemyAttacks() {
	var randomEnemyNo = Math.random() * livingEnemies().length;
	randomEnemyNo = Math.floor(randomEnemyNo);
	var enemy = livingEnemies() [randomEnemyNo];

	var randomDelay = Math.random() * 2000 + 1000;


	setTimeout( ()=> {
		enemyAttacksMe(enemy);
		randomEnemyAttacks();
	}, randomDelay);
}

var healthPoints = 100;

function updateHealthPoints(points) {
	healthPoints = points;
	var healthBar = document.querySelector("#healthBar");

	healthBar.style.width = points + "%";

	if (healthPoints < 1) {
		alert("You failed!");
		window.location.reload();
	}
}
function newGame() {
	randomEnemyAttacks();
	document.querySelector("button").style.display = "none";

}



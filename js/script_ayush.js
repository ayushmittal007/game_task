console.log("ayush");
var canvas = document.querySelector("#canvas");
var cx = canvas.getContext("2d");

var score_1 = 0;
var score_2 = 0;
var angle_1 = Math.PI / 2;
var angle_2 = Math.PI / 2;
var remChances_1 = 3;
var remChances_2 = 3;
var isPaused = false;
var isFire_1 = false;
var isFire_2 = false;
var weapon_1 = "heaver";
var weapon_2 = "heaver";

function displayText() {
	
	cx.font = "30px Times New Roman";
	cx.fillStyle = "red";
	cx.textAlign = "center";
	cx.fillText("POCKET TANKS", canvas.width / 2, 50);

	cx.font = "20px CURSIVE";
	cx.fillStyle = "white";
	cx.textAlign = "left";
	cx.fillText(`Player 1`, 20, 30);

	cx.font = "15px CURSIVE";
	cx.fillStyle = "lightgreen";
	cx.textAlign = "left";
	cx.fillText(`SCORE : ${score_1}`, 20, 55);

	cx.font = "15px CURSIVE";
	cx.fillStyle = "lightblue";
	cx.fillText(`Chances : ${remChances_1}`, 20, 80);
	
	cx.font = "20px CURSIVE";
	cx.fillStyle = "white";
	cx.textAlign = "right";
	cx.fillText(`Player 2`, canvas.width - 20, 30);

	cx.font = "15px CURSIVE";
	cx.fillStyle = "lightgreen";
	cx.textAlign = "right";
	cx.fillText(`SCORE : ${score_2}`, canvas.width - 20, 55);

	cx.font = "15px CURSIVE";
	cx.fillStyle = "lightblue";
	cx.textAlign = "right";
	cx.fillText(`Chances : ${remChances_2}`, canvas.width - 20, 80);
}

function changeWeapon() {
	if (document.getElementById("weapon-selector").value == "heaver") {
		weapon_1 = "heaver";
		weapon_2 = "heaver";
	}
	if (document.getElementById("weapon-selector").value == "hurler") {
		weapon_1 = "hurler";
		weapon_2 = "hurler";
	}
	if (document.getElementById("weapon-selector").value == "pitcher") {
		weapon_1 = "pitcher";
		weapon_2 = "pitcher";
	}
}

const fire = document.querySelector("#fire-weapon");
fire.addEventListener("click", function(){
	function playExplosionSound() {
		var explosionSound = document.getElementById("explosionSound");
		explosionSound.play();
	}
	playExplosionSound();
	if (remChances_1 == 3) {
		isFire_1 = true;
		if (remChances_1 >= 1) {
			remChances_1--;
		}
		isFire_2 = false;
	} else if (isFire_1 && !isFire_2) {
		isFire_2 = true;
		if (remChances_2 >= 1) {
			remChances_2--;
		}
		isFire_1 = false;
	} else if (!isFire_1 && isFire_2) {
		isFire_1 = true;
		if (remChances_1 >= 1) {
			remChances_1--;
		}
		isFire_2 = false;
	}
});

// slider
var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value + "deg";

slider.oninput = function() {
	output.innerHTML = `${this.value}deg`;
	angle_1 = Math.PI * this.value / 180;
	angle_2 = Math.PI * this.value / 180;
};

const controlItems = document.querySelector("#control-items");
const pause = document.querySelector(".fa-pause-circle");
const redo = document.querySelector(".fa-redo");
let resume = null;
function restartGame() {
	document.location.reload(true);
}
controlItems.addEventListener("click", function(e) {
	if (e.target == pause && !resume) {
		resume = document.createElement("i");
		resume.className = "far fa-play-circle";
		resume.style.marginRight = 10 + "px";
		controlItems.insertBefore(resume, pause);
		isPaused = true;
	} else if (e.target == redo) {
		if (resume) {
			controlItems.removeChild(resume);
			resume = null;
			restartGame();
		} else {
			restartGame();
		}
	} else if (e.target == resume) {
		controlItems.removeChild(resume);
		resume = null;
		isPaused = false;
	}
});
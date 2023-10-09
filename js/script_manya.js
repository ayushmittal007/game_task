
// for projectile-one
var x_1;
var y_1;
var u_1 = 82;
var time_1 = 0.01;
var timeOfFlight_1 = 2 * u_1 * Math.sin(angle_1) / 10;
var hitMountain_1 = false;

function resetProjectileTwo() {
	x_1 = 0;
	y_1 = 0;
	u_1 = 82;
	time_1 = 0.01;
	timeOfFlight_1 = 2 * u_1 * Math.sin(angle_1) / 10;
	hitMountain_1 = false;
}

// For  Projectile Two
var x_2;
var y_2;
var u_2 = 82;
var time_2 = 0.1;
var timeOfFlight_2 = 2 * u_2 * Math.sin(angle_2) / 10;
var hitMountain_2 = false;

function resetProjectileOne() {
	x_2 = 0;
	y_2 = 0;
	u_2 = 82;
	time_2 = 0.1;
	timeOfFlight_2 = 2 * u_2 * Math.sin(angle_2) / 10;
	hitMountain_2 = false;
}

function changePower() {
	if (document.getElementById("power-selector").value == "lower") {
		u_1 = 50;
		u_2 = 50;
	}
	if (document.getElementById("power-selector").value == "moderate") {
		u_1 = 70;
		u_2 = 70;
	}
	if (document.getElementById("power-selector").value == "higher") {
		u_1 = 85;
		u_2 = 85;
	}
}

function drawGround() {
	cx.beginPath();
	cx.moveTo(0, maxHeight);
	cx.lineTo(canvas.width, maxHeight);
	cx.strokeStyle = "#f0C8f3";
	cx.stroke();
	cx.closePath();
}

// projectiles
function calcPositionOne() {
	x_1 = u_1 * Math.cos(angle_1) * time_1;
	y_1 = -(u_1 * Math.sin(angle_1) * time_1 - 0.5 * 10 * time_1 * time_1);
}

function drawProjectileOne() {
	calcPositionOne();
	for (let i = 0; i < slopeArray.length; ++i) {
		if (120 + x_1 >= 187 && 120 + x_1 < 560) {
			let index = 120 + x_1 - 187;
			if (y_1 + 320 > slopeArray[Math.floor(index)].y) {
				hitMountain_1 = true;
			}
		}
	}
	if (!hitMountain_1) {
		time_1 += 0.1;
		// color of goli 
		if (weapon_1 == "hurler") {
			cx.beginPath();
			cx.arc(120 + x_1, 320 + y_1, 12, 0, 2 * Math.PI);
			cx.fillStyle = "#FFFF00";
			cx.fill();
			cx.closePath();
			cx.beginPath();
			cx.arc(120 + x_1, 320 + y_1, 8, 0, 2 * Math.PI);
			cx.fillStyle = "#1A237E";
			cx.fill();
			cx.closePath();
			cx.beginPath();
			cx.arc(120 + x_1, 320 + y_1, 4, 0, 2 * Math.PI);
			cx.fillStyle = "#D50000";
			cx.fill();
			cx.closePath();
		} else if (weapon_1 == "pitcher") {
			cx.beginPath();
			cx.arc(120 + x_1, 320 + y_1, 8, 0, 2 * Math.PI);
			cx.fillStyle = "#1A237E";
			cx.fill();
			cx.closePath();
			cx.beginPath();
			cx.arc(120 + x_1, 320 + y_1, 4, 0, 2 * Math.PI);
			cx.fillStyle = "#D50000";
			cx.fill();
			cx.closePath();
		} else {
			cx.beginPath();
			cx.arc(120 + x_1, 320 + y_1, 4, 0, 2 * Math.PI);
			cx.fillStyle = "#D50000";
			cx.fill();
			cx.closePath();
		}
	}
	if (120 + x_1 > 611 && 120 + x_1 < 661 && 320 + y_1 > 307) {
		if (weapon_1 == "hurler") {
			score_1 += 1500;
		} else if (weapon_1 == "pitcher") {
			score_1 += 1000;
		} else {
			score_1 += 500;
		}
	}
}

function calcPositionTwo() {
	x_2 = -u_2 * Math.cos(angle_2) * time_2;
	y_2 = -(u_2 * Math.sin(angle_2) * time_2 - 0.5 * 10 * time_2 * time_2);
}

function drawProjectileTwo() {
	calcPositionTwo();
	for (let i = 0; i < slopeArray.length; ++i) {
		if (621 + x_2 >= 187 && 621 + x_2 < 560) {
			let index = 621 + x_2 - 187;
			if (y_2 + 320 > slopeArray[Math.floor(index)].y) {
				hitMountain_2 = true;
			}
		}
	}
	if (!hitMountain_2) {
		time_2 += 0.1;
		// for color of goli
		if (weapon_2 == "hurler") {
			cx.beginPath();
			cx.arc(621 + x_2, 320 + y_2, 12, 0, 2 * Math.PI);
			cx.fillStyle = "#FFFF00";
			cx.fill();
			cx.closePath();
			cx.beginPath();
			cx.arc(621 + x_2, 320 + y_2, 8, 0, 2 * Math.PI);
			cx.fillStyle = "#1A237E";
			cx.fill();
			cx.closePath();
			cx.beginPath();
			cx.arc(621 + x_2, 320 + y_2, 4, 0, 2 * Math.PI);
			cx.fillStyle = "#D50000";
			cx.fill();
			cx.closePath();
		} 
		else if (weapon_2 == "pitcher") {
			cx.beginPath();
			cx.arc(621 + x_2, 320 + y_2, 8, 0, 2 * Math.PI);
			cx.fillStyle = "#1A237E";
			cx.fill();
			cx.closePath();
			cx.beginPath();
			cx.arc(621 + x_2, 320 + y_2, 4, 0, 2 * Math.PI);
			cx.fillStyle = "#D50000";
			cx.fill();
			cx.closePath();
		} 
		else {
			cx.beginPath();
			cx.arc(621 + x_2, 320 + y_2, 4, 0, 2 * Math.PI);
			cx.fillStyle = "#D50000";
			cx.fill();
			cx.closePath();
		}
	}
	if (621 + x_2 > 72 && 621 + x_2 < 142 && 320 + y_2 > 307) {
		if (weapon_2 == "hurler") {
			score_2 += 1500;
		} 
		else if (weapon_2 == "pitcher") {
			score_2 += 1000;
		} 
		else {
			score_2 += 500;
		}
	}
}

function drawMyGame() {
	let tanksFinishedFiring = false;  
	if (!isPaused) {
		cx.clearRect(0, 0, canvas.width, canvas.height);
		displayText();

		//Projectile one
		if (isFire_1 && remChances_1 >= 0) {
			if (time_1 < timeOfFlight_1) {
				drawProjectileOne();
			}
			if (time_1 > timeOfFlight_1 || hitMountain_1) {
				resetProjectileOne();
			}
		}
		//Projectile 2
		if (isFire_2 && remChances_2 >= 0) {
			if (time_2 < timeOfFlight_2) {
				drawProjectileTwo();
			}
			if (time_2 > timeOfFlight_2 || hitMountain_2) {
				resetProjectileTwo();
			}
		}
		drawMountain();
		drawGround();
		
		if(remChances_1 == 0 && remChances_2 == 0){
			tanksFinishedFiring = true;
		}

		if(tanksFinishedFiring && time_2 > timeOfFlight_2){
			if (score_1 > score_2) {
				cx.font = "bold 25px";
				cx.fillStyle = "#FBC02D";
				cx.textAlign = "center";
				cx.fillText("PLAYER 1 WON !!", canvas.width / 2, 150);

				cx.font = "14px";
				cx.fillStyle = "#E0E0E0";
				cx.textAlign = "center";
				cx.fillText(`(Click Retry to Play Again)`, canvas.width / 2, 180);
			} 
			else if (score_1 == score_2) {
				cx.font = "bold 25px Times New Roman";
				cx.fillStyle = "#FBC02D";
				cx.textAlign = "center";
				cx.fillText("GAME TIED !!", canvas.width / 2, 150);

				cx.font = "14px";
				cx.fillStyle = "#E0E0E0";
				cx.textAlign = "center";
				cx.fillText(`(Click Retry to Play Again)`, canvas.width / 2, 180);
			} 
			else {
				cx.font = "bold 34px Times New Roman";
				cx.fillStyle = "#FBC02D";
				cx.textAlign = "center";
				cx.fillText("PLAYER 2 WON !!", canvas.width / 2, 150);

				cx.font = "14px Verdana";
				cx.fillStyle = "#E0E0E0";
				cx.textAlign = "center";
				cx.fillText(`(Click Retry to Play Again)`, canvas.width / 2, 180);
			}
		}
	}
	window.requestAnimationFrame(drawMyGame);
}
drawMyGame();








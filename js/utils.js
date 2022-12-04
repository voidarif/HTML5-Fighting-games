function rectangularCollision({ rectangle1, rectangle2 }) {

	return (
		rectangle1.attackBox.position.x + rectangle1.attackBox.width >= rectangle2.position.x &&
	   rectangle1.attackBox.position.x <= rectangle2.position.x + rectangle2.width &&
	   rectangle1.attackBox.position.y + rectangle1.attackBox.height >= rectangle2.position.y &&
	   rectangle1.attackBox.position.y <= rectangle2.position.y + rectangle2.height
		)
}

 function determineWinner({player, enemy, timerID}) {
 	clearTimeout(timerID)
 	document.querySelector('#displayText').style.display = 'flex'
 	document.querySelector('#displayText').style.color = 'black'
 	document.querySelector('#displayText').style.fontSize = 'x-large'
	if(player.health === enemy.health) {
		document.querySelector('#displayText').innerHTML = 'Tie'
		}else if(player.health > enemy.health) {
		document.querySelector('#displayText').innerHTML = 'player wins'
		}else if(player.health < enemy.health) {
		document.querySelector('#displayText').innerHTML = 'enemy wins'
		}
 }
 	

 let timer = 60
 let timerID
function decreaseTimer() {
	
	if(timer > 0) {
		timerID = setTimeout(decreaseTimer,1000)
		 timer--
		 document.querySelector('#timer').innerHTML = timer
	}

	if(timer === 0){
	determineWinner({player, enemy, timerID})
	}
}
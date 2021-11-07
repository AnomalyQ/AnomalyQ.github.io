let seil_1 = document.getElementById('sail_1');
let seil_2 = document.getElementById('sail_2');
let rigging = document.getElementById('rigging');
let button = document.getElementById('button');

button.onclick = function (){
	button.innerHTML = 'Поплыли!';
	button.style.animation = 'ship_transform 0.5s forwards';
	rigging.style.visibility = 'visible';
	rigging.style.animation = 'rigging_transform 0.5s forwards';
	setTimeout(sailUp, 1000);
	setTimeout(moveShip, 2000);
	setTimeout(removeAll,4000);
}

function sailUp(){
	sail_1.style.visibility = 'visible';
	sail_2.style.visibility = 'visible';
	sail_1.style.animation = 'sail_1_transform 0.5s forwards';
	sail_2.style.animation = 'sail_2_transform 0.5s forwards';

}
function moveShip(){
	rigging.style.transform = 'rotate(0deg)'
	button.style.borderBottomRightRadius = '40%';
	button.style.borderBottomLeftRadius = '40%';
	sail_1.style.transform = 'scaley(10)';
	sail_2.style.transform = 'scaley(10)';
	button.style.animation = 'ship_move 2s forwards';
	rigging.style.animation = 'rigging_move 2s forwards';
	sail_1.style.animation = 'sail_1_move 2s forwards';
	sail_2.style.animation = 'sail_2_move 2s forwards';
}
function removeAll(){
	button.remove();
	rigging.remove();
	sail_1.remove();
	sail_2.remove();
}
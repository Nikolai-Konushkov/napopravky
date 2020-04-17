let prof_btn = document.querySelector('.profile-btn');
let overlay = document.querySelector('.overlay');
let cross = document.querySelector('.cross');

prof_btn.onclick = function(){
	overlay.classList.add('show');
	cross.onclick = function(){
		overlay.classList.remove('show');
	}
}

function remove(){
	let sick = document.querySelectorAll('.sick__item');
		for (var i = sick.length - 1; i >= 0; i--) {
		sick[i].onclick = function(){
			this.remove();
		}
	}
}
remove();

function add(){
	let input = document.querySelector('.sick__input').value;
	let card_wrp = document.createElement('span');
	card_wrp.classList.add('sick__item');
	card_wrp.innerHTML = input;
	let catalog = document.querySelector('.sick__result');
	catalog.appendChild(card_wrp);
	remove();
}


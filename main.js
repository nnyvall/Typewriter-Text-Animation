const word = 'adapt';
let count = 0;
let letter = '';
let direction = true;

(function type() {
  setTimeout(type, 400);
	if(count === 0) {
  	direction = true;
  }
	if(letter.length >= word.length) {
  	direction = false;
  }
  
  if(direction) {
  	letter = word.slice(0,count++);
    document.querySelector('.typing').textContent = letter;
  } else {
  	letter = word.slice(0, count--)
    document.querySelector('.typing').textContent = letter;
  }
}())
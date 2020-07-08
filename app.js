const words = ['adapt', 'afford', 'port', 'applic', 'employ', 'cap', 'reli', 'dur', 'suit', 'malle', 'vari', 'scal', 'reus', 'test'];
let count = 0;
let index = 0;
let letter = '';
let direction = true;
let currWord = '';

(function type() {

	if(count >= words.length) {
  	count = 0;
  }
	
  currWord = words[count];
  
  setTimeout(type, 150);
	if(index === 0) {
  	direction = true;
  }
	if(letter.length >= currWord.length) {
  	direction = false;
  }
  
  if(direction) {
  	letter = currWord.slice(0,index++);
    document.querySelector('.typing').textContent = letter;
  } else {
  	letter = currWord.slice(0, index--)
    document.querySelector('.typing').textContent = letter;
    if(index <= 0) {
    	count++;
    }
  }
}())
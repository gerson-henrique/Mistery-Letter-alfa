const carta = document.getElementById('carta-gerada');
const texto = document.getElementById('carta-texto');
const btnCreate = document.getElementById('criar-carta');

function getClasses(piece) {
  const style = ['newspaper', 'magazine1', 'magazine2'];
  const size = ['medium', 'big', 'reallybig'];
  const rotation = ['rotateleft', 'rotateright'];
  const skew = ['skewleft', 'skewleft'];

  const timesThr = Math.floor(Math.random() * 3);
  const timesTwo = Math.floor(Math.random() * 2);

  piece.classList.add(style[timesThr]);
  piece.classList.add(size[timesThr]);
  piece.classList.add(rotation[timesTwo]);
  piece.classList.add(skew[timesTwo]);
}
function createCard() { 
  if (texto.value == '' || texto.value == ' ' ) {
  carta.innerText= 'Por favor, digite o conteúdo da carta.';
  } else {
  carta.innerText='';
  const words = texto.value;
  const brokenText = words.split(' ');
  for(let i = 0; i<brokenText.length; i+=1) {
  let element = document.createElement('span')
  carta.appendChild(element)
  getClasses(element)
  element.innerText = brokenText[i];
  }
}
}



btnCreate.addEventListener('click', createCard);

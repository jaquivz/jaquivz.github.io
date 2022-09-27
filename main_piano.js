const keys = document.querySelectorAll('.key');
const whiteKeys = document.querySelectorAll('.key.white');
const blackKeys = document.querySelectorAll('.key.black');

console.log(keys.length);

function playNote(key) {
  const noteAudio = document.getElementById(key.dataset.note);
  noteAudio.play();
}

let myAge = 16;
let myName = "Jaqui";
let likesMusic = true;
let likesMusicText;

const nameSpan = document.getElementById('name');
nameSpan.textContent = myName;

const ageSpan = document.getElementById('age');
ageSpan.textContent = myAge;

if(likesMusic === true) {
  likesMusicText = 'me gusta la música';
} else {
  likesMusicText = 'no me gusta la música';
}

const likesMusicSpan = document.getElementById('likesMusic');
likesMusicSpan.textContent = likesMusicText;

const WHITE_KEYS = ['z','x','c','v','b','n','m'];
const BLACK_KEYS = ['s','d','g','h','j'];


document.addEventListener('keydown', (e) => {
  //alert('Key pressed');
  if (e.repeat) return;
  const key = e.key;
  const whiteKeyIndex = WHITE_KEYS.indexOf(key);
  const blackKeyIndex = BLACK_KEYS.indexOf(key);

  if (whiteKeyIndex > -1) {
    playNote(whiteKeys[whiteKeyIndex]);
  }

  if (blackKeyIndex > -1) {
    playNote(blackKeys[blackKeyIndex]);
  }
})

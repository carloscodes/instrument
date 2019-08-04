// add event listener for when key is pressed down
window.addEventListener('keydown', function(e) {
  // check if audio exists for key
  const audio = document.querySelector(`audio[data-key='${e.keyCode}'`);
  const key = document.querySelector(`.key[data-key='${e.keyCode}']`);

  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  key.classList.add('playing');
});

function removeTransition(e) {
  if (e.propertyName !== 'transform') return; // skip if not a transform
  console.log(e.propertyName);
  this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => {
  key.addEventListener('transitionend', removeTransition);
});

if(window.outerwidth <= 1024){
 alert('Please use a device with a keyboard'); 
}

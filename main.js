// browser loads html > browser loads js > js to open modal > user presses ok on modal > modal closes > audio init

// document.body.style.backgroundColor = "red" ;


// find my test button
const testButton = document .getElementsByClassName("test-button");

// find our intro modal
const introModal = document.getElementById("intro-modal")

// console.log(introModal);
const introModalCloseButton = document.getElementById("intro-modal-close");
introModalCloseButton.addEventListener("click" , closeIntroModal);
//// modal 
introModal.showModal();
function closeModal (){
    introModal.close();
};

//// tone

introModal.addEventListener("close" , toneInit);


// create instrument and connect to audio
const synth = new Tone.Synth();

function toneInit(){
    synth.connect(Tone.Destination);
}

// do something when we click that button
testButton .addEventListener ("click" , playTestNote);

function playTestNote () {
    synth .triggerAttackRelease("C4" , "8n")
}

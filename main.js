// document.body.style.backgroundColor = "red" ;
// find my test button
const testButton = document .getElementsByClassName("test-button");

// create instrument and connect to audio
const synth = new Tone.Synth() .toDestination(); 

// do something when we click that button
testButton .addEventListener ("click" , playTestNote);

function playTestNote () {
    synth .triggerAttackRelease("C4" , "8n")
}
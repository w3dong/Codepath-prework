/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */
// global constants
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence
const buttSize = 6;
const patternSize = 8;

//Global Variables
var clueHoldTime = 1000; //how long to hold each clue's light/sound
var pattern;
var progress = 0; 
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5;  //must be between 0.0 and 1.0
var guessCounter = 0;
var numMistake; // count # of time user guess wrong

function randomPattern(){
  // fill in pattern with random number from 1 to 4
  pattern = Array.from({
                length: patternSize
            }, () => Math.floor(Math.random() * buttSize + 1));
}

function startGame(){
    // generate random pattern
    randomPattern();
    //initialize game variables
    progress = 0;
    gamePlaying = true;
    numMistake = 0;
    clueHoldTime = 1000;
    // swap the Start and Stop buttons
    document.getElementById("startBtn").classList.add("hidden");
    document.getElementById("stopBtn").classList.remove("hidden");
    playClueSequence();
}

function stopGame(){
    //initialize game variables
    gamePlaying = false;
    // swap the Start and Stop buttons
    document.getElementById("startBtn").classList.remove("hidden");
    document.getElementById("stopBtn").classList.add("hidden");
}
// Sound Synthesis Functions
const freqMap = {
  1: 261.6,
  2: 329.6,
  3: 392,
  4: 466.2, 
  5: 200,
  6: 500
}
function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  context.resume()
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}
function startTone(btn){
  if(!tonePlaying){
    context.resume()
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    context.resume()
    tonePlaying = true
  }
}
function stopTone(){
  g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
  tonePlaying = false
}

// Page Initialization
// Init Sound Synthesizer
var AudioContext = window.AudioContext || window.webkitAudioContext 
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)

function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit")
}

function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit")
}

function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}

function playClueSequence(){
  guessCounter = 0;
  context.resume()
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime 
    delay += cluePauseTime;
  }
  // speed up after each turn
  clueHoldTime -= 100;
}

function loseGame(){
  stopGame();
  alert("Game Over. You lost.");
}


function winGame(){
  stopGame();
  alert("Game Over. You Won!");
}

function guess(btn){
  console.log("user guessed: " + btn);
  if(!gamePlaying){
    return;
  }
  // if user guess is correct
  if (btn == pattern[guessCounter]){
    // if turn is not over, update guessCounter
    if (guessCounter != progress){
      guessCounter += 1;
    }
    // if this turn is over
    else{
      // if it is not the last turn, continue
      if (progress != pattern.length - 1){
        progress += 1; 
        // play next cue
        playClueSequence();
      }
      // if it is last turn, user win & end game
      else{
        winGame();
      }
    }
  }
  // if user guess is incorrect
  else{
    numMistake += 1;
    // if people guess button wrong by more than 2 time
    if (numMistake >= 3){
      // user lose, end game
      loseGame();
    }
  }
  
}

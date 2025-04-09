import "bootstrap";
import "./style.css";


const who = [
  "My dog",
  "My cat",
  "My neighbor",
  "A mysterious stranger",
  "The pizza delivery person",
  "My old teacher",
  "A time traveler",
  "The ghost in my house",
  "My evil twin",
  "A superhero",
];

const actions = [
  "ate",
  "destroyed",
  "hid",
  "stole",
  "redesigned",
  "erased",
  "threw away",
  "accidentally burned",
  "spilled coffee on",
  "mistook for trash",
];

const what = [
  "my homework",
  "my laptop",
  "my car keys",
  "my presentation",
  "my phone",
  "my wallet",
  "my schedule",
  "my alarm clock",
  "my calendar",
  "my project files",
];

const when = [
  "while I was sleeping",
  "right before the deadline",
  "during an important meeting",
  "this morning",
  "when I wasn't looking",
  "in a parallel universe",
  "because Mercury is in retrograde",
  "due to a temporary glitch in the Matrix",
  "during a power outage",
  "while I was making coffee", 
];
const style = [
  "background-random1",
  "background-random2",
  "background-random3",
  "background-random4",
  "background-random5",
  "background-random6",
  "background-random7",
]

window.onload = function(){


  
  function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)]
  
  }
  

 // Generate a random excuse
  function generateExcuse() {
   
    const excuse = `${getRandomElement(who)} ${getRandomElement(actions)} ${getRandomElement(what)} ${getRandomElement(when)}`;
  
// Update the text content 
    const excuseElement = document.getElementById("excuse");
    excuseElement.textContent = excuse;
    
  
// Apply a random style 
    const styledElement = document.getElementsByClassName("excuse")[0];
    if (styledElement) {
      const randomStyle = getRandomElement(style); 
      styledElement.className = "excuse"; 
      styledElement.classList.add(randomStyle);
    }
  }

  const button = document.getElementsByClassName("button")[0];
      
  button.addEventListener("click", generateExcuse);
  generateExcuse();
  

        
  
};








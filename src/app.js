import "bootstrap";
import "./style.css";
import { Button } from "bootstrap";

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
  "background-random2"
]

function getStyle(style) {
  return style[Math.floor(Math.random() * style.length)]
}

function getRandomElement(array) {
  return array[Math.floor(Math.random() * array.length)]

}

function generateExcuse() {
  const excuse = `${getRandomElement(who)} ${getRandomElement(actions)} ${getRandomElement(what)} ${getRandomElement(when)}`
  document.getElementById("excuse").textContent = excuse;
  const element = document.getElementsByClassName("excuse")[0];
  element.classList.add(getRandomElement(style));
  
}


const button = document.getElementsByClassName("button")[0];
    
button.addEventListener("click", generateExcuse, getStyle);
      
   

window.onload = generateExcuse;








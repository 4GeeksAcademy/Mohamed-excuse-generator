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
  "cont",
  "new-cont"
]

// function getStyle(style) {
//   return style[Math.floor(Math.random() * style.length)]
// }
// const element = document.getElementsByClassName("container");
// element.classList.add(getStyle(style));


function getRandomElement(array) {
  return array[Math.floor(Math.random() * array.length)]

}

function generateExcuse() {
  const excuse = `${getRandomElement(who)} ${getRandomElement(actions)} ${getRandomElement(what)} ${getRandomElement(when)}`
  document.getElementById("excuse").textContent = excuse;

}

window.onload = generateExcuse;

button.addEventListener("click", generateExcuse);






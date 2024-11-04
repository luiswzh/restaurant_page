import "./styles.css"

import { homeContent } from "./home";
import { appContent } from "./app";
import { mainContent } from "./main";
import { dessertContent } from "./dessert";
import { drinkContent } from "./drink";

const content = document.querySelector("#content");
content.appendChild(homeContent);

const homeButton = document.querySelector("#home");
const appButton = document.querySelector("#app");
const mainButton = document.querySelector("#main");
const dessertButton = document.querySelector("#dessert");
const drinkButton = document.querySelector("#drink");

homeButton.addEventListener('click',()=>{
    content.innerHTML="";
    content.appendChild(homeContent);
})
appButton.addEventListener('click',()=>{
    content.innerHTML="";
    content.appendChild(appContent);
})
mainButton.addEventListener('click',()=>{
    content.innerHTML="";
    content.appendChild(mainContent);
})
dessertButton.addEventListener('click',()=>{
    content.innerHTML="";
    content.appendChild(dessertContent);
})
drinkButton.addEventListener('click',()=>{
    content.innerHTML="";
    content.appendChild(drinkContent);
})




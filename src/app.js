export const appContent = document.createElement("div");
import { menuItem } from "./menuItem";
import app1Photo from "./images/app1-crispybite.webp";
import app2Photo from "./images/app2-tunatartare.webp";

const title = document.createElement("h2");
title.textContent="Let's start with some of our outstanding appetizers!";

appContent.appendChild(title);

appContent.appendChild(menuItem("Crispy Truffle Polenta Bites","Golden, bite-sized polenta cubes infused with a hint of truffle, topped with a savory Parmesan dust and served with a roasted garlic aioli. Perfectly crisp on the outside and creamy within.","$9.00",app1Photo));

appContent.appendChild(menuItem("Spicy Tuna Tartare Tacos","Delicate wonton shells filled with fresh, spicy ahi tuna tartare, avocado crema, and a touch of wasabi for a kick, garnished with microgreens. A vibrant fusion of flavors in every bite.","$12.50",app2Photo));

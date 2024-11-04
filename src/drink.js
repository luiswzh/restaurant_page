export const drinkContent = document.createElement("div");
import { menuItem } from "./menuItem";
import photo1 from "./images/drink1-lemonade.png";
import photo2 from "./images/drink2-oldfashioned.png";

const title = document.createElement("h2");
title.textContent="Drinks!";

drinkContent.appendChild(title);

drinkContent.appendChild(menuItem("Lavender Lemonade Sparkler", "A refreshing, floral lemonade infused with hints of lavender and topped with sparkling water for a bubbly finish. Served over ice with a twist of lemon and a sprig of fresh lavender. Light, aromatic, and perfect for any occasion.","$5.00", photo1));

drinkContent.appendChild(menuItem("Classic Old Fashioned","A timeless cocktail made with premium bourbon, a touch of sugar, aromatic bitters, and a hint of orange peel. Served over a large ice cube and garnished with a cherry and orange zest. Smooth and sophisticated.", "$12.00", photo2));
export const mainContent = document.createElement("div");
import { menuItem } from "./menuItem";
import photo1 from "./images/main1-lamb.webp";
import photo2 from "./images/main2-seabass.png";

const title = document.createElement("h2");
title.textContent="Main dishes";

mainContent.appendChild(title);

mainContent.appendChild(menuItem("Herb-Crusted Rack of Lamb", "A tender rack of lamb, encrusted with a blend of fresh herbs, garlic, and breadcrumbs, roasted to a perfect medium-rare. Served with rosemary-infused mashed potatoes, seasonal roasted vegetables, and a rich red wine reduction.","$32.00", photo1));

mainContent.appendChild(menuItem("Seared Sea Bass with Lemon Beurre Blanc","A perfectly seared sea bass filet with a golden, crispy skin, served atop a bed of saffron-infused risotto. Accompanied by steamed asparagus and finished with a delicate lemon beurre blanc sauce that enhances the fish's natural flavors.", "$29.00", photo2));
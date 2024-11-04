export const dessertContent = document.createElement("div");
import { menuItem } from "./menuItem";
import photo1 from "./images/dessert1-pannacotta.png";
import photo2 from "./images/dessert2-moltenchocolate.png";

const title = document.createElement("h2");
title.textContent="Finish your meal with our finest desserts!";

dessertContent.appendChild(title);

dessertContent.appendChild(menuItem("Vanilla Bean Panna Cotta with Berry Compote", "A creamy, silky vanilla bean panna cotta, delicately sweetened and topped with a vibrant berry compote made from fresh strawberries, blueberries, and raspberries. Finished with a hint of mint for a refreshing touch.","$8.50", photo1));

dessertContent.appendChild(menuItem("Warm Molten Chocolate Lava Cake","A rich, decadent chocolate cake with a molten center that oozes with warm chocolate ganache upon cutting. Served with a scoop of vanilla bean ice cream and a sprinkle of powdered sugar. A chocolate lover’s dream!", "$9.00", photo2));
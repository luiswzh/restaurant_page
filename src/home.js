export const homeContent = document.createElement("div");
import chefImage from "./images/chef_photo.jpeg";

const introduction = document.createElement("div");

const para1 = document.createElement("p");
para1.textContent = "Welcome to Fantastic Restaurant, we are very glad that you chose to dine with us!";
introduction.appendChild(para1);

const para2 = document.createElement("p");
para2.textContent = "Our main chef Vincent Lemurose is well known for his exquisite and unique creations. Combining flavors from different cultures and using innovative techniques.";
introduction.appendChild(para2);

const para3 = document.createElement("p");
para3.textContent = "We aim to provide you the best dining experience with delicious food and excelent service. Have a nice meal!";
introduction.appendChild(para3);

const photo = document.createElement("img");
photo.src = chefImage;
photo.width = "300";

homeContent.classList.add("content");
homeContent.appendChild(introduction);
homeContent.appendChild(photo);

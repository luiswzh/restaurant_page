export function menuItem(name, description, price, image) {
    const item = document.createElement("div");
    item.classList.add("item");
    
    const itemPhoto = document.createElement("img");
    itemPhoto.src=image;
    itemPhoto.width="200";
    item.appendChild(itemPhoto);

    const itemDetail = document.createElement("div");
    itemDetail.classList.add("itemDetail");

    const itemName = document.createElement("h2");
    itemName.textContent = name;

    const itemDescription = document.createElement("p");
    itemDescription.textContent = description;

    const itemPrice = document.createElement("p");
    itemPrice.textContent=price;

    itemDetail.appendChild(itemName);
    itemDetail.appendChild(itemDescription);
    itemDetail.appendChild(itemPrice);

    item.appendChild(itemDetail);

    return item
}
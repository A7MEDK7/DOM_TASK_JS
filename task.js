for (let i=0; i<12; i++) {
    let myProduct = document.createElement("div");
    let productHeading = document.createElement("h2");
    let productText = document.createElement("p");
    let image = document.createElement("img");

    myProduct.className = `product-${i+1}`;
    
    productHeading.appendChild(document.createTextNode(`Product Title ${i+1}`));
    productText.appendChild(document.createTextNode(`Product Description ${i+1}`));
    image.src = "text.jpg";

    myProduct.appendChild(productHeading);
    myProduct.appendChild(image);
    myProduct.appendChild(productText);
    document.body.appendChild(myProduct);
    
}

let myProducts = document.querySelectorAll("div");
myProducts.forEach(element => {
    element.style.backgroundColor = "#eee";
    element.style.textAlign = "center"; 
    element.style.padding = "5px 10px";
    element.style.border = "1px solid #ddd";
    element.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)"; 
    element.style.borderRadius = "8px"; 
    element.style.margin = "10px"; 
});

let myP = document.querySelectorAll("p");
myP.forEach(p => {
    p.style.color = "#666";
    p.style.fontSize = "18px";
});

let myH2 = document.querySelectorAll("h2");
myH2.forEach (h2 => {
    h2.style.color = "#00005B";
});

let imgs = document.querySelectorAll("img");
imgs.forEach ( i => {
    i.style.width = "100%";
    i.style.borderRadius = "8px";
})

document.body.style.display = "grid";
document.body.style.gridTemplateColumns = "repeat(auto-fill, minmax(400px, 1fr))"; 
document.body.style.gap = "5px";
document.body.style.padding = "10px"; 
document.body.style.backgroundColor = "#f9f9f9";

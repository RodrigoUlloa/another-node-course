class Product {
  //title = "DEFAULT";
  //imageUrl;
  //description;
  //price;

  constructor(title, image, desc, price) {
    this.title = title;
    this.imageUrl = image;
    this.description = desc;
    this.price = price;
  }
}

class ProductItem {
  constructor(product) {
    this.product = product;
  }

  render() {
    const prodEl = document.createElement("li");
    prodEl.className = "product-item";
    prodEl.innerHTML = `
      <div>
        <img src="${this.product.imageUrl}" alt="${this.product.title}">
        <div class="product-item__content">
          <h2>${this.product.title}</h2>
          <h3>\$${this.product.price}</h3>
          <p>${this.product.description}</p>
          <button>Add to createElement</button>
        </div>
      </div>
    `;
    return prodEl;
  }
}

class ProductList {
  products = [
    new Product(
      "A pillow",
      "https://imgs.search.brave.com/aDUlEAI4Je-qmTs1SSWijVZJWWfAxL0LnVs0UXggXZA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE1/NzA3ODYyNDAwNjYt/YzBkNzUzNzExY2Zl/P2ZtPWpwZyZxPTYw/Jnc9MzAwMCZhdXRv/PWZvcm1hdCZmaXQ9/Y3JvcCZpeGxpYj1y/Yi00LjEuMCZpeGlk/PU0zd3hNakEzZkRC/OE1IeHpaV0Z5WTJo/OE1UUjhmSFJvY205/M0pUSXdjR2xzYkc5/M2ZHVnVmREI4ZkRC/OGZId3c",
      "A Soft pillow",
      19.99,
    ),
    new Product(
      "A Carpet",
      "https://imgs.search.brave.com/zhNGJkhnPjZb2DZj-AY2HbFUKKJ9HdYB7-MxH-5wjHE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxNy8x/MS8xMC8wOS8wMS9j/YXJwZXQtMjkzNTc3/M182NDAuanBn",
      "A carpet which you might like - or not.",
      89.99,
    ),
  ];

  constructor() {}

  render() {
    const renderHook = document.getElementById("app");
    const prodList = document.createElement("ul");
    prodList.className = "product-list";
    for (const prod of this.products) {
      const productItem = new ProductItem(prod);
      const prodEl = productItem.render();
      prodList.append(prodEl);
    }
    renderHook.append(prodList);
  }
}

const productList = new ProductList();
productList.render();

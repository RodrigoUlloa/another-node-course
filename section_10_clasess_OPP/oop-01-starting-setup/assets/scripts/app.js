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

class ElementAttribute {
  constructor(attrName, attrValue) {
    this.name = attrName;
    this.value = attrValue;
  }
}

class Component {
  constructor(renderHookId) {
    this.hookId = renderHookId;
    this.render();
  }

  render() {}

  createRootElement(tag, cssClasses, attributes) {
    const rootElement = document.createElement(tag);
    if (cssClasses) {
      rootElement.className = cssClasses;
    }
    if (attributes && attributes.length > 0) {
      for (const attr of attributes) {
        rootElement.setAttribute(attr.name, attr.value);
      }
    }
    document.getElementById(this.hookId).append(rootElement);
    return rootElement;
  }
}

class ShoopingCart extends Component {
  items = [];

  set cartItems(value) {
    this.items = value;
    this.totalOutput.innerHTML = `<h2>Total: \$${this.totalAmount.toFixed(2)}</h2>`;
  }

  get totalAmount() {
    const sum = this.items.reduce(
      (prevValue, curItem) => prevValue + curItem.price,
      0,
    );
    return sum;
  }

  constructor(renderHookId) {
    super(renderHookId);
  }

  addProduct(product) {
    const updatedItems = [...this.items];
    updatedItems.push(product);
    this.cartItems = updatedItems;
  }

  render() {
    const cartEl = this.createRootElement("section", "cart");
    cartEl.innerHTML = `
      <h2>Total: \$${0}</h2>
      <button>Order now!</button>
    `;
    this.totalOutput = cartEl.querySelector("h2");
  }
}

class ProductItem extends Component {
  constructor(product, renderHookId) {
    super(renderHookId);
    this.product = product;
  }

  addToCart() {
    App.addProductToCart(this.product);
  }

  render() {
    const prodEl = this.createRootElement("li", "product-item");
    prodEl.innerHTML = `
      <div>
        <img src="${this.product.imageUrl}" alt="${this.product.title}">
        <div class="product-item__content">
          <h2>${this.product.title}</h2>
          <h3>\$${this.product.price}</h3>
          <p>${this.product.description}</p>
          <button>Add to Cart</button>
        </div>
      </div>
    `;
    const addCartButton = prodEl.querySelector("button");
    addCartButton.addEventListener("click", this.addToCart.bind(this));
  }
}

class ProductList extends Component{
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

  constructor(renderHookId) {
    super(renderHookId);
  }

  render() {
    const prodList = this.createRootElement("ul", "product-list", [
      new ElementAttribute("id", "prod-list"),
    ]);
    for (const prod of this.products) {
      const productItem = new ProductItem(prod, "prod-list");
    }
  }
}

class Shop  {
  constructor() {
    this.render();
  }
  render() {
    this.cart = new ShoopingCart("app");
    const productList = new ProductList('app');
  }
}

class App {
  static cart;

  static init() {
    const shop = new Shop();
    this.cart = shop.cart;
  }
  static addProductToCart(product) {
    this.cart.addProduct(product);
  }
}

App.init();

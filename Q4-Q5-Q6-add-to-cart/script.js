let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCart = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', () => {
  body.classList.add('active');
});

closeShopping.addEventListener('click', () => {
  body.classList.remove('active');
});

let allProducts = [];
fetch('https://fakestoreapi.com/products')
  .then((response) => response.json())
  .then((products) => {
    allProducts = products; // Store products in the global variable
    initApp(products);
  })
  .catch((error) => console.error(error));

let listCards =[]
function initApp(products) {
  products.forEach((product, key) => {
    let newDiv = document.createElement('div');
    newDiv.classList.add('product-card');
    newDiv.innerHTML = `
      <img onclick="redirectToProduct(${product.id})" src="${product.image}" alt="${product.name}">
      <div class="card-body">
      <h3>${product.title}</h3>
      <p>Price: ${product.price.toLocaleString()} $</p>
      <button onclick="addToCart(${key})">Add to Cart</button>
      </div>
      `;
    list.appendChild(newDiv);
  });
}
initApp([]);
function addToCart(key){
  if(listCards[key] == null){
    listCards[key] = allProducts[key]
    listCards[key].quantity = 1;
  }
  reloadCard();
}
function reloadCard(){
  listCart.innerHTML = '';
  let count = 0
  let totalPrice = 0
  listCards.forEach((product,key) => {
    totalPrice = totalPrice + product.price;
    count = count + product.quantity;

        if(product != null){
          let newDiv = document.createElement('li');
          newDiv.innerHTML = `
            <div><img src="${product.image}"/></div>
          <div class="cart-item">
            <div>${product.title}</div>
            <div>${product.price} $</div>
            <div>${product.quantity}</div>
          </div>
            <div>
                <button onclick="changeQuantity(${key}, ${product.quantity - 1})">-</button>
                <div class ="count">${product.quantity}</div>
                <button onclick="changeQuantity(${key}, ${product.quantity + 1})">+</button>
            </div>
          
            
          `;
          listCart.appendChild(newDiv);
        }
        
  })
  total.innerHTML = totalPrice.toLocaleString();
  quantity.innerHTML = count;
}

function redirectToProduct(productId) {
  // Fetch the specific product data using the ID
  fetch(`https://fakestoreapi.com/products/${productId}`)
    .then((response) => response.json())
    .then((product) => {
      displayProduct(product);
      showModal();
    })
    .catch((error) => console.error(error));
}

// Display the product data on the modal
function displayProduct(product) {
  const titleElement = document.querySelector('.product-title');
  const priceElement = document.querySelector('.product-price');
  const imageElement = document.querySelector('.product-image');

  titleElement.textContent = product.title;
  priceElement.textContent = `$${product.price}`;
  imageElement.src = product.image;
  imageElement.alt = product.name;
}
// Show the modal
function showModal() {
  const modal = document.getElementById('productModal');
  modal.style.display = 'block';
}

// Hide the modal
function closeModal() {
  const modal = document.getElementById('productModal');
  modal.style.display = 'none';
}

// Close the modal when the close button is clicked
document.querySelector('.close').addEventListener('click', closeModal);

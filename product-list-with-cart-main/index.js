let itemList = [];

const addToCart = (name, unit, unitCost) => {
    const ItemCart = document.querySelector('#ItemCart');
    const cartInfo = document.querySelector('#cartInfo');
    const totalItems = document.querySelector('#totalItems');

    // If unit is 0, remove the item from itemList
    if (unit === 0 || "") {
        itemList = itemList.filter(item => item.name !== name);
    } else {
        // Check if item already exists in cart
        const existingItemIndex = itemList.findIndex(item => item.name === name);
        
        if (existingItemIndex !== -1) {
            // Update existing item
            itemList[existingItemIndex].unit = unit;
            itemList[existingItemIndex].totalCost = unit * unitCost;
        } else {
            // Add new item
            itemList.push({
                name: name,
                unit: unit,
                unitCost: unitCost,
                totalCost: unit * unitCost
            });
        }
    }
 console.log(itemList);

    // If cart is empty, clear the display
    if (itemList.length === 0) {
        cartInfo.innerHTML = ``;
        return;
    }

    // Calculate total order cost
    const totalOrderCost = itemList.reduce((sum, item) => sum + item.totalCost, 0);

    // Generate HTML for all items in cart
    const cartItemsHTML = itemList.map(item => `
        <li>
            <p class="itemName">${item.name}</p>
            <span class="removeItem" data-name ="${item.name}">
                <img src="./assets/images/icon-remove-item.svg" alt="deleteItem" class="deleteItem">
            </span>
            <div class="totalUnitCost">
                <p class="unit cartUnit"><span>${item.unit}</span>x</p>
                <p class="unitCost cartUnit">@$<span>${item.unitCost}</span></p>
                <p class="totalCost cartUnit">$<span>${item.totalCost}</span></p>
            </div>
        </li>
    `).join('');

    cartInfo.innerHTML = `
        <ul class="cartList">
            ${cartItemsHTML}
        </ul>
        <div class="orderTotal">
            <p>Order Total</p>
            <p>$<span>${totalOrderCost.toFixed(2)}</span></p>
        </div>
        <div class="carbon-neutral">
            <img id="carbonNeutral" src="./assets/images/icon-carbon-neutral.svg" alt="carbon-neutral">
            <p>This is <span>carbon-neutral</span> delivery</p>
        </div>
        <div class="confirmOrder">
            <button>Confirm Order</button>
        </div>`;

    // Add event listeners for remove buttons
    const removeButtons = cartInfo.querySelectorAll('.removeItem');
    removeButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault()
            const itemName = button.getAttribute('data-name');
            itemList = itemList.filter(item => item.name !== itemName);
            addToCart(name, unit, unitCost); // Refresh cart display
        });
    });

    totalItems.innerHTML = `Your Cart(<span>${itemList.length}</span>)`
}

const createCards = async (data) => {
    const myData = await data;
    const dessertOptions = document.getElementById("dessertOptions");
  
    myData.forEach((element) => {
        const foodSec = document.createElement("div");
        foodSec.setAttribute('id', 'foodSection');
  
        foodSec.innerHTML = `
            <img src="${element.image.desktop}" alt="${element.name}">
            <button class="cartButton">
                <img src="./assets/images/icon-add-to-cart.svg" alt="" id="buttonSvg">
                <span>Add to cart</span>
            </button>
            <div id="itemNumber" style="display: none;">
                <div>
                    <button class="minus"><img src="./assets/images/icon-decrement-quantity.svg" alt="decrease"></button>
                    <span id="quantity">1</span>
                    <button class="plus"><img src="./assets/images/icon-increment-quantity.svg" alt="increase"></button>
                </div>
            </div>
            <p id="category">${element.category}</p>
            <h5 id="name">${element.name}</h5>
            <p id="price">$${element.price}<p>`;
  
        dessertOptions.appendChild(foodSec);
  
        // Add event listener to the cartButton
        const cartButton = foodSec.querySelector(".cartButton");
        const itemNumber = foodSec.querySelector("#itemNumber");
        
        let quantity = 0;

        cartButton.addEventListener("click", () => {
            cartButton.style.display = "none";
            itemNumber.style.display = "block";
            quantity++
            addToCart(element.name, quantity, element.price);
        });
  
        // Add event listeners for plus and minus buttons
        const plusButton = foodSec.querySelector(".plus");
        const minusButton = foodSec.querySelector(".minus");
        const quantitySpan = foodSec.querySelector("#quantity");
  
        plusButton.addEventListener("click", () => {
            quantity++;
            quantitySpan.textContent = quantity;
            addToCart(element.name, quantity, element.price);
        });
  
        minusButton.addEventListener("click", () => {

            if (quantity > 1) {
                quantity--;
                quantitySpan.textContent = quantity;                
                addToCart(element.name, quantity, element.price);
                
            } else {
                // Reset quantity display
                quantity = "";
                itemNumber.style.display = "none";
                cartButton.style.display = "block";
                // Remove item from cart when quantity reaches 0
                addToCart(element.name, 0, element.price);
            }
        });
    });
};


  
  const root = "../data.json";
  const initApp = async () => {
    try {
      const response = await fetch(root);
      const data = await response.json();
      createCards(data);
    } catch (error) {
      console.error(error);
    }
  };
  
  initApp();
  
// Sample menu data (Consider fetching this data from a server in a real-world scenario)
const menu = {
    Starters: [ 
        {name:"Garlic Bread", price:100},
        {name:"Bruschetta" ,price:80}
    ],

    MainCourses: [
        {name:"Margherita Pizza", price:150},
        {name:"Spaghetti Carbonara", price:130}
    ],

    Desserts: [
        {name:"Tiramisu",price:80},
        {name:"Cheesecake",price:60}
    ]
};

// Function to display menu items by category
function displayMenuItems(menu) { 
    const category = document.getElementById('menu').value;
    // Get the menu container element from the HTML
    const menuContainer = document.getElementById('menu');
    // Loop through each category and its items in the menu object
    for (let category in menu) {
        // Create an element to represent the category
        const elementCategory = document.createElement('div');
        elementCategory.classList.add('category');
        // Set the text content of the category element to the category name
        const categoryText = document.createElement ('menu');
        categoryText.innerText = category.charAt(0).toUpperCase() + category.slice (1) //captiialize letters
        elementCategory.appendChild(categoryText);
        // Append the category element to the menu container

        // Create an element to represent a list of items

        // Append a list of items element to the menu container

        // Loop through the items in the category and create list items
        const listItems = document.createElement('ul');
        menu[category].forEach( item => {
            const itemElement = document.createElement('li');
            itemElement.classList.add('menu-item');
            itemElement.innerHTML = <strong>$(item.name)</strong> - $(item.price)};
            itemsList.appendChild(itemElement);
            
            };

            categoryElement.appendChild(itemsList);
            menuContainer.appendChild(elementCategory);
            
            // Create a list item element

            // Set the text content of the list item element to the item name

            // Attach a click event listener to the list item to add it to the order
            listItems.addEventListener('click', () => {addToOrder(item)});

            // Append the list item to the list of items

            
}

// Callback function for adding an item to the order
function addToOrder(itemName) {
    // Get the order items list and the order total element from the HTML
    const orderList = document.getElementById('order-items');
    const orderTotal = document.getElementById('order-total');
    // Create a list item for the order
    const orderItem = document.createElement('li');
    orderItem.innerText = '${item.name} - $${items.price.toFixed(2)}';
    // Set the text content of the list item to the item name

    // Append the list item to the order items list
    orderList.appendChild(orderItem);
    // Calculate and update the total price
    updateTotalOrder(item.price, orderTotal);

    // Update the text content of the order total element with the new total
}
function updateTotalOrder(itemPrice,orderTotal) {
    let currentTotal = parseFloat (orderTotal.innerText.replace ('Total: $', ''))
}
currentTotal += itemPrice;
orderTotal.innerText = 'Total: $${currentTotal.toFixed(2)}';
// Function to initialize the menu system
function initMenuSystem(menu) { 
    displayMenuItems();
    // Call the function to display menu items
}

// Start the menu system by calling the init function
initMenuSystem(menu);

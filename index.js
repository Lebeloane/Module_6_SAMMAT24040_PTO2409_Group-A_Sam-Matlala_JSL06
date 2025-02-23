// Sample menu data (Consider fetching this data from a server in a real-world scenario)
const menu = {
    Starters: [
        {name: "Garlic Bread", price: 18} , 
        {name: "Bruschetta", price: 43}
    ],
    MainCourses: [
        {name: "Margherita Pizza", price: 146},
        {name: "Spaghetti Carbonara", price: 72}
        ],
    Desserts: [
        {name:"Tiramisu", price: 345},
        {name: "Cheesecake", price: 265}
    ]
};

// Function to display menu items by category
function displayMenuItems(menu) {
    // Get the menu container element from the HTML
    const displayMenu = document.getElementById('menu')
    // Loop through each category and its items in the menu object
    for (const [category, items] of Object.entries(menu)){
        // Create an element to represent the category
        const categoryElement = document.createElement('h2')
        // Set the text content of the category element to the category name
        categoryElement.textContent = category
        // Append the category element to the menu container
        displayMenu.appendChild(categoryElement)
        // Create an element to represent a list of items
        const listItems = document.createElement('ul')
        // Append a list of items element to the menu container
        displayMenu.appendChild(listItems)
        // Loop through the items in the category and create list items
        items.forEach(item => {
            // Create a list item element
            const itemElement = document.createElement('li')
            // Set the text content of the list item element to the item name
            itemElement.textContent = item.name
            // Attach a click event listener to the list item to add it to the order
            itemElement.addEventListener('click', () => addToOrder(item.name, item.price))
            // Append the list item to the list of items
            listItems.appendChild(itemElement)
        })
    }
            
}


// Callback function for adding an item to the order
function addToOrder(itemName, itemPrice) {
    // Get the order items list and the order total element from the HTML
    const orderItems = document.getElementById('order-items')
    const orderTotal = document.getElementById('order-total')
    // Create a list item for the order
    const listItemOrder = document.createElement('li')
    // Set the text content of the list item to the item name
    listItemOrder.textContent = itemName
    // Append the list item to the order items list
    orderItems.appendChild(listItemOrder)
    // Calculate and update the total price
    let totalPrice = parseFloat(orderTotal.textContent)
    totalPrice += itemPrice 
    // Update the text content of the order total element with the new total
    orderTotal.textContent = totalPrice.toFixed(2)
}

// Function to initialize the menu system
function initMenuSystem(menu) {
    // Call the function to display menu items
    displayMenuItems(menu)
}

// Start the menu system by calling the init function
initMenuSystem(menu);

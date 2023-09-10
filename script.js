// Get references to the buttons and content area
const createCustomerBtn = document.getElementById("createCustomerBtn");
const clientesBtn = document.getElementById("clientesBtn");
const estoqueBtn = document.getElementById("estoqueBtn");
const pdvBtn = document.getElementById("pdvBtn");
const contentArea = document.querySelector(".content");

// Add event listeners to the buttons
createCustomerBtn.addEventListener("click", () => {
    // Load the "createCustomer.html" template
    fetch("pages/createCustomer.html")
        .then(response => response.text())
        .then(data => {
            // Display the content in the content area
            contentArea.innerHTML = data;

            // Initialize Flowbite components after content is added
            initFlowbite(); // or initDropdowns(), initModals(), etc.
        });
});

clientesBtn.addEventListener("click", () => {
    // Load the "findCustomer.html" template
    fetch("pages/clientes.html")
        .then(response => response.text())
        .then(data => {
            // Display the content in the content area
            contentArea.innerHTML = data;

            // Initialize Flowbite components after content is added
            initFlowbite(); // or initDropdowns(), initModals(), etc.
        });
});

pdvBtn.addEventListener("click", () => {
    // Load the "findCustomer.html" template
    fetch("pages/pdv.html")
        .then(response => response.text())
        .then(data => {
            // Display the content in the content area
            contentArea.innerHTML = data;

            // Initialize Flowbite components after content is added
            initFlowbite(); // or initDropdowns(), initModals(), etc.
        });
});

estoqueBtn.addEventListener("click", () => {
    // Load the "createProduct.html" template
    fetch("pages/estoque.html")
        .then(response => response.text())
        .then(data => {
            // Display the content in the content area
            contentArea.innerHTML = data;

            // Initialize Flowbite components after content is added
            initFlowbite(); // or initDropdowns(), initModals(), etc.
        });
});

function toggleSidebar() {
    // Get the sidebar element by ID
    const sidebar = document.getElementById("logo-sidebar");

    // Toggle Tailwind CSS classes to control the sidebar's visibility
    sidebar.classList.toggle("hidden");
    sidebar.classList.toggle("md:block"); // For desktop view
    sidebar.classList.toggle("md:w-64"); // For desktop view
}

const quantityInput = document.getElementById("first_product");
const priceCell = document.getElementById("first_product_price");
const totalPriceCell = document.getElementById("first_product_total");

// Function to calculate and update total price
function updateTotalPrice() {
    // Get the quantity value as a number
    const quantity = parseFloat(quantityInput.value);

    // Get the price value as a number (remove the "$" symbol and any non-numeric characters)
    const price = parseFloat(priceCell.innerText.replace(/[^0-9.]/g, ''));

    // Calculate the total price
    const totalPrice = quantity * price;

    console.log("Quantity:", quantity);
    console.log("Price:", price);
    console.log("Total Price:", totalPrice);

    // Update the total price cell with the result
    totalPriceCell.innerText = "$" + totalPrice.toFixed(2); // Format as currency with 2 decimal places
}

// Add an event listener to the quantity input to trigger the calculation when it changes
quantityInput.addEventListener("input", updateTotalPrice);

// Initial calculation (if needed)
updateTotalPrice();


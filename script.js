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
            // Create a script element and append it to the content area to execute the script
            const script = document.createElement("script");
            script.textContent = "initPDVPage();"; // Call the initPDVPage function
            contentArea.appendChild(script);
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

function initPDVPage() {
    totalFirstProd()
    totalSecondProd()
    totalThirdProd()  
    

}

function totalFirstProd() {
    const quantityInput = document.getElementById("first_product");
    const priceCell = document.getElementById("first_product_price");
    const totalPriceCell = document.getElementById("first_product_total");

    // Function to calculate and update total price
    function updateTotalPrice() {
        // Get the quantity value as a number
        const quantity = parseFloat(quantityInput.value);
        
        // Get the price value as a number (remove any non-numeric characters, including "R$" and commas)
        const price = parseFloat(priceCell.innerText.replace(',', '.').replace(/[^0-9.]/g, ''));

        // Calculate the total price
        const totalPrice = quantity * price;

        // Format the total price as "R$X,XX"
        const formattedTotalPrice = "R$" + totalPrice.toFixed(2).replace('.', ',');

        // Update the total price cell with the formatted result
        totalPriceCell.innerText = formattedTotalPrice;
    }

    // Add an event listener to the quantity input to trigger the calculation when it changes
    quantityInput.addEventListener("input", updateTotalPrice);

    // Initial calculation (if needed)
    updateTotalPrice();
}

function totalSecondProd() {
    const quantityInput2 = document.getElementById("second_product");
    const priceCell2 = document.getElementById("second_product_price");
    const totalPriceCell2 = document.getElementById("second_product_total");

    // Function to calculate and update total price
    function updateTotalPrice2() {
        // Get the quantity value as a number
        const quantity2 = parseFloat(quantityInput2.value);
        
        // Get the price value as a number (remove any non-numeric characters, including "R$" and commas)
        const price2 = parseFloat(priceCell2.innerText.replace(',', '.').replace(/[^0-9.]/g, ''));

        // Calculate the total price
        const totalPrice2 = quantity2 * price2;

        // Format the total price as "R$X,XX"
        const formattedTotalPrice2 = "R$" + totalPrice2.toFixed(2).replace('.', ',');

        // Update the total price cell with the formatted result
        totalPriceCell2.innerText = formattedTotalPrice2;
    }

    // Add an event listener to the quantity input to trigger the calculation when it changes
    quantityInput2.addEventListener("input", updateTotalPrice2);

    // Initial calculation (if needed)
    updateTotalPrice2();
}

function totalThirdProd() {
    const quantityInput3 = document.getElementById("third_product");
    const priceCell3 = document.getElementById("third_product_price");
    const totalPriceCell3 = document.getElementById("third_product_total");

    // Function to calculate and update total price
    function updateTotalPrice3() {
        // Get the quantity value as a number
        const quantity3 = parseFloat(quantityInput3.value);
        
        // Get the price value as a number (remove any non-numeric characters, including "R$" and commas)
        const price3 = parseFloat(priceCell3.innerText.replace(',', '.').replace(/[^0-9.]/g, ''));

        // Calculate the total price
        const totalPrice3 = quantity3 * price3;

        // Format the total price as "R$X,XX"
        const formattedTotalPrice3 = "R$" + totalPrice3.toFixed(2).replace('.', ',');

        // Update the total price cell with the formatted result
        totalPriceCell3.innerText = formattedTotalPrice3;
    }

    // Add an event listener to the quantity input to trigger the calculation when it changes
    quantityInput3.addEventListener("input", updateTotalPrice3);

    // Initial calculation (if needed)
    updateTotalPrice3();
}


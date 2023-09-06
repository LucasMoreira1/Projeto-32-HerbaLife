// Get references to the buttons and content area
const createCustomerBtn = document.getElementById("createCustomerBtn");
const findCustomerBtn = document.getElementById("findCustomerBtn");
const createProductBtn = document.getElementById("createProductBtn");
const contentArea = document.querySelector(".content");

// Add event listeners to the buttons
createCustomerBtn.addEventListener("click", () => {
    // Load the "createCustomer.html" template
    fetch("createCustomer.html")
        .then(response => response.text())
        .then(data => {
            // Display the content in the content area
            contentArea.innerHTML = data;
        });
});

findCustomerBtn.addEventListener("click", () => {
    // Load the "findCustomer.html" template
    fetch("findCustomer.html")
        .then(response => response.text())
        .then(data => {
            // Display the content in the content area
            contentArea.innerHTML = data;
        });
});

createProductBtn.addEventListener("click", () => {
    // Load the "createProduct.html" template
    fetch("createProduct.html")
        .then(response => response.text())
        .then(data => {
            // Display the content in the content area
            contentArea.innerHTML = data;
        });
});

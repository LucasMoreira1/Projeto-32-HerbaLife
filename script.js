// Get references to the buttons and content area
const createCustomerBtn = document.getElementById("createCustomerBtn");
const clientesBtn = document.getElementById("clientesBtn");
const estoqueBtn = document.getElementById("estoqueBtn");
const contentArea = document.querySelector(".content");

// Add event listeners to the buttons
createCustomerBtn.addEventListener("click", () => {
    // Load the "createCustomer.html" template
    fetch("pages/createCustomer.html")
        .then(response => response.text())
        .then(data => {
            // Display the content in the content area
            contentArea.innerHTML = data;
        });
});

clientesBtn.addEventListener("click", () => {
    // Load the "findCustomer.html" template
    fetch("pages/clientes.html")
        .then(response => response.text())
        .then(data => {
            // Display the content in the content area
            contentArea.innerHTML = data;
        });
});

estoqueBtn.addEventListener("click", () => {
    // Load the "createProduct.html" template
    fetch("pages/estoque.html")
        .then(response => response.text())
        .then(data => {
            // Display the content in the content area
            contentArea.innerHTML = data;
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
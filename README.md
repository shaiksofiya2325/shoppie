# Shoppie - Interactive eCommerce Storefront 🛍️

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

A responsive, client-side eCommerce website built from scratch using **HTML, CSS, and modern JavaScript**. This project simulates a complete online shopping experience, featuring dynamic product filtering, a persistent shopping cart using Local Storage, and a clean, mobile-first user interface.


![Project Screenshot](./images/shoppie-screenshot.png)
*(To make this work, add a screenshot named `shoppie-screenshot.png` to your `images` folder)*

---

## ✨ Core Features

"Shoppie" is a single-page application that allows users to browse products, view details, and manage a shopping cart without ever needing to reload the page.

* **Dynamic Product Rendering:** Products are stored in a JavaScript array, and the product grid is generated dynamically, making the store easy to update and manage.
* **Advanced Filtering & Sorting System:**
    * **Category Filter:** Filter products by "Electronics," "Clothing," etc.
    * **Live Search Bar:** Instantly narrows down products by name as the user types.
    * **Price Range Slider:** Visually filter products below a maximum price.
    * **Sort Options:** Arrange products by price (Low to High, High to Low) or name (A-Z).
* **Detailed Product View:** Clicking a product opens a dedicated view with a larger image, a comprehensive description, and an "Add to Cart" button.
* **Persistent Shopping Cart:**
    * A modern slide-in modal allows users to view and manage their cart.
    * Users can **add**, **remove**, and **update item quantities**.
    * The cart state is saved to the browser's **Local Storage**, so items are remembered even after closing the tab.
* **Responsive and Modern UI:**
    * Built with a clean, light color scheme for excellent readability.
    * The layout uses CSS Flexbox and Grid to ensure a seamless experience on all devices, from mobile phones to desktops.

---

## 🛠️ Technologies Used

* **HTML5:** For the semantic structure and layout of the application.
* **CSS3:** For all styling, including the responsive design, animations, and a modern color scheme using CSS variables.
* **JavaScript (ES6+):** For all application logic, including:
    * Dynamic DOM manipulation to render products and cart items.
    * Handling all user events (clicks, inputs, etc.).
    * Client-side state management for the shopping cart.
    * Interacting with the Web Storage API (Local Storage).

---

## 🚀 How to Run Locally

To run this project on your local machine, follow these simple steps:

1.  **Clone the repository** (or download the files as a ZIP):
    ```bash
    git clone [https://github.com/your-username/shoppie-project.git](https://github.com/your-username/shoppie-project.git)
    ```
2.  **Navigate to the project directory:**
    ```bash
    cd shoppie-project
    ```
3.  **Open the `index.html` file** in your favorite web browser. No special servers or dependencies are needed!

---

## 📂 Project Structure

The project is organized into a clean and understandable file structure:

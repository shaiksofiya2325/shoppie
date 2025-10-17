document.addEventListener('DOMContentLoaded', () => {
    const products = [
        { 
            id: 1, 
            name: "boAt Airdopes 141", 
            category: "Electronics", 
            price: 1499, 
            image: "https://m.media-amazon.com/images/I/51HBom8xz7L._SL1500_.jpg", 
            description: "Dive into a world of immersive audio with the boAt Airdopes 141. These true wireless earbuds are designed for your non-stop lifestyle, offering a massive 42 hours of total playback time, with each earbud providing up to 6 hours of continuous playtime on a single charge. Experience crystal-clear voice calls with the ENx™ Environmental Noise Cancellation technology. Thanks to the IWP™ (Insta Wake N' Pair) Technology, the earbuds connect to your device the moment you open the case. With an IPX4 water and sweat resistance rating, they are your perfect companion for workouts and daily commutes." 
        },
        { 
            id: 2, 
            name: "Men's Ethnic Kurta", 
            category: "Clothing", 
            price: 899, 
            image: "images/ethnic.jpg", 
            description: "Elevate your ethnic wardrobe with this impeccably crafted Men's Kurta. Made from a premium, breathable cotton blend fabric, it promises all-day comfort and a graceful drape. The design features a classic mandarin collar, a clean button placket, and full-length sleeves for a touch of timeless elegance. Its regular fit ensures ease of movement, making it an ideal choice for festive celebrations, religious ceremonies, or casual family get-togethers. Pair it with churidar pants or denim for a versatile look." 
        },
        { 
            id: 3, 
            name: "Handcrafted Jhumkas", 
            category: "Accessories", 
            price: 450, 
            image: "images/jhumka.jpg", 
            description: "Adorn yourself with the timeless beauty of these Handcrafted Jhumka Earrings. Made from high-quality oxidized German silver, they feature an intricate traditional design with delicate beadwork that dangles gracefully. Despite their ornate appearance, these jhumkas are surprisingly lightweight, ensuring comfortable wear for long hours during weddings, festivals, or any celebratory event. They are the perfect accessory to complement your sarees, lehengas, and kurtis, adding a touch of regal charm to your ensemble." 
        },
        { 
            id: 4, 
            name: "OnePlus Nord CE 3", 
            category: "Electronics", 
            price: 24999, 
            image: "https://m.media-amazon.com/images/I/61abLrCfF7L._SL1500_.jpg", 
            description: "Experience performance that's 'a little more than you'd expect' with the OnePlus Nord CE 3 5G. Immerse yourself in the stunning 6.7-inch, 120Hz Fluid AMOLED display that makes everything from scrolling to gaming incredibly smooth. It's powered by the efficient Snapdragon 782G chipset for seamless multitasking. Capture flagship-level photos with the 50MP Sony IMX890 main camera, and never worry about running out of power thanks to the massive 5000 mAh battery with blazing-fast 80W SUPERVOOC charging. This is the Core Experience, refined." 
        },
        { 
            id: 5, 
            name: "Designer Saree", 
            category: "Clothing", 
            price: 2999, 
            image: "images/saree.jpg", 
            description: "Drape yourself in elegance with this exquisite Designer Saree. Crafted from a luxurious and lustrous silk blend fabric, it flows beautifully and feels soft against the skin. The saree is adorned with intricate, all-over Zari woven work and a richly detailed border, showcasing superior craftsmanship. Perfect for weddings, receptions, and grand festive occasions, this piece is a testament to traditional artistry. It comes complete with a matching unstitched blouse piece, allowing for a customized fit." 
        },
        { 
            id: 6, 
            name: "Leather Wallet", 
            category: "Accessories", 
            price: 799, 
            image: "images/wallet.jpg", 
            description: "Organize your essentials in style with this classic bi-fold wallet, meticulously crafted from 100% genuine, full-grain leather. Its slim and sophisticated design fits comfortably in your pocket without adding bulk. Inside, you'll find a well-organized interior with 6 dedicated card slots, 2 full-length currency compartments, and a secure coin pocket. For your peace of mind, this wallet is equipped with advanced RFID blocking technology to protect your cards from digital theft." 
        },
        { 
            id: 7, 
            name: "Noise ColorFit Pulse 2", 
            category: "Electronics", 
            price: 1999, 
            image: "images/noise.jpg", 
            description: "Take charge of your fitness and connectivity with the Noise ColorFit Pulse 2. Featuring a massive 1.85-inch display, it offers a bigger and brighter view of your world. With the built-in Bluetooth calling feature, you can make and receive calls directly from your wrist. Keep a close watch on your health with 24/7 heart rate monitoring, SpO2 tracking, and sleep analysis. Choose from over 50 sports modes to track your workouts accurately. It's more than a watch; it's your smart wellness partner." 
        },
        { 
            id: 8, 
            name: "Women's Straight Kurti", 
            category: "Clothing", 
            price: 650, 
            image: "images/kurti.jpg", 
            description: "Discover the perfect blend of comfort and style with this elegant Women's Straight Kurti. Tailored from premium, soft-to-the-touch Rayon fabric, it ensures breathability and comfort all day long. The kurti features a classic straight-cut silhouette, a graceful round neck, and chic three-quarter sleeves. Its beautiful printed pattern adds a touch of charm, making it a versatile choice for casual outings, daily office wear, or relaxed weekends. Pair it with leggings, palazzos, or even jeans for an effortlessly stylish look." 
        }
    ];


    const productGrid = document.getElementById('product-grid');
    const productListView = document.getElementById('product-list-view');
    const productDetailView = document.getElementById('product-detail-view');
    const cartIcon = document.getElementById('cart-icon');
    const cartModal = document.getElementById('cart-modal');
    const modalOverlay = document.getElementById('modal-overlay');
    const closeCartBtn = document.getElementById('close-cart-btn');
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotalPriceEl = document.getElementById('cart-total-price');
    const cartCountEl = document.getElementById('cart-count');
    const controlsContainer = document.getElementById('controls-container');
    const categoriesContainer = document.getElementById('categories-container');

    // --- CART STATE & LOGIC ---
    let cart = JSON.parse(localStorage.getItem('shoppie-cart')) || [];
    
    const saveCart = () => localStorage.setItem('shoppie-cart', JSON.stringify(cart));

    const addToCart = (productId) => {
        const productInCart = cart.find(item => item.id === productId);
        if (productInCart) {
            productInCart.quantity++;
        } else {
            cart.push({ id: productId, quantity: 1 });
        }
        saveCart();
        renderCart();
    };

    const updateQuantity = (productId, newQuantity) => {
        const productInCart = cart.find(item => item.id === productId);
        if (newQuantity <= 0) {
            removeFromCart(productId);
        } else {
            productInCart.quantity = newQuantity;
            saveCart();
            renderCart();
        }
    };
    
    const removeFromCart = (productId) => {
        cart = cart.filter(item => item.id !== productId);
        saveCart();
        renderCart();
    };

    const renderCart = () => {
        cartItemsContainer.innerHTML = '';
        let totalPrice = 0;
        let totalItems = 0;

        if (cart.length === 0) {
            cartItemsContainer.innerHTML = `<p class="empty-cart-message">Your cart is empty.</p>`;
        } else {
            cart.forEach(cartItem => {
                const product = products.find(p => p.id === cartItem.id);
                totalPrice += product.price * cartItem.quantity;
                totalItems += cartItem.quantity;
                cartItemsContainer.innerHTML += `
                    <div class="cart-item" data-id="${product.id}">
                        <img src="${product.image}" alt="${product.name}">
                        <div class="cart-item-info">
                            <h4>${product.name}</h4>
                            <p>₹${product.price.toLocaleString('en-IN')}</p>
                        </div>
                        <div class="cart-item-actions">
                            <div class="quantity-controls">
                                <button class="quantity-btn decrease-btn">-</button>
                                <span>${cartItem.quantity}</span>
                                <button class="quantity-btn increase-btn">+</button>
                            </div>
                            <button class="remove-item-btn material-icons-outlined">delete</button>
                        </div>
                    </div>`;
            });
        }
        cartTotalPriceEl.textContent = `₹${totalPrice.toLocaleString('en-IN')}`;
        cartCountEl.textContent = totalItems;
    };

    // --- DISPLAY LOGIC ---
    const displayCategories = () => {
        const categories = ['All', ...new Set(products.map(p => p.category))];
        categoriesContainer.innerHTML = categories.map(c => `<button class="category-btn ${c === 'All' ? 'active' : ''}" data-category="${c}">${c}</button>`).join('');
    };
    
    const displayProducts = () => {
        let filteredProducts = [...products];
        const searchBar = document.getElementById('search-bar');
        const priceFilter = document.getElementById('price-filter');
        const priceValue = document.getElementById('price-value');
        const sortOptions = document.getElementById('sort-options');
        const activeCategoryBtn = document.querySelector('.category-btn.active');
        const currentCategory = activeCategoryBtn ? activeCategoryBtn.dataset.category : 'All';
        
        if (currentCategory !== 'All') filteredProducts = filteredProducts.filter(p => p.category === currentCategory);
        if (searchBar.value) filteredProducts = filteredProducts.filter(p => p.name.toLowerCase().includes(searchBar.value.toLowerCase()));
        
        const priceLimit = parseInt(priceFilter.value);
        priceValue.textContent = priceLimit.toLocaleString('en-IN');
        filteredProducts = filteredProducts.filter(p => p.price <= priceLimit);

        const sortValue = sortOptions.value;
        if (sortValue === 'price-asc') filteredProducts.sort((a, b) => a.price - b.price);
        else if (sortValue === 'price-desc') filteredProducts.sort((a, b) => b.price - a.price);
        else if (sortValue === 'name-asc') filteredProducts.sort((a, b) => a.name.localeCompare(b.name));

        productGrid.innerHTML = '';
        const noProductsMessage = document.getElementById('no-products-message');
        if (filteredProducts.length === 0) {
            noProductsMessage.classList.remove('hidden');
        } else {
            noProductsMessage.classList.add('hidden');
            filteredProducts.forEach(product => {
                productGrid.innerHTML += `
                    <div class="product-card" data-id="${product.id}">
                        <img src="${product.image}" alt="${product.name}">
                        <h3>${product.name}</h3>
                        <p>₹${product.price.toLocaleString('en-IN')}</p>
                    </div>`;
            });
        }
    };
    
    const showProductDetail = (productId) => {
        const product = products.find(p => p.id === productId);
        if (!product) return;
        productDetailView.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <div class="product-detail-info">
                <h2>${product.name}</h2>
                <p class="price">₹${product.price.toLocaleString('en-IN')}</p>
                <p class="description">${product.description}</p>
                <button class="back-btn">← Back to Products</button>
                <button class="add-to-cart-btn" data-id="${product.id}">Add to Cart</button>
            </div>`;
        productListView.classList.add('hidden');
        productDetailView.classList.remove('hidden');
    };
    
    const showProductList = () => {
        productDetailView.classList.add('hidden');
        productListView.classList.remove('hidden');
    };

    
   
    controlsContainer.addEventListener('input', displayProducts);
    categoriesContainer.addEventListener('click', (e) => {
        if (e.target.tagName === 'BUTTON') {
            document.querySelector('.category-btn.active').classList.remove('active');
            e.target.classList.add('active');
            displayProducts();
        }
    });

    productGrid.addEventListener('click', (e) => {
        const card = e.target.closest('.product-card');
        if (card) showProductDetail(parseInt(card.dataset.id));
    });

    productDetailView.addEventListener('click', (e) => {
        if (e.target.classList.contains('back-btn')) showProductList();
        if (e.target.classList.contains('add-to-cart-btn')) {
            addToCart(parseInt(e.target.dataset.id));
            // Visual feedback for user
            e.target.textContent = 'Added!';
            e.target.classList.add('added');
            setTimeout(() => {
                e.target.textContent = 'Add to Cart';
                e.target.classList.remove('added');
            }, 1500);
        }
    });

  
    const toggleCart = () => {
        cartModal.classList.toggle('hidden');
        modalOverlay.classList.toggle('hidden');
    };
    cartIcon.addEventListener('click', toggleCart);
    closeCartBtn.addEventListener('click', toggleCart);
    modalOverlay.addEventListener('click', toggleCart);

    cartItemsContainer.addEventListener('click', (e) => {
        const target = e.target;
        const cartItem = target.closest('.cart-item');
        if (!cartItem) return;
        const productId = parseInt(cartItem.dataset.id);
        const cartProduct = cart.find(item => item.id === productId);

        if (target.classList.contains('increase-btn')) {
            updateQuantity(productId, cartProduct.quantity + 1);
        }
        if (target.classList.contains('decrease-btn')) {
            updateQuantity(productId, cartProduct.quantity - 1);
        }
        if (target.classList.contains('remove-item-btn')) {
            removeFromCart(productId);
        }
    });


    displayCategories();
    displayProducts();
    renderCart();
});
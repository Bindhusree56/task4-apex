const products = [
      { name: "Giorgio Armani", category: "sunglasses", price: 24999, image: "https://res.cloudinary.com/dv1cjngnl/image/upload/v1748344125/Lunetterie_G%C3%A9n%C3%A9rale_Eyewear_Campaign__Fashion_photography._Vintage_Aesthetic._Sunglasses_Made_in_Japan._Fashion_lookbook_jjmiqf.jpg", description: "Classic Italian craftsmanship meets modern design in these iconic Armani sunglasses." },
      { name: "Sotirio Bulgari", category: "sunglasses", price: 32999, image: "https://res.cloudinary.com/dv1cjngnl/image/upload/v1748344124/download_1_n09egv.jpg", description: "Exquisite Roman elegance with signature serpenti details and premium UV protection." },
      { name: "Oakley Wraps", category: "sunglasses", price: 18999, image: "https://res.cloudinary.com/dv1cjngnl/image/upload/v1748344129/%D0%A1%D1%8A%D0%B5%D0%BC%D0%BA%D0%B0_%D0%B4%D0%BB%D1%8F_%D0%B1%D1%80%D0%B5%D0%BD%D0%B4%D0%B0_%D0%BE%D1%87%D0%BA%D0%BE%D0%B2_%EF%B8%8F_Idol_Production_%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D0%B0_m6c4cz.jpg", description: "Sport-inspired design with cutting-edge lens technology for maximum performance." },
      { name: "COTIA Fashion", category: "sunglasses", price: 15999, image: "https://res.cloudinary.com/dv1cjngnl/image/upload/v1748344125/download_synvm6.jpg", description: "Contemporary fashion-forward frames that make a bold statement wherever you go." },
      { name: "LOEWE Puzzle Bag", category: "handbags", price: 189999, image: "https://res.cloudinary.com/dv1cjngnl/image/upload/v1748350613/I_m_a_Stylist_and_I_Think_These_Are_the_Designer_Bags_Worth_Buying_hbrlkl.jpg", description: "The iconic puzzle bag crafted from premium Spanish leather with innovative geometric design." },
      { name: "Billini Tote", category: "handbags", price: 12999, image: "https://res.cloudinary.com/dv1cjngnl/image/upload/v1748350612/download_3_kgt1ky.jpg", description: "Spacious and stylish everyday tote perfect for the modern woman on the go." },
      { name: "Sac a main de Voyage", category: "handbags", price: 45999, image: "https://res.cloudinary.com/dv1cjngnl/image/upload/v1748350612/download_4_ifzj7e.jpg", description: "Luxurious travel companion with multiple compartments and premium leather finish." },
      { name: "Anne Klein Signature", category: "handbags", price: 28999, image: "https://res.cloudinary.com/dv1cjngnl/image/upload/v1748350612/Ruched_Chain_Baguette_Bag_ofeeze.jpg", description: "Timeless elegance with modern functionality, featuring the signature AK hardware." },
      { name: "Chanel No. 5", category: "perfumes", price: 14999, image: "https://res.cloudinary.com/dv1cjngnl/image/upload/v1748350612/AI_creator_-_%D0%BD%D0%B0%D0%B2%D1%87%D0%B0%D0%BD%D0%BD%D1%8F_%D0%A1%D0%9E%D0%A6%D0%9C%D0%95%D0%A0%D0%95%D0%96_ah8bq6.jpg", description: "The legendary fragrance that has captivated the world for generations with its timeless allure." },
      { name: "YSL Libre", category: "perfumes", price: 11999, image: "https://res.cloudinary.com/dv1cjngnl/image/upload/v1748350612/download_2_h0ozpr.jpg", description: "A bold statement of freedom with lavender essence and Moroccan orange blossom." },
      { name: "Imensi Intense", category: "perfumes", price: 8999, image: "https://res.cloudinary.com/dv1cjngnl/image/upload/v1748350612/download_1_iqcyll.jpg", description: "Rich oriental fragrance with deep woody notes and exotic spices." },
      { name: "YSL Black Opium", category: "perfumes", price: 13999, image: "https://res.cloudinary.com/dv1cjngnl/image/upload/v1748350613/download_qjw2gr.jpg", description: "Intoxicating coffee and vanilla blend for the woman who dares to be different." },
      { name: "Gold Serpent Chain", category: "neckchains", price: 89999, image: "https://res.cloudinary.com/dv1cjngnl/image/upload/v1748344126/Jewellery_Photography_For_Abbott_Lyon_enfkre.jpg", description: "18K gold serpentine chain with intricate detailing and secure clasp." },
      { name: "Layered Gold Necklace", category: "neckchains", price: 65999, image: "https://res.cloudinary.com/dv1cjngnl/image/upload/v1748344126/Twenty_Compass_FW22_part2_-_Sarah_Emily_S__zub8jx.jpg", description: "Multi-strand 14K gold necklace perfect for layering or wearing solo." },
      { name: "Diamond Pendant Chain", category: "neckchains", price: 124999, image: "https://res.cloudinary.com/dv1cjngnl/image/upload/v1748344124/milliaoficial_vs8d7n.jpg", description: "Elegant diamond-studded pendant on a delicate gold chain, certified and conflict-free." },
      { name: "Herringbone Chain", category: "neckchains", price: 45999, image: "https://res.cloudinary.com/dv1cjngnl/image/upload/v1748344707/7MM_LEROS_HERRINGBONE_CHAIN_mwq964.jpg", description: "Classic 7mm herringbone design in polished gold, perfect for any occasion." }
    ];

    let currentFilter = 'all';
    let currentUser = null;

    // Initialize
    function init() {
      checkLoginStatus();
      updateCartCount();
      renderProducts();
    }

    // Show Toast
    function showToast(message, type = 'success') {
      const toast = document.getElementById('toast');
      toast.textContent = message;
      toast.className = `toast show ${type}`;
      setTimeout(() => {
        toast.className = 'toast';
      }, 3000);
    }

    // Page Navigation
    function showPage(page) {
      const pages = ['homePage', 'aboutPage', 'contactPage', 'loginPage', 'registerPage', 'cartPage'];
      pages.forEach(p => {
        document.getElementById(p).classList.add('hidden');
      });
      document.getElementById(page + 'Page').classList.remove('hidden');

      if (page === 'cart') {
        renderCart();
      }

      // Close mobile menu
      document.getElementById('navLinks').classList.remove('active');
    }

    // Auth Functions
    function checkLoginStatus() {
      const user = JSON.parse(localStorage.getItem('loggedInUser'));
      if (user) {
        currentUser = user;
        document.getElementById('loginLink').classList.add('hidden');
        document.getElementById('registerLink').classList.add('hidden');
        document.getElementById('logoutLink').classList.remove('hidden');
      } else {
        document.getElementById('loginLink').classList.remove('hidden');
        document.getElementById('registerLink').classList.remove('hidden');
        document.getElementById('logoutLink').classList.add('hidden');
      }
    }

    function register(e) {
      e.preventDefault();
      const name = document.getElementById('registerName').value;
      const email = document.getElementById('registerEmail').value;
      const password = document.getElementById('registerPassword').value;

      const users = JSON.parse(localStorage.getItem('users')) || [];
      
      if (users.find(u => u.email === email)) {
        showToast('User already exists!', 'error');
        return;
      }

      users.push({ name, email, password });
      localStorage.setItem('users', JSON.stringify(users));
      showToast('Registration successful! Please login.', 'success');
      showPage('login');
    }

    function login(e) {
      e.preventDefault();
      const email = document.getElementById('loginEmail').value;
      const password = document.getElementById('loginPassword').value;

      const users = JSON.parse(localStorage.getItem('users')) || [];
      const user = users.find(u => u.email === email && u.password === password);

      if (user) {
        localStorage.setItem('loggedInUser', JSON.stringify(user));
        currentUser = user;
        checkLoginStatus();
        showToast(`Welcome back, ${user.name}!`, 'success');
        showPage('home');
      } else {
        showToast('Invalid email or password!', 'error');
      }
    }

    function logout() {
      localStorage.removeItem('loggedInUser');
      currentUser = null;
      checkLoginStatus();
      showToast('Logged out successfully!', 'success');
      showPage('home');
    }

    // Product Functions
    function renderProducts() {
      const container = document.getElementById('productContainer');
      const searchTerm = document.getElementById('searchBar').value.toLowerCase();
      
      let filtered = products;
      
      if (currentFilter !== 'all') {
        filtered = filtered.filter(p => p.category === currentFilter);
      }
      
      if (searchTerm) {
        filtered = filtered.filter(p => 
          p.name.toLowerCase().includes(searchTerm) || 
          p.category.toLowerCase().includes(searchTerm)
        );
      }

      container.innerHTML = filtered.map(product => `
        <div class="product" onclick="openModal(${products.indexOf(product)})">
          <img src="${product.image}" alt="${product.name}" class="product-img">
          <div class="product-info">
            <h4>${product.name}</h4>
            <p class="product-category">${product.category}</p>
            <p class="product-price">₹${product.price.toLocaleString()}</p>
            <button class="btn" onclick="event.stopPropagation(); addToCart(${products.indexOf(product)})">
              <i class="fas fa-shopping-cart"></i> Add to Cart
            </button>
          </div>
        </div>
      `).join('');
    }

    function filterByCategory(category) {
      currentFilter = category;
      document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
      });
      event.target.classList.add('active');
      renderProducts();
    }

    function filterProducts() {
      renderProducts();
    }

    // Modal Functions
    function openModal(index) {
      const product = products[index];
      const modal = document.getElementById('productModal');
      const modalBody = document.getElementById('modalBody');
      
      modalBody.innerHTML = `
        <img src="${product.image}" alt="${product.name}" class="modal-img">
        <h2 style="color: var(--primary); margin-bottom: 1rem;">${product.name}</h2>
        <p style="color: var(--light-text); text-transform: capitalize; margin-bottom: 1rem;">${product.category}</p>
        <p style="font-size: 2rem; color: var(--accent); font-weight: 700; margin-bottom: 1rem;">₹${product.price.toLocaleString()}</p>
        <p style="color: var(--text); line-height: 1.8; margin-bottom: 2rem;">${product.description}</p>
        <button class="btn" onclick="addToCart(${index}); closeModal();">
          <i class="fas fa-shopping-cart"></i> Add to Cart
        </button>
      `;
      
      modal.classList.add('show');
    }

    function closeModal() {
      document.getElementById('productModal').classList.remove('show');
    }

    // Cart Functions
    function addToCart(index) {
      if (!currentUser) {
        showToast('Please login to add items to cart!', 'error');
        showPage('login');
        return;
      }

      const product = products[index];
      let cart = JSON.parse(localStorage.getItem('cart')) || [];
      
      const existingItem = cart.find(item => item.name === product.name);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        cart.push({ ...product, quantity: 1 });
      }
      
      localStorage.setItem('cart', JSON.stringify(cart));
      updateCartCount();
      showToast('Added to cart!', 'success');
    }

    function updateCartCount() {
      const cart = JSON.parse(localStorage.getItem('cart')) || [];
      const count = cart.reduce((sum, item) => sum + item.quantity, 0);
      document.getElementById('cartCount').textContent = count;
    }

    function renderCart() {
      const cart = JSON.parse(localStorage.getItem('cart')) || [];
      const cartItems = document.getElementById('cartItems');
      const cartTotal = document.getElementById('cartTotal');

      if (cart.length === 0) {
        cartItems.innerHTML = '<p style="text-align: center; padding: 3rem; color: var(--light-text);">Your cart is empty</p>';
        cartTotal.innerHTML = '';
        return;
      }

      cartItems.innerHTML = cart.map((item, index) => `
        <div class="cart-item">
          <img src="${item.image}" alt="${item.name}">
          <div class="cart-item-info">
            <h3 style="color: var(--primary); margin-bottom: 0.5rem;">${item.name}</h3>
            <p style="color: var(--light-text); text-transform: capitalize;">${item.category}</p>
            <p style="color: var(--accent); font-size: 1.2rem; font-weight: 700; margin-top: 0.5rem;">₹${item.price.toLocaleString()}</p>
          </div>
          <div>
            <p style="margin-bottom: 1rem;">Quantity: ${item.quantity}</p>
            <button class="btn" onclick="removeFromCart(${index})" style="background: #f44336;">Remove</button>
          </div>
        </div>
      `).join('');

      const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
      cartTotal.innerHTML = `Total: ₹${total.toLocaleString()}`;
    }

    function removeFromCart(index) {
      let cart = JSON.parse(localStorage.getItem('cart')) || [];
      cart.splice(index, 1);
      localStorage.setItem('cart', JSON.stringify(cart));
      updateCartCount();
      renderCart();
      showToast('Item removed from cart', 'success');
    }

    // Mobile Menu
    document.getElementById('mobile-menu').addEventListener('click', function() {
      this.classList.toggle('active');
      document.getElementById('navLinks').classList.toggle('active');
    });

    // Close modal on outside click
    document.getElementById('productModal').addEventListener('click', function(e) {
      if (e.target === this) {
        closeModal();
      }
    });

    // Initialize on load
    init();

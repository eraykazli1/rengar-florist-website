// Neo-Brutalism Florist Website JavaScript
class BloomBrutalApp {
    constructor() {
        this.products = [];
        this.arrangements = [];
        this.categories = [];
        this.cart = JSON.parse(localStorage.getItem('cart')) || [];
        this.currentPage = 1;
        this.productsPerPage = 8;
        
        this.init();
    }

    init() {
        this.loadFloristData();
        this.setupEventListeners();
        this.renderProducts();
        this.renderArrangements();
        this.updateCartCount();
    }

    // Florist Data
    loadFloristData() {
        this.categories = [
            { id: 1, name: 'Güller', icon: 'fas fa-heart', description: 'Klasik gül buketleri' },
            { id: 2, name: 'Laleler', icon: 'fas fa-leaf', description: 'Bahar lale buketleri' },
            { id: 3, name: 'Zambaklar', icon: 'fas fa-seedling', description: 'Zarif zambak düzenlemeleri' },
            { id: 4, name: 'Ayçiçekleri', icon: 'fas fa-tree', description: 'Neşeli ayçiçeği buketleri' },
            { id: 5, name: 'Orkideler', icon: 'fas fa-snowflake', description: 'Egzotik orkide koleksiyonları' },
            { id: 6, name: 'Karanfiller', icon: 'fas fa-palette', description: 'Renkli karanfil düzenlemeleri' },
            { id: 7, name: 'Gerberalar', icon: 'fas fa-star', description: 'Parlak gerbera buketleri' },
            { id: 8, name: 'Karışık', icon: 'fas fa-gem', description: 'Özel karışık buketler' }
        ];

        this.products = [
            {
                id: 1,
                title: 'Kırmızı Gül Buketi',
                description: 'Taze kırmızı güllerden hazırlanmış lüks buket. Özel günler için ideal.',
                price: 89,
                category: 'Güller',
                categoryId: 1,
                rating: 4.9,
                reviews: 67,
                image: 'images/rose-bouquet.jpg',
                inStock: true,
                isFeatured: true
            },
            {
                id: 2,
                title: 'Lale Buketi',
                description: 'Renkli lalelerden oluşan bahar buketi. Doğal güzellik ve tazelik.',
                price: 125,
                category: 'Laleler',
                categoryId: 2,
                rating: 4.8,
                reviews: 43,
                image: 'images/tulip-bouquet.jpg',
                inStock: true,
                isFeatured: true
            },
            {
                id: 3,
                title: 'Zambak Buketi',
                description: 'Zarif zambaklardan hazırlanmış şık buket. Zarafet ve güzellik.',
                price: 65,
                category: 'Zambaklar',
                categoryId: 3,
                rating: 4.7,
                reviews: 89,
                image: 'images/lily-bouquet.jpg',
                inStock: true,
                isFeatured: false
            },
            {
                id: 4,
                title: 'Ayçiçeği Buketi',
                description: 'Parlak ayçiçeklerinden oluşan neşeli buket. Mutluluk ve enerji.',
                price: 75,
                category: 'Ayçiçekleri',
                categoryId: 4,
                rating: 4.6,
                reviews: 56,
                image: 'images/sunflower-bouquet.jpg',
                inStock: true,
                isFeatured: true
            },
            {
                id: 5,
                title: 'Orkide Buketi',
                description: 'Egzotik orkidelerden hazırlanmış lüks buket. Zarafet ve şıklık.',
                price: 95,
                category: 'Orkideler',
                categoryId: 5,
                rating: 4.8,
                reviews: 34,
                image: 'images/orchid-bouquet.jpg',
                inStock: true,
                isFeatured: false
            },
            {
                id: 6,
                title: 'Karanfil Buketi',
                description: 'Renkli karanfillerden oluşan güzel buket. Sevgi ve saygının simgesi.',
                price: 150,
                category: 'Karanfiller',
                categoryId: 6,
                rating: 5.0,
                reviews: 23,
                image: 'images/carnation-bouquet.jpg',
                inStock: true,
                isFeatured: true
            },
            {
                id: 7,
                title: 'Gerbera Buketi',
                description: 'Parlak gerberalardan hazırlanmış renkli buket. Neşe ve mutluluk.',
                price: 110,
                category: 'Gerberalar',
                categoryId: 7,
                rating: 4.9,
                reviews: 78,
                image: 'images/gerbera-bouquet.jpg',
                inStock: true,
                isFeatured: false
            },
            {
                id: 8,
                title: 'Karışık Buket',
                description: 'Farklı çiçek türlerinden oluşan özel karışık buket. Çeşitlilik ve güzellik.',
                price: 55,
                category: 'Karışık',
                categoryId: 8,
                rating: 4.5,
                reviews: 45,
                image: 'images/mixed-bouquet.jpg',
                inStock: true,
                isFeatured: false
            },
            {
                id: 9,
                title: 'Aynalı Beyaz Gül Buketi',
                description: 'Merkezinde dekoratif ayna bulunan lüks beyaz gül buketi. Özel günler için ideal.',
                price: 150,
                category: 'Güller',
                categoryId: 1,
                rating: 4.9,
                reviews: 89,
                image: 'images/mirror-rose-bouquet.jpg',
                inStock: true,
                isFeatured: true
            },
            {
                id: 10,
                title: 'Pembe Şakayık Aranjmanı',
                description: 'Pembe ve krem tonlarında şakayık benzeri çiçeklerle hazırlanmış zarif aranjman.',
                price: 180,
                category: 'Karışık',
                categoryId: 8,
                rating: 4.8,
                reviews: 67,
                image: 'images/peony-arrangement.jpg',
                inStock: true,
                isFeatured: true
            },
            {
                id: 11,
                title: 'Çiçekçi Vitrin Koleksiyonu',
                description: 'Çeşitli çiçek türlerinden oluşan zengin vitrin koleksiyonu. Her zevke uygun.',
                price: 250,
                category: 'Karışık',
                categoryId: 8,
                rating: 4.7,
                reviews: 45,
                image: 'images/florist-showcase.jpg',
                inStock: true,
                isFeatured: false
            }
        ];

        this.arrangements = [
            {
                id: 1,
                title: 'Lüks Gül Düzenlemesi',
                description: 'Özel günler için hazırlanmış lüks gül düzenlemesi. Zarafet ve şıklık.',
                price: 200,
                image: 'images/rose-bouquet.jpg',
                isPopular: true
            },
            {
                id: 2,
                title: 'Bahar Buketi',
                description: 'Baharın en güzel çiçeklerinden oluşan neşeli buket. Doğal güzellik.',
                price: 175,
                image: 'images/tulip-bouquet.jpg',
                isPopular: true
            },
            {
                id: 3,
                title: 'Egzotik Düzenleme',
                description: 'Egzotik çiçeklerden hazırlanmış özel düzenleme. Benzersiz güzellik.',
                price: 225,
                image: 'images/orchid-bouquet.jpg',
                isPopular: false
            },
            {
                id: 4,
                title: 'Aynalı Lüks Aranjman',
                description: 'Merkezinde ayna bulunan beyaz gül aranjmanı. Özel günler için mükemmel.',
                price: 300,
                image: 'images/mirror-rose-bouquet.jpg',
                isPopular: true
            },
            {
                id: 5,
                title: 'Şakayık Bahçesi',
                description: 'Pembe ve krem şakayıklardan oluşan zarif bahçe aranjmanı.',
                price: 280,
                image: 'images/peony-arrangement.jpg',
                isPopular: true
            }
        ];
    }

    // Event Listeners
    setupEventListeners() {
        // Filter functionality
        document.getElementById('categoryFilter').addEventListener('change', () => this.filterProducts());
        document.getElementById('sortFilter').addEventListener('change', () => this.sortProducts());

        // Modal functionality
        this.setupModalListeners();

        // Cart functionality
        document.getElementById('cartBtn').addEventListener('click', () => this.toggleCartModal());

        // Forms
        document.getElementById('orderForm').addEventListener('submit', (e) => this.handleOrder(e));

        // Checkout
        document.getElementById('checkoutBtn').addEventListener('click', () => this.handleCheckout());
    }

    setupModalListeners() {
        const modals = document.querySelectorAll('.modal');
        const closeButtons = document.querySelectorAll('.close');

        closeButtons.forEach(button => {
            button.addEventListener('click', () => {
                modals.forEach(modal => modal.style.display = 'none');
            });
        });

        window.addEventListener('click', (e) => {
            modals.forEach(modal => {
                if (e.target === modal) {
                    modal.style.display = 'none';
                }
            });
        });
    }

    // Product Management
    renderProducts() {
        const productsGrid = document.getElementById('productsGrid');
        const categoryFilter = document.getElementById('categoryFilter');

        // Populate category filter
        categoryFilter.innerHTML = '<option value="">ALL CATEGORIES</option>' +
            this.categories.map(category => 
                `<option value="${category.id}">${category.name}</option>`
            ).join('');

        // Render products
        productsGrid.innerHTML = this.products.map(product => `
            <div class="product-card" onclick="app.showProductDetail(${product.id})">
                <div class="product-image">
                    <img src="${product.image}" alt="${product.title}" class="product-img">
                </div>
                <div class="product-info">
                    <h3 class="product-title">${product.title}</h3>
                    <p class="product-description">${product.description}</p>
                    <div class="product-price">$${product.price}</div>
                    <div class="product-actions">
                        <button class="btn-add-cart" onclick="event.stopPropagation(); app.addToCart(${product.id})">
                            <i class="fas fa-cart-plus"></i> SEPETE EKLE
                        </button>
                        <button class="btn-view" onclick="event.stopPropagation(); app.showProductDetail(${product.id})">
                            <i class="fas fa-eye"></i>
                        </button>
                    </div>
                </div>
            </div>
        `).join('');
    }

    renderArrangements() {
        const arrangementsGrid = document.getElementById('arrangementsGrid');
        
        arrangementsGrid.innerHTML = this.arrangements.map(arrangement => `
            <div class="arrangement-card">
                <div class="arrangement-image">
                    <img src="${arrangement.image}" alt="${arrangement.title}" class="arrangement-img">
                </div>
                <h3 class="arrangement-title">${arrangement.title}</h3>
                <p class="arrangement-description">${arrangement.description}</p>
                <div class="arrangement-price">$${arrangement.price}</div>
                <button class="btn btn-primary" onclick="app.addArrangementToCart(${arrangement.id})">
                    ORDER NOW
                </button>
            </div>
        `).join('');
    }

    // Search and Filter
    filterProducts() {
        const categoryId = document.getElementById('categoryFilter').value;
        if (categoryId) {
            this.products = this.products.filter(product => product.categoryId == categoryId);
        } else {
            this.loadFloristData(); // Reset to original data
        }
        this.currentPage = 1;
        this.renderProducts();
    }

    sortProducts() {
        const sortBy = document.getElementById('sortFilter').value;
        
        switch (sortBy) {
            case 'name':
                this.products.sort((a, b) => a.title.localeCompare(b.title));
                break;
            case 'price-low':
                this.products.sort((a, b) => a.price - b.price);
                break;
            case 'price-high':
                this.products.sort((a, b) => b.price - a.price);
                break;
            case 'rating':
                this.products.sort((a, b) => b.rating - a.rating);
                break;
        }
        
        this.currentPage = 1;
        this.renderProducts();
    }

    // Product Detail
    showProductDetail(productId) {
        const product = this.products.find(p => p.id === productId);
        if (!product) return;

        const productDetail = document.getElementById('productDetail');
        productDetail.innerHTML = `
            <div class="product-detail">
                <div class="product-detail-image">
                    <img src="${product.image}" alt="${product.title}" class="product-detail-img">
                </div>
                <div class="product-detail-info">
                    <h2>${product.title}</h2>
                    <div class="product-detail-price">$${product.price}</div>
                    <p class="product-detail-description">${product.description}</p>
                    <div class="product-detail-actions">
                        <button class="btn btn-primary" onclick="app.addToCart(${product.id}); app.toggleCartModal();">
                            <i class="fas fa-cart-plus"></i> SEPETE EKLE
                        </button>
                        <button class="btn btn-secondary" onclick="app.toggleCartModal()">
                            <i class="fas fa-shopping-cart"></i> SEPETİ GÖRÜNTÜLE
                        </button>
                    </div>
                </div>
            </div>
        `;

        document.getElementById('productModal').style.display = 'block';
    }

    // Cart Management
    addToCart(productId) {
        const product = this.products.find(p => p.id === productId);
        if (!product) return;

        const existingItem = this.cart.find(item => item.id === productId);
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            this.cart.push({
                id: product.id,
                title: product.title,
                price: product.price,
                image: product.image,
                quantity: 1
            });
        }

        this.saveCart();
        this.updateCartCount();
        this.showNotification(`${product.title} sepete eklendi!`);
    }

    addArrangementToCart(arrangementId) {
        const arrangement = this.arrangements.find(a => a.id === arrangementId);
        if (!arrangement) return;

        const existingItem = this.cart.find(item => item.id === `arrangement-${arrangementId}`);
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            this.cart.push({
                id: `arrangement-${arrangement.id}`,
                title: arrangement.title,
                price: arrangement.price,
                image: arrangement.icon,
                quantity: 1
            });
        }

        this.saveCart();
        this.updateCartCount();
        this.showNotification(`${arrangement.title} sepete eklendi!`);
    }

    removeFromCart(productId) {
        this.cart = this.cart.filter(item => item.id !== productId);
        this.saveCart();
        this.updateCartCount();
        this.renderCart();
    }

    updateCartQuantity(productId, newQuantity) {
        const item = this.cart.find(item => item.id === productId);
        if (item) {
            if (newQuantity <= 0) {
                this.removeFromCart(productId);
            } else {
                item.quantity = newQuantity;
                this.saveCart();
                this.renderCart();
            }
        }
    }

    renderCart() {
        const cartItems = document.getElementById('cartItems');
        const cartTotal = document.getElementById('cartTotal');

        if (this.cart.length === 0) {
            cartItems.innerHTML = '<p style="text-align: center; color: #2C2C2C; font-weight: 700; text-transform: uppercase;">SEPETİNİZ BOŞ</p>';
            cartTotal.textContent = '₺0';
            return;
        }

        cartItems.innerHTML = this.cart.map(item => `
            <div class="cart-item">
                <div class="cart-item-image">
                    <img src="${item.image}" alt="${item.title}" class="cart-item-img">
                </div>
                <div class="cart-item-info">
                    <div class="cart-item-title">${item.title}</div>
                    <div class="cart-item-price">$${item.price}</div>
                </div>
                <div class="cart-item-controls">
                    <button class="quantity-btn" onclick="app.updateCartQuantity('${item.id}', ${item.quantity - 1})">-</button>
                    <span class="quantity">${item.quantity}</span>
                    <button class="quantity-btn" onclick="app.updateCartQuantity('${item.id}', ${item.quantity + 1})">+</button>
                    <button class="remove-btn" onclick="app.removeFromCart('${item.id}')">REMOVE</button>
                </div>
            </div>
        `).join('');

        const total = this.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        cartTotal.textContent = `$${total}`;
    }

    updateCartCount() {
        const count = this.cart.reduce((sum, item) => sum + item.quantity, 0);
        document.getElementById('cartCount').textContent = count;
    }

    saveCart() {
        localStorage.setItem('cart', JSON.stringify(this.cart));
    }

    // Modal Management
    toggleCartModal() {
        this.renderCart();
        document.getElementById('cartModal').style.display = 'block';
    }

    // Order Form
    handleOrder(e) {
        e.preventDefault();
        this.showNotification('Your custom order has been submitted! We will contact you within 24 hours.', 'success');
        e.target.reset();
    }

    // Checkout
    handleCheckout() {
        if (this.cart.length === 0) {
            this.showNotification('Sepetiniz boş!', 'error');
            return;
        }

        // Simulate checkout process
        this.showNotification('Siparişiniz işleniyor...', 'info');
        
        setTimeout(() => {
            this.cart = [];
            this.saveCart();
            this.updateCartCount();
            document.getElementById('cartModal').style.display = 'none';
            this.showNotification('Siparişiniz başarıyla verildi! Çiçekleriniz 24 saat içinde teslim edilecek.', 'success');
        }, 2000);
    }

    // Utility Functions
    showNotification(message, type = 'info') {
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <i class="fas fa-${type === 'error' ? 'exclamation-triangle' : type === 'success' ? 'check-circle' : 'info-circle'}"></i>
            <span>${message}</span>
        `;

        // Add styles
        notification.style.cssText = `
            position: fixed;
            top: 120px;
            right: 20px;
            background: ${type === 'error' ? '#DC143C' : type === 'success' ? '#2C2C2C' : '#000000'};
            color: white;
            padding: 20px 30px;
            border: 4px solid #000000;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 1px;
            z-index: 3000;
            display: flex;
            align-items: center;
            gap: 15px;
            animation: brutalSlideIn 0.5s ease-out;
            transform: translateX(100%);
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            box-shadow: 8px 8px 0 #DC143C;
            max-width: 400px;
        `;

        document.body.appendChild(notification);

        // Remove after 4 seconds
        setTimeout(() => {
            notification.style.animation = 'slideOutRight 0.3s ease';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 300);
        }, 4000);
    }
}

// Utility function for smooth scrolling
function scrollToProducts() {
    document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
}

// Initialize the application
const app = new BloomBrutalApp();

// Add CSS animations for notifications
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    
    @keyframes slideOutRight {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
`;
document.head.appendChild(style);

// Scroll Animation Observer
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('scroll-reveal');
        }
    });
}, observerOptions);

// Observe elements for scroll animations
document.addEventListener('DOMContentLoaded', () => {
    const elementsToAnimate = document.querySelectorAll('.section-header, .product-card, .arrangement-card, .gallery-item, .feature, .about-text');
    elementsToAnimate.forEach(el => {
        observer.observe(el);
    });
});

// Add brutal hover effects to interactive elements
document.addEventListener('DOMContentLoaded', () => {
    const brutalElements = document.querySelectorAll('.btn, .product-card, .arrangement-card, .gallery-item, .category-card');
    brutalElements.forEach(el => {
        el.classList.add('brutal-hover');
    });
});

// Enhanced button click animations
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('btn')) {
        e.target.style.transform = 'scale(0.95)';
        setTimeout(() => {
            e.target.style.transform = '';
        }, 150);
    }
});

// Add loading animation to cart operations
function showLoadingAnimation(element) {
    const loading = document.createElement('div');
    loading.className = 'loading';
    loading.style.position = 'absolute';
    loading.style.top = '50%';
    loading.style.left = '50%';
    loading.style.transform = 'translate(-50%, -50%)';
    element.style.position = 'relative';
    element.appendChild(loading);
    
    setTimeout(() => {
        if (loading.parentNode) {
            loading.parentNode.removeChild(loading);
        }
    }, 1000);
}
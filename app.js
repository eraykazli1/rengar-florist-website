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
                image: 'https://images.unsplash.com/photo-1518895949257-7621c3c786d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
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
                image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
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
                image: 'https://images.unsplash.com/photo-1563241527-3004b7be99c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
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
                image: 'https://images.unsplash.com/photo-1597848212624-e17eb5d5a3e4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                inStock: true,
                isFeatured: false
            },
            {
                id: 5,
                title: 'Orkide Buketi',
                description: 'Egzotik orkidelerden hazırlanmış lüks buket. Benzersiz güzellik.',
                price: 95,
                category: 'Orkideler',
                categoryId: 5,
                rating: 4.8,
                reviews: 78,
                image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                inStock: true,
                isFeatured: false
            },
            {
                id: 6,
                title: 'Karanfil Buketi',
                description: 'Renkli karanfillerden oluşan güzel buket. Sevgi ve saygının simgesi.',
                price: 55,
                category: 'Karanfiller',
                categoryId: 6,
                rating: 4.5,
                reviews: 45,
                image: 'https://images.unsplash.com/photo-1518895949257-7621c3c786d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                inStock: true,
                isFeatured: false
            },
            {
                id: 7,
                title: 'Gerbera Buketi',
                description: 'Parlak gerberalardan oluşan neşeli buket. Mutluluk ve enerji.',
                price: 70,
                category: 'Gerberalar',
                categoryId: 7,
                rating: 4.7,
                reviews: 78,
                image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
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
                image: 'https://images.unsplash.com/photo-1518895949257-7621c3c786d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
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
                image: 'https://images.unsplash.com/photo-1518895949257-7621c3c786d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
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
                image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
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
                image: 'https://images.unsplash.com/photo-1563241527-3004b7be99c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
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
                image: 'https://images.unsplash.com/photo-1518895949257-7621c3c786d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                isPopular: true
            },
            {
                id: 2,
                title: 'Bahar Buketi',
                description: 'Baharın en güzel çiçeklerinden oluşan neşeli buket. Doğal güzellik.',
                price: 175,
                image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                isPopular: true
            },
            {
                id: 3,
                title: 'Egzotik Düzenleme',
                description: 'Egzotik çiçeklerden hazırlanmış özel düzenleme. Benzersiz güzellik.',
                price: 225,
                image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                isPopular: false
            },
            {
                id: 4,
                title: 'Aynalı Lüks Aranjman',
                description: 'Merkezinde ayna bulunan beyaz gül aranjmanı. Özel günler için mükemmel.',
                price: 300,
                image: 'https://images.unsplash.com/photo-1518895949257-7621c3c786d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                isPopular: true
            },
            {
                id: 5,
                title: 'Şakayık Bahçesi',
                description: 'Pembe ve krem şakayıklardan oluşan zarif bahçe aranjmanı.',
                price: 280,
                image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                isPopular: true
            }
        ];
    }

    // Event Listeners
    setupEventListeners() {
        // Filter functionality
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
                e.target.classList.add('active');
                this.filterProducts(e.target.dataset.category);
            });
        });

        // Sort functionality
        document.getElementById('sortSelect').addEventListener('change', (e) => {
            this.sortProducts(e.target.value);
        });

        // Cart modal
        document.getElementById('cartModal').addEventListener('click', (e) => {
            if (e.target.id === 'cartModal') {
                this.toggleCartModal();
            }
        });

        // Product modal
        document.getElementById('productModal').addEventListener('click', (e) => {
            if (e.target.id === 'productModal') {
                this.toggleProductModal();
            }
        });

        // Close buttons
        document.querySelectorAll('.close').forEach(btn => {
            btn.addEventListener('click', () => {
                this.toggleCartModal();
                this.toggleProductModal();
            });
        });

        // Checkout
        document.getElementById('checkoutBtn').addEventListener('click', () => {
            this.handleCheckout();
        });

        // Custom order form
        document.getElementById('customOrderForm').addEventListener('submit', (e) => {
            this.handleCustomOrder(e);
        });
    }

    // Render Functions
    renderProducts() {
        const productsGrid = document.getElementById('productsGrid');
        productsGrid.innerHTML = this.products.map(product => `
            <div class="product-card" data-category="${product.categoryId}">
                <div class="product-image">
                    <img src="${product.image}" alt="${product.title}" class="product-img">
                    <div class="product-overlay">
                        <button class="btn-view" onclick="app.showProductDetail(${product.id})">
                            <i class="fas fa-eye"></i>
                        </button>
                    </div>
                </div>
                <div class="product-info">
                    <h3 class="product-title">${product.title}</h3>
                    <p class="product-description">${product.description}</p>
                    <div class="product-price">₺${product.price}</div>
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
                    <div class="arrangement-overlay">
                        <button class="btn-view" onclick="app.showArrangementDetail(${arrangement.id})">
                            <i class="fas fa-eye"></i>
                        </button>
                    </div>
                </div>
                <div class="arrangement-info">
                    <h3 class="arrangement-title">${arrangement.title}</h3>
                    <p class="arrangement-description">${arrangement.description}</p>
                    <div class="arrangement-price">₺${arrangement.price}</div>
                    <div class="arrangement-actions">
                        <button class="btn-add-cart" onclick="app.addArrangementToCart(${arrangement.id})">
                            <i class="fas fa-cart-plus"></i> SEPETE EKLE
                        </button>
                    </div>
                </div>
            </div>
        `).join('');
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
                <img src="${item.image}" alt="${item.title}" class="cart-item-img">
                <div class="cart-item-info">
                    <h4>${item.title}</h4>
                    <p>₺${item.price} x ${item.quantity}</p>
                </div>
                <button class="btn-remove" onclick="app.removeFromCart(${item.id})">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        `).join('');

        const total = this.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        cartTotal.textContent = `₺${total}`;
    }

    showProductDetail(productId) {
        const product = this.products.find(p => p.id === productId);
        if (!product) return;

        const modal = document.getElementById('productModal');
        const content = document.getElementById('productDetailContent');
        
        content.innerHTML = `
            <div class="product-detail">
                <div class="product-detail-image">
                    <img src="${product.image}" alt="${product.title}" class="product-detail-img">
                </div>
                <div class="product-detail-info">
                    <h2>${product.title}</h2>
                    <div class="product-detail-price">₺${product.price}</div>
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
        
        modal.style.display = 'block';
    }

    // Cart Functions
    addToCart(productId) {
        const product = this.products.find(p => p.id === productId);
        if (!product) return;

        const existingItem = this.cart.find(item => item.id === productId);
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            this.cart.push({
                ...product,
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

        const existingItem = this.cart.find(item => item.id === arrangementId);
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            this.cart.push({
                ...arrangement,
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

    saveCart() {
        localStorage.setItem('cart', JSON.stringify(this.cart));
    }

    updateCartCount() {
        const count = this.cart.reduce((sum, item) => sum + item.quantity, 0);
        document.getElementById('cartCount').textContent = count;
    }

    toggleCartModal() {
        const modal = document.getElementById('cartModal');
        if (modal.style.display === 'block') {
            modal.style.display = 'none';
        } else {
            this.renderCart();
            modal.style.display = 'block';
        }
    }

    toggleProductModal() {
        const modal = document.getElementById('productModal');
        modal.style.display = modal.style.display === 'block' ? 'none' : 'block';
    }

    // Filter and Sort
    filterProducts(categoryId) {
        const cards = document.querySelectorAll('.product-card');
        cards.forEach(card => {
            if (categoryId === 'all' || card.dataset.category === categoryId) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }

    sortProducts(sortBy) {
        let sortedProducts = [...this.products];
        
        switch(sortBy) {
            case 'price-low':
                sortedProducts.sort((a, b) => a.price - b.price);
                break;
            case 'price-high':
                sortedProducts.sort((a, b) => b.price - a.price);
                break;
            case 'rating':
                sortedProducts.sort((a, b) => b.rating - a.rating);
                break;
            default:
                return;
        }
        
        this.products = sortedProducts;
        this.renderProducts();
    }

    // Custom Order
    handleCustomOrder(e) {
        e.preventDefault();
        this.showNotification('Özel siparişiniz başarıyla alındı! 24 saat içinde sizinle iletişime geçeceğiz.', 'success');
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

        // Animate in
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);

        // Remove after 3 seconds
        setTimeout(() => {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 300);
        }, 3000);
    }
}

// Initialize app
const app = new BloomBrutalApp();

// Global functions
function scrollToProducts() {
    document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
}

// Add CSS animations dynamically
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
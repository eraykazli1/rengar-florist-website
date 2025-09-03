// Basit Express.js sunucusu (isteğe bağlı)
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('.'));

// API Routes
app.get('/api/products', (req, res) => {
    // Örnek ürün verisi
    const products = [
        {
            id: 1,
            title: 'MacBook Pro 16"',
            description: 'Apple MacBook Pro 16 inç, M2 Pro çip, 16GB RAM, 512GB SSD',
            price: 45999,
            category: 'Elektronik',
            categoryId: 1,
            rating: 4.8,
            reviews: 124,
            image: 'fas fa-laptop',
            inStock: true
        },
        {
            id: 2,
            title: 'iPhone 15 Pro',
            description: 'Apple iPhone 15 Pro, 128GB, Titanium',
            price: 32999,
            category: 'Elektronik',
            categoryId: 1,
            rating: 4.9,
            reviews: 89,
            image: 'fas fa-mobile-alt',
            inStock: true
        }
    ];
    
    res.json(products);
});

app.get('/api/categories', (req, res) => {
    const categories = [
        { id: 1, name: 'Elektronik', icon: 'fas fa-laptop', description: 'Bilgisayar ve elektronik ürünler' },
        { id: 2, name: 'Giyim', icon: 'fas fa-tshirt', description: 'Kadın ve erkek giyim' },
        { id: 3, name: 'Ev & Yaşam', icon: 'fas fa-home', description: 'Ev dekorasyon ve yaşam' },
        { id: 4, name: 'Spor', icon: 'fas fa-dumbbell', description: 'Spor ve fitness ürünleri' },
        { id: 5, name: 'Kitap', icon: 'fas fa-book', description: 'Kitaplar ve dergiler' },
        { id: 6, name: 'Kozmetik', icon: 'fas fa-palette', description: 'Güzellik ve kozmetik' }
    ];
    
    res.json(categories);
});

// Ana sayfa
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Sunucuyu başlat
app.listen(PORT, () => {
    console.log(`🚀 Sunucu http://localhost:${PORT} adresinde çalışıyor`);
    console.log(`📱 E-ticaret sitesi hazır!`);
});

module.exports = app;

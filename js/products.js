// Product Data Array
const products = [
    {
        id: 101,
        name: "Machine Découpe Laser CO2 100W",
        category: "industrie",
        image: "https://images.unsplash.com/photo-1565043666747-69f6646db940?w=400&h=300&fit=crop",
        description: "Machine de découpe laser professionnelle idéale pour le bois, l'acrylique et le textile. Technologie CO2 avec tube Reci haute performance.",
        prices: {
            factory: 8500,
            landed: 12500,
            resell: 22000
        },
        moq: "1 Unité",
        timeline: "35-40 Jours",
        features: [
            "Tube Laser Reci W2 100W",
            "Surface de travail 1300x900mm",
            "Système de refroidissement intégré",
            "Logiciel RDWorks inclus",
            "Formation vidéo complète"
        ],
        steps: [
            { label: "Commande & Paiement", days: "1-2 Jours", icon: "ph-credit-card" },
            { label: "Production Usine", days: "7-10 Jours", icon: "ph-factory" },
            { label: "Inspection Qualité", days: "2-3 Jours", icon: "ph-seal-check" },
            { label: "Transit Maritime", days: "20-25 Jours", icon: "ph-boat" },
            { label: "Dédouanement", days: "3-5 Jours", icon: "ph-stamp" },
            { label: "Livraison Finale", days: "1-2 Jours", icon: "ph-truck" }
        ],
        badge: "Best-Seller",
        badgeColor: "bg-green-500"
    },
    {
        id: 102,
        name: "Imprimante UV Grand Format A3+",
        category: "industrie",
        image: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=400&h=300&fit=crop",
        description: "Imprimante UV professionnelle pour impression directe sur tous supports: verre, bois, métal, plastique, cuir.",
        prices: {
            factory: 4200,
            landed: 6800,
            resell: 12000
        },
        moq: "1 Unité",
        timeline: "25-30 Jours",
        features: [
            "Têtes Epson TX800 x3",
            "Format A3+ (330x600mm)",
            "Impression relief 3D",
            "Encres UV incluses (1L/couleur)",
            "Garantie 1 an"
        ],
        steps: [
            { label: "Commande & Paiement", days: "1-2 Jours", icon: "ph-credit-card" },
            { label: "Production Usine", days: "5-7 Jours", icon: "ph-factory" },
            { label: "Inspection Qualité", days: "1-2 Jours", icon: "ph-seal-check" },
            { label: "Transit Aérien", days: "7-10 Jours", icon: "ph-airplane" },
            { label: "Dédouanement", days: "2-3 Jours", icon: "ph-stamp" },
            { label: "Livraison Finale", days: "1 Jour", icon: "ph-truck" }
        ],
        badge: "Express",
        badgeColor: "bg-secondary"
    },
    {
        id: 103,
        name: "Machine à Broder 15 Têtes",
        category: "textile",
        image: "https://images.unsplash.com/photo-1558171813-4c088753af8f?w=400&h=300&fit=crop",
        description: "Machine à broder industrielle multi-têtes pour production en série. Idéale pour casquettes, t-shirts et textiles promotionnels.",
        prices: {
            factory: 35000,
            landed: 48000,
            resell: 75000
        },
        moq: "1 Unité",
        timeline: "45-50 Jours",
        features: [
            "15 têtes de broderie",
            "400x450mm par tête",
            "1200 points/minute",
            "Écran tactile 10 pouces",
            "Installation sur site incluse"
        ],
        steps: [
            { label: "Commande & Acompte", days: "1-3 Jours", icon: "ph-credit-card" },
            { label: "Production Usine", days: "15-20 Jours", icon: "ph-factory" },
            { label: "Tests & Calibration", days: "3-5 Jours", icon: "ph-seal-check" },
            { label: "Transit Maritime", days: "20-25 Jours", icon: "ph-boat" },
            { label: "Dédouanement", days: "5-7 Jours", icon: "ph-stamp" },
            { label: "Installation", days: "2-3 Jours", icon: "ph-wrench" }
        ],
        badge: "Premium",
        badgeColor: "bg-purple-600"
    },
    {
        id: 104,
        name: "Tissus Mousseline Premium (Rouleau 100m)",
        category: "textile",
        image: "https://images.unsplash.com/photo-1558171813-4c088753af8f?w=400&h=300&fit=crop",
        description: "Mousseline de soie synthétique haute qualité pour confection robes et foulards. Coloris personnalisables.",
        prices: {
            factory: 280,
            landed: 450,
            resell: 850
        },
        moq: "50 Rouleaux",
        timeline: "20-25 Jours",
        features: [
            "100% Polyester haute qualité",
            "Largeur 150cm",
            "Grammage 75g/m²",
            "Certification Oeko-Tex",
            "30+ coloris disponibles"
        ],
        steps: [
            { label: "Sélection Coloris", days: "1-2 Jours", icon: "ph-palette" },
            { label: "Production", days: "7-10 Jours", icon: "ph-factory" },
            { label: "Contrôle Qualité", days: "1-2 Jours", icon: "ph-seal-check" },
            { label: "Transit Maritime", days: "15-20 Jours", icon: "ph-boat" },
            { label: "Dédouanement", days: "2-3 Jours", icon: "ph-stamp" }
        ],
        badge: "Stock Dispo",
        badgeColor: "bg-blue-500"
    },
    {
        id: 105,
        name: "Smartphone Android OEM 6.5\"",
        category: "electronique",
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=300&fit=crop",
        description: "Smartphone marque blanche personnalisable. Idéal pour revente ou usage corporate avec logo personnalisé.",
        prices: {
            factory: 85,
            landed: 125,
            resell: 249
        },
        moq: "100 Unités",
        timeline: "30-35 Jours",
        features: [
            "Écran 6.5\" HD+ IPS",
            "4GB RAM / 64GB ROM",
            "Batterie 5000mAh",
            "Double SIM 4G",
            "Logo & Packaging custom"
        ],
        steps: [
            { label: "Design Validation", days: "3-5 Jours", icon: "ph-palette" },
            { label: "Production", days: "10-12 Jours", icon: "ph-factory" },
            { label: "Tests QC", days: "2-3 Jours", icon: "ph-seal-check" },
            { label: "Transit Aérien", days: "7-10 Jours", icon: "ph-airplane" },
            { label: "Dédouanement", days: "3-5 Jours", icon: "ph-stamp" }
        ],
        badge: "Personnalisable",
        badgeColor: "bg-indigo-500"
    },
    {
        id: 106,
        name: "Power Bank 20000mAh Logo Custom",
        category: "electronique",
        image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=400&h=300&fit=crop",
        description: "Batterie externe haute capacité avec personnalisation logo. Parfait pour goodies entreprise et revente.",
        prices: {
            factory: 8,
            landed: 14,
            resell: 35
        },
        moq: "500 Unités",
        timeline: "18-22 Jours",
        features: [
            "Capacité réelle 20000mAh",
            "2x USB-A + 1x USB-C",
            "Charge rapide 22.5W",
            "Affichage LED niveau",
            "Gravure laser logo incluse"
        ],
        steps: [
            { label: "Validation Design", days: "1-2 Jours", icon: "ph-palette" },
            { label: "Production", days: "5-7 Jours", icon: "ph-factory" },
            { label: "Gravure Logo", days: "2-3 Jours", icon: "ph-paint-brush" },
            { label: "Transit Express", days: "5-7 Jours", icon: "ph-airplane" },
            { label: "Dédouanement", days: "2-3 Jours", icon: "ph-stamp" }
        ],
        badge: "MOQ Bas",
        badgeColor: "bg-teal-500"
    },
    {
        id: 107,
        name: "Kit Soins Visage Private Label",
        category: "cosmetique",
        image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=300&fit=crop",
        description: "Gamme complète soins visage en marque blanche: sérum, crème, nettoyant. Formules certifiées et personnalisables.",
        prices: {
            factory: 12,
            landed: 22,
            resell: 65
        },
        moq: "200 Kits",
        timeline: "25-30 Jours",
        features: [
            "Sérum Vitamine C 30ml",
            "Crème Hydratante 50ml",
            "Nettoyant Moussant 100ml",
            "Packaging premium inclus",
            "Certificat FDA disponible"
        ],
        steps: [
            { label: "Brief Packaging", days: "2-3 Jours", icon: "ph-palette" },
            { label: "Production", days: "10-12 Jours", icon: "ph-factory" },
            { label: "Tests Stabilité", days: "3-5 Jours", icon: "ph-flask" },
            { label: "Transit Maritime", days: "15-18 Jours", icon: "ph-boat" },
            { label: "Certification", days: "3-5 Jours", icon: "ph-certificate" }
        ],
        badge: "Tendance",
        badgeColor: "bg-pink-500"
    },
    {
        id: 108,
        name: "Huile d'Argan Bio 100ml (Lot)",
        category: "cosmetique",
        image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=400&h=300&fit=crop",
        description: "Huile d'argan pure certifiée bio, conditionnée en Chine avec ingrédient marocain. Excellent rapport qualité/prix.",
        prices: {
            factory: 4.5,
            landed: 8,
            resell: 25
        },
        moq: "300 Unités",
        timeline: "20-25 Jours",
        features: [
            "100% Pure Huile d'Argan",
            "Certification Bio ECOCERT",
            "Flacon verre ambré",
            "Notice multilingue",
            "DLC 24 mois"
        ],
        steps: [
            { label: "Commande", days: "1-2 Jours", icon: "ph-credit-card" },
            { label: "Conditionnement", days: "5-7 Jours", icon: "ph-factory" },
            { label: "Contrôle Labo", days: "2-3 Jours", icon: "ph-flask" },
            { label: "Transit", days: "12-15 Jours", icon: "ph-boat" },
            { label: "Dédouanement", days: "3-4 Jours", icon: "ph-stamp" }
        ],
        badge: "Bio",
        badgeColor: "bg-green-600"
    }
];

// Render Product Grid
function renderProductGrid(filter = 'all') {
    const container = document.getElementById('sourcing-grid-container');
    if (!container) return;

    const filteredProducts = filter === 'all' 
        ? products 
        : products.filter(p => p.category === filter);

    container.innerHTML = filteredProducts.map(product => `
        <a href="product.html?id=${product.id}" class="product-card bg-white rounded-xl sm:rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer block">
            <!-- Image -->
            <div class="relative h-32 sm:h-48 overflow-hidden">
                <img src="${product.image}" alt="${product.name}" class="w-full h-full object-cover transition-transform duration-500 hover:scale-110">
                <span class="absolute top-2 left-2 sm:top-3 sm:left-3 ${product.badgeColor} text-white text-[10px] sm:text-xs font-bold px-2 sm:px-3 py-0.5 sm:py-1 rounded-full">
                    ${product.badge}
                </span>
                <div class="absolute top-2 right-2 sm:top-3 sm:right-3 bg-white/90 backdrop-blur-sm rounded-full px-1.5 sm:px-2 py-0.5 sm:py-1 text-[10px] sm:text-xs font-medium text-primary">
                    <i class="ph ph-clock mr-0.5 sm:mr-1"></i>${product.timeline}
                </div>
            </div>

            <!-- Content -->
            <div class="p-3 sm:p-5">
                <span class="text-[10px] sm:text-xs text-secondary font-semibold uppercase tracking-wide">${getCategoryLabel(product.category)}</span>
                <h3 class="text-sm sm:text-lg font-bold text-dark mt-0.5 sm:mt-1 mb-1 sm:mb-2 line-clamp-2 leading-tight">${product.name}</h3>
                
                <!-- Price Grid - Simplified for mobile -->
                <div class="grid grid-cols-3 gap-1 sm:gap-2 mt-2 sm:mt-4 text-center">
                    <div class="bg-light rounded-md sm:rounded-lg py-1 sm:py-2">
                        <div class="text-[9px] sm:text-xs text-medium">Usine</div>
                        <div class="font-bold text-primary text-[11px] sm:text-base">${formatPrice(product.prices.factory)}</div>
                    </div>
                    <div class="bg-light rounded-md sm:rounded-lg py-1 sm:py-2">
                        <div class="text-[9px] sm:text-xs text-medium">Rendu</div>
                        <div class="font-bold text-dark text-[11px] sm:text-base">${formatPrice(product.prices.landed)}</div>
                    </div>
                    <div class="bg-gradient-to-r from-green-500 to-green-600 text-white rounded-md sm:rounded-lg py-1 sm:py-2">
                        <div class="text-[9px] sm:text-xs opacity-90">Revente</div>
                        <div class="font-bold text-[11px] sm:text-base">${formatPrice(product.prices.resell)}</div>
                    </div>
                </div>

                <!-- MOQ & CTA -->
                <div class="flex items-center justify-between mt-2 sm:mt-4 pt-2 sm:pt-4 border-t border-gray-100">
                    <span class="text-[10px] sm:text-sm text-medium flex items-center"><i class="ph ph-package mr-0.5 sm:mr-1"></i>MOQ: ${product.moq}</span>
                    <span class="bg-primary hover:bg-blue-800 text-white px-2 sm:px-4 py-1 sm:py-2 rounded-md sm:rounded-lg text-[10px] sm:text-sm font-semibold transition inline-flex items-center gap-1 sm:gap-2">
                        Voir Détails
                        <i class="ph ph-arrow-right text-xs sm:text-base"></i>
                    </span>
                </div>
            </div>
        </a>
    `).join('');
}

// Get Category Label
function getCategoryLabel(category) {
    const labels = {
        'industrie': 'Industrie & Atelier',
        'textile': 'Textile & Mode',
        'electronique': 'Électronique',
        'cosmetique': 'Cosmétique & Beauté'
    };
    return labels[category] || category;
}

// Format Price
function formatPrice(price) {
    if (price >= 1000) {
        return (price / 1000).toFixed(1).replace('.0', '') + 'K TND';
    }
    return price + ' TND';
}

// Open Product Detail View
function openProductDetail(id) {
    const product = products.find(p => p.id === id);
    if (!product) return;

    const profit = product.prices.resell - product.prices.landed;
    const margin = ((profit / product.prices.landed) * 100).toFixed(0);

    const container = document.getElementById('product-detail-content');
    container.innerHTML = `
        <div class="grid lg:grid-cols-2 gap-10">
            <!-- Left: Image & Features -->
            <div>
                <div class="relative rounded-2xl overflow-hidden mb-6">
                    <img src="${product.image}" alt="${product.name}" class="w-full h-80 object-cover">
                    <span class="absolute top-4 left-4 ${product.badgeColor} text-white text-sm font-bold px-4 py-2 rounded-full">
                        ${product.badge}
                    </span>
                </div>

                <div class="bg-white rounded-xl p-6 shadow-md">
                    <h3 class="font-bold text-lg mb-4"><i class="ph ph-list-checks mr-2 text-primary"></i>Caractéristiques</h3>
                    <ul class="space-y-3">
                        ${product.features.map(f => `
                            <li class="flex items-start">
                                <i class="ph-fill ph-check-circle text-green-500 mr-3 mt-0.5 flex-shrink-0"></i>
                                <span>${f}</span>
                            </li>
                        `).join('')}
                    </ul>
                </div>
            </div>

            <!-- Right: Info & Pricing -->
            <div class="space-y-6">
                <div>
                    <span class="text-secondary font-semibold uppercase tracking-wide">${getCategoryLabel(product.category)}</span>
                    <h1 class="text-3xl lg:text-4xl font-bold text-dark mt-2">${product.name}</h1>
                    <p class="text-medium mt-4 leading-relaxed">${product.description}</p>
                </div>

                <!-- Profit Simulation Card -->
                <div class="bg-gradient-to-br from-primary to-slate-900 text-white rounded-2xl p-6 shadow-xl">
                    <h3 class="font-bold text-lg mb-4 flex items-center">
                        <i class="ph ph-chart-line-up mr-2"></i>Simulation de Profit
                    </h3>
                    <div class="grid grid-cols-3 gap-4 text-center mb-6">
                        <div class="bg-white/10 rounded-xl py-4">
                            <div class="text-sm text-blue-200">Prix Usine</div>
                            <div class="text-2xl font-bold">${product.prices.factory.toLocaleString()} TND</div>
                        </div>
                        <div class="bg-white/10 rounded-xl py-4">
                            <div class="text-sm text-blue-200">Rendu Tunisie</div>
                            <div class="text-2xl font-bold">${product.prices.landed.toLocaleString()} TND</div>
                        </div>
                        <div class="bg-green-500/30 rounded-xl py-4 border-2 border-green-400">
                            <div class="text-sm text-green-200">Prix Revente</div>
                            <div class="text-2xl font-bold">${product.prices.resell.toLocaleString()} TND</div>
                        </div>
                    </div>
                    <div class="bg-white/10 rounded-xl p-4 flex items-center justify-between">
                        <div>
                            <div class="text-blue-200 text-sm">Profit Potentiel / Unité</div>
                            <div class="text-3xl font-extrabold text-green-400">+${profit.toLocaleString()} TND</div>
                        </div>
                        <div class="text-right">
                            <div class="text-blue-200 text-sm">Marge</div>
                            <div class="text-3xl font-extrabold text-green-400">${margin}%</div>
                        </div>
                    </div>
                </div>

                <!-- Quick Info -->
                <div class="grid grid-cols-2 gap-4">
                    <div class="bg-white rounded-xl p-4 shadow-md flex items-center space-x-3">
                        <div class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                            <i class="ph-fill ph-package text-2xl text-primary"></i>
                        </div>
                        <div>
                            <div class="text-sm text-medium">MOQ</div>
                            <div class="font-bold">${product.moq}</div>
                        </div>
                    </div>
                    <div class="bg-white rounded-xl p-4 shadow-md flex items-center space-x-3">
                        <div class="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
                            <i class="ph-fill ph-clock text-2xl text-secondary"></i>
                        </div>
                        <div>
                            <div class="text-sm text-medium">Délai Total</div>
                            <div class="font-bold">${product.timeline}</div>
                        </div>
                    </div>
                </div>

                <!-- CTA Buttons -->
                <div class="flex flex-col sm:flex-row gap-4">
                    <a href="https://wa.me/21650279797" target="_blank" rel="noopener noreferrer" class="flex-1 bg-secondary hover:bg-gold-dark text-slate-900 py-4 rounded-xl font-bold text-lg transition flex items-center justify-center">
                        <i class="ph-fill ph-whatsapp-logo mr-2 text-xl"></i>Demander un Devis
                    </a>
                    <button onclick="showToast('Échantillon ajouté à votre panier!')" class="flex-1 bg-primary hover:bg-blue-800 text-white py-4 rounded-xl font-bold text-lg transition flex items-center justify-center">
                        <i class="ph ph-shopping-cart mr-2"></i>Commander Échantillon
                    </button>
                </div>
            </div>
        </div>

        <!-- Timeline Section -->
        <div class="mt-12 bg-white rounded-2xl p-8 shadow-lg">
            <h3 class="text-2xl font-bold text-center mb-8">
                <i class="ph ph-path mr-2 text-primary"></i>Timeline de Livraison
            </h3>
            <div class="relative">
                <!-- Progress Line -->
                <div class="hidden lg:block absolute top-8 left-0 right-0 h-1 bg-gray-200">
                    <div class="h-full bg-gradient-to-r from-primary to-secondary" style="width: 100%"></div>
                </div>
                
                <!-- Steps -->
                <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                    ${product.steps.map((step, index) => `
                        <div class="text-center relative">
                            <div class="w-16 h-16 mx-auto bg-gradient-to-br from-primary to-blue-700 rounded-full flex items-center justify-center text-white shadow-lg mb-3 relative z-10">
                                <i class="ph ${step.icon} text-2xl"></i>
                            </div>
                            <h4 class="font-bold text-sm">${step.label}</h4>
                            <p class="text-secondary text-sm font-semibold">${step.days}</p>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `;

    navigateTo('product-detail-view');
}

// Filter Products
function filterProducts(category) {
    // Update active button
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('bg-primary', 'text-white', 'shadow-lg', 'shadow-primary/30', 'active');
        btn.classList.add('bg-white', 'text-dark', 'border-2', 'border-gray-200');
    });
    
    event.target.classList.remove('bg-white', 'text-dark', 'border-2', 'border-gray-200');
    event.target.classList.add('bg-primary', 'text-white', 'shadow-lg', 'shadow-primary/30', 'active');

    renderProductGrid(category);
}

// Expose functions globally for page loader
window.renderProductGrid = renderProductGrid;
window.openProductDetail = openProductDetail;
window.filterProducts = filterProducts;

// Initialize on DOM Load
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(renderProductGrid, 50);
});

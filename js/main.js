let currentLang = 'es';

function renderMenu() {
    const container = document.getElementById('menu-container');
    container.innerHTML = '';

    menuData.categories.forEach(cat => {
        const categoryEl = document.createElement('div');
        categoryEl.className = 'menu-category';

        const headerBtn = document.createElement('button');
        headerBtn.className = 'accordion-header';
        headerBtn.innerHTML = `
            <span>${cat.name[currentLang] || cat.name['es']}</span>
            <svg class="chevron" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
        `;

        const contentDiv = document.createElement('div');
        contentDiv.className = 'accordion-content';

        const itemsWrapper = document.createElement('div');
        itemsWrapper.className = 'items-wrapper';

        cat.items.forEach(item => {
            const itemEl = document.createElement('div');
            itemEl.className = 'menu-item';
            
            const descText = item.desc[currentLang] || item.desc['es'];
            const descHtml = descText ? `<div class="item-desc">${descText}</div>` : '';

            itemEl.innerHTML = `
                <div class="item-header">
                    <span class="item-name">${item.name}</span>
                    <span class="item-price">${item.price}</span>
                </div>
                ${descHtml}
            `;
            itemsWrapper.appendChild(itemEl);
        });

        contentDiv.appendChild(itemsWrapper);

        headerBtn.addEventListener('click', function() {
            const isActive = this.classList.contains('active');
            
            if (!isActive) {
                this.classList.add('active');
                categoryEl.classList.add('active-cat');
                contentDiv.style.maxHeight = contentDiv.scrollHeight + "px";
            } else {
                this.classList.remove('active');
                categoryEl.classList.remove('active-cat');
                contentDiv.style.maxHeight = null;
            }
        });

        categoryEl.appendChild(headerBtn);
        categoryEl.appendChild(contentDiv);
        container.appendChild(categoryEl);
    });
}

function updateStaticTexts() {
    document.getElementById('hero-text').textContent = i18n[currentLang].hero;
    document.getElementById('allergen-text').textContent = i18n[currentLang].allergens;
    document.getElementById('address-text').textContent = i18n[currentLang].address;
    
    // Update Location section texts
    document.getElementById('location-title').textContent = i18n[currentLang].locationTitle;
    document.getElementById('loc-address-text').textContent = i18n[currentLang].locationAddress;
    document.getElementById('loc-hours-text').textContent = i18n[currentLang].locationHours;
    document.querySelector('#directions-btn-text span').textContent = i18n[currentLang].locationDirections;
    
    // Update marker popup text
    updateMarkerPopup();
}

function changeLanguage(lang) {
    currentLang = lang;
    
    // Update buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if(btn.dataset.lang === lang) btn.classList.add('active');
    });

    // Save open accordions state
    const openAccordions = [];
    document.querySelectorAll('.accordion-header.active').forEach(header => {
        const index = Array.from(header.parentElement.parentElement.children).indexOf(header.parentElement);
        openAccordions.push(index);
    });

    // Re-render
    renderMenu();
    updateStaticTexts();

    // Restore open accordions state
    const categories = document.querySelectorAll('.menu-category');
    openAccordions.forEach(idx => {
        if (categories[idx]) {
            const header = categories[idx].querySelector('.accordion-header');
            const content = categories[idx].querySelector('.accordion-content');
            header.classList.add('active');
            categories[idx].classList.add('active-cat');
            // Needs a slight delay for DOM to calculate height properly after render
            setTimeout(() => {
                content.style.maxHeight = content.scrollHeight + "px";
            }, 10);
        }
    });
}

// Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.getElementById('main-header');
    if (window.scrollY > 50) {
        header.style.padding = '10px 24px';
        header.style.background = 'rgba(17, 7, 10, 0.95)';
    } else {
        header.style.padding = '15px 24px';
        header.style.background = 'rgba(17, 7, 10, 0.85)';
    }
});

let map;
let marker;

function initMap() {
    // Plaza de Santa María, 6, Écija (approx coordinates)
    const lat = 37.540430;
    const lng = -5.080570;

    // Initialize map
    map = L.map('map', {
        center: [lat, lng],
        zoom: 17,
        scrollWheelZoom: false // Disable zoom on scroll to avoid accidental zooming
    });

    // Add dark layer (CartoDB Dark Matter)
    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        subdomains: 'abcd',
        maxZoom: 20
    }).addTo(map);

    // Custom gold marker icon
    const goldIcon = L.divIcon({
        className: 'custom-gold-marker',
        html: '<div class="marker-pin"></div>',
        iconSize: [30, 42],
        iconAnchor: [15, 42]
    });

    // Add marker
    marker = L.marker([lat, lng], { icon: goldIcon }).addTo(map);

    // Bind popup in current language
    updateMarkerPopup();
}

function updateMarkerPopup() {
    if (marker) {
        const popupContent = `
            <div style="text-align: center; font-family: 'Outfit', sans-serif; padding: 5px;">
                <strong style="color: #D4AF37; font-family: 'Playfair Display', serif; font-size: 1.1rem; display: block; margin-bottom: 5px;">Abacería Cuartoo de Pasos</strong>
                <span style="font-size: 0.85rem; color: #D5C8C8; display: block; line-height: 1.3;">${i18n[currentLang].locationAddress}</span>
            </div>
        `;
        
        marker.bindPopup(popupContent, {
            closeButton: false,
            className: 'custom-map-popup',
            offset: [0, -32] // Offset the popup to show nicely above the custom pin
        });
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderMenu();
    initMap();
    updateStaticTexts();
    
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            changeLanguage(e.target.dataset.lang);
        });
    });
});

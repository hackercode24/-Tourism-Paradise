// Tourism Paradise - Multi-Page JavaScript Application with Enhanced Text Visibility

// API Configuration
const API_CONFIG = {
	baseUrl: 'http://localhost:3000',
	endpoints: {
		destinations: '/api/destinations',
		contact: '/api/contact',
		newsletter: '/api/newsletter',
		posts: '/api/posts'
	}
};

// Categories configuration
const CATEGORIES = [
	{
		id: "famousLandmarks",
		name: "Famous Landmarks",
		icon: "🏛️",
		description: "Iconic monuments and architectural marvels around the world"
	},
	{
		id: "naturalWonders",
		name: "Natural Wonders",
		icon: "🏔️",
		description: "Breathtaking natural formations and stunning landscapes"
	},
	{
		id: "beachDestinations",
		name: "Beach Destinations",
		icon: "🏖️",
		description: "Paradise beaches and tropical getaways for relaxation"
	},
	{
		id: "historicalSites",
		name: "Historical Sites",
		icon: "🏺",
		description: "Ancient civilizations and UNESCO heritage sites"
	},
	{
		id: "popularCities",
		name: "Popular Cities",
		icon: "🌆",
		description: "Vibrant metropolitan destinations and cultural hubs"
	}
];

// Sample destination data with enhanced descriptions
const SAMPLE_DESTINATIONS = [
	{
		id: "taj-mahal",
		name: "Taj Mahal",
		location: "Agra, India",
		category: "Famous Landmarks",
		categoryId: "famousLandmarks",
		region: "Asia",
		description: "A breathtaking symbol of eternal love, this white marble mausoleum was built by Emperor Shah Jahan in memory of his beloved wife Mumtaz Mahal. The Taj Mahal is considered one of the finest examples of Mughal architecture.",
		highlights: ["UNESCO World Heritage Site", "One of Seven Wonders", "Architectural masterpiece", "Symbol of love"],
		bestTime: "October to March",
		attractions: ["Main mausoleum", "Beautiful Charbagh gardens", "Reflection pools", "Red sandstone mosque"],
		tips: "Visit early morning for best lighting and fewer crowds. The monument is closed on Fridays.",
		image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800"
	},
	{
		id: "santorini",
		name: "Santorini",
		location: "Greece",
		category: "Beach Destinations",
		categoryId: "beachDestinations",
		region: "Europe",
		description: "Famous for its dramatic cliffs, pristine white-washed buildings, and spectacular sunsets over the deep blue Aegean Sea. This volcanic island offers a perfect blend of natural beauty and traditional Greek charm.",
		highlights: ["World-famous sunsets", "Distinctive architecture", "Volcanic black beaches", "Wine tastings"],
		bestTime: "April to November",
		attractions: ["Oia village", "Red Beach", "Akrotiri ruins", "Local wineries"],
		tips: "Book sunset dinner reservations early. Try the unique Assyrtiko wine produced from volcanic soil.",
		image: "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=800"
	},
	{
		id: "machu-picchu",
		name: "Machu Picchu",
		location: "Peru",
		category: "Historical Sites",
		categoryId: "historicalSites",
		region: "Americas",
		description: "An ancient Incan citadel set high in the Andes Mountains, this archaeological wonder showcases incredible stone architecture and offers breathtaking panoramic views of the surrounding peaks.",
		highlights: ["Ancient Incan ruins", "UNESCO World Heritage", "Mountain hiking", "Archaeological mystery"],
		bestTime: "May to September",
		attractions: ["Huayna Picchu", "Temple of the Sun", "Inca Trail", "Sacred Valley"],
		tips: "Book tickets well in advance. Consider acclimatizing in Cusco for a few days before visiting.",
		image: "https://images.unsplash.com/photo-1587595431973-160d0d94add1?w=800"
	},
	{
		id: "tokyo",
		name: "Tokyo",
		location: "Japan",
		category: "Popular Cities",
		categoryId: "popularCities",
		region: "Asia",
		description: "A fascinating metropolis where ultra-modern skyscrapers meet ancient temples, offering an incredible blend of traditional Japanese culture and cutting-edge technology.",
		highlights: ["Modern technology", "Traditional temples", "Amazing cuisine", "Pop culture"],
		bestTime: "March to May, September to November",
		attractions: ["Shibuya Crossing", "Senso-ji Temple", "Tokyo Skytree", "Tsukiji Fish Market"],
		tips: "Get a JR Pass for easy transportation. Don't miss trying authentic sushi and ramen.",
		image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800"
	},
	{
		id: "grand-canyon",
		name: "Grand Canyon",
		location: "Arizona, USA",
		category: "Natural Wonders",
		categoryId: "naturalWonders",
		region: "Americas",
		description: "One of the world's most spectacular natural formations, carved by the Colorado River over millions of years. The canyon offers breathtaking vistas and incredible geological formations.",
		highlights: ["Geological wonder", "Hiking trails", "Sunrise/sunset views", "Wildlife viewing"],
		bestTime: "March to May, September to November",
		attractions: ["South Rim viewpoints", "Bright Angel Trail", "Desert View Watchtower", "Colorado River"],
		tips: "Bring plenty of water when hiking. The South Rim is open year-round, while North Rim is seasonal.",
		image: "https://images.unsplash.com/photo-1474044159687-1ee9f3a51722?w=800"
	},
	{
		id: "paris",
		name: "Paris",
		location: "France",
		category: "Popular Cities",
		categoryId: "popularCities",
		region: "Europe",
		description: "The City of Light captivates visitors with its iconic landmarks, world-class museums, romantic atmosphere, and exquisite cuisine. Paris embodies art, culture, and timeless elegance.",
		highlights: ["Iconic landmarks", "World-class museums", "Romantic atmosphere", "Fine dining"],
		bestTime: "April to June, September to October",
		attractions: ["Eiffel Tower", "Louvre Museum", "Notre-Dame Cathedral", "Champs-Élysées"],
		tips: "Many museums are free on the first Sunday of each month. Learn basic French phrases for better interactions.",
		image: "https://images.unsplash.com/photo-1502602898536-47ad22581b52?w=800"
	}
	,
	{
		id: "new-york",
		name: "New York City",
		location: "USA",
		category: "Popular Cities",
		categoryId: "popularCities",
		region: "Americas",
		description: "The city that never sleeps, known for iconic landmarks, world-class museums, and a vibrant cultural scene across its diverse neighborhoods.",
		highlights: ["Times Square", "Broadway Shows", "Central Park", "Skyscrapers"],
		bestTime: "April to June, September to November",
		attractions: ["Statue of Liberty", "Central Park", "Metropolitan Museum of Art", "Empire State Building"],
		tips: "Use the subway to get around quickly; book Broadway tickets in advance for popular shows.",
		image: "https://images.unsplash.com/photo-1549921296-3f3c6f4f1d9d?w=800"
	},
	{
		id: "london",
		name: "London",
		location: "United Kingdom",
		category: "Popular Cities",
		categoryId: "popularCities",
		region: "Europe",
		description: "A historic yet modern capital offering royal palaces, museums, theaters, and a dynamic food scene across its boroughs.",
		highlights: ["Historic landmarks", "Museums", "Theatre", "Parks"],
		bestTime: "April to June, September to October",
		attractions: ["British Museum", "Tower of London", "Buckingham Palace", "West End"],
		tips: "Get an Oyster card for public transport and consider free museum days for budget visits.",
		image: "https://images.unsplash.com/photo-1505765053448-0c1f3d7c9b7b?w=800"
	},
	{
		id: "bali",
		name: "Bali",
		location: "Indonesia",
		category: "Beach Destinations",
		categoryId: "beachDestinations",
		region: "Asia",
		description: "A tropical paradise known for its lush rice terraces, vibrant culture, and beautiful beaches, ideal for relaxation and adventure.",
		highlights: ["Beaches", "Rice terraces", "Temples", "Surfing"],
		bestTime: "April to October",
		attractions: ["Ubud", "Seminyak", "Tanah Lot", "Uluwatu Temple"],
		tips: "Respect local customs at temples; rent a scooter only if experienced.",
		image: "https://images.unsplash.com/photo-1508669232496-137d9d6a5f2c?w=800"
	},
	{
		id: "sydney",
		name: "Sydney",
		location: "Australia",
		category: "Popular Cities",
		categoryId: "popularCities",
		region: "Oceania",
		description: "A sun-soaked harbor city famous for its Opera House, harbour bridge, and beautiful beaches, offering excellent outdoor activities.",
		highlights: ["Sydney Opera House", "Beaches", "Harbour Bridge", "Outdoor lifestyle"],
		bestTime: "September to November, March to May",
		attractions: ["Bondi Beach", "Sydney Opera House", "Taronga Zoo", "The Rocks"],
		tips: "Purchase an Opal card for transit and explore coastal walks for scenic views.",
		image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=800"
	}
];

// Global variables
let allDestinations = [];
let filteredDestinations = [];
let currentFilters = {
	category: '',
	region: '',
	search: ''
};
let currentPage = 'home';

// Initialize the application
document.addEventListener('DOMContentLoaded', function () {
	console.log('Initializing Tourism Paradise multi-page app...');

	// Initialize data first
	allDestinations = [...SAMPLE_DESTINATIONS];
	filteredDestinations = [...SAMPLE_DESTINATIONS];

	// Setup all functionality
	setupEventListeners();
	setupPageNavigation();
	initializeCategories();
	loadFeaturedDestinations();
	setupSmoothScrolling();
	observeAnimations();

	// Ensure loading spinner is hidden
	hideLoadingSpinner();

	console.log('Application initialized successfully!');
});

// Page Navigation System
function setupPageNavigation() {
	// Handle navigation links in header and footer
	document.querySelectorAll('.nav__link').forEach(link => {
		link.addEventListener('click', function (e) {
			const page = this.getAttribute('data-page');
			if (page) {
				e.preventDefault();
				navigateToPage(page);
				closeMobileMenu();
			}
		});
	});

	// Handle footer links
	document.querySelectorAll('.footer__links a').forEach(link => {
		link.addEventListener('click', function (e) {
			e.preventDefault();
			const page = this.getAttribute('data-page');
			if (page) {
				navigateToPage(page);
			}
		});
	});

	// Set initial page
	const hash = window.location.hash.slice(1);
	const initialPage = hash && document.getElementById(`${hash}Page`) ? hash : 'home';
	navigateToPage(initialPage);
}

function navigateToPage(pageName) {
	console.log('Navigating to page:', pageName);

	// Hide all pages
	document.querySelectorAll('.page').forEach(page => {
		page.classList.remove('active');
	});

	// Show selected page
	const targetPage = document.getElementById(`${pageName}Page`);
	if (targetPage) {
		targetPage.classList.add('active');
		currentPage = pageName;

		// Update navigation active state
		document.querySelectorAll('.nav__link').forEach(link => {
			link.classList.remove('active');
			if (link.getAttribute('data-page') === pageName) {
				link.classList.add('active');
			}
		});

		// Update URL hash
		window.history.replaceState(null, null, `#${pageName}`);

		// Scroll to top
		window.scrollTo({ top: 0, behavior: 'smooth' });

		// Page-specific initialization
		initializePage(pageName);
		updatePageTitle(pageName);
	}
}

function initializePage(pageName) {
	switch (pageName) {
		case 'home':
			loadFeaturedDestinations();
			break;
		case 'destinations':
			renderDestinations();
			break;
		case 'travel-guide':
			// Travel guide is static for now; placeholder for future dynamic content
			break;
	}
}

function updatePageTitle(pageName) {
	const titles = {
		'home': 'Tourism Paradise - Discover Amazing Destinations',
		'destinations': 'Destinations - Tourism Paradise',
		'about': 'About Us - Tourism Paradise',
		'contact': 'Contact Us - Tourism Paradise',
		'create-post': 'Create Post - Tourism Paradise'
	};

	// Add travel-guide to titles map
	if (pageName === 'travel-guide') {
		document.title = 'Travel Guide - Tourism Paradise';
	} else {
		document.title = titles[pageName] || 'Tourism Paradise';
	}
}

// Loading Management
function showLoadingSpinner() {
	const spinner = document.getElementById('loadingSpinner');
	if (spinner) {
		spinner.classList.remove('hidden');
	}
}

function hideLoadingSpinner() {
	const spinner = document.getElementById('loadingSpinner');
	if (spinner) {
		spinner.classList.add('hidden');
	}
}

// API Helper Functions
async function apiRequest(endpoint, options = {}) {
	const url = `${API_CONFIG.baseUrl}${endpoint}`;
	const defaultOptions = {
		headers: {
			'Content-Type': 'application/json',
		},
	};

	const config = { ...defaultOptions, ...options };

	try {
		const response = await fetch(url, config);

		if (!response.ok) {
			const errorData = await response.json().catch(() => ({}));
			throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
		}

		return await response.json();
	} catch (error) {
		console.error('API request failed:', error);
		throw error;
	}
}

// Destinations Management
async function loadDestinations(category = '') {
	showLoadingSpinner();
	try {
		const endpoint = category
			? `${API_CONFIG.endpoints.destinations}/${category}`
			: API_CONFIG.endpoints.destinations;

		const response = await apiRequest(endpoint);
		allDestinations = response.destinations || response;
		filteredDestinations = [...allDestinations];

		if (currentPage === 'destinations') {
			renderDestinations();
		}
		showNotification('Destinations loaded successfully!', 'success');
	} catch (error) {
		console.error('Failed to load destinations:', error);
		// Use sample data as fallback
		allDestinations = [...SAMPLE_DESTINATIONS];
		filteredDestinations = [...SAMPLE_DESTINATIONS];

		if (currentPage === 'destinations') {
			renderDestinations();
		}
		showNotification('Using sample destinations (backend not available)', 'info');
	} finally {
		hideLoadingSpinner();
	}
}

function loadFeaturedDestinations() {
	const featuredContainer = document.getElementById('featuredDestinations');
	if (!featuredContainer) return;

	// Show first 3 destinations as featured
	const featured = allDestinations.slice(0, 3);

	featuredContainer.innerHTML = featured.map(destination => `
    <div class="destination-card fade-in" data-destination-id="${destination.id}">
      <img src="${destination.image}"
           alt="${destination.name}" class="destination-card__image" loading="lazy"
           onerror="this.src='https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800'">
      <div class="destination-card__content">
        <div class="destination-card__header">
          <div>
            <h3 class="destination-card__title">${destination.name}</h3>
            <p class="destination-card__location">📍 ${destination.location}</p>
          </div>
          <span class="destination-card__category">${destination.category}</span>
        </div>
        <p class="destination-card__description">${destination.description.slice(0, 150)}...</p>
        <div class="destination-card__highlights">
          ${destination.highlights.slice(0, 2).map(highlight =>
		`<span class="highlight-tag">${highlight}</span>`
	).join('')}
        </div>
        <div class="destination-card__footer">
          <span class="best-time">🗓️ ${destination.bestTime}</span>
          <button class="learn-more-btn" onclick="openDestinationModal('${destination.id}')">Learn More</button>
        </div>
      </div>
    </div>
  `).join('');

	// Add event listeners to featured cards (for clicking anywhere on card)
	featuredContainer.querySelectorAll('.destination-card').forEach(card => {
		card.addEventListener('click', function (e) {
			if (e.target.classList.contains('learn-more-btn')) {
				return; // Let the onclick handle it
			}
			const destinationId = this.getAttribute('data-destination-id');
			openDestinationModal(destinationId);
		});
	});
}

// Contact and Newsletter forms
async function submitContactForm(name, email, message) {
	try {
		await apiRequest(API_CONFIG.endpoints.contact, {
			method: 'POST',
			body: JSON.stringify({ name, email, message })
		});

		return { success: true };
	} catch (error) {
		return { success: false, error: error.message };
	}
}

async function subscribeNewsletter(email) {
	try {
		await apiRequest(API_CONFIG.endpoints.newsletter, {
			method: 'POST',
			body: JSON.stringify({ email })
		});

		return { success: true };
	} catch (error) {
		return { success: false, error: error.message };
	}
}

// UI Helper Functions
function setButtonLoading(button, loading) {
	if (!button) return;

	const btnText = button.querySelector('.btn-text');
	const btnLoading = button.querySelector('.btn-loading');

	if (loading) {
		btnText?.classList.add('hidden');
		btnLoading?.classList.remove('hidden');
		button.disabled = true;
	} else {
		btnText?.classList.remove('hidden');
		btnLoading?.classList.add('hidden');
		button.disabled = false;
	}
}

// Event Listeners Setup
function setupEventListeners() {
	console.log('Setting up event listeners...');

	// Mobile menu toggle
	const mobileMenuBtn = document.getElementById('mobileMenuBtn');
	if (mobileMenuBtn) {
		mobileMenuBtn.addEventListener('click', toggleMobileMenu);
	}

	// Search functionality
	const searchInput = document.getElementById('searchInput');
	const searchBtn = document.getElementById('searchBtn');

	if (searchInput) {
		searchInput.addEventListener('input', debounce(handleSearch, 300));
		searchInput.addEventListener('keypress', function (e) {
			if (e.key === 'Enter') {
				e.preventDefault();
				handleSearchClick();
			}
		});
	}

	if (searchBtn) {
		searchBtn.addEventListener('click', handleSearchClick);
	}

	// Filter functionality
	const categoryFilter = document.getElementById('categoryFilter');
	const regionFilter = document.getElementById('regionFilter');

	if (categoryFilter) {
		categoryFilter.addEventListener('change', handleCategoryFilter);
	}

	if (regionFilter) {
		regionFilter.addEventListener('change', handleRegionFilter);
	}

	// Modal events
	setupModalEvents();

	// Form submissions
	const newsletterForm = document.getElementById('newsletterForm');
	const contactForm = document.getElementById('contactForm');
	const createPostForm = document.getElementById('createPostForm');

	if (newsletterForm) {
		newsletterForm.addEventListener('submit', handleNewsletterSubmit);
	}

	if (contactForm) {
		contactForm.addEventListener('submit', handleContactSubmit);
	}

	if (createPostForm) {
		createPostForm.addEventListener('submit', handleCreatePostSubmit);
	}

	// Close modal on Escape key
	document.addEventListener('keydown', function (e) {
		if (e.key === 'Escape') {
			closeModal();
		}
	});

	// Handle browser back/forward
	window.addEventListener('popstate', function () {
		const hash = window.location.hash.slice(1);
		const page = hash || 'home';
		if (page !== currentPage) {
			navigateToPage(page);
		}
	});
}

function setupModalEvents() {
	const modalOverlay = document.getElementById('modalOverlay');
	const modalClose = document.getElementById('modalClose');

	if (modalOverlay) {
		modalOverlay.addEventListener('click', closeModal);
	}
	if (modalClose) {
		modalClose.addEventListener('click', closeModal);
	}
}

// Categories Setup
function initializeCategories() {
	const categoriesGrid = document.getElementById('categoriesGrid');
	if (!categoriesGrid) return;

	categoriesGrid.innerHTML = CATEGORIES.map(category => `
    <div class="category-card" data-category="${category.id}">
      <div class="category-card__icon">${category.icon}</div>
      <h3 class="category-card__title">${category.name}</h3>
      <p class="category-card__desc">${category.description}</p>
    </div>
  `).join('');

	// Populate category filter
	const categoryFilter = document.getElementById('categoryFilter');
	if (categoryFilter) {
		categoryFilter.innerHTML = '<option value="">All Categories</option>' +
			CATEGORIES.map(category =>
				`<option value="${category.id}">${category.name}</option>`
			).join('');
	}

	// Add click events to category cards
	categoriesGrid.querySelectorAll('.category-card').forEach(card => {
		card.addEventListener('click', function () {
			const categoryId = this.getAttribute('data-category');
			if (categoryFilter) {
				categoryFilter.value = categoryId;
				handleCategoryFilter();
			}
			navigateToPage('destinations');
		});
	});
}

// Search and Filter Functions
function debounce(func, wait) {
	let timeout;
	return function executedFunction(...args) {
		const later = () => {
			clearTimeout(timeout);
			func(...args);
		};
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
	};
}

function toggleMobileMenu() {
	const nav = document.getElementById('nav');
	const mobileMenuBtn = document.getElementById('mobileMenuBtn');

	if (nav) nav.classList.toggle('active');
	if (mobileMenuBtn) mobileMenuBtn.classList.toggle('active');
}

function closeMobileMenu() {
	const nav = document.getElementById('nav');
	const mobileMenuBtn = document.getElementById('mobileMenuBtn');

	if (nav) nav.classList.remove('active');
	if (mobileMenuBtn) mobileMenuBtn.classList.remove('active');
}

function handleSearch() {
	const searchInput = document.getElementById('searchInput');
	if (!searchInput) return;

	currentFilters.search = searchInput.value.toLowerCase().trim();
	applyFilters();
}

function handleSearchClick() {
	const searchInput = document.getElementById('searchInput');
	if (searchInput && searchInput.value.trim()) {
		currentFilters.search = searchInput.value.toLowerCase().trim();
		applyFilters();
		if (currentPage !== 'destinations') {
			navigateToPage('destinations');
		}
	}
}

function handleCategoryFilter() {
	const categoryFilter = document.getElementById('categoryFilter');
	if (!categoryFilter) return;

	currentFilters.category = categoryFilter.value;
	applyFilters();
}

function handleRegionFilter() {
	const regionFilter = document.getElementById('regionFilter');
	if (!regionFilter) return;

	currentFilters.region = regionFilter.value;
	applyFilters();
}

function applyFilters() {
	filteredDestinations = allDestinations.filter(destination => {
		const matchesCategory = !currentFilters.category ||
			destination.categoryId === currentFilters.category;
		const matchesRegion = !currentFilters.region || destination.region === currentFilters.region;
		const matchesSearch = !currentFilters.search ||
			destination.name?.toLowerCase().includes(currentFilters.search) ||
			destination.location?.toLowerCase().includes(currentFilters.search) ||
			destination.description?.toLowerCase().includes(currentFilters.search) ||
			destination.highlights?.some(highlight => highlight.toLowerCase().includes(currentFilters.search));

		return matchesCategory && matchesRegion && matchesSearch;
	});

	if (currentPage === 'destinations') {
		renderDestinations();
	}
}

// Render Functions
function renderDestinations() {
	const destinationsGrid = document.getElementById('destinationsGrid');
	if (!destinationsGrid) return;

	if (filteredDestinations.length === 0) {
		destinationsGrid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 80px 20px; color: var(--color-text-dark);">
        <h3 style="margin-bottom: 16px; font-size: 1.5rem;">No destinations found</h3>
        <p style="color: var(--color-text-secondary-dark); font-size: 1.1rem;">Try adjusting your search or filters, or check back later for new destinations.</p>
        <button class="btn btn--primary" onclick="clearAllFilters()" style="margin-top: 24px;">Clear All Filters</button>
      </div>
    `;
		return;
	}

	destinationsGrid.innerHTML = filteredDestinations.map((destination, index) => `
    <div class="destination-card fade-in" data-destination-id="${destination.id}">
      <img src="${destination.image}"
           alt="${destination.name}" class="destination-card__image" loading="lazy"
           onerror="this.src='https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800'">
      <div class="destination-card__content">
        <div class="destination-card__header">
          <div>
            <h3 class="destination-card__title">${destination.name}</h3>
            <p class="destination-card__location">📍 ${destination.location}</p>
          </div>
          <span class="destination-card__category">${destination.category}</span>
        </div>
        <p class="destination-card__description">${destination.description.slice(0, 120)}...</p>
        <div class="destination-card__highlights">
          ${destination.highlights.slice(0, 3).map(highlight =>
		`<span class="highlight-tag">${highlight}</span>`
	).join('')}
        </div>
        <div class="destination-card__footer">
          <span class="best-time">🗓️ ${destination.bestTime}</span>
          <button class="learn-more-btn" onclick="openDestinationModal('${destination.id}')">Learn More</button>
        </div>
      </div>
    </div>
  `).join('');

	// Add click events to destination cards (for clicking anywhere on card except button)
	destinationsGrid.querySelectorAll('.destination-card').forEach(card => {
		card.addEventListener('click', function (e) {
			if (e.target.classList.contains('learn-more-btn')) {
				return; // Let the onclick handle the button
			}
			const destinationId = this.getAttribute('data-destination-id');
			openDestinationModal(destinationId);
		});
	});
}

function clearAllFilters() {
	currentFilters = { category: '', region: '', search: '' };
	const categoryFilter = document.getElementById('categoryFilter');
	const regionFilter = document.getElementById('regionFilter');
	const searchInput = document.getElementById('searchInput');

	if (categoryFilter) categoryFilter.value = '';
	if (regionFilter) regionFilter.value = '';
	if (searchInput) searchInput.value = '';

	filteredDestinations = [...allDestinations];
	renderDestinations();
}

// Modal Functions
function openModal() {
	const modal = document.getElementById('destinationModal');
	if (modal) {
		modal.classList.remove('hidden');
		document.body.style.overflow = 'hidden';
	}
}

function closeModal() {
	const modal = document.getElementById('destinationModal');
	if (modal) {
		modal.classList.add('hidden');
		document.body.style.overflow = '';
	}
}

function openDestinationModal(destinationId) {
	console.log('Opening modal for destination:', destinationId);

	const destination = allDestinations.find(d => d.id === destinationId);
	const modalBody = document.getElementById('modalBody');

	if (!destination) {
		console.error('Destination not found:', destinationId);
		console.log('Available destinations:', allDestinations.map(d => d.id));
		return;
	}

	if (!modalBody) {
		console.error('Modal body not found');
		return;
	}

	modalBody.innerHTML = `
    <img src="${destination.image}"
         alt="${destination.name}" class="modal__image"
         onerror="this.src='https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800'">
    <h2 class="modal__title">${destination.name}</h2>
    <p class="modal__location">📍 ${destination.location}</p>
    <span class="modal__category">${destination.category} • ${destination.region}</span>

    <p class="modal__description">${destination.description}</p>

    <div class="modal__section">
      <h4>✨ Highlights</h4>
      <ul class="modal__list">
        ${destination.highlights.map(highlight => `<li>${highlight}</li>`).join('')}
      </ul>
    </div>

    <div class="modal__section">
      <h4>🎯 Key Attractions</h4>
      <ul class="modal__list">
        ${destination.attractions.map(attraction => `<li>${attraction}</li>`).join('')}
      </ul>
    </div>

    <div class="modal__section">
      <h4>📅 Best Time to Visit</h4>
      <p style="margin: 0; color: var(--color-text-secondary-dark); font-weight: 500;">${destination.bestTime}</p>
    </div>

    <div class="modal__section">
      <h4>💡 Travel Tips</h4>
      <div class="modal__tips">
        <p>${destination.tips}</p>
      </div>
    </div>
  `;

	openModal();
}

// Form Handlers
async function handleNewsletterSubmit(e) {
	e.preventDefault();

	const emailInput = document.getElementById('newsletterEmail');
	if (!emailInput) return;

	const submitBtn = e.target.querySelector('button[type="submit"]');
	setButtonLoading(submitBtn, true);

	const email = emailInput.value;
	const result = await subscribeNewsletter(email);

	setButtonLoading(submitBtn, false);

	if (result.success) {
		showNotification('Thank you for subscribing to our newsletter!', 'success');
		e.target.reset();
	} else {
		showNotification(result.error || 'Subscription failed. Please try again.', 'error');
	}
}

async function handleContactSubmit(e) {
	e.preventDefault();

	const submitBtn = e.target.querySelector('button[type="submit"]');
	setButtonLoading(submitBtn, true);

	const name = document.getElementById('contactName')?.value || '';
	const email = document.getElementById('contactEmail')?.value || '';
	const message = document.getElementById('contactMessage')?.value || '';

	const result = await submitContactForm(name, email, message);

	setButtonLoading(submitBtn, false);

	if (result.success) {
		showNotification('Thank you for your message! We\'ll get back to you soon.', 'success');
		e.target.reset();
	} else {
		showNotification(result.error || 'Failed to send message. Please try again.', 'error');
	}
}

async function handleCreatePostSubmit(e) {
	e.preventDefault();
	const submitBtn = e.target.querySelector('button[type="submit"]');
	setButtonLoading(submitBtn, true);

	const title = document.getElementById('postTitle').value;
	const imageUrl = document.getElementById('postImageUrl').value;
	const description = document.getElementById('postDescription').value;

	try {
		await apiRequest(API_CONFIG.endpoints.posts, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ title, imageUrl, description }),
		});

		showNotification('Post created successfully!', 'success');
		e.target.reset();
		navigateToPage('home');
	} catch (error) {
		showNotification('Failed to create post. Please try again.', 'error');
	} finally {
		setButtonLoading(submitBtn, false);
	}
}

// Notification System with High Contrast
function showNotification(message, type = 'info') {
	// Remove existing notifications
	document.querySelectorAll('.notification').forEach(n => n.remove());

	const notification = document.createElement('div');
	notification.className = `notification notification--${type}`;
	notification.textContent = message;

	document.body.appendChild(notification);

	// Auto-remove after 5 seconds
	setTimeout(() => {
		notification.style.animation = 'slideOutRight 0.3s ease-out forwards';
		setTimeout(() => {
			if (document.body.contains(notification)) {
				document.body.removeChild(notification);
			}
		}, 300);
	}, 5000);
}

// Smooth Scrolling
function setupSmoothScrolling() {
	document.addEventListener('click', function (e) {
		if (e.target.tagName === 'A' && e.target.getAttribute('href')?.startsWith('#')) {
			const href = e.target.getAttribute('href');
			if (href.length > 1) {
				const target = document.querySelector(href);
				if (target) {
					e.preventDefault();
					target.scrollIntoView({ behavior: 'smooth', block: 'start' });
				}
			}
		}
	});
}

// Animation Observer
function observeAnimations() {
	const observerOptions = {
		threshold: 0.1,
		rootMargin: '0px 0px -50px 0px'
	};

	const observer = new IntersectionObserver((entries) => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				entry.target.classList.add('fade-in');
			}
		});
	}, observerOptions);

	// Observe animatable elements
	const animatableSelectors = [
		'.category-card', '.destination-card', '.stat-card',
		'.value-card', '.contact-item', '.faq-item'
	];

	animatableSelectors.forEach(selector => {
		document.querySelectorAll(selector).forEach(el => {
			observer.observe(el);
		});
	});
}

// Header Scroll Effect
window.addEventListener('scroll', function () {
	const header = document.querySelector('.header');
	if (header) {
		if (window.scrollY > 100) {
			header.style.background = 'rgba(255, 255, 255, 0.98)';
			header.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)';
		} else {
			header.style.background = 'rgba(255, 255, 255, 0.98)';
			header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
		}
	}
});

// Travel Guide Content

// Global functions for HTML access
window.navigateToPage = navigateToPage;
window.openDestinationModal = openDestinationModal;
window.clearAllFilters = clearAllFilters;

// CSS Animation Styles
const style = document.createElement('style');
style.textContent = `
  @keyframes slideInRight {
    from {
      transform: translateX(100%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }

  @keyframes slideOutRight {
    from {
      transform: translateX(0);
      opacity: 1;
    }
    to {
      transform: translateX(100%);
      opacity: 0;
    }
  }

  .notification {
    animation: slideInRight 0.3s ease-out;
  }

  .fade-in {
    animation: fadeInUp 0.6s ease-out;
  }
`;
document.head.appendChild(style);

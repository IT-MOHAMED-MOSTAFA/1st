// Main header slider
const slides = document.querySelector('.slides');
const slideCount = document.querySelectorAll('.slide').length;
let index = 0;

function showSlide() {
  index = (index + 1) % slideCount;
  slides.style.transform = `translateX(-${index * 100}%)`;
}

setInterval(showSlide, 3000); // كل 3 ثواني

// Mini card slider
const cardTrack = document.querySelector('.card-track');
const cardCount = document.querySelectorAll('.card').length;
let cardIndex = 0;

function showCards() {
  cardIndex = (cardIndex + 1) % cardCount;
  cardTrack.style.transform = `translateX(-${cardIndex * 100}%)`; 
  // move by 100% per card (not pixels)
}

setInterval(showCards, 3000); // يتحرك كل 3 ثواني


// Theme and Language Toggle Script

// Translations object
const translations = {
  en: {
    // Brand & Navigation
    brandName: "Ocean Fragrances",
    orderNow: "Order Now",
    available: "Our Products",
    contactUs: "Contact Us",
    
    // Hero Section
    welcomeTitle: "Welcome to Ocean Fragrance",
    welcomeSubtitle: "✨BREATHE OF LUXURY✨",
    
    // Products
    product1Name: "Atheer",
    product1Desc: "Inspired by Khamra.",
    product2Name: "Glow Candy",
    product2Desc: "Inspired by Yara lattafa.",
    product3Name: "Grevin",
    product3Desc: "Inspired By Le Beau Paradise Garden Jean Paul Gaultier.",
    product4Name: "Mateu Denaro",
    product4Desc: "Inspired ROSENDO MATEU 5.",
    product5Name: "Midnight Angel's",
    product5Desc: "Inspired by Angel Share Paradise By Kilian.",
    product6Name: "Portofino",
    product6Desc: "Inspired by VALENTINO BORN IN ROME Intenes",
    product7Name: "Reo",
    product7Desc: "Inspired by Symphony Louis Vuitton.",
    product8Name: "Velvet Angle's",
    product8Desc: "Inspired by Angel Share By Kilian.",
    product9Name: "Volcano",
    product9Desc: "Our Signature Scent.",
    
    // Bundles Section
    // bundlesTitle: "Our Bundles",
    bundles: "Bundles",
    bundle1Name: "Gladiator",
    bundle1Desc: "Two Premium scents in one bundle.",
    bundle2Name: "Romantic Collection",
    bundle2Desc: "Perfect for special occasions.",
    bundle3Name: "Daily Essentials",
    bundle3Desc: "Everyday fragrances for the modern individual.",
    bundle4Name: "Exotic Mix",
    bundle4Desc: "Adventure in every spray.",
    bundle5Name: "Seasonal Favorites",
    bundle5Desc: "Fragrances for every season.",

    // Contact Section
    getIn: "Order",
    touch: "Now",
    namePlaceholder: "Name",
    emailPlaceholder: "Email",
    messagePlaceholder: "Message",
    brief:"Luxurious niche perfumes inspired by simulation, since 2024",
    submitBtn: "Submit"
  },
  ar: {
    // Brand & Navigation
    orderNow: "اطلب اوردر",
    available: "المتوفــر",
    bundles: "الباقات",
    contactUs: "تواصل معنا",

    // Hero Section
    welcomeSubtitle: "✨نفحة من الفخامة✨",

    // Products
    product1Name: "أثير",
    product1Desc: "مستوحى من خمرة.",
    product2Name: "جلو كاندي",
    product2Desc: "مستوحى من يارا لطافة.",
    product3Name: "جريفين",
    product3Desc: "مستوحى من جان بول غوتييه لو بو باراديس جاردن. ",
    product4Name: "ماتيو دينارو",
    product4Desc: "مستوحى من روزيندو ماتيو 5.",
    product5Name: "ميدنايت أنجلز",
    product5Desc: "مستوحى من أنجل شير باراديس من كيليان.",
    product6Name: "بورتوفينو",
    product6Desc: "مستوحى من فالنتينو بورن إن روم إنتينس",
    product7Name: "ريو",
    product7Desc: "مستوحى من سيمفوني لويس فيتون.",
    product8Name: "فيلفيت أنجلز",
    product8Desc: "مستوحى من أنجل شير من كيليان.",
    product9Name: "فولكانو",
    product9Desc: "عطرنا المميز.",

    // Bundles Section
    bundlesTitle: "باقاتنا",
    bundle1Name: " جلاديتور",
    bundle1Desc: "اثنان من العطور الفخمة في باقة واحدة.",
    bundle2Name: "المجموعة الرومانسية",
    bundle2Desc: "مثالية للمناسبات الخاصة.",
    bundle3Name: "الأساسيات اليومية",
    bundle3Desc: "عطور للفرد الحديث كل يوم.",
    bundle4Name: "الخليط الغريب",
    bundle4Desc: "مغامرة في كل رذاذ.",
    bundle5Name: "المفضلة الموسمية",
    bundle5Desc: "عطور لكل موسم.",

    // Contact Section
    getIn: "اطلب",
    touch: "الآن",
    namePlaceholder: "الاسم",
    emailPlaceholder: "البريد الإلكتروني",
    messagePlaceholder: "الرسالة",
    brief:"عطور نيش فاخرة مستوحاة من المحاكاة، منذ عام 2024",
    submitBtn: "إرسال"
  }
};

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
  // Check for saved preferences
  const savedTheme = localStorage.getItem('theme') || 'light';
  const savedLang = localStorage.getItem('language') || 'en';
  
  // Apply saved preferences
  document.documentElement.setAttribute('data-theme', savedTheme);
  document.documentElement.setAttribute('lang', savedLang);
  
  if (savedLang === 'ar') {
    document.body.setAttribute('dir', 'rtl');
  } else {
    document.body.setAttribute('dir', 'ltr');
  }
  
  // Keep slider always LTR regardless of language
  const slider = document.querySelector('.slider');
  const slides = document.querySelector('.slides');
  if (slider) slider.style.direction = 'ltr';
  if (slides) slides.style.direction = 'ltr';
  
  // Update button states
  updateThemeButtons(savedTheme);
  updateLanguageButtons(savedLang);
  
  // Apply translations
  applyTranslations(savedLang);
});

// Update theme button states
function updateThemeButtons(theme) {
  const sunIcon = document.querySelector('.sun-icon');
  const moonIcon = document.querySelector('.moon-icon');
  
  if (theme === 'dark') {
    sunIcon.classList.remove('active');
    moonIcon.classList.add('active');
  } else {
    sunIcon.classList.add('active');
    moonIcon.classList.remove('active');
  }
}

// Update language button states
function updateLanguageButtons(lang) {
  const enIcon = document.querySelector('.en-icon');
  const arIcon = document.querySelector('.ar-icon');
  
  if (lang === 'ar') {
    enIcon.classList.remove('active');
    arIcon.classList.add('active');
  } else {
    enIcon.classList.add('active');
    arIcon.classList.remove('active');
  }
}

// Theme Toggle Function
function toggleTheme() {
  const html = document.documentElement;
  const currentTheme = html.getAttribute('data-theme');
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  
  html.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
  
  // Update button states
  updateThemeButtons(newTheme);
}

// Language Toggle Function
function toggleLanguage() {
  const html = document.documentElement;
  const body = document.body;
  const currentLang = html.getAttribute('lang');
  const newLang = currentLang === 'en' ? 'ar' : 'en';
  
  html.setAttribute('lang', newLang);
  localStorage.setItem('language', newLang);
  
  // Update text direction BUT exclude slider
  if (newLang === 'ar') {
    body.setAttribute('dir', 'rtl');
  } else {
    body.setAttribute('dir', 'ltr');
  }
  
  // Keep slider always LTR (left-to-right)
  const slider = document.querySelector('.slider');
  const slides = document.querySelector('.slides');
  if (slider) slider.style.direction = 'ltr';
  if (slides) slides.style.direction = 'ltr';
  
  // Update button states
  updateLanguageButtons(newLang);
  
  // Apply translations
  applyTranslations(newLang);
}

// Apply translations to elements with data-translate attribute
function applyTranslations(lang) {
  // Translate text content
  const elements = document.querySelectorAll('[data-translate]');
  elements.forEach(element => {
    const key = element.getAttribute('data-translate');
    if (translations[lang] && translations[lang][key]) {
      element.textContent = translations[lang][key];
    }
  });
  
  // Translate placeholders
  const placeholderElements = document.querySelectorAll('[data-translate-placeholder]');
  placeholderElements.forEach(element => {
    const key = element.getAttribute('data-translate-placeholder');
    if (translations[lang] && translations[lang][key]) {
      element.placeholder = translations[lang][key];
    }
  });
}

// Scroll to Top Button functionality
const scrollToTopBtn = document.getElementById('scrollToTopBtn');

function toggleScrollToTopBtn() {
  if (window.scrollY > 300) {
    scrollToTopBtn.classList.add('show');
  } else {
    scrollToTopBtn.classList.remove('show');
  }
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

// Event listeners for scroll to top button
window.addEventListener('scroll', toggleScrollToTopBtn);
scrollToTopBtn.addEventListener('click', scrollToTop);

// Make functions globally accessible
window.toggleTheme = toggleTheme;
window.toggleLanguage = toggleLanguage;

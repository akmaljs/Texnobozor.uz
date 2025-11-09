// home page started
document.addEventListener('DOMContentLoaded', function() {
    const searchButton = document.querySelector('.search-btn');
    const searchInput = document.querySelector('.search-box input');
    const cartIcon = document.querySelector('.cart-icon');

    // Qidiruv tugmasi bosilganda funksiya
    searchButton.addEventListener('click', function(event) {
        event.preventDefault(); // Agar bu formaning qismi bo'lsa, qayta yuklashni oldini oladi
        const searchTerm = searchInput.value;
        console.log("Qidiruv so'rovi: " + searchTerm);
        alert("Siz qidirmoqchi bo'lgan so'z: " + searchTerm);
        // Bu joyda haqiqiy qidiruv funksiyasi qo'shilishi kerak
    });

    // Savat belgisini bosganda funksiya
    cartIcon.addEventListener('click', function() {
        console.log("Savat sahifasiga o'tish...");
        alert("Savat sahifasiga yo'naltirilmoqda.");
        // Bu joyda savat sahifasiga yo'naltirish kodi qo'shilishi kerak
    });
});
document.addEventListener('DOMContentLoaded', function() {
    // --- Avvalgi qism (Qidiruv va Savat funksiyalari) saqlanadi ---
    const searchButton = document.querySelector('.search-btn');
    const searchInput = document.querySelector('.search-box input');
    const cartIcon = document.querySelector('.cart-icon');

    if (searchButton) {
        searchButton.addEventListener('click', function(event) {
            event.preventDefault();
            const searchTerm = searchInput.value;
            console.log("Qidiruv so'rovi: " + searchTerm);
        });
    }

    if (cartIcon) {
        cartIcon.addEventListener('click', function() {
            console.log("Savat sahifasiga o'tish...");
        });
    }

    // --- SLAYDER FUNKSIYALARI ---

    // Slayder kontentining ma'lumotlari
    const slides = [
        {
            mainTitle: "Maishiy texnika",
            subtitle: "Uyingizni modernlashtiring",
            description: "Premium sifat, qulay narxlar",
        },
        {
            mainTitle: "Smartfonlar",
            subtitle: "Dunyo sizning cho'ntagingizda",
            description: "Eng so'nggi modellar, kafolatlangan xarid",
        },
        {
            mainTitle: "Gajetlar",
            subtitle: "Hayotingizni qulaylashtiring",
            description: "Aqlli soatlar, quloqchinlar va boshqalar",
        }
    ];

    let currentSlideIndex = 0; // Joriy slayderning indeksi
    
    // DOM elementlari
    const mainTitle = document.querySelector('.hero-content .main-title');
    const subtitle = document.querySelector('.hero-content .subtitle');
    const description = document.querySelector('.hero-content .description');
    const prevArrow = document.querySelector('.prev-arrow');
    const nextArrow = document.querySelector('.next-arrow');
    const dotsContainer = document.querySelector('.slider-dots');
    const dots = document.querySelectorAll('.slider-dots .dot');

    /**
     * Slayder kontentini yangilash funksiyasi
     * @param {number} index - Yangi slayder indeksi
     */
    function updateSlide(index) {
        // Kontentni yangilash
        mainTitle.textContent = slides[index].mainTitle;
        subtitle.textContent = slides[index].subtitle;
        description.textContent = slides[index].description;
        
        // Nuqtalarni yangilash
        dots.forEach((dot, i) => {
            dot.classList.remove('active');
            if (i === index) {
                dot.classList.add('active');
            }
        });
        
        // Joriy indeksni saqlash
        currentSlideIndex = index;
    }

    // Oldingi slayderga o'tish
    prevArrow.addEventListener('click', function() {
        let newIndex = currentSlideIndex - 1;
        if (newIndex < 0) {
            newIndex = slides.length - 1; // Oxirgi slayderga o'tish (tsikl)
        }
        updateSlide(newIndex);
    });

    // Keyingi slayderga o'tish
    nextArrow.addEventListener('click', function() {
        let newIndex = currentSlideIndex + 1;
        if (newIndex >= slides.length) {
            newIndex = 0; // Birinchi slayderga o'tish (tsikl)
        }
        updateSlide(newIndex);
    });
    
    // Nuqtalarni bosish orqali slayderga o'tish
    dots.forEach((dot, index) => {
        dot.addEventListener('click', function() {
            updateSlide(index);
        });
    });

    // Sahifa yuklanganda birinchi slayderni ko'rsatish
    updateSlide(0); 
    
    // Avtomatik almashtirish (ixtiyoriy)
    /*
    const autoSlide = setInterval(function() {
        nextArrow.click(); // Keyingi slayderga o'tishni simulyatsiya qilish
    }, 5000); // Har 5 soniyada almashtirish
    */
});
document.addEventListener('DOMContentLoaded', function() {
    // --- Avvalgi qism (Qidiruv va Savat funksiyalari) joyida qoladi ---
    // ...

    // --- SLAYDER FUNKSIYALARI ---

    const slides = [
        {
            mainTitle: "Maishiy texnika",
            subtitle: "Uyingizni modernlashtiring",
            description: "Premium sifat, qulay narxlar",
        },
        {
            mainTitle: "Smartfonlar",
            subtitle: "Dunyo sizning cho'ntagingizda",
            description: "Eng so'nggi modellar, kafolatlangan xarid",
        },
        {
            mainTitle: "Gajetlar",
            subtitle: "Hayotingizni qulaylashtiring",
            description: "Aqlli soatlar, quloqchinlar va boshqalar",
        }
    ];

    let currentSlideIndex = 0;
    
    // DOM elementlari
    const mainTitle = document.querySelector('.hero-content .main-title');
    const subtitle = document.querySelector('.hero-content .subtitle');
    const description = document.querySelector('.hero-content .description');
    const heroContent = document.querySelector('.hero-content');
    const prevArrow = document.querySelector('.prev-arrow');
    const nextArrow = document.querySelector('.next-arrow');
    const dots = document.querySelectorAll('.slider-dots .dot');

    // Avtomatik o'tish uchun o'zgaruvchi
    let autoSlideInterval;
    const slideDuration = 5000; // 5 soniyada bir o'zgaradi

    /**
     * Avtomatik o'tish taymerini qayta boshlash funksiyasi
     * Foydalanuvchi tugmani bosgandan so'ng juda muhim
     */
    function resetAutoSlide() {
        clearInterval(autoSlideInterval);
        autoSlideInterval = setInterval(() => {
            // Keyingi slayderga o'tish funksiyasini chaqiramiz
            const newIndex = (currentSlideIndex + 1) % slides.length;
            updateSlide(newIndex, true); // Avtomatik rejimda o'tish
        }, slideDuration);
    }

    /**
     * Slayder kontentini yangilash funksiyasi, ANIMATSIYA ORQALI
     * @param {number} index - Yangi slayder indeksi
     * @param {boolean} isAuto - Agar True bo'lsa, avtomatik o'tishdan keyin qayta boshlanmaydi
     */
    function updateSlide(index, isAuto = false) {
        // Agar animatsiya hali tugamagan bo'lsa, qayta bosishni bloklash
        if (heroContent.classList.contains('fade-out')) {
            // Agar foydalanuvchi bosgan bo'lsa, avtomatik o'tishni qayta boshlaymiz
            if (!isAuto) resetAutoSlide(); 
            return;
        }

        // 1. O'chirish animatsiyasini boshlash
        heroContent.classList.remove('fade-in');
        heroContent.classList.add('fade-out');

        // 2. Animatsiya tugashini kutish (animationend event)
        function handleAnimationEnd() {
            heroContent.removeEventListener('animationend', handleAnimationEnd);

            // --- Kontentni yangilash ---
            mainTitle.textContent = slides[index].mainTitle;
            subtitle.textContent = slides[index].subtitle;
            description.textContent = slides[index].description;

            dots.forEach((dot, i) => {
                dot.classList.remove('active');
                if (i === index) {
                    dot.classList.add('active');
                }
            });
            
            currentSlideIndex = index;
            
            // 3. Kirish animatsiyasini boshlash (Fade In)
            heroContent.classList.remove('fade-out');
            heroContent.classList.add('fade-in');
            
            // Foydalanuvchi o'zgartirgandan so'ng, avtomatik o'tishni qayta boshlash
            if (!isAuto) {
                resetAutoSlide();
            }
        }
        
        heroContent.addEventListener('animationend', handleAnimationEnd);
        
        // Avtomatik o'tish vaqtini yangilash, faqat foydalanuvchi bosganda
        if (!isAuto) {
             // Foydalanuvchi aralashuvi sababli avtomatik o'tishni pauza qilish
             clearInterval(autoSlideInterval);
        }
    }

    // Keyingi/Oldingi tugmalari va nuqtalar bosilganda
    prevArrow.addEventListener('click', function() {
        let newIndex = currentSlideIndex - 1;
        if (newIndex < 0) newIndex = slides.length - 1;
        updateSlide(newIndex, false); // Foydalanuvchi bosdi
    });

    nextArrow.addEventListener('click', function() {
        let newIndex = currentSlideIndex + 1;
        if (newIndex >= slides.length) newIndex = 0;
        updateSlide(newIndex, false); // Foydalanuvchi bosdi
    });

    dots.forEach((dot, index) => {
        dot.addEventListener('click', function() {
            updateSlide(index, false); // Foydalanuvchi bosdi
        });
    });

    // Sahifa yuklanganda birinchi slayderni ko'rsatish
    updateSlide(0, true);
    
    // Avtomatik o'tishni boshlash
    resetAutoSlide();
});// JS Faqat tekshirish uchun (CSS yetarli bo'ladi!)

document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.category-card');

    cards.forEach(card => {
        // Sichqoncha ustiga kelganda
        card.addEventListener('mouseenter', () => {
            console.log(card.querySelector('.card-title').textContent + " kartasi ustida.");
            // Agar CSS ishlatilmasa, JS orqali klass qo'shish usuli:
            // card.classList.add('active-hover'); 
        });

        // Sichqoncha uzoqlashganda
        card.addEventListener('mouseleave', () => {
            console.log(card.querySelector('.card-title').textContent + " kartasidan uzoqlashdi.");
            // card.classList.remove('active-hover'); 
        });
    });
});
const products = [
    // 🔥 Rasmdagi mahsulotlarga mos keladigan ma'lumotlar
    { id: 7, name: "AirPods Pro 2", priceCurrent: "2,499,000 so'm", rating: "4.9 (89 ta sharh)", image: "https://lifenet.am/cdn/shop/files/4_6b546d01-7007-4707-9404-5e04e8b1a140.svg?v=1697365995&width=2048" },
    { id: 8, name: "Apple Watch Series 9", priceCurrent: "5,999,000 so'm", rating: "4.7 (67 ta sharh)", image: "https://store-63.ru/image/cache/catalog/Apple-Watch-Series-9/watch45-9midnight-400x400.svg" },
    { id: 1, name: "MacBook Pro 14\"", priceCurrent: "24,999,000 so'm", rating: "5 (156 ta sharh)", image: "https://atlas-content-cdn.pixelsquid.com/stock-images/apple-macbook-pro-14-inch-silver-Ka8Ke1E-600.jpg" },
    { id: 2, name: "Samsung Smart Fridge", priceCurrent: "12,999,000 so'm", rating: "4.6 (43 ta sharh)", image: "https://assets.newatlas.com/dims4/default/12cdd36/2147483647/strip/true/crop/600x400+50+0/resize/1200x800!/format/webp/quality/90/?url=https%3A%2F%2Fnewatlas-brightspot.s3.amazonaws.com%2Farchive%2Fsamsung-family-hub-2-fridge-11.png" },
    
    // Qolgan mahsulotlar (uzluksiz siljish uchun)
    { id: 3, name: "iPad Pro 12.9\"", priceCurrent: "11,999,000 so'm", rating: "4.8 (90 ta sharh)", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdqJTq9lnxAub1vb_HTHqKxqBzHvF7X1ljI_vu89vimpXikEOUM5YV0GTgbEyhodQD9IY&usqp=CAU" },
    { id: 4, name: "Sony WH-1000XM5 Quloqchinlar", priceCurrent: "3,999,000 so'm", rating: "4.5 (20 ta sharh)", image: "https://olcha.uz/image/700x700/products/2022-10-03/besprovodnye-nakladnye-naushniki-sony-wh-1000xm5-131546-0.jpeg" },
];

const productListContainer = document.getElementById('productListContainer');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

// 🔥 CSS dagi karta kengligi + gap ni hisobga olgan holda.
const cardWidth = 285; // card max-width
const gap = 20;
const cardStep = cardWidth + gap; // Bitta karta + orasidagi masofa miqdorida siljish
const scrollIntervalTime = 3000; // 3 soniyada bir marta siljitish

// --- Asosiy Funksiyalar ---

function createProductCard(product) {
    // 🔥 Rating elementini qo'shish
    const oldPriceHtml = product.priceOld ? `<p class="product-price-old">${product.priceOld}</p>` : '';

    return `
        <div class="product-card" data-id="${product.id}">
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <p class="product-name">${product.name}</p>
            <p class="product-rating">
                <i class="fas fa-star"></i> ${product.rating.split(' ')[0]} <span>${product.rating.split(' ').slice(1).join(' ')}</span>
            </p>
            ${oldPriceHtml}
            <p class="product-price-current">${product.priceCurrent}</p>
            <div class="product-actions">
                <button class="add-to-cart-btn" title="Savatchaga qo'shish"><i class="fas fa-shopping-basket"></i> Savatga qo'shish</button>
            </div>
        </div>
    `;
}

function renderProducts() {
    // Uzluksiz karusel uchun mahsulotlar ro'yxatini ikki marta joylashtiramiz.
    const allProductsHtml = products.map(createProductCard).join('');
    productListContainer.innerHTML = allProductsHtml + allProductsHtml;
}


// --- Avtomatik Karusel Logikasi ---

let currentScroll = 0; // Joriy siljish holatini saqlash

function autoScroll() {
    // Keyingi siljish joyini hisoblash
    currentScroll += cardStep;
    
    // Konteynerni siljitish
    productListContainer.scroll({
        left: currentScroll,
        behavior: 'smooth'
    });

    // Oxiriga yetganda (ikkinchi qismning boshiga), orqaga sakrashsiz qaytish
    if (currentScroll >= productListContainer.scrollWidth / 1) {
        // Siljish pozitsiyasini nolga tez qaytarish
        currentScroll = 0;
        setTimeout(() => {
            productListContainer.scrollLeft = 0;
        }, 500); // Silliq o'tish vaqti tugashini kutish
    }
}

// Avtomatik siljitishni boshlash
let scrollInterval = setInterval(autoScroll, scrollIntervalTime);


// --- Qo'l bilan boshqarish ---

function stopAutoScroll() {
    clearInterval(scrollInterval);
}

// Tugma funksiyalari
prevBtn.addEventListener('click', () => {
    stopAutoScroll();
    currentScroll = Math.max(0, currentScroll - cardStep); // 0 dan kichik bo'lmasligi kerak
    productListContainer.scroll({ left: currentScroll, behavior: 'smooth' });
    // Orqaga qaytganda avto-siljishni qayta boshlash uchun kutish
    setTimeout(() => { scrollInterval = setInterval(autoScroll, scrollIntervalTime); }, 5000);
});

nextBtn.addEventListener('click', () => {
    stopAutoScroll();
    // Oxirgi nuqtani hisoblash, aks holda currentScroll qiymati haddan tashqari oshib ketishi mumkin
    const maxScroll = productListContainer.scrollWidth / 2 - productListContainer.clientWidth;
    currentScroll = Math.min(maxScroll, currentScroll + cardStep);

    productListContainer.scroll({ left: currentScroll, behavior: 'smooth' });
    setTimeout(() => { scrollInterval = setInterval(autoScroll, scrollIntervalTime); }, 5000);
});

// Kursor o'tganda to'xtatish
productListContainer.addEventListener('mouseenter', stopAutoScroll);
productListContainer.addEventListener('mouseleave', () => {
    scrollInterval = setInterval(autoScroll, scrollIntervalTime);
});


// Sahifa yuklanganda mahsulotlarni joylash
document.addEventListener('DOMContentLoaded', renderProducts);
// home page ended
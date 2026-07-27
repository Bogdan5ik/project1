document.addEventListener('DOMContentLoaded', () => {
    // === 1. СОСТОЯНИЕ КОРЗИНЫ И СМЕНА ТЕМЫ ===
    let cart = [];

    // Переключение темы
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const html = document.documentElement;
            const currentTheme = html.getAttribute('data-bs-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            html.setAttribute('data-bs-theme', newTheme);
            themeToggle.textContent = newTheme === 'dark' ? '🌙' : '☀️';
        });
    }

    // === 2. ФИЛЬТРАЦИЯ, ПОИСК И СОРТИРОВКА ===
    const searchInput = document.getElementById('searchInput');
    const categoryBtns = document.querySelectorAll('#categoryFilters .filter-btn');
    const sortSelect = document.getElementById('sortSelect');
    const categoryBlocks = document.querySelectorAll('.category-block');

    let activeCategory = 'all';

    // Функция обновления отображения товаров
    function filterAndSortProducts() {
        const searchQuery = searchInput ? searchInput.value.toLowerCase().trim() : '';
        const sortValue = sortSelect ? sortSelect.value : 'default';

        categoryBlocks.forEach(block => {
            const blockCategory = block.getAttribute('data-category');
            const items = Array.from(block.querySelectorAll('.product-item'));

            // Проверка категории
            const matchesCategory = (activeCategory === 'all' || activeCategory === blockCategory);

            let visibleCount = 0;

            items.forEach(item => {
                const title = item.getAttribute('data-title')?.toLowerCase() || '';
                const matchesSearch = title.includes(searchQuery);

                if (matchesCategory && matchesSearch) {
                    item.style.display = 'block';
                    visibleCount++;
                } else {
                    item.style.display = 'none';
                }
            });

            // Показываем/скрываем заголовок категории, если в ней нет видимых товаров
            if (visibleCount > 0) {
                block.style.display = 'block';
            } else {
                block.style.display = 'none';
            }

            // Сортировка внутри категории
            if (sortValue !== 'default') {
                const container = block.querySelector('.row');
                items.sort((a, b) => {
                    const priceA = parseFloat(a.getAttribute('data-price')) || 0;
                    const priceB = parseFloat(b.getAttribute('data-price')) || 0;
                    return sortValue === 'asc' ? priceA - priceB : priceB - priceA;
                });
                items.forEach(item => container.appendChild(item));
            }
        });
    }

    // События для клика по категориям
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            categoryBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            activeCategory = btn.getAttribute('data-cat');
            filterAndSortProducts();
        });
    });

    // Поиск при вводе текста
    if (searchInput) {
        searchInput.addEventListener('input', filterAndSortProducts);
    }

    // Сортировка при выборе из списка
    if (sortSelect) {
        sortSelect.addEventListener('change', filterAndSortProducts);
    }

    // === 3. МОДАЛЬНОЕ ОКНО ТОВАРА И КОРЗИНА ===
    const productModal = document.getElementById('productModal');
    let currentModalProduct = null;

    if (productModal) {
        productModal.addEventListener('show.bs.modal', (e) => {
            const trigger = e.relatedTarget;
            if (!trigger) return;

            const title = trigger.getAttribute('data-title');
            const price = trigger.getAttribute('data-price');
            const status = trigger.getAttribute('data-status');
            const img = trigger.getAttribute('data-img');
            const desc = trigger.getAttribute('data-desc');

            currentModalProduct = { title, price: parseFloat(price), img };

            document.getElementById('modalTitle').textContent = title;
            document.getElementById('modalPrice').textContent = `${parseInt(price).toLocaleString('ru-RU')} сом`;
            document.getElementById('modalStatus').textContent = status;
            document.getElementById('modalImg').src = img;
            document.getElementById('modalDesc').textContent = desc;
        });
    }

    // Добавление из модального окна
    const modalAddToCart = document.getElementById('modalAddToCart');
    if (modalAddToCart) {
        modalAddToCart.addEventListener('click', () => {
            if (currentModalProduct) {
                addToCart(currentModalProduct);
                const modalInstance = bootstrap.Modal.getInstance(productModal);
                if (modalInstance) modalInstance.hide();
            }
        });
    }

    // Быстрое добавление через плюсик (+)
    document.querySelectorAll('.btn-add').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation(); // Не открываем модалку при клике на +
            const card = btn.closest('.product-card');
            const title = card.getAttribute('data-title');
            const price = parseFloat(card.getAttribute('data-price'));
            const img = card.getAttribute('data-img');

            addToCart({ title, price, img });
        });
    });

    // Добавление в массив корзины
    function addToCart(product) {
        const existing = cart.find(item => item.title === product.title);
        if (existing) {
            existing.count += 1;
        } else {
            cart.push({ ...product, count: 1 });
        }
        updateCartUI();
    }

    // Обновление UI корзины
    function updateCartUI() {
        const cartCount = document.getElementById('cartCount');
        const cartContainer = document.getElementById('cartItemsContainer');
        const cartTotalPrice = document.getElementById('cartTotalPrice');

        const totalItems = cart.reduce((sum, item) => sum + item.count, 0);
        const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.count), 0);

        if (cartCount) cartCount.textContent = totalItems;
        if (cartTotalPrice) cartTotalPrice.textContent = `${totalPrice.toLocaleString('ru-RU')} сом`;

        if (!cartContainer) return;

        if (cart.length === 0) {
            cartContainer.innerHTML = '<p class="text-center text-muted py-4">Корзина пуста</p>';
            return;
        }

        cartContainer.innerHTML = cart.map((item, index) => `
            <div class="d-flex align-items-center justify-content-between mb-3 border-bottom pb-3">
                <div class="d-flex align-items-center gap-3">
                    <img src="${item.img}" width="50" height="50" style="object-fit: contain;" alt="">
                    <div>
                        <h6 class="mb-0 fw-bold">${item.title}</h6>
                        <small class="text-muted">${item.price.toLocaleString('ru-RU')} сом</small>
                    </div>
                </div>
                <div class="d-flex align-items-center gap-2">
                    <button class="btn btn-sm btn-outline-secondary btn-decrease" data-index="${index}">-</button>
                    <span>${item.count}</span>
                    <button class="btn btn-sm btn-outline-secondary btn-increase" data-index="${index}">+</button>
                    <button class="btn btn-sm btn-danger ms-2 btn-remove" data-index="${index}">✕</button>
                </div>
            </div>
        `).join('');

        // Обработчики кнопок внутри корзины
        cartContainer.querySelectorAll('.btn-increase').forEach(btn => {
            btn.addEventListener('click', () => {
                const idx = btn.getAttribute('data-index');
                cart[idx].count += 1;
                updateCartUI();
            });
        });

        cartContainer.querySelectorAll('.btn-decrease').forEach(btn => {
            btn.addEventListener('click', () => {
                const idx = btn.getAttribute('data-index');
                if (cart[idx].count > 1) {
                    cart[idx].count -= 1;
                } else {
                    cart.splice(idx, 1);
                }
                updateCartUI();
            });
        });

        cartContainer.querySelectorAll('.btn-remove').forEach(btn => {
            btn.addEventListener('click', () => {
                const idx = btn.getAttribute('data-index');
                cart.splice(idx, 1);
                updateCartUI();
            });
        });
    }
});
document.addEventListener('DOMContentLoaded', () => {
    // === 1. БАЗА ДАННЫХ ТОВАРОВ ===
    const products = [
        // --- 🎮 ИГРОВЫЕ КОНСОЛИ ---
        { id: 101, title: "PlayStation 5 Disc", category: "consoles", price: 52000, status: "В наличии", img: "https://placehold.co/400x400/2a2a2a/FFF?text=PS5+Disc", desc: "Флагманская консоль от Sony с дисководом. Невероятная графика 4K и молниеносный SSD." },
        { id: 102, title: "PlayStation 5 Digital", category: "consoles", price: 45000, status: "Осталось 3 шт", statusClass: "warning", img: "https://placehold.co/400x400/2a2a2a/FFF?text=PS5+Digital", desc: "Версия без дисковода для тех, кто предпочитает цифровые версии игр. Абсолютная тишина работы." },
        { id: 103, title: "Xbox Series X", category: "consoles", price: 48000, status: "В наличии", img: "https://placehold.co/400x400/107C10/FFF?text=Xbox+Series+X", desc: "Самая мощная консоль от Microsoft. 12 терафлопс вычислительной мощности и подписка Game Pass." },
        { id: 104, title: "Xbox Series S", category: "consoles", price: 29000, status: "В наличии", img: "https://placehold.co/400x400/FFF/000?text=Xbox+Series+S", desc: "Компактная некстген-консоль. Идеальный билет в мир современных игр при минимальном бюджете." },
        { id: 105, title: "Nintendo Switch OLED", category: "consoles", price: 33000, status: "В наличии", img: "https://placehold.co/400x400/E60012/FFF?text=Switch+OLED", desc: "Гибридная консоль с потрясающим 7-дюймовым OLED-экраном. Играй дома и в дороге." },
        { id: 106, title: "Nintendo Switch Lite", category: "consoles", price: 20000, status: "Под заказ", statusClass: "info", img: "https://placehold.co/400x400/00B2EE/FFF?text=Switch+Lite", desc: "Исключительно портативная версия популярной консоли. Легкая и удобная для путешествий." },
        { id: 107, title: "Steam Deck OLED 512GB", category: "consoles", price: 55000, status: "В наличии", img: "https://placehold.co/400x400/1A1A1A/FFF?text=Steam+Deck", desc: "Мощный портативный ПК от Valve с OLED-экраном. Вся твоя библиотека Steam в кармане." },
        { id: 108, title: "ASUS ROG Ally Z1 Extreme", category: "consoles", price: 68000, status: "В наличии", img: "https://placehold.co/400x400/222/FFF?text=ROG+Ally", desc: "Портативный монстр на базе Windows 11 с экраном 120 Гц для ПК-бояр." },
        { id: 109, title: "Lenovo Legion Go", category: "consoles", price: 75000, status: "Осталось 1 шт", statusClass: "warning", img: "https://placehold.co/400x400/333/FFF?text=Legion+Go", desc: "Огромный 8.8-дюймовый экран 144 Гц и отсоединяемые контроллеры. Инновации в портативном гейминге." },
        { id: 110, title: "PlayStation 4 Slim 1TB", category: "consoles", price: 25000, status: "В наличии", img: "https://placehold.co/400x400/003791/FFF?text=PS4+Slim", desc: "Классика, которая всё еще актуальна. Огромная библиотека эксклюзивов по доступной цене." },
        { id: 111, title: "Meta Quest 3 128GB", category: "consoles", price: 56000, status: "Хит продаж", statusClass: "info", img: "https://placehold.co/400x400/FFF/000?text=Meta+Quest+3", desc: "Лучшая автономная VR-гарнитура нового поколения. Смешанная реальность и цветные камеры." },
        { id: 112, title: "PlayStation VR2", category: "consoles", price: 58000, status: "В наличии", img: "https://placehold.co/400x400/2a2a2a/FFF?text=PS+VR2", desc: "Шлем виртуальной реальности для PS5 с OLED-дисплеями и отслеживанием взгляда." },
        { id: 113, title: "Steam Deck LCD 256GB", category: "consoles", price: 42000, status: "В наличии", img: "https://placehold.co/400x400/1A1A1A/FFF?text=Steam+Deck+LCD", desc: "Базовая версия портативного ПК от Valve. Отличный старт для мобильного гейминга." },

        // --- 💻 ИГРОВЫЕ ПК ---
        { id: 201, title: "Starter Build GTX 1650", category: "pcs", price: 35000, status: "В наличии", img: "https://placehold.co/400x400/111/00FF00?text=PC+GTX+1650", desc: "Отличный ПК для киберспорта (CS:GO, Dota 2, Valorant) на базе надежной GTX 1650." },
        { id: 202, title: "Budget King RX 580", category: "pcs", price: 28000, status: "Хит продаж", statusClass: "info", img: "https://placehold.co/400x400/111/FF0000?text=PC+RX+580", desc: "Народный любимец! AMD Ryzen + Radeon RX 580 8GB потянет все игры в 1080p." },
        { id: 203, title: "Mid-Range RTX 3060", category: "pcs", price: 65000, status: "В наличии", img: "https://placehold.co/400x400/111/00FF00?text=PC+RTX+3060", desc: "Оптимальная сборка для современных игр с поддержкой Ray Tracing и DLSS." },
        { id: 204, title: "CyberTech RTX 4060", category: "pcs", price: 75000, status: "В наличии", img: "https://placehold.co/400x400/111/00FF00?text=PC+RTX+4060", desc: "Свежая архитектура Ada Lovelace. Идеальный баланс цены и сумасшедшей производительности." },
        { id: 205, title: "Advanced AMD RX 6700 XT", category: "pcs", price: 82000, status: "Осталось 2 шт", statusClass: "warning", img: "https://placehold.co/400x400/111/FF0000?text=PC+RX+6700+XT", desc: "Мощная сборка полностью на базе AMD. Идеально для игры в разрешении 1440p (2K)." },
        { id: 206, title: "White Aesthetic 4060 Ti", category: "pcs", price: 98000, status: "В наличии", img: "https://placehold.co/400x400/FFF/333?text=White+PC+Build", desc: "Стильная полностью белая сборка с ARGB-подсветкой и видеокартой RTX 4060 Ti." },
        { id: 207, title: "Mini-ITX Portable Gaming", category: "pcs", price: 95000, status: "Под заказ", statusClass: "info", img: "https://placehold.co/400x400/222/FFF?text=Mini-ITX+PC", desc: "Сверхкомпактный ПК размером с консоль, но с полноценным десктопным железом." },
        { id: 208, title: "Alienware Pro X", category: "pcs", price: 120000, status: "В наличии", img: "https://placehold.co/400x400/000/00FFFF?text=Alienware", desc: "Брендовая игровая станция с жидкостным охлаждением и уникальным футуристичным дизайном." },
        { id: 209, title: "Pro Streamer RTX 4070 Ti", category: "pcs", price: 145000, status: "В наличии", img: "https://placehold.co/400x400/111/FFF?text=Streamer+PC", desc: "Машина для профессионального стриминга и рендеринга без потери FPS." },
        { id: 210, title: "Ultimate Core i9 + RTX 4090", category: "pcs", price: 320000, status: "Под заказ", statusClass: "info", img: "https://placehold.co/400x400/000/FF00FF?text=RTX+4090+Build", desc: "Абсолютный ультиматум. Самое мощное железо на планете для 4K-гейминга на максималках." },
        { id: 211, title: "Red Team RX 7800 XT", category: "pcs", price: 115000, status: "В наличии", img: "https://placehold.co/400x400/111/FF0000?text=RX+7800+XT", desc: "Идеальный компьютер для 2K-гейминга на максималках, собранный полностью на компонентах AMD." },
        { id: 212, title: "High-End RTX 4080 Super", category: "pcs", price: 210000, status: "Осталось 1 шт", statusClass: "warning", img: "https://placehold.co/400x400/111/00FF00?text=RTX+4080+Super", desc: "Предтоповая сборка для тех, кто хочет играть в 4K с трассировкой лучей без компромиссов." },
        { id: 213, title: "HP Omen 45L", category: "pcs", price: 185000, status: "В наличии", img: "https://placehold.co/400x400/222/FFF?text=HP+Omen+45L", desc: "Фирменный ПК от HP с запатентованной системой охлаждения OMEN Cryo Chamber." },
        { id: 214, title: "MSI Trident X2", category: "pcs", price: 240000, status: "Под заказ", statusClass: "info", img: "https://placehold.co/400x400/222/FF0000?text=MSI+Trident", desc: "Уникальный дизайн корпуса с сенсорным экраном на передней панели для управления системой." },

        // --- 🖥️ МОНИТОРЫ ---
        { id: 301, title: "AOC 24G2SP 24\"", category: "monitors", price: 16000, status: "В наличии", img: "https://placehold.co/400x400/222/FFF?text=AOC+24", desc: "Бюджетный хит! 165 Гц, IPS-матрица и минимальный отклик для шутеров." },
        { id: 302, title: "ASUS TUF VG249Q 24\"", category: "monitors", price: 18000, status: "В наличии", img: "https://placehold.co/400x400/222/FFF?text=ASUS+TUF+24", desc: "Надежный игровой монитор с регулируемой подставкой и частотой 144 Гц." },
        { id: 303, title: "Acer Nitro VG270UP 27\"", category: "monitors", price: 26000, status: "В наличии", img: "https://placehold.co/400x400/222/FFF?text=Acer+Nitro+27", desc: "Переход на новый уровень: разрешение 2K (1440p) и 144 Гц." },
        { id: 304, title: "Samsung Odyssey G5 27\"", category: "monitors", price: 28000, status: "В наличии", img: "https://placehold.co/400x400/222/FFF?text=Odyssey+G5", desc: "Изогнутый дисплей 1000R для максимального погружения в игровой процесс." },
        { id: 305, title: "LG UltraGear 27GN800-B", category: "monitors", price: 32000, status: "Хит продаж", statusClass: "info", img: "https://placehold.co/400x400/222/FFF?text=LG+UltraGear", desc: "Один из лучших IPS-мониторов на рынке: потрясающие цвета и 144 Гц." },
        { id: 306, title: "Gigabyte M27Q 27\"", category: "monitors", price: 35000, status: "В наличии", img: "https://placehold.co/400x400/222/FFF?text=Gigabyte+M27Q", desc: "Первый в мире игровой монитор с KVM-переключателем и 170 Гц." },
        { id: 307, title: "MSI Optix MAG274QRF-QD", category: "monitors", price: 42000, status: "Осталось 2 шт", statusClass: "warning", img: "https://placehold.co/400x400/222/FFF?text=MSI+Optix", desc: "Технология Quantum Dot делает цвета на этом мониторе невероятно сочными." },
        { id: 308, title: "BenQ Zowie XL2546K 24.5\"", category: "monitors", price: 45000, status: "В наличии", img: "https://placehold.co/400x400/222/FFF?text=BenQ+Zowie", desc: "Выбор киберспортсменов №1. 240 Гц, TN-матрица и технология DyAc+." },
        { id: 309, title: "Alienware AW3423DWF 34\"", category: "monitors", price: 110000, status: "Под заказ", statusClass: "info", img: "https://placehold.co/400x400/222/FFF?text=Alienware+34", desc: "Широкоформатный QD-OLED монитор. Абсолютно черный цвет и бесконечный контраст." },
        { id: 310, title: "Samsung Odyssey Neo G9", category: "monitors", price: 150000, status: "Под заказ", statusClass: "info", img: "https://placehold.co/400x400/222/FFF?text=Odyssey+Neo+G9", desc: "49 дюймов безумия на Mini-LED. Заменит два полноценных монитора." },
        { id: 311, title: "Zowie XL2566K 24.5\" 360Hz", category: "monitors", price: 65000, status: "В наличии", img: "https://placehold.co/400x400/222/FFF?text=Zowie+360Hz", desc: "Бескомпромиссная плавность для PRO-игроков в Valorant и CS2. TN матрица 360 Гц." },
        { id: 312, title: "LG OLED C3 42\"", category: "monitors", price: 95000, status: "Хит продаж", statusClass: "info", img: "https://placehold.co/400x400/222/FFF?text=LG+C3+OLED", desc: "Телевизор, который используют как идеальный игровой монитор. 4K, 120 Гц, идеальный черный." },
        { id: 313, title: "Koorui 24E3 24\"", category: "monitors", price: 12000, status: "В наличии", img: "https://placehold.co/400x400/222/FFF?text=Koorui+24E3", desc: "Народный ультрабюджетный монитор. 165 Гц и IPS матрица за минимальные деньги." },
        { id: 314, title: "ASUS ROG Swift PG27AQN", category: "monitors", price: 105000, status: "Под заказ", statusClass: "info", img: "https://placehold.co/400x400/222/FFF?text=ROG+Swift+360", desc: "Первый в мире 1440p монитор с частотой 360 Гц. Технологическое чудо от ASUS." },
        { id: 315, title: "Samsung Odyssey G7 27\"", category: "monitors", price: 48000, status: "В наличии", img: "https://placehold.co/400x400/222/FFF?text=Odyssey+G7", desc: "Матрица VA с рекордным откликом 1мс, 240 Гц и сильным изгибом 1000R." },

        // --- ⌨️ КЛАВИАТУРЫ ---
        { id: 401, title: "Redragon Kumara K552", category: "keyboards", price: 3500, status: "В наличии", img: "https://placehold.co/400x400/333/FFF?text=Redragon+Kumara", desc: "Отличная первая механическая клавиатура. Компактная, громкая, надежная." },
        { id: 402, title: "Keychron K2 V2", category: "keyboards", price: 8000, status: "В наличии", img: "https://placehold.co/400x400/555/FFF?text=Keychron+K2", desc: "Беспроводная механика, идеально подходящая как для игр, так и для Mac/PC." },
        { id: 403, title: "Razer BlackWidow V3 TKL", category: "keyboards", price: 8500, status: "В наличии", img: "https://placehold.co/400x400/00FF00/000?text=BlackWidow", desc: "Классика от Razer в компактном TKL-формате с фирменными зелеными свитчами." },
        { id: 404, title: "HyperX Alloy Origins Core", category: "keyboards", price: 9500, status: "Хит продаж", statusClass: "info", img: "https://placehold.co/400x400/FF0000/FFF?text=HyperX+Alloy", desc: "Алюминиевый корпус, сочная RGB-подсветка и линейные свитчи HyperX Red." },
        { id: 405, title: "Asus ROG Strix Scope RX", category: "keyboards", price: 11500, status: "В наличии", img: "https://placehold.co/400x400/222/FFF?text=ROG+Strix+Scope", desc: "Оптико-механические свитчи со стабилизацией по углам и увеличенный Ctrl для шутеров." },
        { id: 406, title: "Logitech G Pro X Keyboard", category: "keyboards", price: 12000, status: "В наличии", img: "https://placehold.co/400x400/00B2EE/FFF?text=Logitech+G+Pro", desc: "Клавиатура, созданная вместе с про-игроками. Возможность горячей замены свитчей (Hot-swap)." },
        { id: 407, title: "Ducky One 3 Mini", category: "keyboards", price: 13000, status: "Осталось 2 шт", statusClass: "warning", img: "https://placehold.co/400x400/222/FFF?text=Ducky+One+3", desc: "Премиальный акустический дизайн и невероятная плавность нажатий 60% формата." },
        { id: 408, title: "Corsair K70 RGB MK.2", category: "keyboards", price: 14000, status: "В наличии", img: "https://placehold.co/400x400/222/FFF?text=Corsair+K70", desc: "Полноразмерная клавиатура с выделенными медиа-кнопками и мягкой подставкой для рук." },
        { id: 409, title: "SteelSeries Apex Pro TKL", category: "keyboards", price: 18500, status: "В наличии", img: "https://placehold.co/400x400/222/FFF?text=Apex+Pro+TKL", desc: "Магнитные свитчи OmniPoint: настраивай глубину срабатывания каждой клавиши от 0.2 до 3.8 мм." },
        { id: 410, title: "Wooting 60HE", category: "keyboards", price: 22000, status: "Под заказ", statusClass: "info", img: "https://placehold.co/400x400/222/FFF?text=Wooting+60HE", desc: "Революция в гейминге. Аналоговые свитчи с технологией Rapid Trigger. Легальный чит." },
        { id: 411, title: "Aula F75", category: "keyboards", price: 3900, status: "В наличии", statusClass: "info", img: "https://placehold.co/400x400/222/FFF?text=Aula+F75", desc: "Компактная беспроводная механика 75%. Премиальный «флекс»-эффект и отличный звук прямо из коробки." },
        { id: 412, title: "Dark Project KD87A", category: "keyboards", price: 6500, status: "Хит продаж", statusClass: "info", img: "https://placehold.co/400x400/222/FFF?text=Dark+Project", desc: "Лучшая клавиатура в СНГ-сегменте по соотношению цена-качество. Смазанные свитчи Gateron Cap Teal." },
        { id: 413, title: "NuPhy Halo75", category: "keyboards", price: 12500, status: "В наличии", img: "https://placehold.co/400x400/222/FFF?text=NuPhy+Halo75", desc: "Идеальный тайпинг. PBT-кейкапы с профилем KSA и мощная шумоизоляция из силикона." },
        { id: 414, title: "Epomaker TH80 Pro", category: "keyboards", price: 7500, status: "В наличии", img: "https://placehold.co/400x400/222/FFF?text=Epomaker+TH80", desc: "Универсальный борд 75% с «крутилкой» громкости и поддержкой Bluetooth 5.0." },
        { id: 415, title: "GMMK Pro Barebone", category: "keyboards", price: 15000, status: "Осталось 3 шт", statusClass: "warning", img: "https://placehold.co/400x400/222/FFF?text=GMMK+Pro", desc: "Тяжелый алюминиевый корпус для кастомизаторов. Собери клавиатуру своей мечты сам." },
        { id: 416, title: "Akko 5075B Plus", category: "keyboards", price: 8500, status: "В наличии", img: "https://placehold.co/400x400/222/FFF?text=Akko+5075B", desc: "Красивая боковая RGB-подсветка корпуса и фирменные тактильные свитчи Akko." },
        { id: 417, title: "Razer Huntsman V3 Pro", category: "keyboards", price: 21000, status: "В наличии", img: "https://placehold.co/400x400/00FF00/000?text=Huntsman+V3", desc: "Аналоговые оптические свитчи второго поколения с регулируемым Rapid Trigger для киберспорта." },
        { id: 418, title: "FL Esports CMK87", category: "keyboards", price: 11000, status: "В наличии", img: "https://placehold.co/400x400/222/FFF?text=FL+Esports", desc: "Мощный металлический вес внутри корпуса, невероятно тихий и приятный стук клавиш." },
        { id: 419, title: "Varmilo Minilo 75%", category: "keyboards", price: 13500, status: "Под заказ", statusClass: "info", img: "https://placehold.co/400x400/222/FFF?text=Varmilo+Minilo", desc: "Эстетика ретро-дизайна и непревзойденное качество сборки от знаменитого бренда Varmilo." },

        // --- 🖱️ ИГРОВЫЕ МЫШИ ---
        { id: 501, title: "Logitech G102 Lightsync", category: "mice", price: 2500, status: "В наличии", img: "https://placehold.co/400x400/222/FFF?text=Logitech+G102", desc: "Идеальная бюджетная мышь. Классическая форма, отличный сенсор и RGB-подсветка." },
        { id: 502, title: "HyperX Pulsefire Haste", category: "mice", price: 4500, status: "В наличии", img: "https://placehold.co/400x400/222/FFF?text=Pulsefire+Haste", desc: "Ультралегкая сотовая конструкция (всего 59г) для молниеносных фликов." },
        { id: 503, title: "Endgame Gear XM1r", category: "mice", price: 6000, status: "В наличии", img: "https://placehold.co/400x400/222/FFF?text=XM1r", desc: "Лучшая форма для когтевого хвата. Создана немецкими инженерами для чистого киберспорта." },
        { id: 504, title: "Zowie EC2-C", category: "mice", price: 6500, status: "В наличии", img: "https://placehold.co/400x400/222/FFF?text=Zowie+EC2", desc: "Эталон эргономики. Мышь, которую использует каждый второй про-игрок в CS:GO." },
        { id: 505, title: "Asus ROG Gladius III", category: "mice", price: 7500, status: "Осталось 3 шт", statusClass: "warning", img: "https://placehold.co/400x400/222/FFF?text=ROG+Gladius", desc: "Сломалась кнопка? Просто замени свитч без пайки (Hot-swap гнезда)." },
        { id: 506, title: "Glorious Model O Wireless", category: "mice", price: 8500, status: "В наличии", img: "https://placehold.co/400x400/FFF/000?text=Model+O", desc: "Свобода от проводов, легкий вес и шикарные глайды прямо из коробки." },
        { id: 507, title: "SteelSeries Aerox 3 Wireless", category: "mice", price: 9000, status: "В наличии", img: "https://placehold.co/400x400/222/FFF?text=Aerox+3", desc: "Легкая, беспроводная и с защитой от воды и пыли IP54. Стильный прозрачный дизайн." },
        { id: 508, title: "Logitech G Pro X Superlight", category: "mice", price: 13500, status: "Хит продаж", statusClass: "info", img: "https://placehold.co/400x400/222/FFF?text=G+Pro+X", desc: "Король киберспорта. 63 грамма, идеальный баланс и топовый сенсор HERO." },
        { id: 509, title: "Razer Viper V2 Pro", category: "mice", price: 13800, status: "В наличии", img: "https://placehold.co/400x400/00FF00/000?text=Viper+V2", desc: "Симметричная легенда, ставшая еще легче и быстрее. Оптические свитчи 3-го поколения." },
        { id: 510, title: "Razer DeathAdder V3 Pro", category: "mice", price: 14000, status: "В наличии", img: "https://placehold.co/400x400/00FF00/000?text=DeathAdder+V3", desc: "Идеальная эргономика для правшей. Флагманский сенсор Focus Pro 30K." },
        { id: 511, title: "VXE Dragonfly R1 Pro", category: "mice", price: 4800, status: "Хит продаж", statusClass: "info", img: "https://placehold.co/400x400/222/FFF?text=VXE+R1+Pro", desc: "Убийца флагманов из Китая. Сенсор PAW3395, вес 48 грамм и идеальная сборка за копейки." },
        { id: 512, title: "Lamzu Atlantis OG V2", category: "mice", price: 8900, status: "В наличии", img: "https://placehold.co/400x400/222/FFF?text=Lamzu+Atlantis", desc: "Одна из лучших симметричных мышей для когтевого хвата. Широкая спинка и сочные клики Huano." },
        { id: 513, title: "Ninjutso Sora V2", category: "mice", price: 9500, status: "Осталось 2 шт", statusClass: "warning", img: "https://placehold.co/400x400/222/FFF?text=Ninjutso+Sora", desc: "Всего 39 грамм без сотовых отверстий! Рекордсмен по легкости с поддержкой 8000 Гц." },
        { id: 514, title: "Razer Basilisk V3", category: "mice", price: 6500, status: "В наличии", img: "https://placehold.co/400x400/00FF00/000?text=Basilisk+V3", desc: "Тяжелая и удобная. Идеальна для работы, монтажа и сюжетных игр. Умное колесико прокрутки." },
        { id: 515, title: "Logitech G502 X Plus", category: "mice", price: 14500, status: "В наличии", img: "https://placehold.co/400x400/222/FFF?text=G502+X+Plus", desc: "Обновленная легенда. Гибридные оптико-механические свитчи LIGHTFORCE и бесконечное колесо." },
        { id: 516, title: "Pulsar X2V2", category: "mice", price: 9200, status: "В наличии", img: "https://placehold.co/400x400/222/FFF?text=Pulsar+X2V2", desc: "Минималистичный дизайн, оптические переключатели и превосходная балансировка веса." },
        { id: 517, title: "VGN Dragonfly F1 Moba", category: "mice", price: 5200, status: "В наличии", img: "https://placehold.co/400x400/222/FFF?text=VGN+F1+Moba", desc: "Версия с более мягкими кликами специально для игроков в Dota 2 и League of Legends." },
        { id: 518, title: "Zaopin Z1 Pro", category: "mice", price: 4500, status: "Под заказ", statusClass: "info", img: "https://placehold.co/400x400/222/FFF?text=Zaopin+Z1", desc: "Форма \"яйца\", идеально подходящая для пальцевого хвата (fingertip). Крошечная, но смертоносная." },

        // --- 🎧 ГАРНИТУРЫ И ЗВУК ---
        { id: 601, title: "FIFINE AmpliGame H6", category: "audio", price: 4500, status: "В наличии", img: "https://placehold.co/400x400/222/FFF?text=AmpliGame+H6", desc: "Лучший бюджетный звук 7.1. Отличный микрофон, встроенный эквалайзер и RGB." },
        { id: 602, title: "HyperX Cloud II Red", category: "audio", price: 8500, status: "Хит продаж", statusClass: "info", img: "https://placehold.co/400x400/FF0000/FFF?text=Cloud+II", desc: "Самая популярная гарнитура в мире. Металлический каркас и неубиваемая конструкция." },
        { id: 603, title: "Logitech G733 Lightspeed", category: "audio", price: 12500, status: "В наличии", img: "https://placehold.co/400x400/5C2D91/FFF?text=G733", desc: "Легкие беспроводные наушники с ярким дизайном и отличной автономностью." },
        { id: 604, title: "Sennheiser Game One", category: "audio", price: 14000, status: "Осталось 2 шт", statusClass: "warning", img: "https://placehold.co/400x400/222/FFF?text=Game+One", desc: "Открытое акустическое оформление для аудиофилов-геймеров. Широчайшая сцена звука." },
        { id: 605, title: "Razer BlackShark V2 Pro", category: "audio", price: 15000, status: "В наличии", img: "https://placehold.co/400x400/00FF00/000?text=BlackShark+V2", desc: "Профессиональная беспроводная киберспортивная гарнитура с пассивной шумоизоляцией." },
        { id: 606, title: "JBL Quantum 800", category: "audio", price: 16500, status: "В наличии", img: "https://placehold.co/400x400/FF6600/FFF?text=Quantum+800", desc: "Активное шумоподавление (ANC), Hi-Res звук и мощные басы JBL." },
        { id: 607, title: "Corsair Virtuoso RGB Wireless", category: "audio", price: 18000, status: "В наличии", img: "https://placehold.co/400x400/222/FFF?text=Virtuoso+RGB", desc: "Премиальные материалы (алюминий и кожа) и студийное качество микрофона." },
        { id: 608, title: "EPOS H3PRO Hybrid", category: "audio", price: 22000, status: "Под заказ", statusClass: "info", img: "https://placehold.co/400x400/222/FFF?text=H3PRO", desc: "Подключай к ПК по радиоканалу и к телефону по Bluetooth одновременно!" },
        { id: 609, title: "Astro A50 + Base Station", category: "audio", price: 28000, status: "В наличии", img: "https://placehold.co/400x400/222/FFF?text=Astro+A50", desc: "Топовое решение для консолей и ПК с удобной зарядной док-станцией." },
        { id: 610, title: "SteelSeries Arctis Nova Pro", category: "audio", price: 32000, status: "Под заказ", statusClass: "info", img: "https://placehold.co/400x400/222/FFF?text=Arctis+Nova", desc: "Лучшая игровая гарнитура в мире. Два сменных аккумулятора в комплекте — играй бесконечно." },
        { id: 611, title: "HyperX Cloud III Wireless", category: "audio", price: 14500, status: "В наличии", img: "https://placehold.co/400x400/FF0000/FFF?text=Cloud+III", desc: "Достойный наследник легенды. 120 часов работы от батареи и переработанные 53-мм динамики." },
        { id: 612, title: "Sony INZONE H9", category: "audio", price: 24000, status: "В наличии", img: "https://placehold.co/400x400/FFF/000?text=INZONE+H9", desc: "Премиальная гарнитура от создателей PlayStation. Активное шумоподавление уровня наушников серии 1000X." },
        { id: 613, title: "Edifier G2 II", category: "audio", price: 3500, status: "Хит продаж", statusClass: "info", img: "https://placehold.co/400x400/222/FFF?text=Edifier+G2", desc: "Очень легкие бюджетные наушники со встроенной звуковой картой и хорошим позиционированием шагов." },
        { id: 614, title: "Moondrop Chu II (Внутриканальные)", category: "audio", price: 2500, status: "В наличии", img: "https://placehold.co/400x400/222/FFF?text=Moondrop+Chu+II", desc: "IEM-наушники. Выбор профессиональных стримеров. Голова не потеет, звук кристально чистый." },

        // --- 🕹️ КОНТРОЛЛЕРЫ ---
        { id: 701, title: "DualShock 4 V2", category: "controllers", price: 4500, status: "В наличии", img: "https://placehold.co/400x400/222/FFF?text=DualShock+4", desc: "Классический беспроводной контроллер для PS4 и отличный выбор для ПК." },
        { id: 702, title: "Xbox Wireless Controller", category: "controllers", price: 6200, status: "В наличии", img: "https://placehold.co/400x400/107C10/FFF?text=Xbox+Gamepad", desc: "Фирменный геймпад Microsoft. Полная совместимость с Windows без танцев с бубном." },
        { id: 703, title: "8BitDo Ultimate Bluetooth", category: "controllers", price: 6500, status: "Хит продаж", statusClass: "info", img: "https://placehold.co/400x400/222/FFF?text=8BitDo", desc: "Стики на датчиках Холла (никогда не дрифтят!) и зарядная док-станция в комплекте." },
        { id: 704, title: "Gulikit KingKong 2 Pro", category: "controllers", price: 7000, status: "В наличии", img: "https://placehold.co/400x400/222/FFF?text=KingKong+2", desc: "Механические кнопки, электромагнитные стики и поддержка записи макросов." },
        { id: 705, title: "DualSense PS5 White", category: "controllers", price: 7500, status: "В наличии", img: "https://placehold.co/400x400/FFF/000?text=DualSense", desc: "Инновационный контроллер с тактильной отдачей и адаптивными триггерами." },
        { id: 706, title: "Nintendo Pro Controller", category: "controllers", price: 8000, status: "Заканчивается", statusClass: "warning", img: "https://placehold.co/400x400/222/FFF?text=Pro+Controller", desc: "До 40 часов автономной работы и шикарная крестовина для файтингов." },
        { id: 707, title: "Razer Wolverine V2 Chroma", category: "controllers", price: 14000, status: "В наличии", img: "https://placehold.co/400x400/00FF00/000?text=Wolverine", desc: "Меха-тактильные кнопки, дополнительные бамперы и RGB подсветка для киберспорта." },
        { id: 708, title: "Xbox Elite Series 2", category: "controllers", price: 16500, status: "В наличии", img: "https://placehold.co/400x400/222/FFF?text=Elite+Series+2", desc: "Премиальный геймпад от Microsoft со сменными стиками, лепестками и настройкой хода курков." },
        { id: 709, title: "DualSense Edge", category: "controllers", price: 22000, status: "Под заказ", statusClass: "info", img: "https://placehold.co/400x400/FFF/000?text=DualSense+Edge", desc: "Профессиональная версия контроллера от Sony с возможностью замены целых модулей стиков." },
        { id: 710, title: "Scuf Reflex Pro", category: "controllers", price: 25000, status: "Под заказ", statusClass: "info", img: "https://placehold.co/400x400/222/FFF?text=Scuf+Reflex", desc: "Кастомные геймпады с лепестками, которыми пользуются лучшие игроки в Call of Duty." },
        { id: 711, title: "8BitDo Pro 2", category: "controllers", price: 4800, status: "В наличии", img: "https://placehold.co/400x400/222/FFF?text=8BitDo+Pro+2", desc: "Ретро-дизайн в стиле SNES с современными стиками и программируемыми кнопками сзади." },
        { id: 712, title: "DualSense Nova Pink", category: "controllers", price: 7800, status: "В наличии", img: "https://placehold.co/400x400/FF1493/FFF?text=DualSense+Pink", desc: "Яркая расцветка Nova Pink. Те же инновационные функции тактильной отдачи." },
        { id: 713, title: "Flydigi Vader 3 Pro", category: "controllers", price: 6800, status: "Хит продаж", statusClass: "info", img: "https://placehold.co/400x400/222/FFF?text=Vader+3+Pro", desc: "Механические микросвитчи, курки с переключением хода (короткий для шутеров, длинный для гонок)." },

        // --- 🏎️ ИГРОВЫЕ РУЛИ ---
        { id: 801, title: "PXN V9 (с КПП)", category: "wheels", price: 12000, status: "В наличии", img: "https://placehold.co/400x400/222/FFF?text=PXN+V9", desc: "Бюджетный руль с углом 900 градусов, 3 педалями и механической коробкой передач." },
        { id: 802, title: "Thrustmaster T150", category: "wheels", price: 18000, status: "В наличии", img: "https://placehold.co/400x400/222/FFF?text=T150", desc: "Отличный входной билет в симрейсинг с качественным ременным силовым откликом." },
        { id: 803, title: "Logitech G29", category: "wheels", price: 28000, status: "Хит продаж", statusClass: "info", img: "https://placehold.co/400x400/222/FFF?text=Logitech+G29", desc: "Легендарный гоночный руль в оплетке из натуральной кожи. Бессмертная классика." },
        { id: 804, title: "Thrustmaster T248", category: "wheels", price: 32000, status: "В наличии", img: "https://placehold.co/400x400/222/FFF?text=T248", desc: "Встроенный дисплей для телеметрии и гибридная система отдачи (шестерни + ремень)." },
        { id: 805, title: "Logitech G923", category: "wheels", price: 35000, status: "В наличии", img: "https://placehold.co/400x400/222/FFF?text=G923", desc: "Технология TRUEFORCE позволяет физически чувствовать вибрацию двигателя и дорогу." },
        { id: 806, title: "Thrustmaster T300 RS", category: "wheels", price: 42000, status: "Осталось 2 шт", statusClass: "warning", img: "https://placehold.co/400x400/222/FFF?text=T300+RS", desc: "Плавный бесщеточный сервомотор. Возможность менять баранки." },
        { id: 807, title: "Moza R9 Wheel Base", category: "wheels", price: 45000, status: "В наличии", img: "https://placehold.co/400x400/222/FFF?text=Moza+R9", desc: "Мотор с прямым приводом (Direct Drive) мощностью 9 Нм. Чистый адреналин." },
        { id: 808, title: "Moza R5 Bundle", category: "wheels", price: 55000, status: "Под заказ", statusClass: "info", img: "https://placehold.co/400x400/222/FFF?text=Moza+R5", desc: "Комплект Direct Drive базы 5 Нм, руля и педалей по невероятно вкусной цене." },
        { id: 809, title: "Fanatec CSL DD", category: "wheels", price: 65000, status: "Под заказ", statusClass: "info", img: "https://placehold.co/400x400/222/FFF?text=CSL+DD", desc: "Немецкое качество Direct Drive. Выбор серьезных симрейсеров по всему миру." },
        { id: 810, title: "Fanatec Podium DD1", category: "wheels", price: 145000, status: "Под заказ", statusClass: "info", img: "https://placehold.co/400x400/222/FFF?text=Podium+DD1", desc: "Ультимативная база мощностью 20 Нм. Осторожно: может вырвать руль из рук при аварии в игре." },
        { id: 811, title: "Moza R12 Wheel Base", category: "wheels", price: 62000, status: "В наличии", img: "https://placehold.co/400x400/222/FFF?text=Moza+R12", desc: "Золотая середина для Direct Drive. 12 Нм крутящего момента обеспечивают потрясающий реализм." },
        { id: 812, title: "Thrustmaster T818", category: "wheels", price: 95000, status: "Под заказ", statusClass: "info", img: "https://placehold.co/400x400/222/FFF?text=Thrustmaster+T818", desc: "Первый Direct Drive руль от Thrustmaster. Быстрый отклик и совместимость со всеми старыми баранками." },
        { id: 813, title: "Fanatec ClubSport DD", category: "wheels", price: 88000, status: "Осталось 1 шт", statusClass: "warning", img: "https://placehold.co/400x400/222/FFF?text=ClubSport+DD", desc: "Новейшая база с технологией FullForce для передачи самых мелких вибраций дороги." },

        // --- 🪑 ИГРОВЫЕ КРЕСЛА ---
        { id: 901, title: "AeroCool AC120", category: "chairs", price: 15000, status: "В наличии", img: "https://placehold.co/400x400/222/FFF?text=AeroCool", desc: "Удобное базовое кресло для геймеров с дышащим покрытием и карбоновыми вставками." },
        { id: 902, title: "ThunderX3 TC3", category: "chairs", price: 16000, status: "В наличии", img: "https://placehold.co/400x400/222/FFF?text=ThunderX3", desc: "Технология AIR Tech предотвращает перегрев спины во время потных каток." },
        { id: 903, title: "Cougar Armor One", category: "chairs", price: 18500, status: "В наличии", img: "https://placehold.co/400x400/FF6600/FFF?text=Cougar", desc: "Стальная рама, экокожа премиум-класса и возможность откинуть спинку на 180 градусов." },
        { id: 904, title: "DXRacer Formula", category: "chairs", price: 22000, status: "Хит продаж", statusClass: "info", img: "https://placehold.co/400x400/FF0000/FFF?text=DXRacer", desc: "Оригинальное анатомическое кресло, с которого началась мода на геймерские «ковши»." },
        { id: 905, title: "AKRacing Core Series EX", category: "chairs", price: 27000, status: "В наличии", img: "https://placehold.co/400x400/222/FFF?text=AKRacing", desc: "Кресло из плотной ткани. Не потеешь летом, не мерзнешь зимой. Топ за свои деньги." },
        { id: 906, title: "Corsair T3 Rush", category: "chairs", price: 29500, status: "В наличии", img: "https://placehold.co/400x400/222/FFF?text=Corsair+T3", desc: "Покрытие из дышащей мягкой полиэстеровой ткани, гарантирующее прохладу." },
        { id: 907, title: "AndaSeat Kaiser 3", category: "chairs", price: 35000, status: "В наличии", img: "https://placehold.co/400x400/222/FFF?text=AndaSeat", desc: "Магнитная подушка для шеи и встроенная 4-сторонняя регулировка поясницы (без валиков)." },
        { id: 908, title: "Razer Iskur", category: "chairs", price: 38000, status: "В наличии", img: "https://placehold.co/400x400/00FF00/000?text=Razer+Iskur", desc: "Уникальный подвижный поясничный упор, поддерживающий осанку при любом наклоне." },
        { id: 909, title: "Noblechairs Hero", category: "chairs", price: 42000, status: "В наличии", img: "https://placehold.co/400x400/222/FFF?text=Noblechairs", desc: "Немецкий бизнес-класс среди игровых кресел. Строгий дизайн и увеличенное сиденье." },
        { id: 910, title: "Secretlab Titan EVO", category: "chairs", price: 45000, status: "Под заказ", statusClass: "info", img: "https://placehold.co/400x400/222/FFF?text=Secretlab", desc: "Лучшее кресло в мире по версии большинства обзоров. Запатентованная пена холодной формовки." },
        { id: 911, title: "Cougar Outrider S", category: "chairs", price: 24000, status: "В наличии", img: "https://placehold.co/400x400/FF6600/FFF?text=Cougar+Outrider", desc: "Толстая дышащая ПВХ кожа и пена высокой плотности для комфорта во время марафонов." },
        { id: 912, title: "DXRacer Air R1S", category: "chairs", price: 32000, status: "В наличии", img: "https://placehold.co/400x400/FF0000/FFF?text=DXRacer+Air", desc: "Инновационная сетчатая конструкция. Максимальная вентиляция для жаркого климата." },
        { id: 913, title: "Herman Miller Embody Gaming", category: "chairs", price: 180000, status: "Под заказ", statusClass: "info", img: "https://placehold.co/400x400/00B2EE/FFF?text=Embody+Gaming", desc: "Абсолютный идеал ортопедии. Коллаборация Herman Miller и Logitech G для сохранения вашего позвоночника." }
    ];

    // === 2. СОСТОЯНИЕ И UI КОРЗИНЫ ===
    let cart = [];

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

    // === 3. РЕНДЕР И ФИЛЬТРАЦИЯ ТОВАРОВ ===
    const searchInput = document.getElementById('searchInput');
    const sortSelect = document.getElementById('sortSelect');
    const categoryBtns = document.querySelectorAll('.filter-btn');
    
    let activeCategory = 'all';

    function renderProducts() {
        const container = document.getElementById('generalProductList');
        if (!container) return;
        
        container.innerHTML = ''; // Очищаем контейнер перед рендером

        // Получаем параметры фильтров
        const query = searchInput ? searchInput.value.toLowerCase().trim() : '';
        const sortMode = sortSelect ? sortSelect.value : 'default';

        // Фильтруем базу
        let filtered = products.filter(p => {
            const matchCat = (activeCategory === 'all' || p.category === activeCategory);
            const matchQuery = p.title.toLowerCase().includes(query);
            return matchCat && matchQuery;
        });

        // Сортируем базу
        if (sortMode === 'asc') filtered.sort((a, b) => a.price - b.price);
        if (sortMode === 'desc') filtered.sort((a, b) => b.price - a.price);

        if (filtered.length === 0) {
            container.innerHTML = '<p class="text-center text-muted py-5 w-100">Товары не найдены</p>';
            return;
        }

        // Отрисовываем товары в общую сетку
        filtered.forEach(p => {
            const statusClass = p.statusClass || '';
            const html = `
                <div class="col-6 col-md-4 product-item">
                    <div class="product-card" data-bs-toggle="modal" data-bs-target="#productModal" 
                         data-id="${p.id}" data-title="${p.title}" data-price="${p.price}" 
                         data-status="${p.status}" data-img="${p.img}" data-desc="${p.desc}">
                        <div class="card-img-wrap">
                            <img class="product-img" src="${p.img}" alt="${p.title}">
                        </div>
                        <h3 class="product-title">${p.title}</h3>
                        <p class="product-status ${statusClass}">${p.status}</p>
                        <div class="card-footer-flex">
                            <span class="product-price">${p.price.toLocaleString('ru-RU')} сом</span>
                            <span class="btn-add">+</span>
                        </div>
                    </div>
                </div>
            `;
            container.insertAdjacentHTML('beforeend', html);
        });
    }

    // Слушатели фильтров
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            categoryBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            activeCategory = btn.getAttribute('data-cat');
            renderProducts();
        });
    });

    if (searchInput) searchInput.addEventListener('input', renderProducts);
    if (sortSelect) sortSelect.addEventListener('change', renderProducts);

    // Первичный рендер при загрузке
    renderProducts();

    // === 4. МОДАЛЬНОЕ ОКНО И КОРЗИНА ===
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

    function addToCart(product) {
        const existing = cart.find(item => item.title === product.title);
        if (existing) {
            existing.count += 1;
        } else {
            cart.push({ ...product, count: 1 });
        }
        updateCartUI();
    }

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
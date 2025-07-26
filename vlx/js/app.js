// @RFKONG 2025 VLX,JS (Main App Logic)
document.addEventListener('DOMContentLoaded', () => {
    const dom = {
        loader: document.getElementById('loader'),
        navbar: document.getElementById('navbar'),
        navbarContent: document.getElementById('navbar-content'),
        themeToggle: document.getElementById('theme-toggle'),
        themeIcon: document.getElementById('theme-icon'),
        mobileMenuToggle: document.getElementById('mobile-menu-toggle'),
        mobileMenuIcon: document.getElementById('mobile-menu-icon'),
        mobileMenu: document.getElementById('mobile-menu'),
        searchInput: document.getElementById('search-input'),
        mobileSearchInput: document.getElementById('mobile-search-input'),
        listPage: document.getElementById('list-page'),
        playPage: document.getElementById('play-page'),
        mediaList: document.getElementById('media-list'),
        categorySelect: document.getElementById('category-select'),
        sortByDateBtn: document.getElementById('sort-by-date'),
        sortByRatingBtn: document.getElementById('sort-by-rating'),
        backBtn: document.getElementById('back-btn'),
        featured: {
            cover: document.getElementById('featured-cover'),
            title: document.getElementById('featured-title'),
            desc: document.getElementById('featured-desc'),
            playBtn: document.getElementById('featured-play-btn'),
        },
        player: {
            container: document.getElementById('artplayer-mount'),
            backdrop: document.getElementById('play-page-backdrop'),
            videoContainer: document.getElementById('video-player-container'),
            poster: document.getElementById('media-poster'),
            title: document.getElementById('play-media-title'),
            meta: document.getElementById('media-meta'),
            detailsPlayBtn: document.getElementById('details-play-btn'),
            description: document.getElementById('media-description'),
            details: document.getElementById('media-details'),
            episodeListContainer: document.getElementById('episode-list-container'),
            episodeList: document.getElementById('episode-list'),
        },
    };

    // --- State & Data ---
    const allMedia = [...movies, ...tvShows]; // 合并电影和剧集数据
    const categories = ["全部", "电影", "剧集", "科幻", "剧情", "冒险", "动画", "灾难", "惊悚", "古装"];
    let currentSort = 'date';
    let currentCategory = '全部';
    let artplayerInstance = null; // 用于持有 ArtPlayer 实例

    // --- Functions ---
    const applyTheme = (theme) => {
        document.documentElement.classList.toggle('dark', theme === 'dark');
        dom.themeIcon.className = theme === 'dark' ? 'fa fa-sun-o text-yellow-400' : 'fa fa-moon-o text-gray-600';
    };

    const toggleTheme = () => {
        const newTheme = document.documentElement.classList.contains('dark') ? 'light' : 'dark';
        localStorage.setItem('theme', newTheme);
        applyTheme(newTheme);
    };

    const toggleMobileMenu = () => {
        const isMenuOpen = !dom.mobileMenu.classList.contains('-translate-x-full');
        dom.mobileMenu.classList.toggle('-translate-x-full', isMenuOpen);
        dom.mobileMenuIcon.classList.toggle('fa-times', !isMenuOpen);
        dom.mobileMenuIcon.classList.toggle('fa-bars', isMenuOpen);
    };

    const createMediaCard = (media) => {
        const card = document.createElement('div');
        card.className = 'group fade-in card-hover transition-transform-shadow';
        const typeLabel = media.type === 'tv' ? '剧集' : '电影';
        card.innerHTML = `
            <div class="relative aspect-[2/3] rounded-xl overflow-hidden cursor-pointer">
                <img src="${media.poster}" alt="${media.title}" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110">
                <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div class="absolute bottom-0 left-0 p-3 text-white">
                    <h3 class="font-semibold truncate">${media.title}</h3>
                    <p class="text-xs text-gray-300">${media.year}</p>
                </div>
                <div class="absolute top-2 right-2 bg-primary/80 text-white text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1">
                    <i class="fa fa-star"></i><span>${media.rating}</span>
                </div>
                <div class="type-tag">${typeLabel}</div>
            </div>`;
        card.addEventListener('click', () => showPlayPage(media.id));
        return card;
    };

    const renderMedia = () => {
        let filtered = [...allMedia];

        if (currentCategory !== '全部') {
            if (currentCategory === '电影') {
                filtered = allMedia.filter(m => m.type === 'movie');
            } else if (currentCategory === '剧集') {
                filtered = allMedia.filter(m => m.type === 'tv');
            } else {
                filtered = allMedia.filter(m => m.genre.includes(currentCategory));
            }
        }

        const searchTerm = dom.searchInput.value.toLowerCase() || dom.mobileSearchInput.value.toLowerCase();
        if (searchTerm) {
            filtered = filtered.filter(m => m.title.toLowerCase().includes(searchTerm) || m.actors.toLowerCase().includes(searchTerm));
        }

        filtered.sort((a, b) => {
            if (currentSort === 'date') return new Date(b.releaseDate) - new Date(a.releaseDate);
            if (currentSort === 'rating') return b.rating - a.rating;
            return 0;
        });

        dom.mediaList.innerHTML = '';
        if (filtered.length === 0) {
            dom.mediaList.innerHTML = `<p class="col-span-full text-center text-light-text-secondary dark:text-dark-text-secondary">没有找到匹配的内容。</p>`;
        } else {
            filtered.forEach(media => dom.mediaList.appendChild(createMediaCard(media)));
        }
    };

    const updateSortButtons = () => {
        [dom.sortByDateBtn, dom.sortByRatingBtn].forEach(btn => btn.classList.remove('bg-primary', 'text-white'));
        const activeBtn = currentSort === 'date' ? dom.sortByDateBtn : dom.sortByRatingBtn;
        activeBtn.classList.add('bg-primary', 'text-white');
    };

    const showPlayPage = (mediaId) => {
        const media = allMedia.find(m => m.id === mediaId);
        if (!media) return;

        // --- Populate Details ---
        dom.player.poster.src = media.poster;
        dom.player.title.textContent = media.title;
        dom.player.description.textContent = media.description;
        dom.player.meta.innerHTML = `
            <span class="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">${media.genre.split('/')[0]}</span>
            <span class="bg-gray-500/10 text-light-text-secondary dark:text-dark-text-secondary px-3 py-1 rounded-full text-sm font-medium">${media.year}</span>
            <span class="bg-gray-500/10 text-light-text-secondary dark:text-dark-text-secondary px-3 py-1 rounded-full text-sm font-medium">${media.runtime}</span>
            <span class="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1"><i class="fa fa-star"></i>${media.rating}</span>`;
        dom.player.details.innerHTML = `
            <p><strong class="font-semibold text-light-text dark:text-dark-text">导演:</strong><span class="text-light-text-secondary dark:text-dark-text-secondary">${media.director}</span></p>
            <p><strong class="font-semibold text-light-text dark:text-dark-text">主演:</strong><span class="text-light-text-secondary dark:text-dark-text-secondary">${media.actors}</span></p>
            <p><strong class="font-semibold text-light-text dark:text-dark-text">地区:</strong><span class="text-light-text-secondary dark:text-dark-text-secondary">${media.country}</span></p>
            <p><strong class="font-semibold text-light-text dark:text-dark-text">语言:</strong><span class="text-light-text-secondary dark:text-dark-text-secondary">${media.language}</span></p>`;
        dom.player.backdrop.style.backgroundImage = `url(${media.cover})`;

        // --- Player & Episode Logic ---
        if (artplayerInstance) artplayerInstance.destroy();
        dom.player.episodeListContainer.classList.add('hidden');
        dom.player.episodeList.innerHTML = '';

        let initialUrl = '';
        let initialSubtitle = null;

        if (media.type === 'movie') {
            initialUrl = media.videoUrl;
            initialSubtitle = media.subtitleUrl;
        } else if (media.type === 'tv' && media.episodes.length > 0) {
            dom.player.episodeListContainer.classList.remove('hidden');
            media.episodes.forEach((ep, index) => {
                const btn = document.createElement('button');
                btn.className = 'episode-btn';
                btn.textContent = ep.title;
                if (index === 0) btn.classList.add('active'); // 默认激活第一集

                btn.addEventListener('click', () => {
                    // 更新播放器
                    artplayerInstance.switchUrl(ep.url, ep.title);
                    if (ep.subtitleUrl) {
                        artplayerInstance.subtitle.switch(ep.subtitleUrl, { name: '中文字幕' });
                    }
                    // 更新激活状态
                    dom.player.episodeList.querySelectorAll('.episode-btn').forEach(b => b.classList.remove('active'));
                    btn.classList.add('active');
                });
                dom.player.episodeList.appendChild(btn);
            });
            initialUrl = media.episodes[0].url;
            initialSubtitle = media.episodes[0].subtitleUrl;
        }

        const playerOptions = {
            container: dom.player.container,
            url: initialUrl,
            title: media.title,
            poster: media.cover,
            volume: 0.7,
            isLive: false,
            muted: false,
            autoplay: false,
            pip: true,
            autoSize: false,
            autoMini: false,
            setting: true,
            loop: false,
            flip: true,
            playbackRate: true,
            aspectRatio: true,
            fullscreen: true,
            fullscreenWeb: true,
            miniProgressBar: true,
            mutex: true,
            backdrop: true,
            playsInline: true,
            autoPlayback: true,
            airplay: true,
            theme: '#165DFF',
        };

        if (initialSubtitle) {
            playerOptions.subtitle = {
                url: initialSubtitle,
                type: 'vtt',
                style: { color: '#ffffffff' },
                encoding: 'utf-8',
            };
        }

        artplayerInstance = new Artplayer(playerOptions);
        artplayerInstance.on('ready', () => {
            const container = dom.player.videoContainer;
            const video = artplayerInstance.video;
            if (video.videoWidth > 0 && video.videoHeight > 0) {
                container.classList.remove('aspect-video');
                container.style.aspectRatio = `${video.videoWidth} / ${video.videoHeight}`;
            }
        });

        dom.listPage.style.display = 'none';
        dom.playPage.style.display = 'block';
        window.scrollTo(0, 0);
    };

    const showListPage = () => {
        if (artplayerInstance) {
            artplayerInstance.destroy();
            artplayerInstance = null;
        }
        dom.playPage.style.display = 'none';
        dom.listPage.style.display = 'block';
        window.scrollTo(0, 0);
    };

    const init = () => {
        const imagePromises = allMedia.map(media => {
            return new Promise((resolve, reject) => {
                const img = new Image();
                img.onload = resolve;
                img.onerror = resolve;
                img.src = media.poster;
                if (media.cover) {
                    const coverImg = new Image();
                    coverImg.onload = resolve;
                    coverImg.onerror = resolve;
                    coverImg.src = media.cover;
                }
            });
        });

        Promise.all(imagePromises).then(() => {
            setTimeout(() => {
                dom.loader.style.opacity = '0';
                setTimeout(() => dom.loader.style.display = 'none', 500);
            }, 800);

            const savedTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
            applyTheme(savedTheme);

            const featuredMedia = allMedia.find(m => m.isFeatured) || allMedia[0];
            dom.featured.cover.src = featuredMedia.cover;
            dom.featured.title.textContent = featuredMedia.title;
            dom.featured.desc.textContent = featuredMedia.description;
            dom.featured.playBtn.addEventListener('click', () => showPlayPage(featuredMedia.id));

            dom.categorySelect.innerHTML = categories.map(c => `<option value="${c}">${c}</option>`).join('');

            updateSortButtons();
            renderMedia();
            setupEventListeners();
        });
    };

    const setupEventListeners = () => {
        dom.themeToggle.addEventListener('click', toggleTheme);
        dom.mobileMenuToggle.addEventListener('click', toggleMobileMenu);
        dom.mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => !dom.mobileMenu.classList.contains('-translate-x-full') && toggleMobileMenu());
        });

        dom.backBtn.addEventListener('click', showListPage);
        dom.player.detailsPlayBtn.addEventListener('click', () => {
            dom.player.videoContainer.scrollIntoView({ behavior: 'smooth', block: 'center' });
            if (artplayerInstance) artplayerInstance.play();
        });

        dom.categorySelect.addEventListener('change', (e) => {
            currentCategory = e.target.value;
            renderMedia();
        });

        dom.sortByDateBtn.addEventListener('click', () => {
            currentSort = 'date';
            updateSortButtons();
            renderMedia();
        });

        dom.sortByRatingBtn.addEventListener('click', () => {
            currentSort = 'rating';
            updateSortButtons();
            renderMedia();
        });

        [dom.searchInput, dom.mobileSearchInput].forEach(input => input.addEventListener('input', renderMedia));

        window.addEventListener('scroll', () => {
            if (dom.navbarContent) {
                dom.navbarContent.classList.toggle('shadow-xl', window.scrollY > 20);
                dom.navbarContent.classList.toggle('bg-light-surface/95', window.scrollY > 20);
                dom.navbarContent.classList.toggle('dark:bg-dark-surface/95', window.scrollY > 20);
            }
        });
    };

    init();
});
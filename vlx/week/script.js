document.addEventListener('DOMContentLoaded', () => {
    let art;

    const IMAGE_CONFIG = {
        posterBasePath: "./pic/",
        pageBackground: "web.webp"
    };

    const movies = [
        {
            id: 1,
            title: "新·驯龙高手",
            year: 2025,
            duration: "2h 6min",
            genres: ["剧情", "喜剧", "动作", "奇幻", "冒险"],
            rating: 8.4,
            votes: "120983",
            description: "影片讲述小嗝嗝（梅森·泰晤士 Mason Thames 饰）偶然间遭遇传说中的夜煞没牙仔，并由此与之建立深厚友谊，进而打破两大族群间的隔阂，携手寻求和平的故事。",
            cast: [
                { name: "梅森·泰晤士" },
                { name: "妮可·帕克" },
                { name: "杰拉德·巴特勒" },
                { name: "尼克·弗罗斯特" },
                { name: "加布里埃尔·豪尔" }
            ],
            posterImage: "post.webp",
            trailerUrl: "https://pan.gfwl.top/f/2X21FY/web.mkv",
            downloadUrl: "https://pan.gfwl.top/f/nB7ZUn/Dr2025.mkv",
            subtitleUrl: "srt/set.vtt"
        }
    ];

    const pageBackground = document.getElementById('page-background');
    const movieBackgroundImage = document.getElementById('movie-background-image');
    const movieTitle = document.getElementById('movie-title');
    const movieYear = document.getElementById('movie-year');
    const movieDuration = document.getElementById('movie-duration');
    const movieGenres = document.getElementById('movie-genres');
    const movieStars = document.getElementById('movie-stars');
    const movieRating = document.getElementById('movie-rating');
    const movieVotes = document.getElementById('movie-votes');
    const movieDescription = document.getElementById('movie-description');
    const movieCast = document.getElementById('movie-cast');
    const watchTrailerBtn = document.getElementById('watch-trailer-btn');
    const mainFooter = document.querySelector('main.content-wrapper > footer');

    const playerOverlay = document.getElementById('player-container-overlay');
    const closePlayerBtn = document.getElementById('close-player-btn');
    const playPageContent = document.querySelector('.play-page-content');
    const playMovieTitle = document.getElementById('play-movie-title');
    const playMovieDescription = document.getElementById('play-movie-description');

    function populateMovieData(movie) {
        const fullPosterUrl = `${IMAGE_CONFIG.posterBasePath}${movie.posterImage}`;

        movieBackgroundImage.style.backgroundImage = `url(${fullPosterUrl})`;
        movieTitle.textContent = movie.title;
        movieYear.textContent = movie.year;
        movieDuration.textContent = movie.duration;
        movieRating.textContent = `${movie.rating}/10`;
        movieVotes.textContent = movie.votes;
        movieDescription.textContent = movie.description;

        movieGenres.innerHTML = '';
        movie.genres.forEach(genre => {
            const genreTag = document.createElement('span');
            genreTag.className = 'genre-tag';
            genreTag.textContent = genre;
            movieGenres.appendChild(genreTag);
        });

        movieCast.innerHTML = '';
        movie.cast.forEach(actor => {
            const castNameTag = document.createElement('span');
            castNameTag.className = 'cast-name-tag';
            castNameTag.textContent = actor.name;
            movieCast.appendChild(castNameTag);
        });

        movieStars.innerHTML = '';
        const totalStars = 5;
        const filledStars = Math.round(movie.rating / 2);
        for (let i = 0; i < totalStars; i++) {
            const starSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            starSvg.setAttribute("class", i < filledStars ? "star star-filled" : "star star-empty");
            starSvg.setAttribute("viewBox", "0 0 24 24");
            starSvg.innerHTML = `<path d="M12 2l2.4 7.4h7.6l-6 4.6 2.3 7-6.3-4.6-6.3 4.6 2.3-7-6-4.6h7.6z"/>`;
            movieStars.appendChild(starSvg);
        }

        watchTrailerBtn.onclick = () => {
            if (art) {
                art.destroy();
            }

            playMovieTitle.textContent = movie.title;
            playMovieDescription.textContent = movie.description;

            const footerClone = mainFooter.cloneNode(true);
            playPageContent.appendChild(footerClone);

            art = new Artplayer({
                container: '#artplayer-container',
                url: movie.trailerUrl,
                poster: `${IMAGE_CONFIG.posterBasePath}${IMAGE_CONFIG.pageBackground}`,
                title: movie.title,
                theme: '#61a0ffff',
                playbackRate: true,
                hotkey: true,
                fullscreen: true,
                pip: true,
                autoplay: false,
                autoSize: false,
                aspectRatio: true,
                fullscreenWeb: true,
                autoOrientation: true,
                setting: true,
                subtitle: {
                    type: 'vtt',
                    style: {
                        color: '#ffffff',
                        fontSize: '23px',
                    },
                },
                settings: [
                    {
                        html: '字幕',
                        width: 250,
                        tooltip: '请选择',
                        selector: [
                            {
                                default: true,
                                html: '<span style="color:gray">中英双语</span>',
                                url: movie.subtitleUrl,
                            },
                        ],
                        onSelect: function (item, $dom, event) {
                            art.subtitle.url = item.url;
                            return item.html;
                        }
                    }
                ]
            });

            playerOverlay.classList.add('show');
        };
    }

    document.getElementById('download-trailer-btn').addEventListener('click', function () {
        const movie = movies[0];

        const startDownload = () => {
            const link = document.createElement('a');
            link.href = movie.downloadUrl;
            link.download = `${movie.title}.mkv`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        };

        Swal.fire({
            title: '<strong style="font-size: 1.6rem;">下载文件</strong>',
            html: `
            <div class="swal-text-content" style="text-align: center;">
                <div style="margin-bottom: 25px;">
                    <p style="margin-bottom: 15px; font-size: 1.15rem; color: #555;">您将要下载以下文件:</p>
                    <div style="font-size: 1.3rem; font-weight: 600; padding: 15px; background: rgba(67,97,238,0.05); border-radius: 14px;">
                        <strong>新·驯龙高手</strong>
                    </div>
                </div>

                <div style="display: flex; justify-content: space-around; margin-bottom: 25px; max-width: 500px; margin: 0 auto 25px;">
                    <div style="flex: 1; padding: 10px;">
                        <div class="label" style="font-size: 0.95rem; color: #666; margin-bottom: 8px;">大小</div>
                        <div class="value" style="font-size: 1.1rem; font-weight: 600;">11GB</div>
                    </div>
                    <div style="flex: 1; padding: 10px;">
                        <div class="label" style="font-size: 0.95rem; color: #666; margin-bottom: 8px;">格式</div>
                        <div class="value" style="font-size: 1.1rem; font-weight: 600;">MKV</div>
                    </div>
                    <div style="flex: 1; padding: 10px;">
                        <div class="label" style="font-size: 0.95rem; color: #666; margin-bottom: 8px;">分辨率</div>
                        <div class="value" style="font-size: 1.1rem; font-weight: 600;">4KHDR</div>
                    </div>
                </div>

                <div class="progress-placeholder" style="margin: 30px auto 25px; max-width: 450px;">
                    <div class="progress-bar"></div>
                </div>

                <p style="margin: 0 0 15px; font-size: 1rem; color: #666;">您的设备存储空间充足吗？</p>
                <p style="margin: 0; font-size: 1rem; color: #666;">建议在WiFi环境中下载</p>
            </div>
        `,
            icon: null,
            showCloseButton: true,
            showCancelButton: true,
            customClass: {
                popup: 'custom-swal-popup',
                confirmButton: 'custom-confirm-btn',
                cancelButton: 'custom-cancel-btn',
                actions: 'custom-actions-bar'
            },
            focusConfirm: false,
            confirmButtonText: '开始',
            cancelButtonText: '取消',
            width: '400px',
            padding: '1.5em',
            background: '#ffffff',
            backdrop: 'rgba(0,0,20,0.1)',
            didOpen: () => {
                const style = document.createElement('style');
                style.textContent = `
                .custom-swal-popup {
                    border-radius: 20px;
                    box-shadow: 0 15px 35px rgba(0, 0, 100, 0.15);
                    border: 1px solid rgba(67, 97, 238, 0.12);
                    overflow: hidden;
                    margin: 0 10px;
                }
                .swal-title {
                    padding: 0 0 12px !important;
                    font-size: 1.4rem !important;
                }
                .custom-actions-bar {
                    margin-top: 15px;
                }
                .swal2-close {
                    color: #888 !important;
                    width: 32px;
                    height: 32px;
                    border-radius: 50%;
                    transition: all 0.25s !important;
                    background: rgba(0,0,0,0.03);
                    font-size: 1rem;
                }
                .swal2-close:hover {
                    color: #4361ee !important;
                    background: rgba(67,97,238,0.07);
                    transform: rotate(90deg);
                }
                .swal2-close:focus {
                    box-shadow: 0 0 0 3px rgba(67,97,238,0.3) !important;
                }
                .progress-placeholder {
                    max-width: 450px;
                    margin: 30px auto 25px;
                }
                .progress-bar {
                    height: 8px;
                    background: #f0f5ff;
                    border-radius: 4px;
                    overflow: hidden;
                    position: relative;
                }
                .progress-bar::after {
                    content: '';
                    position: absolute;
                    height: 100%;
                    width: 65%;
                    background: linear-gradient(90deg, #4361ee, #7209b7);
                    border-radius: 4px;
                    animation: progress-animation 1.5s ease-in-out infinite;
                }
                @keyframes progress-animation {
                    0% { width: 5%; left: 0; }
                    50% { width: 80%; }
                    100% { width: 5%; left: 95%; }
                }

                @media (max-width: 480px) {
                    .swal-text-content {
                        padding: 0 10px;
                    }
                    .value {
                        font-size: 1rem !important;
                    }
                    .label {
                        font-size: 0.85rem !important;
                    }
                }
            `;
                document.head.appendChild(style);

                const closeButton = document.querySelector('.swal2-close');
                if (closeButton) {
                    setTimeout(() => {
                        closeButton.focus();
                    }, 50);
                }
            }
        }).then((result) => {
            if (result.isConfirmed) {
                startDownload();
                Swal.fire({
                    title: '<div style="font-size: 1.5rem;">下载开始</div>',
                    html: `
                    <div style="margin: 20px 0 30px;">
                        <div class="download-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                                    <path fill="currentColor" fill-opacity="0" stroke-dasharray="20" stroke-dashoffset="20" d="M12 4h2v6h2.5l-4.5 4.5M12 4h-2v6h-2.5l4.5 4.5">
                                        <animate fill="freeze" attributeName="fill-opacity" begin="0.7s" dur="0.5s" values="0;1" />
                                        <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.4s" values="20;0" />
                                    </path>
                                    <path stroke-dasharray="14" stroke-dashoffset="14" d="M6 19h12">
                                        <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.5s" dur="0.2s" values="14;0" />
                                    </path>
                                </g>
                            </svg>
                        </div>
                        <p style="margin-bottom: 10px; font-size: 1.1rem;">文件已添加到下载队列</p>
                        <p style="margin: 0; font-size: 1rem; color: #666;">文件将在后台开始下载</p>
                    </div>
                `,
                    showConfirmButton: false,
                    width: '400px',
                    padding: '1.5em',
                    timer: 1800,
                    timerProgressBar: true,
                    backdrop: 'rgba(255,255,255,0.8)',
                    customClass: {
                        popup: 'custom-swal-popup',
                        timerProgressBar: 'timer-progress-bar'
                    },
                    willClose: () => {
                        const toast = document.createElement('div');
                        toast.style.cssText = `
                        position: fixed;
                        bottom: 30px;
                        right: 30px;
                        background: rgba(67, 97, 238, 0.95);
                        color: white;
                        padding: 15px 25px;
                        border-radius: 12px;
                        font-weight: 500;
                        box-shadow: 0 8px 20px rgba(0, 0, 100, 0.2);
                        animation: toastIn 0.5s ease-out, toastOut 0.5s ease-out 2.5s;
                        z-index: 10000;
                        display: flex;
                        align-items: center;
                        gap: 12px;
                    `;

                        toast.innerHTML = `
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" style="flex-shrink:0;">
                            <path stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/>
                        </svg>
                        <span>下载任务已开始</span>
                    `;

                        document.body.appendChild(toast);

                        const style = document.createElement('style');
                        style.textContent = `
                        @keyframes toastIn {
                            0% { opacity: 0; transform: translateY(30px); }
                            100% { opacity: 1; transform: translateY(0); }
                        }
                        @keyframes toastOut {
                            0% { opacity: 1; transform: translateY(0); }
                            100% { opacity: 0; transform: translateY(30px); }
                        }
                    `;
                        document.head.appendChild(style);

                        setTimeout(() => {
                            toast.remove();
                            style.remove();
                        }, 3000);
                    }
                });
            }
        });
    });



    function closePlayer() {
        playerOverlay.classList.remove('show');
        if (art) {
            art.destroy();
            art = null;
        }
        const clonedFooter = playPageContent.querySelector('footer');
        if (clonedFooter) {
            playPageContent.removeChild(clonedFooter);
        }
    }

    closePlayerBtn.onclick = closePlayer;

    if (movies.length > 0) {
        const firstMovie = movies[0];
        pageBackground.style.backgroundImage = `url(${IMAGE_CONFIG.posterBasePath}${IMAGE_CONFIG.pageBackground})`;
        populateMovieData(firstMovie);
    }
});

/* @RFKONG 2025 VLX WEEK */
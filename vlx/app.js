// @RFKONG 2025 VLX,JS
const IMG_URL = "https://s.vlx.66ghz.com/share/685963c882f38";
const COVER_URL = "https://s.vlx.66ghz.com/share/68563eebb5a36";
const VIDEO_URL = "https://s.vlx.66ghz.com/share/68563f0de8be4";
const VIDEO2_URL = "https://pan.gfwl.top/f";

const movies = [
    {
        id: 1,
        title: "大风杀",
        poster: `${IMG_URL}/dfs.webp`,
        cover: `${COVER_URL}/dfsh.webp`,
        director: "张琪",
        actors: "白客, 辛柏青, 郎月婷, 耿乐, 孙宁, 更多...",
        genre: "剧情/悬疑/犯罪",
        year: "2025",
        runtime: "131分钟",
        country: "中国大陆",
        language: "汉语普通话/蒙语/藏语",
        releaseDate: "2025-05-01",
        description: "1995年，全面禁枪政策实施的前一年，弃镇忙崖的平静被打破。藏匿巨额宝藏的悍匪大哥北山（辛柏青 饰）越狱出逃，43名穷凶极恶的匪徒从四面八方齐聚于此，随大哥北山一道用武力封锁忙崖，整座小镇陷入了断油断通信的绝境！",
        videoUrl: `${VIDEO_URL}/dfs.mp4`,
        isFeatured: false,
        rating: 7.0
    },
    {
        id: 2,
        title: "猎金·游戏",
        poster: `${IMG_URL}/gold.webp`,
        cover: `${COVER_URL}/goldh.webp`,
        director: "邱礼涛",
        actors: "刘德华, 欧豪, 倪妮, 黄奕, 蒋梦婕, 更多...",
        genre: "剧情/犯罪",
        year: "2025",
        runtime: "129分钟",
        country: "中国大陆/中国香港",
        language: "汉语普通话",
        releaseDate: "2025-05-01",
        description: "金融大师张托德（刘德华 饰）堪称业界最强“预言家”，经他“点拨”的投资者全都赚了大钱！刚毕业的金融高材生高寒（欧豪 饰）阴错阳差与张托德成为师徒，高端客户、亿万大单随之涌现。随着张托德的旧识安娜（倪妮 饰）突然出现，股市狂潮再起，暴涨暴跌的背后是投资机遇还是资本游戏？深陷其中的股民是一夜暴富还是沦为“韭菜”？当金融市场被利用变成“赌场”，股市涨跌皆骗局，游戏规则该由谁来定？",
        videoUrl: `${VIDEO_URL}/GGold.mkv`,
        isFeatured: false,
        rating: 5.8
    },
    {
        id: 3,
        title: "好东西",
        poster: `${IMG_URL}/hdx.webp`,
        cover: `${COVER_URL}/hdxh.webp`,
        director: "邵艺辉",
        actors: "宋佳 / 钟楚曦 / 曾慕梅 / 章宇 / 赵又廷",
        genre: "剧情 / 爱情",
        year: "2024",
        runtime: "123分钟",
        country: "中国大陆",
        language: "汉语普通话",
        releaseDate: "2024-11-22",
        description: "爱逞强的单亲妈妈王铁梅带小孩王茉莉搬到新家，结识了所谓清醒恋爱脑的邻居小叶。两位性格迥异的女性，一个坚强，一个柔软，一个擅长给人当妈，一个擅长随时撒谎。",
        videoUrl: `${VIDEO_URL}/hdx.mp4`,
        isFeatured: false,
        rating: 8.9
    },
    {
        id: 4,
        title: "雄狮少年2",
        poster: `${IMG_URL}/xssn.webp`,
        cover: `${COVER_URL}/xssnh.webp`,
        director: "孙海鹏",
        actors: "李昕 / 郭皓 / 陈业雄 / 蔡欣然 / 王一郎",
        genre: "喜剧 / 动作 / 动画",
        year: "2024",
        runtime: "133分钟",
        country: "中国大陆",
        language: "汉语普通话",
        releaseDate: "2024-12-14",
        description: "来上海打工的无名之辈阿娟，为了赚钱给父亲治病，同意代表没落的传武拳馆参加‘上海格斗之夜’武术比赛，为此他必须战胜所有的高手、偏见和自己。",
        videoUrl: `${VIDEO_URL}/xssn2.mkv`,
        isFeatured: false,
        rating: 8.5
    },
    {
        id: 5,
        title: "危机航线",
        poster: `${IMG_URL}/wjhx.webp`,
        cover: `${COVER_URL}/wjhxh.webp`,
        director: "彭顺",
        actors: "刘德华 / 张子枫 / 屈楚萧 / 刘涛 / 郭晓东",
        genre: "动作 / 犯罪 / 灾难",
        year: "2024",
        runtime: "119分钟",
        country: "中国香港 / 中国大陆",
        language: "汉语普通话 / 英语",
        releaseDate: "2024-09-30",
        description: "一架五星级超豪华A380客机在国际首航途中遭遇暴力劫机，整架飞机被杀意笼罩。",
        videoUrl: `${VIDEO_URL}/wjhx.mp4`,
        isFeatured: false,
        rating: 5.5
    },
    {
        id: 6,
        title: "飞行员",
        poster: `${IMG_URL}/fxy.webp`,
        cover: `${COVER_URL}/fxyh.webp`,
        director: "金涵洁",
        actors: "曹政奭 / 申承浩 / 李周明 / 韩善伙 / 金太勋",
        genre: "喜剧",
        year: "2024",
        runtime: "110分钟",
        country: "韩国",
        language: "韩语",
        releaseDate: "2024-07-31",
        description: "一夜之间失业的韩正宇，用完美女装的身份“韩正美”成功再就业后发生的故事。",
        videoUrl: `${VIDEO_URL}/fxy.mp4`,
        isFeatured: false,
        rating: 6.4
    },
    {
        id: 7,
        title: "“骗骗”喜欢你",
        poster: `${IMG_URL}/ppxhn.webp`,
        cover: `${COVER_URL}/ppxhnh.webp`,
        director: "苏彪",
        actors: "金晨 / 孙阳 / 李雪琴 / 王皓 / 王耀庆 / 更多...",
        genre: "喜剧 / 爱情",
        year: "2024",
        runtime: "114分钟",
        country: "中国大陆",
        language: "汉语普通话",
        releaseDate: "2024-12-31",
        description: "打工女孩林晴朗（金晨 饰）被渣男张子骏（王皓 饰）欺骗，一夜之间甜蜜誓言变成201314元巨额债务。诈骗头子欧阳晖（孙阳 饰）的意外出现，给林晴朗的生活带来新的转机，两人联合“碰碰车车神”董晓惠（李雪琴 饰）、“骗场老炮”柏仕通（王耀庆 饰）设局开团，与张子骏斗智斗勇。",
        videoUrl: `${VIDEO_URL}/ppxhn.mkv`,
        isFeatured: false,
        rating: 6.4
    },
    {
        id: 8,
        title: "射雕英雄传：侠之大者",
        poster: `${IMG_URL}/xzdz.webp`,
        cover: `${COVER_URL}/xzdzh.webp`,
        director: "徐克",
        actors: "肖战 / 庄达菲 / 梁家辉 / 张文昕 / 巴雅尔图 / 更多...",
        genre: "武侠",
        year: "2025",
        runtime: "146分钟",
        country: "中国大陆",
        language: "汉语普通话 / 蒙语",
        releaseDate: "2025-01-29",
        description: "恩怨情仇的江湖，权势角力的战乱时代，郭靖（肖战 饰）童年离别家乡，逐渐炼就可改变局面和命运的庞大力量。虽受高人赏识和器重，得传天下绝世武功“九阴真经”和“降龙十八掌”，却惹来各方嫉忌，成为众矢之的。郭靖，不亢不卑，怀赤子之心，与黄蓉（庄达菲 饰）在铁骑箭雨和硝烟旌旗中，力挽狂澜，保护南宋边关。",
        videoUrl: `${VIDEO_URL}/xzdz.mkv`,
        isFeatured: false,
        rating: 5.2
    },
    {
        id: 9,
        title: "猫猫的奇幻漂流",
        poster: `${IMG_URL}/flow.webp`,
        cover: `${COVER_URL}/flowh.webp`,
        director: "金兹·兹巴洛迪斯",
        actors: "无对白（角色由配音演员呈现）",
        genre: "动画 / 奇幻 / 冒险",
        year: "2024",
        runtime: "85分钟",
        country: "拉脱维亚 / 法国 / 比利时",
        language: "无对白",
        releaseDate: "2025-02-28",
        description: "影片讲述洪水淹没世界，猫猫爬上了一艘帆船，由此开启了一段非凡的旅程。在旅途中，它先后邂逅了水豚、狗狗、狐猴、蛇鹫等动物。性格迥异的它们从彼此看不顺眼到并肩作战，共同面对波涛汹涌的大海和重重困难。",
        videoUrl: `${VIDEO_URL}/Flow.mp4`,
        isFeatured: false,
        rating: 8.4
    },
    {
        id: 10,
        title: "鹬",
        poster: `${IMG_URL}/piper.webp`,
        cover: `${COVER_URL}/piperh.webp`,
        director: "艾伦·巴利拉罗",
        actors: "无对白（角色由配音演员呈现）",
        genre: "动画 / 短片",
        year: "2016",
        runtime: "6分03秒",
        country: "美国",
        language: "无对白",
        releaseDate: "2016-06-17",
        description: "晨曦微茫的小岛上，海水轻柔俯视着纤尘不染的沙滩。伴随着浪花的涌动，浮游生物、海藻、海螺、扇贝等海洋生命搁浅在陆地之上，等待它们的则是饥肠辘辘的捕食者。",
        videoUrl: `${VIDEO_URL}/piper.mp4`,
        isFeatured: false,
        rating: 9.4
    },
    {
        id: 11,
        title: "人生开门红",
        poster: `${IMG_URL}/rskm.webp`,
        cover: `${COVER_URL}/rskmh.webp`,
        director: "易小星",
        actors: "常远 / 邓家佳 / 王耀庆 / 田雨 / 于洋 / 更多...",
        genre: "剧情 / 喜剧",
        year: "2025",
        runtime: "114分钟",
        country: "中国大陆",
        language: "汉语普通话",
        releaseDate: "2025-05-01",
        description: "一场意外的危机公关，让“烤肠哥”周大江（常远 饰）阴差阳错与顶流网红小海茉（邓家佳 饰）组成了“预制情侣”，被迫为霸道总裁秦天龙（王耀庆 饰）“顶包”的周大江，误打误撞成为了直播新宠。手忙脚乱地应对着流量规则，在成为新晋网红的路上笑料百出。",
        videoUrl: `${VIDEO_URL}/rskm.mp4`,
        isFeatured: false,
        rating: 6.3
    },
    {
        id: 12,
        title: "水饺皇后",
        poster: `${IMG_URL}/sjhh.webp`,
        cover: `${COVER_URL}/sjhhh.webp`,
        director: "刘伟强",
        actors: "马丽 / 惠英红 / 朱亚文 / 王祖蓝 / 薛凯琪 / 更多...",
        genre: "剧情 / 传记",
        year: "2025",
        runtime: "119分钟",
        country: "中国大陆",
        language: "汉语普通话 / 粤语",
        releaseDate: "2025-04-30",
        description: "上世纪七十年代，青岛姑娘臧健和（马丽 饰）带着两个女儿被迫流落他乡。为了维持生计抚养女儿，臧姑娘白天洗碗，晚上擦车...",
        videoUrl: `${VIDEO_URL}/sjhh.mp4`,
        isFeatured: false,
        rating: 6.4
    },
    {
        "id": 13,
        "title": "国家元首",
        "poster": `${IMG_URL}/gjys.webp`,
        "cover": `${COVER_URL}/gjysh.webp`,
        "director": "伊利亚·奈舒勒",
        "actors": "伊德瑞斯·艾尔巴 / 约翰·塞纳 / 佩丽冉卡·曹帕拉 / 帕迪·康斯戴恩 / 卡拉·古奇诺 / 更多...",
        "genre": "喜剧 / 动作 / 惊悚",
        "year": "2025",
        "runtime": "116分钟",
        "country": "美国",
        "language": "英语 / 白俄罗斯语 / 波兰语",
        "releaseDate": "2025-07-02",
        "description": "英国首相（伊德里斯·艾尔巴 饰）和美国总统（约翰·塞纳 饰）的公开争执让两国联盟岌岌可危。然而，当他们成为某个强大势力的袭击目标后，这对冤家不得不放下分歧，展开一场横跨多国的疯狂行动。",
        "videoUrl": `${VIDEO2_URL}/OYJwup/Heads.mkv`,
        "isFeatured": false,
        "rating": 6.6
    },
    {
        "id": 14,
        "title": "星际宝贝史迪奇",
        "poster": `${IMG_URL}/xjbb.webp`,
        "cover": `${COVER_URL}/xjbbh.webp`,
        "director": "迪恩·弗雷斯彻-坎普",
        "actors": "玛雅·凯洛哈 / 克里斯·桑德斯 / 西德尼·阿古顿 / 比利·马格努森 / 考特尼·万斯 / 更多...",
        "genre": "喜剧 / 动作 / 科幻 / 奇幻 / 冒险",
        "year": "2025",
        "runtime": "108分钟",
        "country": "美国",
        "language": "英语 / 夏威夷语",
        "releaseDate": "2025-05-23",
        "description": "来自外星的“实验品626”史迪奇在一场太空追捕中意外降落在夏威夷海岛，与小女孩莉萝相遇，为了躲避追捕，史迪奇伪装成小狗进入了莉萝的生活。",
        "videoUrl": `${VIDEO2_URL}/DKRaFk/Lilo.mp4`,
        "isFeatured": true,
        "rating": 7.2
    },
    {
        "id": 15,
        "title": "新·驯龙高手",
        "poster": `${IMG_URL}/xlgs.webp`,
        "cover": `${COVER_URL}/xlgsh.webp`,
        "director": "迪恩·戴布洛伊",
        "actors": "梅森·泰晤士 / 妮可·帕克 / 杰拉德·巴特勒 / 尼克·弗罗斯特 / 加布里埃尔·豪尔 / 更多...",
        "genre": "剧情 / 喜剧 / 动作 / 奇幻 / 冒险",
        "year": "2025",
        "runtime": "126分钟",
        "country": "美国",
        "language": "英语",
        "releaseDate": "2025-06-13",
        "description": "影片讲述小嗝嗝偶然间遭遇传说中的夜煞没牙仔，并由此与之建立深厚友谊，进而打破两大族群间的隔阂，携手寻求和平的故事。",
        "videoUrl": `${VIDEO2_URL}/nB7ZUn/Dragon.mkv`,
        "isFeatured": false,
        "rating": 8.4
    },
    {
        "id": 16,
        "title": "砖墙谜攻",
        "poster": `${IMG_URL}/brick.webp`,
        "cover": `${COVER_URL}/brickh.webp`,
        "director": "菲利普·科赫",
        "actors": "马提亚斯·施维赫夫 / 露比·欧·菲 / 弗雷德里克·劳 / 萨尔伯·李·威廉姆斯 / 穆拉桑·木苏鲁 / 更多...",
        "genre": "剧情 / 科幻 / 悬疑 / 惊悚",
        "year": "2025",
        "runtime": "99分钟",
        "country": "德国",
        "language": "德语 / 英语",
        "releaseDate": "2025-07-10",
        "description": "蒂姆和奥利维娅醒来后发现自己被困在公寓里，四周突然出现了一道坚不可摧、未来感十足的墙……而且他们并不孤单，整栋大楼和所有住户似乎都被封闭了起来。",
        "videoUrl": `${VIDEO2_URL}/ebJQhR/Brick.mkv`,
        "isFeatured": false,
        "rating": 5.5
    },
    {
        "id": 17,
        "title": "梅根2.0",
        "poster": `${IMG_URL}/mg2.webp`,
        "cover": `${COVER_URL}/mg2h.jpg`,
        "director": "热拉尔·约翰斯通",
        "actors": "艾莉森·威廉姆斯 / 维奥莱特·麦格劳 / 艾米·唐纳德 / 珍娜·戴维斯 / 布莱恩·乔丹·阿尔瓦雷斯 / 更多...",
        "genre": "动作 / 科幻 / 惊悚 / 恐怖",
        "year": "2025",
        "runtime": "120分钟",
        "country": "美国 / 新西兰 / 加拿大",
        "language": "英语 / 土耳其语",
        "releaseDate": "2025-06-27",
        "description": "第二部仍以女孩卡迪和她的姨妈珍玛为主线，她们遭到了下一代机器人“阿米莉亚”的疯狂攻击，而本已沦为智能语音助手的梅根，似乎是帮助她们对抗阿米莉亚的绝佳选择。",
        "videoUrl": `${VIDEO2_URL}/2XaKuY/MG2.mp4`,
        "isFeatured": false,
        "rating": 6.7
    },
    {
        "id": 18,
        "title": "我的世界大电影",
        "poster": `${IMG_URL}/wdsj.webp`,
        "cover": `${COVER_URL}/wdsjh.webp`,
        "director": "杰瑞德·赫斯",
        "actors": "杰森·莫玛 / 杰克·布莱克 / 塞巴斯蒂安·尤金·汉森 / 艾玛·迈尔斯 / 丹妮尔·布鲁克斯 / 更多...",
        "genre": "喜剧 / 动作 / 家庭 / 奇幻 / 冒险",
        "year": "2025",
        "runtime": "101分钟",
        "country": "美国 / 瑞典",
        "language": "英语",
        "releaseDate": "2025-04-04",
        "description": "影片讲述四个“异类”——“垃圾侠”盖瑞特·加里森（杰森·莫玛 饰）、亨利、娜塔莉和道恩——正为生活中的琐事苦恼时，突然被拉入一个神秘的传送门，进入了“主世界”：一个依赖想象力的奇异方块乐园。",
        "videoUrl": `${VIDEO2_URL}/N2BNhd/world.mkv`,
        "isFeatured": false,
        "rating": 5.5
    }
]
const categories = ["全部", "科幻", "剧情", "冒险", "动画", "灾难", "惊悚"];

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
        movieList: document.getElementById('movie-list'),
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
            backdrop: document.getElementById('play-page-backdrop'),
            videoContainer: document.getElementById('video-player-container'),
            video: document.getElementById('movie-player'),
            poster: document.getElementById('movie-poster'),
            title: document.getElementById('play-movie-title'),
            meta: document.getElementById('movie-meta'),
            detailsPlayBtn: document.getElementById('details-play-btn'),
            description: document.getElementById('movie-description'),
            details: document.getElementById('movie-details'),
        },
    };
    let currentSort = 'date';
    let currentCategory = '全部';
    const applyTheme = (theme) => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
            dom.themeIcon.className = 'fa fa-sun-o text-yellow-400'
        } else {
            document.documentElement.classList.remove('dark');
            dom.themeIcon.className = 'fa fa-moon-o text-gray-600'
        }
    };
    const toggleTheme = () => {
        const newTheme = document.documentElement.classList.contains('dark') ? 'light' : 'dark';
        localStorage.setItem('theme', newTheme);
        applyTheme(newTheme)
    };
    const toggleMobileMenu = () => {
        const isMenuOpen = !dom.mobileMenu.classList.contains('-translate-x-full');
        if (isMenuOpen) {
            dom.mobileMenu.classList.add('-translate-x-full');
            dom.mobileMenuIcon.classList.remove('fa-times');
            dom.mobileMenuIcon.classList.add('fa-bars')
        } else {
            dom.mobileMenu.classList.remove('-translate-x-full');
            dom.mobileMenuIcon.classList.remove('fa-bars');
            dom.mobileMenuIcon.classList.add('fa-times')
        }
    };
    const createMovieCard = (movie) => {
        const card = document.createElement('div');
        card.className = 'group fade-in card-hover transition-transform-shadow';
        card.innerHTML = `<div class="relative aspect-[2/3] rounded-xl overflow-hidden cursor-pointer"><img src="${movie.poster}"alt="${movie.title}"class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"><div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div><div class="absolute bottom-0 left-0 p-3 text-white"><h3 class="font-semibold truncate">${movie.title}</h3><p class="text-xs text-gray-300">${movie.year}</p></div><div class="absolute top-2 right-2 bg-primary/80 text-white text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1"><i class="fa fa-star"></i><span>${movie.rating}</span></div></div>`;
        card.addEventListener('click', () => showPlayPage(movie.id));
        return card
    };
    const renderMovies = () => {
        let filtered = currentCategory === '全部' ? [...movies] : movies.filter(m => m.genre.includes(currentCategory));
        const searchTerm = dom.searchInput.value.toLowerCase() || dom.mobileSearchInput.value.toLowerCase();
        if (searchTerm) {
            filtered = filtered.filter(m => m.title.toLowerCase().includes(searchTerm) || m.actors.toLowerCase().includes(searchTerm))
        }
        if (currentSort === 'date') {
            filtered.sort((a, b) => new Date(b.releaseDate) - new Date(a.releaseDate))
        } else if (currentSort === 'rating') {
            filtered.sort((a, b) => b.rating - a.rating)
        }
        dom.movieList.innerHTML = '';
        if (filtered.length === 0) {
            dom.movieList.innerHTML = `<p class="col-span-full text-center text-light-text-secondary dark:text-dark-text-secondary">没有找到匹配的电影。</p>`
        } else {
            filtered.forEach(movie => dom.movieList.appendChild(createMovieCard(movie)))
        }
    };
    const updateSortButtons = () => {
        [dom.sortByDateBtn, dom.sortByRatingBtn].forEach(btn => {
            btn.classList.remove('bg-primary', 'text-white');
            btn.classList.add('bg-light-surface', 'dark:bg-dark-surface')
        });
        const activeBtn = currentSort === 'date' ? dom.sortByDateBtn : dom.sortByRatingBtn;
        activeBtn.classList.add('bg-primary', 'text-white');
        activeBtn.classList.remove('bg-light-surface', 'dark:bg-dark-surface')
    };
    const showPlayPage = (movieId) => {
        const movie = movies.find(m => m.id === movieId);
        if (!movie) return;
        dom.player.video.poster = movie.cover;
        dom.player.video.src = movie.videoUrl;
        dom.player.poster.src = movie.poster;
        dom.player.title.textContent = movie.title;
        dom.player.description.textContent = movie.description;
        dom.player.meta.innerHTML = `<span class="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">${movie.genre.split('/')[0]}</span><span class="bg-gray-500/10 text-light-text-secondary dark:text-dark-text-secondary px-3 py-1 rounded-full text-sm font-medium">${movie.year}</span><span class="bg-gray-500/10 text-light-text-secondary dark:text-dark-text-secondary px-3 py-1 rounded-full text-sm font-medium">${movie.runtime}</span><span class="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1"><i class="fa fa-star"></i>${movie.rating}</span>`;
        dom.player.details.innerHTML = `<p><strong class="font-semibold text-light-text dark:text-dark-text">导演:</strong><span class="text-light-text-secondary dark:text-dark-text-secondary">${movie.director}</span></p><p><strong class="font-semibold text-light-text dark:text-dark-text">主演:</strong><span class="text-light-text-secondary dark:text-dark-text-secondary">${movie.actors}</span></p><p><strong class="font-semibold text-light-text dark:text-dark-text">地区:</strong><span class="text-light-text-secondary dark:text-dark-text-secondary">${movie.country}</span></p><p><strong class="font-semibold text-light-text dark:text-dark-text">语言:</strong><span class="text-light-text-secondary dark:text-dark-text-secondary">${movie.language}</span></p>`;
        dom.player.backdrop.style.backgroundImage = `url(${movie.cover})`;
        dom.listPage.style.display = 'none';
        dom.playPage.style.display = 'block';
        window.scrollTo(0, 0)
    };
    const showListPage = () => {
        dom.player.video.pause();
        dom.playPage.style.display = 'none';
        dom.listPage.style.display = 'block';
        window.scrollTo(0, 0)
    };
    const init = () => {
        setTimeout(() => {
            dom.loader.style.opacity = '0';
            setTimeout(() => dom.loader.style.display = 'none', 500)
        }, 800);
        const savedTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
        applyTheme(savedTheme);
        const featuredMovie = movies.find(m => m.isFeatured) || movies[0];
        dom.featured.cover.src = featuredMovie.cover;
        dom.featured.title.textContent = featuredMovie.title;
        dom.featured.desc.textContent = featuredMovie.description;
        dom.featured.playBtn.addEventListener('click', () => showPlayPage(featuredMovie.id));
        dom.categorySelect.innerHTML = categories.map(c => `<option value="${c}">${c}</option>`).join('');
        updateSortButtons();
        renderMovies();
        setupEventListeners()
    };
    const setupEventListeners = () => {
        dom.themeToggle.addEventListener('click', toggleTheme);
        dom.mobileMenuToggle.addEventListener('click', toggleMobileMenu);
        dom.mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                if (!dom.mobileMenu.classList.contains('-translate-x-full')) {
                    toggleMobileMenu()
                }
            })
        });
        dom.backBtn.addEventListener('click', showListPage);
        dom.player.detailsPlayBtn.addEventListener('click', () => {
            dom.player.videoContainer.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            });
            dom.player.video.play()
        });
        dom.categorySelect.addEventListener('change', (e) => {
            currentCategory = e.target.value;
            renderMovies()
        });
        dom.sortByDateBtn.addEventListener('click', () => {
            currentSort = 'date';
            updateSortButtons();
            renderMovies()
        });
        dom.sortByRatingBtn.addEventListener('click', () => {
            currentSort = 'rating';
            updateSortButtons();
            renderMovies()
        });
        [dom.searchInput, dom.mobileSearchInput].forEach(input => {
            input.addEventListener('input', renderMovies)
        });
        window.addEventListener('scroll', () => {
            if (dom.navbarContent) {
                if (window.scrollY > 20) {
                    dom.navbarContent.classList.add('shadow-xl', 'bg-light-surface/95', 'dark:bg-dark-surface/95')
                } else {
                    dom.navbarContent.classList.remove('shadow-xl', 'bg-light-surface/95', 'dark:bg-dark-surface/95')
                }
            }
        })
    };
    init()
});
// @RFKONG 2025 VLX,JS
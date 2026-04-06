// 阅读书目 & 电影清单数据 / Books & Movies Data

/* ============================================================
   书单 (19 本)
   ============================================================ */
var booksData = [
  // ── 已读 ─────────────────────────────────────────────────────
  {
    id: 'b1', title: '长安的荔枝', titleEn: "Lychees of Chang'an",
    author: '马伯庸', authorEn: 'Ma Boyong',
    status: 'read', cover: null, color: '#c9846a',
    genre: '历史小说', genreEn: 'Historical Fiction'
  },
  {
    id: 'b2', title: '被讨厌的勇气', titleEn: 'The Courage to Be Disliked',
    author: '岸见一郎 / 古贺史健', authorEn: 'Ichiro Kishimi & Fumitake Koga',
    status: 'read', cover: null, color: '#4a90d9',
    genre: '心理哲学', genreEn: 'Psychology & Philosophy'
  },
  {
    id: 'b3', title: '认知觉醒', titleEn: 'Cognitive Awakening',
    author: '周岭', authorEn: 'Zhou Ling',
    status: 'read', cover: null, color: '#d4b83a',
    genre: '自我成长', genreEn: 'Self-Growth'
  },
  {
    id: 'b4', title: '趁着年轻，我偏要勉强', titleEn: 'Young and Determined',
    author: '詹青云', authorEn: 'Zhan Qingyun',
    status: 'read', cover: null, color: '#e88a5a',
    genre: '散文随笔', genreEn: 'Essays',
    quotes: [
      { id: 'q1', text: '爱是一个人闯荡世界的底气，是父母给我的最珍贵的东西。' },
      { id: 'q2', text: '旅行和生活都不是为了去某个地方，而是为了尽可能高兴又丰富地度过闲暇时光。' }
    ]
  },
  {
    id: 'b5', title: '绝密手稿', titleEn: 'The Secret Scripture',
    author: '巴斯蒂安·巴里', authorEn: 'Sebastian Barry',
    status: 'read', cover: null, color: '#6b8e74',
    genre: '文学小说', genreEn: 'Literary Fiction'
  },
  {
    id: 'b6', title: '老人与海', titleEn: 'The Old Man and the Sea',
    author: '海明威', authorEn: 'Ernest Hemingway',
    status: 'read', cover: null, color: '#5a7fa3',
    genre: '经典文学', genreEn: 'Classic Literature'
  },
  {
    id: 'b7', title: '八十天环游地球', titleEn: 'Around the World in Eighty Days',
    author: '儒勒·凡尔纳', authorEn: 'Jules Verne',
    status: 'read', cover: null, color: '#c4a030',
    genre: '冒险小说', genreEn: 'Adventure Fiction'
  },
  {
    id: 'b8', title: '小妇人', titleEn: 'Little Women',
    author: '路易莎·梅·奥尔科特', authorEn: 'Louisa May Alcott',
    status: 'read', cover: null, color: '#c47ba3',
    genre: '经典文学', genreEn: 'Classic Literature'
  },
  {
    id: 'b9', title: '呼啸山庄', titleEn: 'Wuthering Heights',
    author: '艾米莉·勃朗特', authorEn: 'Emily Brontë',
    status: 'read', cover: null, color: '#7a6b8e',
    genre: '经典文学', genreEn: 'Classic Literature'
  },
  {
    id: 'b10', title: '傲慢与偏见', titleEn: 'Pride and Prejudice',
    author: '简·奥斯汀', authorEn: 'Jane Austen',
    status: 'read', cover: null, color: '#8eafa3',
    genre: '经典文学', genreEn: 'Classic Literature'
  },
  {
    id: 'b11', title: '小王子', titleEn: 'The Little Prince',
    author: '圣-埃克苏佩里', authorEn: 'Antoine de Saint-Exupéry',
    status: 'read', cover: null, color: '#4db89e',
    genre: '寓言经典', genreEn: 'Fable Classic'
  },
  {
    id: 'b12', title: '第一炉香', titleEn: 'The First Incense Burner',
    author: '张爱玲', authorEn: 'Eileen Chang',
    status: 'read', cover: null, color: '#c4704a',
    genre: '现代文学', genreEn: 'Modern Fiction'
  },
  {
    id: 'b13', title: '半生缘', titleEn: 'Eighteen Springs',
    author: '张爱玲', authorEn: 'Eileen Chang',
    status: 'read', cover: null, color: '#a87060',
    genre: '现代文学', genreEn: 'Modern Fiction'
  },
  {
    id: 'b14', title: '一个人的倾城：张爱玲传', titleEn: 'A Solitary City: The Life of Eileen Chang',
    author: '墨倾城', authorEn: 'Mo Qingcheng',
    status: 'read', cover: null, color: '#b8a080',
    genre: '传记', genreEn: 'Biography'
  },
  // ── 在读 ─────────────────────────────────────────────────────
  {
    id: 'b15', title: '自卑与超越', titleEn: 'What Life Could Mean to You',
    author: '阿尔弗雷德·阿德勒', authorEn: 'Alfred Adler',
    status: 'read', cover: null, color: '#5a8fc4',
    genre: '心理学', genreEn: 'Psychology',
    quotes: [
      { id: 'q1', text: '如果他能成为所有人的好朋友，并以美满的婚姻和有用的工作对他们有所贡献，他就不会觉得自己不如别人或被别人所击败。他会觉得这个世界是友善的地方，而能泰然处之，应付困难时也能得心应手。他会觉得，这个世界是我的世界，我必须积极进取，不能退缩观望。他非常清楚，现在只是人类历史中的一段时间，它只是整个人类发展过程——过去、现在、未来的一部分。他同时会感到，这个时代正是他能够完成其创造工作，并对人类发展贡献一己之力的时代。这个世界真的有许多邪恶、困难、偏见和悲哀，但它是我们自己的世界，它的优点和缺点也是我们自己的，我们必须加以改造和改进的世界。我们可以断言，如果每个人都以正确的途径担负起他的工作，他在改进世界的事业中便已经尽了责任。' }
    ]
  },
  {
    id: 'b16', title: '百年孤独', titleEn: 'One Hundred Years of Solitude',
    author: '加西亚·马尔克斯', authorEn: 'Gabriel García Márquez',
    status: 'reading', cover: null, color: '#7a9e6b',
    genre: '魔幻现实主义', genreEn: 'Magical Realism',
    quotes: [
      /* 待补充摘抄 */
    ]
  },
  {
    id: 'b17', title: '素书', titleEn: 'Su Shu (The Plain Book)',
    author: '黄石公', authorEn: 'Huang Shigong',
    status: 'reading', cover: null, color: '#c4a44a',
    genre: '古典哲学', genreEn: 'Classical Philosophy'
  },
  {
    id: 'b18', title: '曾国藩家书', titleEn: "Zeng Guofan's Family Letters",
    author: '曾国藩', authorEn: 'Zeng Guofan',
    status: 'reading', cover: null, color: '#8c7060',
    genre: '历史人文', genreEn: 'History & Culture'
  },
  {
    id: 'b19', title: '孙子兵法', titleEn: 'The Art of War',
    author: '孙武', authorEn: 'Sun Tzu',
    status: 'reading', cover: null, color: '#6b7a5a',
    genre: '古典哲学', genreEn: 'Classical Philosophy'
  }
];

/* ============================================================
   电影清单 (30 部)
   ============================================================ */
var moviesData = [
  { id: 'm1',  title: '泰坦尼克号',     titleEn: 'Titanic',                      year: 1997, cover: null, color: '#4a7fa3' },
  { id: 'm2',  title: '傲慢与偏见',     titleEn: 'Pride & Prejudice',            year: 2005, cover: null, color: '#8eafa3' },
  { id: 'm3',  title: '肖申克的救赎',   titleEn: 'The Shawshank Redemption',     year: 1994, cover: null, color: '#7a6b5a' },
  { id: 'm4',  title: '寻梦环游记',     titleEn: 'Coco',                         year: 2017, cover: null, color: '#d4703a' },
  { id: 'm5',  title: '心灵奇旅',       titleEn: 'Soul',                         year: 2020, cover: null, color: '#4a8fc4' },
  { id: 'm6',  title: '疯狂动物城',     titleEn: 'Zootopia',                     year: 2016, cover: null, color: '#e88a3a' },
  { id: 'm7',  title: '头脑特工队',     titleEn: 'Inside Out',                   year: 2015, cover: null, color: '#e8c040' },
  { id: 'm8',  title: '小妇人',         titleEn: 'Little Women',                 year: 2019, cover: null, color: '#c47ba3' },
  { id: 'm9',  title: '流浪地球',       titleEn: 'The Wandering Earth',          year: 2019, cover: null, color: '#3a7aa3' },
  { id: 'm10', title: '怦然心动',       titleEn: 'Flipped',                      year: 2010, cover: null, color: '#e8a04a' },
  { id: 'm11', title: '阿甘正传',       titleEn: 'Forrest Gump',                 year: 1994, cover: null, color: '#6a9e6a' },
  { id: 'm12', title: '海上钢琴师',     titleEn: 'The Legend of 1900',           year: 1998, cover: null, color: '#5a7a9e' },
  { id: 'm13', title: '霸王别姬',       titleEn: 'Farewell My Concubine',        year: 1993, cover: null, color: '#8e3a3a' },
  { id: 'm14', title: '千与千寻',       titleEn: 'Spirited Away',                year: 2001, cover: null, color: '#4ab89e' },
  { id: 'm15', title: '绿皮书',         titleEn: 'Green Book',                   year: 2018, cover: null, color: '#5a8e5a' },
  { id: 'm16', title: '心灵捕手',       titleEn: 'Good Will Hunting',            year: 1997, cover: null, color: '#7a8ea3' },
  { id: 'm17', title: '幽灵公主',       titleEn: 'Princess Mononoke',            year: 1997, cover: null, color: '#6a8e6a' },
  { id: 'm18', title: '爱在黎明破晓前', titleEn: 'Before Sunrise',               year: 1995, cover: null, color: '#c4a06a' },
  { id: 'm19', title: '花样年华',       titleEn: 'In the Mood for Love',         year: 2000, cover: null, color: '#9e3a3a' },
  { id: 'm20', title: '你的名字',       titleEn: 'Your Name',                    year: 2016, cover: null, color: '#4a6aa3' },
  { id: 'm21', title: '美丽心灵',       titleEn: 'A Beautiful Mind',             year: 2001, cover: null, color: '#6a7a9e' },
  { id: 'm22', title: '放牛班的春天',   titleEn: 'The Chorus',                   year: 2004, cover: null, color: '#7aae7a' },
  { id: 'm23', title: '忠犬八公的故事', titleEn: 'Hachi: A Dog\'s Tale',         year: 2009, cover: null, color: '#c4a07a' },
  { id: 'm24', title: '哈尔的移动城堡', titleEn: "Howl's Moving Castle",         year: 2004, cover: null, color: '#c47a4a' },
  { id: 'm25', title: '闻香识女人',     titleEn: 'Scent of a Woman',             year: 1992, cover: null, color: '#8e6a4a' },
  { id: 'm26', title: '大鱼海棠',       titleEn: 'Big Fish & Begonia',           year: 2016, cover: null, color: '#3a8ea3' },
  { id: 'm27', title: '疯狂动物城2',    titleEn: 'Zootopia+',                    year: 2022, cover: null, color: '#e89a4a' },
  { id: 'm28', title: '头脑特工队2',    titleEn: 'Inside Out 2',                 year: 2024, cover: null, color: '#e8b040' },
  { id: 'm29', title: '罗马假日',       titleEn: 'Roman Holiday',                year: 1953, cover: null, color: '#b8a06a' },
  { id: 'm30', title: '机器人总动员',   titleEn: 'WALL·E',                       year: 2008, cover: null, color: '#6a9eb8' }
];

/* ── 工具函数 ── */
function getBooks(status) {
  if (status) return booksData.filter(function (b) { return b.status === status; });
  return booksData;
}
function getMovies() { return moviesData; }

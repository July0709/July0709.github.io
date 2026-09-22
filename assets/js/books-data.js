// 阅读书目 & 电影清单数据 / Books & Movies Data

/* ============================================================
   书单
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
      { id: 'q1',  text: '爱是一个人闯荡世界的底气，是父母给我的最珍贵的东西。' },
      { id: 'q2',  text: '旅行和生活都不是为了去某个地方，而是为了尽可能高兴又丰富地度过闲暇时光。' },
      { id: 'q3',  text: '我们小时候大概都是先喜欢读李煜的词，天上人间，梦里不知身是客这样的句子好背，上口又朦朦胧胧，一些仿佛能懂的词语，一种仿佛能理解的伤感，喜欢上是容易的。到后来快上初中，算是情窦初开，就会觉得秦少游晏几道不是古之伤心人，是古之同命人了。从别后忆相逢，几回魂梦与君同。我抄在情书里，至少 5 次自己写出来，自伤自怜的次数只有更多。到后来上高中了，又自然觉得自己成熟了，觉得他们小气，多愁善感，矫情无力，自然转去喜欢了苏东坡，大家一起爱过，一蓑烟雨任平生，自己私心偏爱，长恨此生非我有，整个人都莫名其妙地跟着变得豪迈了。' },
      { id: 'q4',  text: '略翻书数则，便不愧三餐。' },
      { id: 'q5',  text: '大概作者心里很明白，却不肯写得够清楚，或者他太明白，理解不了我们这些不明白的人心痒难耐的痛苦。看过以后留下的困惑比收到的解答还多。' },
      { id: 'q6',  text: '孟子有句著名精彩的话说，勇气自反而不缩，虽恶宽博，吾不喘焉。自反而缩，虽千万人，吾往矣。勇气真的不是靠厚脸皮，而是靠扪心自问，你是不是认真思考过了，仍然相信道义在我这里。' },
      { id: 'q7',  text: '当时以为有的底气，后来发现反是无知，给的勇气当然格外让人难堪。有的难堪来自违心的选择，反而可以反省，千善补过，下不为例。有的则来自于知识经验的局限，是真的水平有限，只能把它当做过往接受，提醒自己永远不要自居正确。' },
      { id: 'q8',  text: '超越于胜负之外，能公正面对场上得失，非有强大的自信不能做到，不为他人的评价所动，内心是倨傲的，所以外在反而能云淡风轻。不过这种内心的倨傲，大约有不同的层次，有的是热血盲目的，有的是冷静坦荡的。孟子说他 40 岁不动于心，是在养足浩然之气后了。' },
      { id: 'q9',  text: '我一直觉得人有两种孤独，我们一直为之困扰的是情感的孤独，我们需要爱与被爱。可是人还有一种智识上的孤独，我们需要跟人真正的聊天，聊理想内心的真诚思考，而不是消耗情绪的客套。' },
      { id: 'q10', text: '真正决定一个人是否有丰富生命体验的，不是物理意义的移动，而是你是否是一个开放的人，愿意平等地了解和理解不同的文化习俗、信仰偏好。' },
      { id: 'q11', text: '我们想要靠近自然，靠近野性，可是越想靠近，其实越需要文明社会中极致的保护与最专业的预警、补给、救援。' },
      { id: 'q12', text: '因为我本来不要求它是一切，就不存在高估。' },
      { id: 'q13', text: '一路写来，那些事，读书，考试，辩论，比赛，每每都会自问图什么，只有想清楚了图什么，才会知道该怎么去做。可终于也有点什么事，你问，你图什么呢？你的回答是不图什么，就想做一件有趣快活的事，不好吗？' },
      { id: 'q14', text: '一路上总想要不断得到，似乎又是为了得到一些和得到完全无关的东西。' },
      { id: 'q15', text: '但在这长长的旅途里，人要每一天每一天地过，尽力享受，尽力学习，尽力玩爱和快乐。' },
      { id: 'q16', text: '千山万水，随意行去，永远不要低估自己可以走到的地方。趁着年轻，我偏要勉强。' },
      { id: 'q17', text: '三思，谋定而后言。' },
      { id: 'q18', text: '支教的人收获最多的，是对自己的反思，原来世上有那么多事，并非理所当然。我后来学了政治，读了罗尔斯的《无知之幕》，还会想起那个夏天。' },
      { id: 'q19', text: '境界有大小，不以是而分优劣。——王国维' },
      { id: 'q20', text: '因为相知，所以懂得；因为懂得，所以慈悲。' },
      { id: 'q21', text: '能看得下去的书越来越少。——董桥' },
      { id: 'q22', text: '每个人的生活里都有那么几个痴迷而不计较付出与所得的热爱之物吧？清醒地看到自己的，就不容易对别人的指指点点。' },
      { id: 'q23', text: '有的人一直没有被时间和世界改变，他们永远光明、坦荡；有的爱情，一直没有被世人改变，永远真实、骄傲；有的风范，给我平凡的人生画过底线。' },
      { id: 'q24', text: '君子有所不为。也许，多少个梦过后，仅此而已。' },
      { id: 'q25', text: '先生之著述，或有时而不章；先生之学说，或有时而可商。惟此独立之精神，自由之思想，历千万祀，与天壤而同久，共三光而永光。' },
      { id: 'q26', text: '所以在人生的关键时候，我只能打开《德川家康》《儒林外史》《追忆似水年华》。' },
      { id: 'q27', text: '一切偏执或放纵，最终都会变成枷锁，毫无意义。唯有抱守一刻也不能停歇的孤独，才能让人平静、安宁。' },
      { id: 'q28', text: '但，人在许多时候，的确是靠意气而不是理性，推着往前走，做到了许多原本不可能做到的事。' },
      { id: 'q29', text: '一个人不太容易妥协，伤害的时候，也就比较能学会跟人从容地相处。带着善意，更能发现和感受对方的善意，而不再轻易踏入敌意和伤害的恶性循环。' },
      { id: 'q30', text: '我体验过了，我倾尽全力地奋斗过了，我对自己算是有交代了，而我那么努力，是为了让自己有机会选择、保留主动权，活得更自由。' },
      { id: 'q31', text: '终究这一切，是我们自己所选。' },
      { id: 'q32', text: '我一直都觉得自己幸运，而不是什么勇气，不过是机会到了面前，没有人不想去试试吧。' },
      { id: 'q33', text: '我作为他们的孩子感到骄傲的时刻，是人性中这些朴素和善良闪闪发光的时候。' },
      { id: 'q34', text: '我们的东西并不值钱，但我们送旧东西给人，而别人不嫌弃，不觉得被瞧不起，从而开心地收下，这才是很不容易的。这就是人和人之间对朴素善意的信任吧。' },
      { id: 'q35', text: '有一技之长和先发优势何其重要，我便一下子都理解了。' },
      { id: 'q36', text: '没有特别的目标，但每一天坚持缓缓地努力。' },
      { id: 'q37', text: '世俗的成功是路径，不是答案，要用这份自由，去追寻更多的自由、更丰富的人生、更大的世界才是。' },
      { id: 'q38', text: '啊！人生，原来就是，和那些事，和那些人，相遇的过程。' },
      { id: 'q39', text: '不确定的爱带来的痛苦确是确定的。' },
      { id: 'q40', text: '我喜欢出发，喜欢离开，喜欢一生中都能有新的梦想。千山万水，随意行去，不管星辰指引的是什么方向。我喜欢停留，喜欢长久，喜欢在园里种下千棵果树，静待冬雷夏雨，春华秋实。喜欢生命里只有单纯的盼望，只有一种安定和缓慢的成长。' }
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
  {
    id: 'b20', title: '青春的梦，在青春做完', titleEn: 'Dreams of Youth, Finished in Youth',
    author: '苑子文 / 苑子豪', authorEn: 'Yuan Ziwen & Yuan Zihao',
    status: 'read', cover: null, color: '#e88a6a',
    genre: '青春文学', genreEn: 'Youth Literature'
  },
  {
    id: 'b21', title: '光阴如绣，蔓草生香', titleEn: 'Time Like Embroidery, Weeds Fragrant',
    author: '丁立梅', authorEn: 'Ding Limei',
    status: 'read', cover: null, color: '#7aae8a',
    genre: '散文随笔', genreEn: 'Essays'
  },
  {
    id: 'b22', title: '你心柔软，却有力量', titleEn: 'Your Heart is Soft, Yet Powerful',
    author: '林清玄', authorEn: 'Lin Qingxuan',
    status: 'read', cover: null, color: '#8ec4a0',
    genre: '散文随笔', genreEn: 'Essays'
  },
  {
    id: 'b23', title: '傅雷家书', titleEn: "Fu Lei's Family Letters",
    author: '傅雷', authorEn: 'Fu Lei',
    status: 'read', cover: null, color: '#8c7060',
    genre: '书信集', genreEn: 'Letters'
  },
  {
    id: 'b24', title: '乡土中国', titleEn: 'From the Soil',
    author: '费孝通', authorEn: 'Fei Xiaotong',
    status: 'read', cover: null, color: '#a08060',
    genre: '社会学', genreEn: 'Sociology'
  },
  {
    id: 'b25', title: '最文摘', titleEn: 'Zui Wenzhai',
    author: '重庆出版社', authorEn: 'Chongqing Publishing House',
    status: 'read', cover: null, color: '#d4a060',
    genre: '文摘杂志', genreEn: 'Digest Magazine'
  },
  {
    id: 'b26', title: '城市画报', titleEn: 'City Pictorial',
    author: '广东城市画报社', authorEn: 'Guangdong City Pictorial Press',
    status: 'read', cover: null, color: '#6a8ec4',
    genre: '生活方式', genreEn: 'Lifestyle'
  },
  {
    id: 'b17', title: '素书', titleEn: 'Su Shu (The Plain Book)',
    author: '黄石公', authorEn: 'Huang Shigong',
    status: 'read', cover: null, color: '#c4a44a',
    genre: '古典哲学', genreEn: 'Classical Philosophy',
    quotes: [
      { id: 'q1',  text: '山峭者崩，泽满者溢。' },
      { id: 'q2',  text: '一个可以适合一切事情的界限，是无法划出来的。究竟什么样分量才算合适，那是因人而异的。——冯友兰' },
      { id: 'q3',  text: '同智相谋。你要吸引什么，就先变成什么。' },
      { id: 'q4',  text: '同志相得，同仁相忧，同恶相党，同爱相求。' },
      { id: 'q5',  text: '一个人即从自己的趣味高低去定朋友的高低，也是通过朋友的高低而奠定自己在社会上的信用地位的。——梁漱溟' },
      { id: 'q6',  text: '内不愧心，外不负俗，交不为利，士不谋禄。——嵇康' },
      { id: 'q7',  text: '上无常操，下多疑心。领导者以沉稳为先，决策政令不可冲动，而一旦做出决定就必须言出必行，稳定自己的立场。' },
      { id: 'q8',  text: '子思英贤，有如饥渴。爱人深者，求贤急。' },
      { id: 'q9',  text: '同艺相窥，同巧相胜。从对方身上吸取经验，弥补自身不足。' },
      { id: 'q10', text: '听其言识其心志，观其行别其追求，析其作辨其才华，闻其誉慎其赞扬。' },
      { id: 'q11', text: '不仅要看到那些锋芒毕露者，更要注意寻找那些暂时默默无闻、表面上平淡无奇，实则很有才华和发展前途的人。' },
      { id: 'q12', text: '无远虑者必有近忧。让自己的目光始终盯着远方，让自己沉浸在实现远大目标的行动中。' },
      { id: 'q13', text: '畏危者安，畏亡者存。' },
      { id: 'q14', text: '乱生于治，怯生于勇，弱生于强。——《孙子兵法》' },
      { id: 'q15', text: '任何事情都有好与坏的两面，满足和停留就意味着危险。' },
      { id: 'q16', text: '怨在不舍小过。' },
      { id: 'q17', text: '彩笔落空，笔不落色，而空亦不受染；利刀割水，刀不损锷，而水亦不流痕。' },
      { id: 'q18', text: '待人而留有余，不尽之恩礼，则可以维系无厌之人心；御事而留有余，不尽之才智，则可以提防不测之事变。——《菜根谭》' },
      { id: 'q19', text: '益者三友，友直、友谅、友多闻，益矣。——孔子' },
      { id: 'q20', text: '人要靠双手为自己赢得自由和尊重。' },
      { id: 'q21', text: '一日有一日的理想和决断，昨日有昨日的事，今日有今日的事，明日有明日的事。' },
      { id: 'q22', text: '在那种没有目标的日子里，有一个最重要的东西流失了，那就是幸福。' },
      { id: 'q23', text: '其实“愚”是一种做人的智慧：在“知”的方面，承认人的认识的有限性，不过分依靠和卖弄自己的智慧；在“情”的方面，安贫乐道、隐忍退让、息贪婪欲；在“意”的方面，淡泊明志、立身端方、守清正节。' },
      { id: 'q24', text: '圆融的生存姿态要以方正的人格做脊梁。' },
      { id: 'q25', text: '做人做事不锋芒毕露，不狂妄，不骄不躁，韬光养晦，大智若愚，大巧若拙。' },
      { id: 'q26', text: '做人是做事的开始，做事是做人的结果。——皮鲁克斯' },
      { id: 'q27', text: '“守正出奇”：要博取人的信任，第一件要办的事便是按规矩办事，无论发生什么突变，以及在什么特殊的环境之下，都要完全地做到这点。' },
      { id: 'q28', text: '德足以怀远，信足以一异，义足以得众，才足以鉴古，明足以照下，此人之俊也；行足以为仪表，智足以决嫌疑，信可以使守约，廉可以使分财，此人之豪也；守职而不废，处义而不回，见嫌而不苟免，见利而不苟得，此人之杰也。' },
      { id: 'q29', text: '先器识而后文艺。——弘一法师' },
      { id: 'q30', text: '王何必曰利？亦有仁义而已矣。——孟子' },
      { id: 'q31', text: '君子信，则后劳其民；未信，则以为厉己也。信而后谏；未信，则以为谤己也。' },
      { id: 'q32', text: '信的含义有两种：一是取得别人的信任，二是对人讲信用。' }
    ]
  },
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
    status: 'read', cover: null, color: '#7a9e6b',
    genre: '魔幻现实主义', genreEn: 'Magical Realism',
    quotes: [
      { id: 'q1', text: '他对那条路不感兴趣，因为它只能将他带回到过去。' },
      { id: 'q2', text: '曾经做出巨大牺牲，历经无数苦难，寻找大海而不得，如今无心寻找，他却找上门来，横在自己前进的道路上，成为不可逾越的阻碍。' },
      { id: 'q3', text: '爱情或许可以是一种比夜晚幽会中疯狂而短暂的快乐，更平稳而深沉的感觉。' },
      { id: 'q4', text: '往日的推心置腹已经一去不返，同盟和交流变成敌意和缄默。他渴望孤独，对整个世界的怨恨咬噬了他的心。' },
      { id: 'q5', text: '失眠症最可怕之处不在于让人毫无倦意，不能入睡，而是会不可逆转地恶化到更严重的境地遗忘，也就是说，患者慢慢习惯了无眠的状态，就开始淡忘童年的记忆，继之以事物的名称与概念，最后是各人的身份，以致失去自我，沦为没有过往的白痴。' },
      { id: 'q6', text: '他的确一度死去，但难以忍受孤独，又重返人世。' },
      { id: 'q7', text: '他也在为没有回应的爱情而饱受折磨。他把自己关在浴室里，写下一封封狂热的信，以摆脱没有希望的激情带来的折磨，然后把信深藏在衣箱内。' },
      { id: 'q8', text: '他没有答应，理由是既然都同意遵守规则，他无法理解两个对手如何还能争斗。' }
    ]
  },
  {
    id: 'b28', title: '易经', titleEn: 'The Book of Changes (I Ching)',
    author: '佚名', authorEn: 'Anonymous',
    status: 'read', cover: null, color: '#a08850',
    genre: '古典哲学', genreEn: 'Classical Philosophy',
    quotes: [
      { id: 'q1',  text: '做任何事情，都需要忍耐一段时间。人一旦有需要的念头，就要付出相当的代价。（需卦）' },
      { id: 'q2',  text: '不能想要就要，不能能多要就多要，要培养等待的习惯，才能心平气和。等待时轻松、平和一点，安排自己的生活。' },
      { id: 'q3',  text: '一个人让人看不顺眼，你有相当的责任；一个人引起他人的嫉妒，自己也有相当的责任。' },
      { id: 'q4',  text: '合理地修德立业，合理节制自己的欲望，适可而止，不要过度，这才是最大的福气。' },
      { id: 'q5',  text: '思诚者，人之道也。——孟子' },
      { id: 'q6',  text: '智圆行方，曲中求直。慎始，大概率会圆满；圆满就是顾虑到每一个角度的立场。' },
      { id: 'q7',  text: '君子坦荡荡，凡事不做太满，方能游刃有余。' },
      { id: 'q8',  text: '乾元用九，乃见天则。阶段性的调整，能屈能伸，刚柔并济。' },
      { id: 'q9',  text: '人活在希望，而非活在梦想。' },
      { id: 'q10', text: '元者，善之长也；亨者，嘉之会也；利者，义之和也；贞者，事之干也。' },
      { id: 'q11', text: '经得起利的考验，就叫贞。我赚了钱，我还规规矩矩，上天用金钱与财富来考验每个人。' },
      { id: 'q12', text: '赚钱是可爱的，对人类的生活有很大贡献；怎么去用钱，才是智慧。赚钱看机会，用钱看智慧。当用不省，当省不用。' },
      { id: 'q13', text: '曲则全。曲，是直必要的过程。——《道德经》' },
      { id: 'q14', text: '曲折迂回，反倒是办成大事最有效路径。' },
      { id: 'q15', text: '责之深，爱之切。' },
      { id: 'q16', text: '元：慎始，不要随便开始做任何事情，欲速则不达；亨：互通有无；利：义之和，利益要公平地分享；贞：公正，固正的操守。' },
      { id: 'q17', text: '人天天都有艰难险阻，才叫人生。人要考虑长远，不要只看眼前。' },
      { id: 'q18', text: '人生最难的就是知道自己的分在哪里。现阶段是知足安命，还是激流勇进。' },
      { id: 'q19', text: '放低姿态，努力积累能量，以待合适的机会，再充分地表现。掌握好表现的时机与分寸，否则过犹不及。' },
      { id: 'q20', text: '比能力还深的东西，叫做本事。让别人接受你，对你口服心服，才叫有本事。' },
      { id: 'q21', text: '忧患意识不是畏首畏尾，而是今天有了小的成就，我不要把它毁掉。' },
      { id: 'q22', text: '或跃在渊，无咎。一个人要不要往上走，最好自己决定，不要由别人摆布。可能成功，也可能失败。' },
      { id: 'q23', text: '水能载舟，亦能覆舟。爬得越高，摔得越重，要注意适可而止，度量要大。' },
      { id: 'q24', text: '君子终日乾乾，夕惕若厉，无咎。' },
      { id: 'q25', text: '潜龙、见龙、惕龙、跃龙、飞龙、亢龙——物极必反。' },
      { id: 'q26', text: '各守其分，各尽其职。' },
      { id: 'q27', text: '听到一句话，要想一阴一阳的另一句话。' },
      { id: 'q28', text: '慎选立足点，才是做事情最开始的第一个原则。安安稳稳把自己的事情做好。（屯卦）' },
      { id: 'q29', text: '轻财足以聚人，律己足以服人，量宽足以得人，身先足以率人。' },
      { id: 'q30', text: '君子几，不如舍，往吝。' },
      { id: 'q31', text: '人最要紧是自动：自动发现自己的问题，自动找到合适的老师，自动提出合适的问题。（蒙卦）' },
      { id: 'q32', text: '人之患，在好为人师。——《孟子》' },
      { id: 'q33', text: '匪我求童蒙，童蒙求我。——主动学习、诚心向学' },
      { id: 'q34', text: '没人能改变他人，除非他自己改变。' },
      { id: 'q35', text: '初筮告，再三渎，渎则不告。利贞。' },
      { id: 'q36', text: '不管要去哪里，都需要一个过程。不急则有恒，有恒才是成功的根本。（需卦）' },
      { id: 'q37', text: '尽人事，听天命。谨慎小心，步步为营。' },
      { id: 'q38', text: '天下只有公正，没有公平。' },
      { id: 'q39', text: '地位越高，身段越要低。' }
    ]
  },
  {
    id: 'b29', title: '菜根谭', titleEn: 'Caigen Tan (Vegetable Roots Discourse)',
    author: '洪应明', authorEn: 'Hong Yingming',
    status: 'read', cover: null, color: '#5a8a6a',
    genre: '处世格言', genreEn: 'Wisdom & Aphorisms',
    quotes: [
      { id: 'q1', text: '逢人且说三分话，未可全抛一片心。' },
      { id: 'q2', text: '你问人问题，他若答非所问，便是答了，毋需再问。' },
      { id: 'q3', text: '故人常以事后之悔悟，破临事之痴迷，则性定而动无不正。' },
      { id: 'q4', text: '处世不必邀功，无过便是功；与人不求感德，无怨便是德。' },
      { id: 'q5', text: '须定云止水中，有鸢飞鱼跃气象，才是有道的心体。' },
      { id: 'q6', text: '耳中常闻逆耳之言，心中常有拂心之事，才是进德修行的砥石。' },
      { id: 'q7', text: '恩里由来生害，故快意时，须早回头；败后或反成功，故拂心处，莫便放手。' }
    ]
  },
  {
    id: 'b30', title: '老人言', titleEn: 'Old Sayings',
    author: '民间谚语 · 佚名', authorEn: 'Folk Proverbs',
    status: 'read', cover: null, color: '#9e7a4a',
    genre: '处世智慧', genreEn: 'Life Wisdom',
    quotes: [
      { id: 'q1', text: '人若天天表现自己，就拿不出使人感到惊讶的东西。必须经常把一些新鲜的东西保留起来。对那些每天只拿出一点招数的人，别人始终保持着期望。——巴尔塔沙·葛拉西安' },
      { id: 'q2', text: '谦虚应该是对社会环境和自身价值的认识，它符合用客观、运动辩证的观点认识社会及人生。' },
      { id: 'q3', text: '强将手下无弱兵。善用强者才是更强者。' },
      { id: 'q4', text: '将之强，也就是团队之强，团队之强靠的是个体之强。' },
      { id: 'q5', text: '上有所好，下必甚焉。率身垂范。' },
      { id: 'q6', text: '辅车相依，唇亡齿寒。' },
      { id: 'q7', text: '冰冻三尺，非一日之寒。一种情况的酿成，是经过长时间的积累、酝酿的。' }
    ]
  },
  // ── 在读 ─────────────────────────────────────────────────────
  {
    id: 'b18', title: '曾国藩家书', titleEn: "Zeng Guofan's Family Letters",
    author: '曾国藩', authorEn: 'Zeng Guofan',
    status: 'reading', cover: null, color: '#8c7060',
    genre: '历史人文', genreEn: 'History & Culture',
    quotes: [
      { id: 'q1', text: '行所无事，则智大矣。' },
      { id: 'q2', text: '慎保身体，自奉颇厚。' },
      { id: 'q3', text: '以烦琐为贵。' },
      { id: 'q4', text: '每夜早眠，起亦渐早，惟不耐久思，故常冥心于无用，优游涵养，以谨守父亲保身之训。' },
      { id: 'q5', text: '泯灭俗念，使心境宁静；悠闲自在，从容不迫。' },
      { id: 'q6', text: '如如不动，本自具足。情绪与思维如水面波纹，但意识深处如深海般寂静。外境八风（利、衰、毁、誉、称、讥、苦、乐），心无所动；行动源于丰盛的创造与分享，而非恐惧的索取与攀附。' }
    ]
  },
  {
    id: 'b19', title: '孙子兵法', titleEn: 'The Art of War',
    author: '孙武', authorEn: 'Sun Tzu',
    status: 'reading', cover: null, color: '#6b7a5a',
    genre: '古典哲学', genreEn: 'Classical Philosophy'
  },
  {
    id: 'b27', title: '爱的艺术', titleEn: 'The Art of Loving',
    author: '艾里希·弗洛姆', authorEn: 'Erich Fromm',
    status: 'reading', cover: null, color: '#d4705a',
    genre: '心理学', genreEn: 'Psychology',
    quotes: [
      { id: 'q1',  text: '无助只是暂时状态，能够站立和用自己的双脚行走却是永久性的，是所有人共有的状态。' },
      { id: 'q2',  text: '只有爱那些不能让我们达成任何企图的人，爱才可以开展。' },
      { id: 'q3',  text: '爱某个人并不只是一种强烈感情，它还是一种决定，一个判断和一个承诺。如果爱只是感觉，我们就不会有基础去承诺永远互爱。' },
      { id: 'q4',  text: '能够爱他人的人对自己也具有爱的态度。原则上，爱就“对象”与一己的联结而言是不可分割的。' },
      { id: 'q5',  text: '真诚的爱是创造性的一种表达，隐含着照顾、尊重、责任和了解。' },
      { id: 'q6',  text: '肯定一己的生命、快乐、成长、自由，乃是根植于一个人爱的能力，即根植于照顾、尊重、负责和了解。' },
      { id: 'q7',  text: '真正可被视为富有的不是那拥有许多的人，而是那些给予很多的人。' },
      { id: 'q8',  text: '在给予中，他不可避免地在另一个生命中激发某些东西，而这种在他人生命中激发的东西又会反射回来，回到他身上。在真正的给予中，他会不能自已地领受回赠他的东西。' },
      { id: 'q9',  text: '爱是一种唤起爱的能力，而无能于爱就是缺乏能力去唤起爱。' },
      { id: 'q10', text: '爱的本质是为某种事物付出努力、使它生长。' },
      { id: 'q11', text: '我们越是深入自己的生命或他人的生命，我们所欲了解的东西就越是捉摸不定。' },
      { id: 'q12', text: '如果我真正爱一个人，我就会爱所有人，就会爱世界，就会爱生命。如果我能够对某个人说“我爱你”，我必然也能够说：我爱你之中的每个人，我通过你爱世界，我爱你之中的我自己。' },
      { id: 'q13', text: '爱是一种态度、一种性格的取向。' },
      { id: 'q14', text: '不可把任何人当作达成别人目的的手段。所有人都是目的而不是别人的手段，所有人都是平等的。——康德' },
      { id: 'q15', text: '试问，被困在这么一张罗网中的人如何能不忘记他是一个人，只会活一次，怀有希望、失望、担心和恐惧，渴望爱而害怕虚无与分离呢？' },
      { id: 'q16', text: '成熟的爱是在保存一己完整的前提下达成的合一；爱是一种活动，不是一种被动的感情，它是屹立于而不是坠入；爱主要是给予，而不是领受。' }
    ]
  }
];

/* ============================================================
   电影清单
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
  { id: 'm30', title: '机器人总动员',   titleEn: 'WALL·E',                       year: 2008, cover: null, color: '#6a9eb8' },
  { id: 'm31', title: '哪吒之魔童闹海', titleEn: 'Ne Zha 2',                     year: 2025, cover: null, color: '#d44030' },
  { id: 'm32', title: '罗小黑战记2',    titleEn: 'The Legend of Hei 2',          year: 2025, cover: null, color: '#3a8e6a' },
  { id: 'm33', title: '穿普拉达的女王', titleEn: 'The Devil Wears Prada',        year: 2006, cover: null, color: '#8e6a8e' },
  { id: 'm34', title: '穿普拉达的女王2', titleEn: 'The Devil Wears Prada 2',     year: 2025, cover: null, color: '#a0608e' },
  { id: 'm35', title: '沙丘',           titleEn: 'Dune',                         year: 2021, cover: null, color: '#c4a86a' },
  { id: 'm36', title: '热辣滚烫',       titleEn: 'YOLO',                         year: 2024, cover: null, color: '#e85a5a' },
  { id: 'm37', title: '触不可及',       titleEn: 'Intouchables',                 year: 2011, cover: null, color: '#5a8e8e' },
  { id: 'm38', title: '摔跤吧！爸爸',   titleEn: 'Dangal',                       year: 2016, cover: null, color: '#c49040' },
  { id: 'm39', title: '律政俏佳人',     titleEn: 'Legally Blonde',               year: 2001, cover: null, color: '#e86aa0' },
  { id: 'm40', title: '河边的错误',     titleEn: 'Only the River Flows',         year: 2023, cover: null, color: '#5a6a7a' }
];

/* ── 工具函数 ── */
function getBooks(status) {
  if (status) return booksData.filter(function (b) { return b.status === status; });
  return booksData;
}
function getMovies() { return moviesData; }

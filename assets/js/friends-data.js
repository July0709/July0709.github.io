// Friends / 友链数据
// ─────────────────────────────────────────────
// 每条友链是一个对象，字段说明：
//   name    — 站点名称（中文）
//   nameEn  — 站点名称（英文，可选，缺省用 name）
//   url     — 站点链接，必须以 https:// 开头
//   desc    — 一句话介绍（中文）
//   descEn  — 一句话介绍（英文，可选，缺省用 desc）
//   avatar  — 头像路径或完整 URL（可选；留空则自动用站名首字母生成）
// ─────────────────────────────────────────────

var friendLinks = [
  // ── 友链模板，复制此块新增 ──────────────────
  // {
  //   name: "站点名称",
  //   nameEn: "Site Name",
  //   url: "https://example.com",
  //   desc: "一句话介绍这个站点",
  //   descEn: "One-sentence description of the site",
  //   avatar: "assets/img/friends/example.jpg"   // 可省略
  // },
  // ── 在这里粘贴新友链 ─────────────────────────

  {
    name: "Davidの3号基地",
    nameEn: "David's Base No.3",
    url: "https://www.david03.top/",
    desc: "一名来自南方的大学生，临床医学在读。喜欢没事的时候折腾一下 OωO",
    descEn: "A college student from southern China, studying clinical medicine. Loves tinkering in spare time OωO",
    avatar: "assets/img/DavidYR.jpg"
  }
];

function getFriendLinks() {
  return friendLinks;
}

# -*- coding: utf-8 -*-
"""把读书笔记 OCR 结果汇总为按主题分类、可检索的 Markdown 合集"""
import re
from pathlib import Path

ROOT = Path(r"C:\D\July0709.github.io\读书笔记-OCR")
OUT = Path(r"C:\D\July0709.github.io\读书笔记合集.md")

# 主题大类排序与归类规则
CATEGORY_ORDER = ["国学", "西方", "现代", "电影", "辩论赛", "其他"]

def category_of(folder: str) -> str:
    prefix = folder.split("-")[0]
    return prefix if prefix in CATEGORY_ORDER else "其他"

def extract_date(text: str) -> str:
    """从首行括注中提取日期，如 （2026-02-16 周一 除夕；页眉：…）"""
    m = re.match(r"^（([^；）]+)[；）]", text.strip())
    return m.group(1).strip() if m else ""

# 收集所有笔记
notes = {}  # category -> subfolder -> [(date, filename, text)]
for sub in sorted(p for p in ROOT.iterdir() if p.is_dir()):
    for txt in sorted(sub.glob("*.txt")):
        text = txt.read_text(encoding="utf-8").strip()
        date = extract_date(text)
        cat = category_of(sub.name)
        notes.setdefault(cat, {}).setdefault(sub.name, []).append((date, txt.stem, text))

lines = []
lines.append("# 读书笔记合集\n")
lines.append("> 由 66 张手写日记照片转写汇总而成，按主题分类。可用 Ctrl+F 检索关键词、日期或书名。\n")
lines.append("> 个别手写字迹不确定处已标注「（字迹不确定）」。\n")

# 目录
lines.append("## 目录\n")
total = 0
for cat in CATEGORY_ORDER:
    if cat not in notes:
        continue
    for sub, items in notes[cat].items():
        total += len(items)
        anchor = sub
        lines.append(f"- [{sub}](#{anchor})（{len(items)} 篇）")
lines.append(f"\n共 {total} 篇。\n")

# 正文
for cat in CATEGORY_ORDER:
    if cat not in notes:
        continue
    lines.append(f"\n---\n\n# {cat}\n")
    for sub, items in notes[cat].items():
        lines.append(f"\n## {sub}\n")
        for date, stem, text in items:
            title = f"{date}" if date else stem
            lines.append(f"\n### {title}\n")
            lines.append(f"*来源图片：{stem}*\n")
            lines.append(text)
            lines.append("")

OUT.write_text("\n".join(lines), encoding="utf-8")
print(f"已生成 {OUT}，共 {total} 篇，{OUT.stat().st_size} 字节")

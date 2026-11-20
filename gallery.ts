// 一覧ページ: sketches/YYYY-MM-DD.ts を自動で探してカード表示する
// sketches/ にファイルを置くだけで一覧に追加される
import { titles } from "./registry";

const ids = Object.keys(titles).sort((a, b) => b.localeCompare(a)); // 新しい順

const grid = document.getElementById("grid")!;
const count = document.getElementById("count")!;
count.textContent = `${ids.length} sketches`;

for (const id of ids) {
  const title = titles[id];
  const card = document.createElement("a");
  card.className = "card";
  card.href = `./sketch.html?s=${id}`;
  card.innerHTML = `
    <div class="thumb">
      <iframe src="./sketch.html?s=${id}&thumb" loading="lazy" tabindex="-1" title="${title}"></iframe>
    </div>
    <div class="meta">
      <time>${id}</time>
      <span>${title}</span>
    </div>`;
  grid.appendChild(card);
}

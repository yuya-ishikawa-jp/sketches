// 共通ビューア: sketch.html?s=2026-11-18 で ./sketches/2026-11-18.ts を読み込んで実行する
// ?thumb を付けるとサムネ用（キャンバスを画面いっぱいに縮小、戻るリンク非表示）
import p5 from "p5";
import { sketches } from "./registry";

const params = new URLSearchParams(location.search);
const id = params.get("s") ?? "";
if (params.has("thumb")) document.body.classList.add("thumb");

const load = sketches[id];
if (load) {
  load().then((mod) => {
    document.title = `${mod.title ?? id} — Sketches`;
    new p5(mod.default);
  });
} else {
  document.body.insertAdjacentHTML("beforeend", `<p style="color:#888">Not found: ${id}</p>`);
}

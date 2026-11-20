// sketches/YYYY-MM-DD.ts を自動で集める（一覧とビューアで共有）
import type p5 from "p5";

export type SketchModule = {
  default: (p: p5) => void;
  title?: string;
};

const toId = (path: string) => path.match(/^\.\/sketches\/(.+)\.ts$/)?.[1];

// 遅延読み込み（ビューア用）
export const sketches: Record<string, () => Promise<SketchModule>> = {};
for (const [path, loader] of Object.entries(
  import.meta.glob<SketchModule>("./sketches/*.ts"),
)) {
  const id = toId(path);
  if (id) sketches[id] = loader;
}

// タイトルだけ即時取得（一覧用）
export const titles: Record<string, string> = {};
for (const [path, title] of Object.entries(
  import.meta.glob<string | undefined>("./sketches/*.ts", { import: "title", eager: true }),
)) {
  const id = toId(path);
  if (id) titles[id] = title ?? id;
}

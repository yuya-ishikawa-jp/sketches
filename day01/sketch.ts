// Day 01: Grid of Circles
// お題: 600x600 のキャンバスに円をグリッド状に並べ、
//       それぞれの円のサイズ（または色）をランダムに変える。
//
// ヒント:
//   - 二重の for ループで x, y を回す
//   - p.random(min, max) で乱数
//   - p.noLoop() で1枚絵に / p.mousePressed で p.redraw() すると楽しい
//
// 発展: p.noise() を使って、ランダムではなく「なめらかに」変化させてみる
//
// ※ TypeScript ではインスタンスモードを使うので、p5 の関数は全部 `p.` を付けて呼ぶ

import p5 from "p5";

const sketch = (p: p5) => {
  p.setup = () => {
    p.createCanvas(300, 300);
    // ここに書く
  };

  p.draw = () => {
    p.background(20);
    // ここに書く
    p.fill(255, 0, 0); // 塗りつぶし色を赤に (R, G, B)
    p.noStroke(); // 枠線を消す
    p.circle(p.mouseX, p.mouseY, 50); // x座標, y座標, 直径
  };
};

new p5(sketch);

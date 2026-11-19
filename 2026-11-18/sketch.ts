import p5 from "p5";
type Size = [number, number];
const canvasSize: Size = [300, 300];

const sketch = (p: p5) => {
  const line = createLine(p, canvasSize);

  p.setup = () => {
    p.createCanvas(...canvasSize);
    p.background(255);
  };

  p.draw = () => {
    p.stroke(20, 50);
    line.draw();
  };
};

const createLine = (p: p5, size: Size) => {
  let xOff = 0.0;
  let yOff = 100.0;
  let lastX = p.map(p.noise(xOff), 0, 1, 0, size[0]);
  let lastY = p.map(p.noise(yOff), 0, 1, 0, size[1]);
  const draw = () => {
    xOff += 0.005;
    yOff += 0.005;
    const currentX = p.map(p.noise(xOff), 0, 1, 0, size[0]);
    const currentY = p.map(p.noise(yOff), 0, 1, 0, size[1]);
    p.line(lastX, lastY, currentX, currentY);
    lastX = currentX;
    lastY = currentY;
  };
  return {
    draw,
  };
};

new p5(sketch);

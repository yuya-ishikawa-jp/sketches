import p5 from "p5";
type Size = [number, number];
type Position = [number, number];
const canvasSize: Size = [300, 300];

const main = (p: p5) => {
  const line = createLine(p, canvasSize);

  p.setup = () => {
    p.createCanvas(...canvasSize);
    p.background(255);
  };

  p.draw = () => {
    fillCanvas(p, canvasSize);
    line.draw();
  };
};

new p5(main);

function fillCanvas(p: p5, canvasSize: Size) {
  p.fill(255, 10);
  p.noStroke();
  p.rect(0, 0, ...canvasSize);
}

function createLine(p: p5, size: Size) {
  const SPEED = 1;
  let yOff = 100.0;
  let x = 0;
  const updatePosition = (): Position => {
    yOff += 0.03;
    x = (x + SPEED) % size[0];
    return [x, p.map(p.noise(yOff), 0, 1, 0, size[1])];
  };
  let lastPosition = updatePosition();
  const draw = () => {
    p.stroke(0);
    const position = updatePosition();
    p.line(...lastPosition, ...position);
    lastPosition =
      position[0] >= canvasSize[0] - SPEED ? [0, position[1]] : position;
  };
  return {
    draw,
  };
}

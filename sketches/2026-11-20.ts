import p5 from "p5";

export const title = "Noise Wave";

type Size = [number, number];
type Position = [number, number];

const main = (p: p5) => {
  const CANVAS_SIZE: Size = [300, 300];
  const line = createLine(p, CANVAS_SIZE);

  p.setup = () => {
    p.createCanvas(...CANVAS_SIZE);
    p.background(255);
  };

  p.draw = () => {
    fillCanvas(p, CANVAS_SIZE);
    for (let i = 0; i < 3; i++) {
      line.draw();
    }
  };
};

export default main;

function fillCanvas(p: p5, canvasSize: Size) {
  p.fill(255, 5);
  p.noStroke();
  p.rect(0, 0, ...canvasSize);
}

function createLine(p: p5, size: Size) {
  const CENTER_POS = size.map((x) => x / 2) as Position;
  const SPEED = 0.02;
  let noiseOffset = 100.0;
  let angle = 0;
  const updatePosition = (): Position => {
    noiseOffset += 0.07;
    angle = (angle + SPEED) % p.TWO_PI;
    const radius = p.map(p.noise(noiseOffset), 0, 1, 0, size[0] / 2);
    return [
      CENTER_POS[0] + radius * p.cos(angle),
      CENTER_POS[1] + radius * p.sin(angle),
    ];
  };
  let lastPosition = updatePosition();
  const draw = () => {
    p.stroke(0);
    const position = updatePosition();
    p.line(...lastPosition, ...position);
    p.line(...CENTER_POS, ...position);
    lastPosition = position;
  };
  return {
    draw,
  };
}
